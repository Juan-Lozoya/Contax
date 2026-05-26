import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Pencil, Trash2, Mail, Phone } from 'lucide-react';

type IconProps = {
    icon: LucideIcon;
    className?: string;
};

const MiniButtonIcon = ({icon: Icon, className}: IconProps) => (
    <div className='rounded-md bg-red-300 hover:bg-red-300/80 p-1'>
        <Icon size={14} className={`dark:text-black text-white cursor-pointer ${className}`}/>
    </div>
)

export const UserCard = () => (
    <Card>
        <CardHeader className='flex flex-row items-center justify-between'>
            <CardTitle>Juan Lozoya</CardTitle>
            <div className='flex flex-row space-x-2'>
                <MiniButtonIcon icon={Pencil}/>

                <MiniButtonIcon icon={Trash2} className='hover:text-red-400'/>
            </div>
        </CardHeader>
        <CardContent>
            <div className='flex flex-row justify-between w-full text-md text-gray-500'>
                <span>601</span>
                <span className='flex items-center justify-center gap-x-2'>
                    <Mail size={15} />
                    email@example.com
                </span>
                <span className='flex items-center justify-center gap-x-2'>
                    <Phone size={15} />
                    3122002222
                </span>
                <span>
                    #######
                </span>
            </div>
        </CardContent>
    </Card>
);
