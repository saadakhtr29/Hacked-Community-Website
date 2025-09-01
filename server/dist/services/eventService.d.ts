export declare class EventService {
    static fetchLumaEvents(): Promise<any>;
    static fetchCommudleEvents(): Promise<any>;
    static syncEvents(): Promise<number>;
    static getEvents(): Promise<{
        id: string;
        createdAt: Date;
        source: string;
        externalId: string;
        title: string;
        description: string | null;
        url: string | null;
        startDate: Date;
        endDate: Date | null;
        updatedAt: Date;
    }[]>;
}
//# sourceMappingURL=eventService.d.ts.map