import { usePage } from '@inertiajs/react';
import {
    Field,
    FieldLabel,
    FieldGroup,
    FieldError,
} from '@/components/ui/field';
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
    data: Omit<Client, 'id' | 'user_id'>;
    setData: (
        field: keyof Omit<Client, 'id' | 'user_id'>,
        value: number | string,
    ) => void;
    errors: any;
}

export const ClientForm = ({ data, setData, errors }: ClientFormProps) => {
    const { taxRegimes } = usePage().props;

    return (
        <FieldGroup>
            <Field data-invalid={!!errors.name}>
                <FieldLabel htmlFor="name">Nombre Completo *</FieldLabel>
                <Input
                    id="name"
                    placeholder="Nombre"
                    value={data.name ?? ''}
                    onChange={(e) => setData('name', e.target.value)}
                    aria-invalid={!!errors.name}
                />
                <FieldError>{errors.name ?? ''}</FieldError>
            </Field>
            <Field>
                <FieldLabel htmlFor="email">Correo Electronico</FieldLabel>
                <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={data.email ?? ''}
                    onChange={(e) => setData('email', e.target.value)}
                />
            </Field>
            <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-2">
                <Field>
                    <FieldLabel htmlFor="phone_number">
                        Numero de Telefono
                    </FieldLabel>
                    <Input
                        id="phone_number"
                        placeholder="+523003003000"
                        type="tel"
                        value={data.phone_number ?? ''}
                        onChange={(e) =>
                            setData('phone_number', e.target.value)
                        }
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="zip_code">Codigo Postal</FieldLabel>
                    <Input
                        id="zip_code"
                        placeholder="#####"
                        type="string"
                        value={data.zip_code ?? ''}
                        onChange={(e) => setData('zip_code', e.target.value)}
                    />
                </Field>
            </div>

            <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-2">
                <Field data-invalid={!!errors.rfc}>
                    <FieldLabel htmlFor="rfc">RFC *</FieldLabel>
                    <Input
                        id="rfc"
                        type="string"
                        value={data.rfc ?? ''}
                        onChange={(e) => setData('rfc', e.target.value)}
                        aria-invalid={!!errors.rfc}
                    />
                    <FieldError>{errors.rfc ?? ''}</FieldError>
                </Field>
                <Field data-invalid={!!errors.tax_regime_id}>
                    <FieldLabel htmlFor="tax_regime_id">
                        Regimen Fiscal
                    </FieldLabel>
                    <Select
                        value={String(data.tax_regime_id ?? taxRegimes[0]?.id)}
                        onValueChange={(value) =>
                            setData('tax_regime_id', Number(value))
                        }
                        aria-invalid={!!errors.tax_regime_id}
                    >
                        <SelectTrigger id="tax_regime_id">
                            <SelectValue placeholder="Selecciona un régimen fiscal" />
                        </SelectTrigger>

                        <SelectContent>
                            {taxRegimes.map((regimen: TaxRegime) => (
                                <SelectItem
                                    key={regimen.id}
                                    value={String(regimen.id)}
                                >
                                    {regimen.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FieldError>{errors.tax_regime_id ?? ''}</FieldError>
                </Field>
            </div>

            <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-2">
                <Field>
                    <FieldLabel htmlFor="corporate_reason">
                        Razon Social
                    </FieldLabel>
                    <Input
                        id="corporate_reason"
                        type="string"
                        value={data.corporate_reason ?? ''}
                        onChange={(e) =>
                            setData('corporate_reason', e.target.value)
                        }
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="commercial_name">
                        Nombre Comercial
                    </FieldLabel>
                    <Input
                        id="commercial_name"
                        type="string"
                        value={data.commercial_name ?? ''}
                        onChange={(e) =>
                            setData('commercial_name', e.target.value)
                        }
                    />
                </Field>
            </div>
        </FieldGroup>
    );
};
