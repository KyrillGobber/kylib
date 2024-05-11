import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { MobileDrawerNav } from "./MobileDrawerNav";

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

