import express from "express";
import type { Request, Response } from "express";
export declare class ContactController {
    static submitForm(req: Request, res: Response): Promise<express.Response<any, Record<string, any>> | undefined>;
    static getContacts(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=contactController.d.ts.map