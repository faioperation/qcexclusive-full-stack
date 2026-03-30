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
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const admin_service_1 = require("./admin.service");
const getAllAdmins = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield admin_service_1.adminServices.getAllAdmins();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "All admins fetched successfully",
        statusCode: 200,
        data: admins,
    });
}));
const getSingleAdmin = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const admin = yield admin_service_1.adminServices.getSingleAdmin(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Admin fetched successfully",
        statusCode: 200,
        data: admin,
    });
}));
const createAdmin = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield admin_service_1.adminServices.createAdmin(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Admin created successfully",
        statusCode: 201,
        data: admin,
    });
}));
const updateAdmin = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const admin = yield admin_service_1.adminServices.updateAdmin(id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Admin updated successfully",
        statusCode: 200,
        data: admin,
    });
}));
const deleteAdmin = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield admin_service_1.adminServices.deleteAdmin(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Admin deleted successfully",
        statusCode: 200,
        data: result,
    });
}));
const toggleBlockAdmin = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield admin_service_1.adminServices.toggleBlockAdmin(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: result.isBlocked ? "Admin blocked successfully" : "Admin unblocked successfully",
        statusCode: 200,
        data: result,
    });
}));
exports.adminControllers = {
    getAllAdmins,
    getSingleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    toggleBlockAdmin,
};
