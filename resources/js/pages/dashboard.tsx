import { Head } from '@inertiajs/react';
import {
    TotalClientsCard,
    AddNewClientCard,
    RecentClientsTableCard,
} from '@/components/app-cards-dashboard';
import type { Client } from '@/types/models/clients';

interface Props {
    clients: Client[];
}

export default function Dashboard({ clients }: Props) {
    return (
        <>
            <Head title="Resumen" />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <TotalClientsCard />

                <AddNewClientCard />
            </div>

            {RecentClientsTableCard(clients)}
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Resumen de tu Cartera',
        },
    ],
};
