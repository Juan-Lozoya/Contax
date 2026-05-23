import type { Client } from '@/types/models/clients';

interface Props {
    client: Client;
}

export default function EditClient({ client }: Props) {
    return (
        <>
            <h1>Hola Edit Client</h1>
        </>
    );
}

EditClient.layout = {
    breadcrumbs: [
        {
            title: 'Editar Cliente',
        },
    ],
};
