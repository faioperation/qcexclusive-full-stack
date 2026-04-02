import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";
import { prisma } from "../../db_connection/prisma";

const db = prisma as any;

// Get All Configs
const getAllConfigs = async () => {
    const configs = await db.config.findMany({
        orderBy: { createdAt: "desc" },
    });
    return configs;
};

// Get Single Config
const getSingleConfig = async (id: string) => {
    const config = await db.config.findUnique({
        where: { id },
    });

    if (!config) {
        throw new ApiError(httpStatus.NOT_FOUND, "Config not found");
    }

    return config;
};

// Create or Update Config (Upsert)
const upsertConfig = async (payload: { key: string; value: string }) => {
    const config = await db.config.upsert({
        where: { key: payload.key },
        update: { value: payload.value },
        create: { key: payload.key, value: payload.value },
    });
    return config;
};

// Update Config
const updateConfig = async (id: string, payload: { value: string }) => {
    const config = await db.config.update({
        where: { id },
        data: payload,
    });
    return config;
};

// Delete Config
const deleteConfig = async (id: string) => {
    const result = await db.config.delete({
        where: { id },
    });
    return result;
};

export const configServices = {
    getAllConfigs,
    getSingleConfig,
    upsertConfig,
    updateConfig,
    deleteConfig,
};
