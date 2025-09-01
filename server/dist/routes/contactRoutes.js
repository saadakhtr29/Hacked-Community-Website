"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactController_1 = require("../controllers/contactController");
const router = (0, express_1.Router)();
// POST /api/contact → user submits the form
router.post("/", contactController_1.ContactController.submitForm);
// GET /api/contact → admin fetches all contact submissions
router.get("/", contactController_1.ContactController.getContacts);
exports.default = router;
//# sourceMappingURL=contactRoutes.js.map