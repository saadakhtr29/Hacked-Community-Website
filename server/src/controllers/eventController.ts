import express from "express";
import type { Request, Response } from "express";
import { EventService } from "../services/eventService";

export class EventController {
  static async syncEvents(req: Request, res: Response) {
    try {
      const count = await EventService.syncEvents();
      res.status(200).json({ message: `Synced ${count} events successfully` });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: "Failed to sync events" });
    }
  }

  static async getEvents(req: Request, res: Response) {
    try {
      const events = await EventService.getEvents();
      res.status(200).json(events);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch events" });
    }
  }
}
