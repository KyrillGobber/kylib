import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { Separator } from './ui/separator';
import { Menu } from 'lucide-react';

export const MobileDrawerNav = ({
    mobileChildren,
    mobileAddition,
}: {
    mobileChildren: JSX.Element[];
    mobileAddition?: JSX.Element;
}) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <Drawer
            preventScrollRestoration
            open={isDrawerOpen}
            onOpenChange={setDrawerOpen}
        >
            <DrawerTrigger
                onClick={() => setDrawerOpen(true)}
                className={cn(
                    'bg-secondary w-screen sticky h-16 z-50 bottom-0 flex flex-row justify-center items-center'
                )}
            >
                <Menu className="scale-150 self-center" color="white" />
            </DrawerTrigger>
            <DrawerContent className="flex flex-col gap-4">
                {mobileChildren && (
                    <div className="flex flex-col gap-2 cursor-pointer">
                        {mobileChildren.map((child) => child)}
                    </div>
                )}
                {mobileAddition && (
                    <>
                        <Separator />
                        {mobileAddition}
                    </>
                )}
            </DrawerContent>
        </Drawer>
    );
};
