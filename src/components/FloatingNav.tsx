import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { MobileDrawerNav } from './MobileDrawerNav';
import { cn, positionClasses, sideClasses } from '@/lib/utils';

export type FloatingNavProps = {
    children?: JSX.Element[];
    mobileChildren?: JSX.Element[];
    mobileAddition?: JSX.Element;
    position?: 'top' | 'center' | 'bottom';
    side?: 'left' | 'right';
};

export const FloatingNav = ({
    children,
    mobileChildren,
    mobileAddition,
    position = "bottom",
    side = "right",
}: FloatingNavProps) => {
    const { isMobile } = useIsMobile();
    const positionClass = positionClasses[position];
    const sideClass = sideClasses[side];

    if (isMobile && mobileChildren) {
        return (
            <MobileDrawerNav
                mobileChildren={mobileChildren}
                mobileAddition={mobileAddition}
            />
        );
    } else if (!isMobile && children) {
        return (
            <div
                className={cn(
                    'flex flex-col gap-2 fixed z-90 cursor-pointer',
                    positionClass,
                    sideClass
                )}
            >
                {children}
            </div>
        );
    } else return null;
};
