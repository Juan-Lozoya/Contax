import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Pencil, Trash2, Mail, Phone, Info } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from './tooltip';
import { Client } from '@/types/models/clients';

type IconProps = {
    icon: LucideIcon;
    className?: string;
};

type TextWithIconProps = {
    icon?: LucideIcon;
    text: string;
}

type UserCardProps = {
    client: Client
}

const MiniButtonIcon = ({icon: Icon, className}: IconProps) => (
    <div className='rounded-md bg-red-300 hover:bg-red-300/80 p-1'>
        <Icon size={14} className={`dark:text-black text-white cursor-pointer ${className}`}/>
    </div>
);

const TextWithIcon = ({icon: Icon, text}: TextWithIconProps) => (
    <span className='flex items-center justify-center gap-x-2'>
        {Icon && <Icon size={15} />}
        {text}
    </span>
);

export const UserCard = ({client}: UserCardProps) => (
    <Card>
        <CardHeader className='flex flex-row items-center justify-between'>
            <CardTitle>{client.name}</CardTitle>
            <div className='flex flex-row space-x-2'>
                <MiniButtonIcon icon={Pencil}/>

                <MiniButtonIcon icon={Trash2} className='hover:text-red-400'/>
            </div>
        </CardHeader>
        <CardContent>
            <div className='grid grid-cols-2 gap-x-3 md:flex md:flex-row md:justify-between w-full text-md text-gray-500'>
                <Tooltip>
                    <TooltipTrigger className='bg-gray-100/80 p-1 px-1.5 rounded-md'>
                        <TextWithIcon icon={Info} text={client.tax_regime?.code ?? ''}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        {client.tax_regime?.name}
                    </TooltipContent>
                </Tooltip>

                <TextWithIcon icon={Mail} text={client.email ?? '-'}/>
                <TextWithIcon icon={Phone} text={client.phone_number ?? '-'}/>

                {/* hash this before deploying */}
                <TextWithIcon text={client.rfc}/>
            </div>
        </CardContent>
    </Card>
);
