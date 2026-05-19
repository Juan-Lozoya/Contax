import { Link, usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

export default function Welcome() {
    const currentYear = new Date().getFullYear();
    const { auth } = usePage().props;

    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Iniciar Sesion
                                </Link>
                                <Link
                                    href={register()}
                                    className="flex items-center gap-x-1 rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Crear Cuenta
                                    <ArrowRight size={14} />
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main></main>
                </div>
                <Separator />
                <div className="w-full dark:text-white">
                    <footer className="grid grid-cols-1 place-items-center pt-5 md:grid-cols-2">
                        <span>© {currentYear} Contax</span>
                        <span>Hecho con cuidado para contadores</span>
                    </footer>
                </div>
            </div>
        </>
    );
}
