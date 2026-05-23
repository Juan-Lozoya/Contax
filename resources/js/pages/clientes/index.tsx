import type { Clients } from '@/types/models/clients';
import type { PaginatedData } from '@/types/pagination';

interface Props {
    clients: PaginatedData<Clients>;
}

export default function IndexClientes({ clients }: Props) {
    return (
        <>
            <h1>Hola </h1>
        </>
    );
}

IndexClientes.layout = {
    breadcrumbs: [
        {
            title: 'Información de Clientes',
            // href: edit(),
        },
    ],
};
