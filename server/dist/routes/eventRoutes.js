"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventController_1 = require("../controllers/eventController");
const router = (0, express_1.Router)();
router.get("/", eventController_1.EventController.getEvents); // frontend fetches from here
router.post("/sync", eventController_1.EventController.syncEvents); // trigger sync manually
exports.default = router;
//# sourceMappingURL=eventRoutes.js.map