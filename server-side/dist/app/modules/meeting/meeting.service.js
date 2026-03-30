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
exports.MeetingService = void 0;
const prisma_1 = require("../../db_connection/prisma");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const db = prisma_1.prisma;
/**
 * Fetches all scheduled meetings, including lead details.
 */
const getAllMeetingsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const meetings = yield db.meeting.findMany({
        include: {
            lead: {
                select: {
                    name: true,
                    imageUrl: true,
                    role: true,
                },
            },
        },
        orderBy: { startTime: "asc" },
    });
    return meetings;
});
/**
 * Updates a meeting's status or details.
 */
const updateMeetingInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield db.meeting.findUnique({ where: { id } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Meeting not found");
    }
    const result = yield db.meeting.update({
        where: { id },
        data: payload,
    });
    return result;
});
exports.MeetingService = {
    getAllMeetingsFromDB,
    updateMeetingInDB,
};
