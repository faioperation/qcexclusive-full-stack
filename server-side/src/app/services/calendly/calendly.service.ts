import { prisma } from "../../db_connection/prisma";
import config from "../../config";

const db = prisma as any;

export interface CalendlyEvent {
  leadId: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  attendees?: number;
}

export interface CalendlyBookingResponse {
  eventId: string;
  uri: string;
  status: string;
}

/**
 * Create Calendly event for meeting booking
 */
export async function createCalendlyEvent(event: CalendlyEvent): Promise<CalendlyBookingResponse> {
  if (!config.CALENDLY_API_KEY) {
    throw new Error("CALENDLY_API_KEY is not configured");
  }

  const calendlyPayload = {
    event: {
      summary: event.title,
      description: event.description,
      start: {
        dateTime: event.startTime.toISOString(),
        timeZone: "UTC",
      },
      end: {
        dateTime: event.endTime.toISOString(),
        timeZone: "UTC",
      },
      location: {
        name: event.location || "Online Meeting",
      },
      attendees: event.attendees ? [
        {
          email: "organizer@example.com",
          name: "QC Exclusive",
          status: "accepted",
        }
      ] : [
        {
          email: "organizer@example.com",
          name: "QC Exclusive",
          status: "accepted",
        }
      ],
    },
  };

  try {
    const response = await fetch(`${config.CALENDLY_API_BASE_URL}/events`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${config.CALENDLY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(calendlyPayload),
    });

    if (!response.ok) {
      throw new Error(`Calendly API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    
    return {
      eventId: result.event?.uri?.split("/").pop() || "",
      uri: result.event?.uri || "",
      status: "Scheduled",
    };
  } catch (error) {
    console.error("Calendly event creation failed:", error);
    throw error;
  }
}

/**
 * Update Calendly event
 */
export async function updateCalendlyEvent(eventId: string, updates: Partial<CalendlyEvent>): Promise<void> {
  if (!config.CALENDLY_API_KEY) {
    throw new Error("CALENDLY_API_KEY is not configured");
  }

  const calendlyPayload = {
    summary: updates.title,
    description: updates.description,
    start: updates.startTime ? {
      dateTime: updates.startTime.toISOString(),
      timeZone: "UTC",
    } : undefined,
    end: updates.endTime ? {
      dateTime: updates.endTime.toISOString(),
      timeZone: "UTC",
    } : undefined,
    location: updates.location ? {
      name: updates.location,
    } : undefined,
  };

  try {
    const response = await fetch(`${config.CALENDLY_API_BASE_URL}/events/${eventId}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${config.CALENDLY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(calendlyPayload),
    });

    if (!response.ok) {
      throw new Error(`Calendly API error: ${response.status} ${response.statusText}`);
    }

    console.log(`Calendly event ${eventId} updated successfully`);
  } catch (error) {
    console.error("Calendly event update failed:", error);
    throw error;
  }
}

/**
 * Cancel Calendly event
 */
export async function cancelCalendlyEvent(eventId: string): Promise<void> {
  if (!config.CALENDLY_API_KEY) {
    throw new Error("CALENDLY_API_KEY is not configured");
  }

  try {
    const response = await fetch(`${config.CALENDLY_API_BASE_URL}/events/${eventId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${config.CALENDLY_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Calendly API error: ${response.status} ${response.statusText}`);
    }

    console.log(`Calendly event ${eventId} cancelled successfully`);
  } catch (error) {
    console.error("Calendly event cancellation failed:", error);
    throw error;
  }
}

/**
 * Get Calendly event details
 */
export async function getCalendlyEvent(eventId: string): Promise<any> {
  if (!config.CALENDLY_API_KEY) {
    throw new Error("CALENDLY_API_KEY is not configured");
  }

  try {
    const response = await fetch(`${config.CALENDLY_API_BASE_URL}/events/${eventId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${config.CALENDLY_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Calendly API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Calendly event fetch failed:", error);
    throw error;
  }
}
