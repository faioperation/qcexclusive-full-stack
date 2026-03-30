"use strict";
// ─── Types ───────────────────────────────────────────────────────────────────
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
// ─── Fields excluded from filters ─────────────────────────────────────────────
const excludeFields = [
    "searchTerm",
    "searchParam",
    "sort",
    "orderBy",
    "page",
    "limit",
    "fields",
    "skip",
    "take",
];
// ─── QueryBuilder ─────────────────────────────────────────────────────────────
class QueryBuilder {
    constructor(query) {
        this.query = query;
        this.where = {};
        this.orderBy = undefined;
        this.select = undefined;
        this.skip = undefined;
        this.take = undefined;
    }
    /** Apply exact-match filters from query params (case-insensitive for strings) */
    filter(relationConfig = {}) {
        const filters = Object.assign({}, this.query);
        [...excludeFields].forEach((field) => delete filters[field]);
        Object.entries(filters).forEach(([key, value]) => {
            var _a;
            if (value === undefined || value === "")
                return;
            let finalValue = value;
            // Case-insensitive mode for plain strings that are not numbers/booleans
            if (typeof value === "string" &&
                isNaN(Number(value)) &&
                value.toLowerCase() !== "true" &&
                value.toLowerCase() !== "false") {
                finalValue = { equals: value, mode: "insensitive" };
            }
            let isRelational = false;
            for (const [relation, fields] of Object.entries(relationConfig)) {
                if (fields.includes(key)) {
                    this.where[relation] = Object.assign(Object.assign({}, ((_a = this.where[relation]) !== null && _a !== void 0 ? _a : {})), { [key]: finalValue });
                    isRelational = true;
                    break;
                }
            }
            if (!isRelational) {
                this.where[key] = finalValue;
            }
        });
        return this;
    }
    /** Select only specified fields (comma-separated in query: ?fields=name,email) */
    fields() {
        const fieldsParam = this.query.fields;
        if (fieldsParam && typeof fieldsParam === "string") {
            const selectObj = {};
            fieldsParam.split(",").forEach((f) => {
                selectObj[f.trim()] = true;
            });
            this.select = selectObj;
        }
        return this;
    }
    /** Full-text search across plain fields and relation fields */
    search(searchConfig = []) {
        var _a;
        const searchTerm = (_a = this.query.searchTerm) !== null && _a !== void 0 ? _a : this.query.searchParam;
        if (!searchTerm || !searchConfig.length)
            return this;
        this.where.OR = searchConfig.map((field) => {
            // Plain field
            if (typeof field === "string") {
                return {
                    [field]: { contains: searchTerm, mode: "insensitive" },
                };
            }
            // Relation field: { relation: [field1, field2] }
            const [relation, relationFields] = Object.entries(field)[0];
            return {
                [relation]: {
                    OR: relationFields.map((rf) => ({
                        [rf]: { contains: searchTerm, mode: "insensitive" },
                    })),
                },
            };
        });
        return this;
    }
    /**
     * Sort: ?sort=-followerCount (desc), ?sort=name (asc), ?sort=name desc
     * Supports comma-separated multi-sort
     */
    sort(defaultSort = "createdAt", relationConfig = {}) {
        var _a;
        const rawSort = (_a = this.query.sort) !== null && _a !== void 0 ? _a : defaultSort;
        const sortFields = rawSort
            .split(",")
            .map((field) => {
            field = field.trim();
            let order = "asc";
            let column = field;
            if (field.startsWith("-")) {
                column = field.slice(1);
                order = "desc";
            }
            else {
                const parts = field.split(/\s+/);
                if (parts.length > 1) {
                    column = parts[0];
                    order = parts[1].toLowerCase() === "desc" ? "desc" : "asc";
                }
                else if (field.toLowerCase() === "desc" ||
                    field.toLowerCase() === "asc") {
                    return { [defaultSort]: field.toLowerCase() };
                }
            }
            // Check if belongs to a relation
            for (const [relation, fields] of Object.entries(relationConfig)) {
                if (fields.includes(column)) {
                    return { [relation]: { [column]: order } };
                }
            }
            return { [column]: order };
        });
        this.orderBy = sortFields.length > 1 ? sortFields : sortFields[0];
        return this;
    }
    /** Apply page/limit pagination */
    paginate() {
        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 15;
        this.skip = (page - 1) * limit;
        this.take = limit;
        return this;
    }
    /** Build and return the full Prisma query args object */
    build() {
        return {
            where: this.where,
            orderBy: this.orderBy,
            select: this.select,
            skip: this.skip,
            take: this.take,
        };
    }
    /** Return pagination meta — call after getting total count from DB */
    getMeta(total) {
        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 15;
        return {
            page,
            limit,
            total,
            totalPage: Math.ceil(total / limit),
        };
    }
}
exports.QueryBuilder = QueryBuilder;
