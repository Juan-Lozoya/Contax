import { Plus, Search, Building2 } from 'lucide-react';
import { ButtonIcon } from './dashboard-cards';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from '@/components/ui/card';

export const HeaderClient = () => (
    <div className="flex items-center justify-between pb-3">
        <div>
            <h1 className="text-4xl">Clientes</h1>
            <span className="miniGray">0 clientes en tu cartera</span>
        </div>
        <Button variant="colored">
            <Plus size={16} /> Nuevo Cliente
        </Button>
    </div>
);

export const SearchUtils = () => (
    <div className="relative mb-3">
        <Search
            size={16}
            className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input className="pl-10" placeholder="Buscar por nombre o email" />
    </div>
);

export const NoClientsCard = () => (
    <Card className="border-dashed">
        <CardContent>
            <div className="flex h-50 flex-col items-center justify-center gap-y-1">
                <ButtonIcon icon={Building2} />

                <h2 className="font-display text-lg font-semibold text-foreground">
                    Aún no tienes clientes
                </h2>
                <span className="miniGray">
                    Comienza agregando tu primer cliente.
                </span>
                <Button variant="colored" className="mt-3">
                    <Plus size={16} /> Agregar Cliente
                </Button>
            </div>
        </CardContent>
    </Card>
);
