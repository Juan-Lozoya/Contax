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
}

export default function IndexClients({ clients }: Props) {
    return (
        <>
            <HeaderClient />
            <SearchUtils />
            {/* <NoClientsCard /> */}

            <div className="mt-3 grid grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-2">
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
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
