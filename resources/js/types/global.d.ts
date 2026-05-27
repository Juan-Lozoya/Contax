import type { Auth } from '@/types/auth';
import type { TaxRegime } from './models/tax_regime';

declare module 'react' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface InputHTMLAttributes<T> {
        passwordrules?: string;
    }
}

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            taxRegimes: TaxRegime[];
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}
