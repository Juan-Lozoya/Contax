import {
    HeaderClient,
    SearchUtils,
    NoClientsCard,
} from '@/components/clients-index';

import type { Client } from '@/types/models/clients';
import type { PaginatedData } from '@/types/pagination';

interface Props {
    clients: PaginatedData<Client>;
}

export default function IndexClients({ clients }: Props) {
    return (
        <>
            <HeaderClient />
            <SearchUtils />
            <NoClientsCard />
        </>
    );
}

IndexClients.layout = {
    breadcrumbs: [
        {
            title: 'Información de Clientes',
            // href: edit(),
        },
    ],
};
