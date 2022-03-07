export class Contact {
    static Category = {
        FAMILY: '0',
        FRIEND: '1',
        OTHER: '2',
    };

    id?: number;
    created_at?: Date;
    modified_at?: Date;
    is_active?: boolean;
    name?: string;
    phone?: string;
    category?: string;
}
