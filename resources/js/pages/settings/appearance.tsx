import { Head } from '@inertiajs/react';
import AppearanceTabs from '@/components/appearance-tabs';
import Heading from '@/components/heading';
import { edit as editAppearance } from '@/routes/appearance';

export default function Appearance() {
    return (
        <>
            <Head title="Configuracion de Apariencia" />

            <h1 className="sr-only">Configuracion de Apariencia</h1>

            <div className="space-y-6">
                <Heading
                    variant="small"
                    title="Configuracion de Apariencia"
                    description="Actualiza la configuración de apariencia de tu cuenta."
                />
                <AppearanceTabs />
            </div>
        </>
    );
}

Appearance.layout = {
    breadcrumbs: [
        {
            title: 'Configuracion de Apariencia',
            href: editAppearance(),
        },
    ],
};
