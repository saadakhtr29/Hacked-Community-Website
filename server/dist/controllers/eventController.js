"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const eventService_1 = require("../services/eventService");
class EventController {
    static async syncEvents(req, res) {
        try {
            const count = await eventService_1.EventService.syncEvents();
            res.status(200).json({ message: `Synced ${count} events successfully` });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to sync events" });
        }
    }
    static async getEvents(req, res) {
        try {
            const events = await eventService_1.EventService.getEvents();
            res.status(200).json(events);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to fetch events" });
        }
    }
}
exports.EventController = EventController;
//# sourceMappingURL=eventController.js.map