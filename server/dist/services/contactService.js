"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const prisma_1 = require("../config/prisma");
class ContactService {
    static async saveContact(data) {
        const contact = await prisma_1.prisma.contact.create({
            data,
        });
        return contact;
    }
    static async getContacts() {
        return await prisma_1.prisma.contact.findMany({
            orderBy: { createdAt: "desc" },
        });
    }
}
exports.ContactService = ContactService;
//# sourceMappingURL=contactService.js.map