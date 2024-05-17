import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { MobileDrawerNav } from "./MobileDrawerNav";
import { cn } from "@/lib/utils";

enum FloatingNavPosition {
    TOP = "top",
    CENTER = "center",
    BOTTOM = "bottom",
}

enum FloatingNavSide {
    LEFT = "left",
    RIGHT = "right",
}

export type FloatingNavProps = {
    children?: JSX.Element[];
    mobileChildren?: JSX.Element[];
    mobileAddition?: JSX.Element;
    position?: "top" | "center" | "bottom";
    side?: "left" | "right";
};

export const FloatingNav = ({
    children,
    mobileChildren,
    mobileAddition,
    position = FloatingNavPosition.BOTTOM,
    side = FloatingNavSide.RIGHT,
}: FloatingNavProps) => {
    const { isMobile } = useIsMobile();

    const getPosition = () => {
        switch (position) {
            case FloatingNavPosition.TOP:
                return "top-10";
            case FloatingNavPosition.CENTER:
                return "top-1/2 -translate-y-1/2";
            case FloatingNavPosition.BOTTOM:
                return "bottom-10 ";
        }
    };

    const getSide = () => {
        switch (side) {
            case FloatingNavSide.LEFT:
                return "left-8";
            case FloatingNavSide.RIGHT:
                return "right-8";
        }
    };

    if (isMobile && mobileChildren) {
        return (
            <MobileDrawerNav
                mobileChildren={mobileChildren}
                mobileAddition={mobileAddition}
            />
        );
    } else if (!isMobile && children) {
        return (
            <div className={cn("flex flex-col gap-2 fixed z-90 cursor-pointer", getPosition(), getSide())}>
                {children}
            </div>
        );
    } else return null;
};

