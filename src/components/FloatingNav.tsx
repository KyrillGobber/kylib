import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";

export type FloatingNavProps = {
    children?: JSX.Element[];
    mobileChildren?: JSX.Element[];
    mobileAddition?: JSX.Element;
};

export const FloatingNav = ({
    children,
    mobileChildren,
    mobileAddition,
}: FloatingNavProps) => {
    const { isMobile } = useIsMobile();

    if (isMobile && mobileChildren) {
        return (
            <MobileDrawerNav
                mobileChildren={mobileChildren}
                mobileAddition={mobileAddition}
            />
        );
    } else if (!isMobile && children) {
        return (
            <div className="flex flex-col gap-2 fixed sm:bottom-10 right-8 z-90 cursor-pointer">
                {children}
            </div>
        );
    } else return null;
};

const MobileDrawerNav = ({
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
                    "bg-secondary w-screen sticky h-16 z-50 bottom-0 flex flex-row justify-center items-center",
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
