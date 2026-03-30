"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadService = void 0;
const prisma_1 = require("../../db_connection/prisma");
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const db = prisma_1.prisma;
const getAllLeadsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const queryBuilder = new QueryBuilder_1.QueryBuilder(query)
        .search([
        "name",
        "email",
        { campaign: ["name"] },
        { industry: ["name"] },
        { location: ["city", "state", "country"] },
    ])
        .filter({
        industry: ["name"],
        location: ["city", "state", "country"],
        campaign: ["name"],
    })
        .sort("createdAt", {
        campaign: ["name"],
        industry: ["name"],
        location: ["city", "state", "country"],
    })
        .paginate()
        .fields();
    const prismaQuery = queryBuilder.build();
    // Include relations by default for the table view
    const finalQuery = Object.assign(Object.assign({}, prismaQuery), { include: {
            campaign: { select: { name: true } },
            industry: { select: { name: true } },
            location: { select: { city: true, state: true, country: true } }
        } });
    const [leads, total] = yield Promise.all([
        db.lead.findMany(finalQuery),
        db.lead.count({ where: prismaQuery.where }),
    ]);
    const meta = queryBuilder.getMeta(total);
    return {
        meta,
        data: leads,
    };
});
const getSingleLeadFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const lead = yield db.lead.findUnique({
        where: { id },
        include: {
            campaign: true,
            industry: true,
            location: true,
            outreachMessages: true
        }
    });
    if (!lead) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Lead not found");
    }
    return lead;
});
const updateLeadInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield db.lead.findUnique({ where: { id } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Lead not found");
    }
    const result = yield db.lead.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteLeadFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield db.lead.findUnique({ where: { id } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Lead not found");
    }
    yield db.lead.delete({ where: { id } });
    return { message: "Lead deleted successfully" };
});
exports.LeadService = {
    getAllLeadsFromDB,
    getSingleLeadFromDB,
    updateLeadInDB,
    deleteLeadFromDB,
};
