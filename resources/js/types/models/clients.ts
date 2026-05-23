export type Clients = {
    id: number;
    user_id: number;
    name: string;
    email?: string;
    phone_number?: string;
    rfc: string;
    tax_regime?: string;
    zip_code?: string;
    corporate_reason?: string;
    commercial_name?: string;
    is_active: boolean;
};
