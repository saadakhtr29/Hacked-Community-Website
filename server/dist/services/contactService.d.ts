interface ContactData {
    fullname: string;
    email: string;
    subject: string;
    message: string;
}
export declare class ContactService {
    static saveContact(data: ContactData): Promise<{
        id: number;
        fullname: string;
        email: string;
        subject: string;
        message: string;
        createdAt: Date;
    }>;
    static getContacts(): Promise<{
        id: number;
        fullname: string;
        email: string;
        subject: string;
        message: string;
        createdAt: Date;
    }[]>;
}
export {};
//# sourceMappingURL=contactService.d.ts.map