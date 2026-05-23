import type { Client } from '@/types/models/clients';
import type { PaginatedData } from '@/types/pagination';

interface Props {
    clients: PaginatedData<Client>;
}

export default function IndexClients({ clients }: Props) {
    return (
        <>
            <h1>Hola </h1>
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
