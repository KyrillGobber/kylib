import { cn } from '@/lib/utils';
import { Github } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from './ui/navigation-menu';
import { ModeToggle } from './mode-toggle';
import { Separator } from './ui/separator';
import { KybitsURL, MiitURL, TeabruhURL } from '@/lib/constants';

interface KyNavProps {
    titleElement?: JSX.Element;
    addRightElements?: JSX.Element[];
}

export const KyNav = ({ titleElement, addRightElements }: KyNavProps) => {
    return (
        <div className="bg-background sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative">
                <div className="flex flex-row justify-between items-center mx-2 h-16">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-secondary dark:bg-secondary p-2 rounded-lg">
                                    My Apps
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <div className="flex flex-col gap-2 h-full">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-3/4 w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        target="_blank"
                                                        href="https://www.gobber.ch"
                                                    >
                                                        <div className="mb-2 text-lg font-medium">
                                                            Gobber.ch
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            My place on the web
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-1/4 w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted px-6 py-4 no-underline outline-none focus:shadow-md"
                                                        target="_blank"
                                                        href={
                                                            'https://github.com/KyrillGobber'
                                                        }
                                                    >
                                                        <span className="flex flex-row gap-2">
                                                            <Github />
                                                            <p>My Github</p>
                                                        </span>
                                                    </a>
                                                </NavigationMenuLink>
                                            </div>
                                        </li>
                                        <ListItem
                                            href={TeabruhURL}
                                            title="TeaBruh"
                                            text={
                                                'The GongFu timer app, we teaheads needed.'
                                            }
                                        />
                                        <ListItem
                                            href={MiitURL}
                                            title="Miit"
                                            text={
                                                'A free Doodle alternative. Your miitup planner.'
                                            }
                                        />
                                        <ListItem
                                            href={KybitsURL}
                                            title="KyBits"
                                            text={'A simple habit tracker app.'}
                                        />
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    {titleElement}
                    <div className="flex flex-row gap-2">
                        {addRightElements}
                        <ModeToggle />
                    </div>
                </div>
                <Separator className="bg-secondary" />
            </header>
        </div>
    );
};

type ListItemProps = {
    title: string;
    href: string;
    text: string;
};

const ListItem = ({ title, href, text }: ListItemProps) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    href={href}
                    target="_blank"
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    )}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {text}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
};
