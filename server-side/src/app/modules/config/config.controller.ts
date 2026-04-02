import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { configServices } from "./config.service";

const getAllConfigs = catchAsync(async (req, res, next) => {
    const configs = await configServices.getAllConfigs();
    sendResponse(res, {
        success: true,
        message: "All configs fetched successfully",
        statusCode: 200,
        data: configs,
    });
});

const getSingleConfig = catchAsync(async (req, res, next) => {
    const id = req.params.id as string;
    const config = await configServices.getSingleConfig(id);
    sendResponse(res, {
        success: true,
        message: "Config fetched successfully",
        statusCode: 200,
        data: config,
    });
});

const upsertConfig = catchAsync(async (req, res, next) => {
    const config = await configServices.upsertConfig(req.body);
    sendResponse(res, {
        success: true,
        message: "Config saved successfully",
        statusCode: 201,
        data: config,
    });
});

const updateConfig = catchAsync(async (req, res, next) => {
    const id = req.params.id as string;
    const config = await configServices.updateConfig(id, req.body);
    sendResponse(res, {
        success: true,
        message: "Config updated successfully",
        statusCode: 200,
        data: config,
    });
});

const deleteConfig = catchAsync(async (req, res, next) => {
    const id = req.params.id as string;
    const result = await configServices.deleteConfig(id);
    sendResponse(res, {
        success: true,
        message: "Config deleted successfully",
        statusCode: 200,
        data: result,
    });
});

export const configControllers = {
    getAllConfigs,
    getSingleConfig,
    upsertConfig,
    updateConfig,
    deleteConfig,
};
