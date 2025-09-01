"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const contactService_1 = require("../services/contactService");
class ContactController {
    static async submitForm(req, res) {
        try {
            const { fullname, email, subject, message } = req.body;
            if (!fullname || !email || !subject || !message) {
                return res.status(400).json({ error: "All fields are required" });
            }
            const savedContact = await contactService_1.ContactService.saveContact({
                fullname,
                email,
                subject,
                message,
            });
            res.status(201).json({
                message: "Contact form submitted successfully",
                contact: savedContact,
            });
        }
        catch (error) {
            console.error("Error submitting contact form:", error);
            res.status(500).json({ error: "Failed to submit contact form" });
        }
    }
    static async getContacts(req, res) {
        try {
            const contacts = await contactService_1.ContactService.getContacts();
            res.status(200).json(contacts);
        }
        catch (error) {
            console.error("Error fetching contacts:", error);
            res.status(500).json({ error: "Failed to fetch contacts" });
        }
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=contactController.js.map