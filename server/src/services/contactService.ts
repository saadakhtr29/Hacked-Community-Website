import { prisma } from '../config/prisma';

interface ContactData {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

export class ContactService {
  static async saveContact(data: ContactData) {
    const contact = await prisma.contact.create({
      data,
    });
    return contact;
  }

  static async getContacts() {
    return await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
  }
}
