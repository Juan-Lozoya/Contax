import { useForm } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { ClientForm } from './ClientForm';
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
import type { Client } from '@/types/models/clients';

export const CreateClientDialog = () => {
    const { data, setData, post, processing, errors, reset } = useForm<
        Omit<Client, 'id' | 'user_id'>
    >({
        name: '',
        email: '',
        phone_number: '',
        rfc: '',
        tax_regime_id: 1,
        zip_code: '',
        corporate_reason: '',
        commercial_name: '',
        is_active: true,
    });

    const onSubmit = () => {
        post('clients', {
            onSuccess: () => reset(),
        });
    };

    return (
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

                <ClientForm data={data} setData={setData} errors={errors} />

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="destructive" onClick={() => reset()}>
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button
                        variant="outline"
                        onClick={onSubmit}
                        disabled={processing}
                    >
                        Crear cliente
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
