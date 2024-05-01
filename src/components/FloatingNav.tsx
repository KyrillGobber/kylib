import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";

export enum ScrollOrLink {
    Scroll,
    Link,
}

export type NavigationLink = {
    title: string;
    href: string;
    scrollOrLink: ScrollOrLink;
    addClasses?: string;
}

export type FloatingNavProps = {
    children?: React.ReactNode;
    navigationLinks?: NavigationLink[];
};

export const FloatingNav = ({
    children,
    navigationLinks,
}: FloatingNavProps) => {
    const { isMobile } = useIsMobile();

    if (isMobile) {
        return <MobileDrawerNav children={children} />;
    } else {
        return (
            <div className="flex flex-col gap-2 fixed sm:bottom-10 right-8 z-90 cursor-pointer">
                {children}
            </div>
        );
    }
};

const MobileDrawerNav = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <Drawer preventScrollRestoration open={isDrawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger
                onClick={() => setDrawerOpen(true)}
                className={cn(
                    "w-screen sticky h-16 z-50 bottom-0 shd:hidden flex flex-row justify-center items-center"
                )}
            >
                <Menu className="scale-150 self-center" color="white" />
            </DrawerTrigger>
            <DrawerContent className="flex flex-col gap-4 bg-ninaBlue text-ninaBeige">
                {Links.map((link) => (
                    <a
                        key={link.name}
                        className={cn(buttonVariants({ variant: "ghost" }), 'cursor-pointer')}
                        onClick={() => {
                            setDrawerOpen(false);
                            setTimeout(() => handleOnLinkClick(link.id), 350);
                        }}
                    >
                        {link.name}
                    </a>
                ))}
                <Separator />
                <div className="flex flex-col items-center">
                    <p className="font-bold">Terminbuchung</p>
                    <p>Tel. 071 411 12 81</p>
                </div>
            </DrawerContent>
        </Drawer >
    );
};
