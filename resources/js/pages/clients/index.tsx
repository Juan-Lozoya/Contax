import AppPagination from '@/components/app-pagination';
import {
    HeaderClient,
    SearchUtils,
    NoClientsCard,
} from '@/components/clients-index';
import { UserCard } from '@/components/ui/userCard';
import type { Client } from '@/types/models/clients';
import type { PaginatedData } from '@/types/pagination';

interface Props {
    clients: PaginatedData<Client>;
    clientsMock: Client[];
}

export default function IndexClients({ clients, clientsMock }: Props) {
    return (
        <>
            <HeaderClient />
            <SearchUtils />
            {!clientsMock.length && <NoClientsCard />}

            <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-2">
                {clientsMock.map((client) => (
                    // Change key after disabling mock
                    <UserCard client={client} key={client.rfc} />
                ))}
            </div>

            <AppPagination />
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
