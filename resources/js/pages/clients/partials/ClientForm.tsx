import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldLabel, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select';
import type { Client } from '@/types/models/clients';
import type { TaxRegime } from '@/types/models/tax_regime';

interface ClientFormProps {
    client?: Client;
    taxRegimes: TaxRegime[];
    submitURL: string;
    method?: 'post' | 'put';
}

export const ClientForm = ({
    client,
    taxRegimes,
    submitURL,
    method = 'post',
}: ClientFormProps) => (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="colored">
                <Plus size={16} />
                Nuevo Cliente
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Crea un nuevo cliente</DialogTitle>
            </DialogHeader>

            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="name">Nombre Completo *</FieldLabel>
                    <Input id="name" placeholder="Nombre" required />
                </Field>
                <Field>
                    <FieldLabel htmlFor="email">Correo Electronico</FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="phone_number">
                        Numero de Telefono
                    </FieldLabel>
                    <Input
                        id="phone_number"
                        placeholder="+523003003000"
                        type="tel"
                    />
                </Field>
                <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-2">
                    <Field>
                        <FieldLabel htmlFor="rfc">RFC</FieldLabel>
                        <Input id="rfc" type="string" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="tax_regime_id">
                            Regimen Fiscal
                        </FieldLabel>
                        <Select defaultValue="601">
                            <SelectTrigger id="tax_regime_id">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="601">
                                    REGIMEN GENERAL DE LEY PERSONAS MORALES
                                </SelectItem>
                                <SelectItem value="602">
                                    RÉGIMEN SIMPLIFICADO DE LEY PERSONAS MORALES
                                </SelectItem>
                                <SelectItem value="603">
                                    PERSONAS MORALES CON FINES NO LUCRATIVOS
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>
                </div>

                <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-2">
                    <Field>
                        <FieldLabel htmlFor="corporate_reason">
                            Razon Social
                        </FieldLabel>
                        <Input id="corporate_reason" type="string" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="commercial_name">
                            Nombre Comercial
                        </FieldLabel>
                        <Input id="commercial_name" type="string" />
                    </Field>
                </div>
            </FieldGroup>

            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="destructive">Cancelar</Button>
                </DialogClose>
                <Button variant="outline">Crear cliente</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);
