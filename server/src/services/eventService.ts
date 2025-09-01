import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

const LUMA_API = "https://api.lu.ma/public/v1/events";
const COMMUDLE_API = "https://api.commudle.com/api/v1/events";

export class EventService {
  // Fetch events from Luma
  static async fetchLumaEvents() {
    const res = await axios.get(LUMA_API, {
      headers: {
        Authorization: `Bearer ${process.env.LUMA_API_KEY}`, // store in .env
      },
    });

    return res.data?.events || [];
  }

  // Fetch events from Commudle
  static async fetchCommudleEvents() {
    const res = await axios.get(COMMUDLE_API, {
      headers: {
        Authorization: `Bearer ${process.env.COMMUDLE_API_KEY}`,
      },
    });

    return res.data?.events || [];
  }

  // Sync events from both APIs into DB
  static async syncEvents() {
    const [lumaEvents, commudleEvents] = await Promise.all([
      this.fetchLumaEvents(),
      this.fetchCommudleEvents(),
    ]);

    const allEvents = [
      ...lumaEvents.map((e: any) => ({
        source: "luma",
        externalId: e.id,
        title: e.title,
        description: e.description,
        url: e.url,
        startDate: new Date(e.start_time),
        endDate: e.end_time ? new Date(e.end_time) : null,
      })),
      ...commudleEvents.map((e: any) => ({
        source: "commudle",
        externalId: e.id,
        title: e.name,
        description: e.description,
        url: e.link,
        startDate: new Date(e.start_date),
        endDate: e.end_date ? new Date(e.end_date) : null,
      })),
    ];

    for (const event of allEvents) {
      await prisma.event.upsert({
        where: {
          source_externalId: { source: event.source, externalId: event.externalId },
        },
        update: event,
        create: event,
      });
    }

    return allEvents.length;
  }

  // Get events for UI
  static async getEvents() {
    return prisma.event.findMany({
      orderBy: { startDate: "asc" },
    });
  }
}
