import type { TaxRegime } from './tax_regime';

export type Client = {
    id: number;
    user_id: number;
    name: string;
    email?: string;
    phone_number?: string;
    rfc: string;
    tax_regime_id: number;
    tax_regime?: TaxRegime;
    zip_code?: string;
    corporate_reason?: string;
    commercial_name?: string;
    is_active: boolean;
};
