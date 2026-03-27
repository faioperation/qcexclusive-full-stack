import { prisma } from "../../db_connection/prisma";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

const db = prisma as any;

/**
 * Fetches all scheduled meetings, including lead details.
 */
const getAllMeetingsFromDB = async () => {
  const meetings = await db.meeting.findMany({
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
};

/**
 * Updates a meeting's status or details.
 */
const updateMeetingInDB = async (id: string, payload: any) => {
  const isExist = await db.meeting.findUnique({ where: { id } });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Meeting not found");
  }

  const result = await db.meeting.update({
    where: { id },
    data: payload,
  });

  return result;
};

export const MeetingService = {
  getAllMeetingsFromDB,
  updateMeetingInDB,
};
