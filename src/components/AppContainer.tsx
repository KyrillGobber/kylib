import { cn } from '@/lib/utils';

export const AppContainer = ({
    children,
    bgColorCssString,
    addMainClasses,
}: {
    children: React.ReactNode;
    bgColorCssString?: string;
    addMainClasses?: string;
}) => {
    return (
        <div
            className={cn(
                'relative h-full font-sans antialiased',
                bgColorCssString
            )}
        >
            <main className={cn(
                "relative flex flex-col min-h-screen gap-8",
                addMainClasses
            )}>
                {children}
            </main>
        </div>
    );
};
