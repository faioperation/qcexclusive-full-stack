import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { adminServices } from "./admin.service";

const getAllAdmins = catchAsync(async (req, res, next) => {
    const admins = await adminServices.getAllAdmins();
    sendResponse(res, {
        success: true,
        message: "All admins fetched successfully",
        statusCode: 200,
        data: admins,
    });
});

const getSingleAdmin = catchAsync(async (req, res, next) => {
    const id = req.params.id as string;
    const admin = await adminServices.getSingleAdmin(id);
    sendResponse(res, {
        success: true,
        message: "Admin fetched successfully",
        statusCode: 200,
        data: admin,
    });
});

const createAdmin = catchAsync(async (req: Request & { user?: any }, res, next) => {
    const admin = await adminServices.createAdmin(req.body, req.user.role);
    sendResponse(res, {
        success: true,
        message: "Admin created successfully",
        statusCode: 201,
        data: admin,
    });
});

const updateAdmin = catchAsync(async (req, res, next) => {
    const id = req.params.id as string;
    const admin = await adminServices.updateAdmin(id, req.body);
    sendResponse(res, {
        success: true,
        message: "Admin updated successfully",
        statusCode: 200,
        data: admin,
    });
});

const deleteAdmin = catchAsync(async (req, res, next) => {
    const id = req.params.id as string;
    const result = await adminServices.deleteAdmin(id);
    sendResponse(res, {
        success: true,
        message: "Admin deleted successfully",
        statusCode: 200,
        data: result,
    });
});

const toggleBlockAdmin = catchAsync(async (req, res, next) => {
    const id = req.params.id as string;
    const result = await adminServices.toggleBlockAdmin(id);
    sendResponse(res, {
        success: true,
        message: result.isBlocked ? "Admin blocked successfully" : "Admin unblocked successfully",
        statusCode: 200,
        data: result,
    });
});

export const adminControllers = {
    getAllAdmins,
    getSingleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    toggleBlockAdmin,
};
