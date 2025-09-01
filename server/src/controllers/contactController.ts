import express from "express";
import type { Request, Response } from "express";
import { ContactService } from "../services/contactService";

export class ContactController {
  static async submitForm(req: Request, res: Response) {
    try {
      const { fullname, email, subject, message } = req.body;

      if (!fullname || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const savedContact = await ContactService.saveContact({
        fullname,
        email,
        subject,
        message,
      });

      res.status(201).json({
        message: "Contact form submitted successfully",
        contact: savedContact,
      });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  }

  static async getContacts(req: Request, res: Response) {
    try {
      const contacts = await ContactService.getContacts();
      res.status(200).json(contacts);
    } catch (error: any) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  }
}
