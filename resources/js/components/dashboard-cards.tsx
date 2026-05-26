import type { LucideIcon } from 'lucide-react';
import { Users, Plus, MoreHorizontalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '@/components/ui/table';

import type { Client } from '@/types/models/clients';

type IconProps = {
    icon: LucideIcon;
};

type TotalClientsCardProps = {
    numberClients: number;
};

export const ButtonIcon = ({ icon: Icon }: IconProps) => (
    <div className="w-fit rounded-lg bg-red-300 p-2">
        <Icon size={16} className="text-white dark:text-black" />
    </div>
);

export const TotalClientsCard = ({ numberClients }: TotalClientsCardProps) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Clientes Totales</CardTitle>
            <ButtonIcon icon={Users} />
        </CardHeader>
        <CardContent>
            <>
                <div className="text-4xl">{numberClients}</div>
                <span className="miniGray">Sin límite de registros</span>
            </>
        </CardContent>
    </Card>
);

export const AddNewClientCard = () => (
    <Card className="cursor-pointer border-dashed hover:border-primary/40">
        <CardHeader>
            <ButtonIcon icon={Plus} />
        </CardHeader>
        <CardContent>
            <>
                <h1>Agregar Cliente</h1>
                <span className="miniGray">
                    Registra un nuevo cliente en segundos
                </span>
            </>
        </CardContent>
    </Card>
);

export const RecentClientsTableCard = (clients: Client[]) => (
    <Card className="mt-3">
        <CardHeader>
            <CardTitle>Clientes Recientes</CardTitle>
        </CardHeader>
        <CardContent>
            {!clients.length && (
                <div className="flex flex-col items-center justify-center gap-y-3">
                    <span className="miniGray">
                        Aún no tienes clientes registrados.
                    </span>
                    <Button variant="colored">
                        <Plus size={16} />
                        Agrega tu primer cliente
                    </Button>
                </div>
            )}

            {clients.length && (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Telefono</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clients.map((client, index) => (
                            // Change index after removing mock of clients
                            <TableRow key={index}>
                                <TableCell>{client.name ?? '-'}</TableCell>
                                <TableCell>
                                    {client.phone_number ?? '-'}
                                </TableCell>
                                <TableCell>{client.email ?? '-'}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="size-8"
                                            >
                                                <MoreHorizontalIcon />
                                                <span className="sr-only">
                                                    Open menu
                                                </span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                Editar
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem variant="destructive">
                                                Eliminar
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </CardContent>
    </Card>
);
