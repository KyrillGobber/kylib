import { FloatingNav } from '@/components/FloatingNav';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { Contact, Home, Image } from 'lucide-react';

const meta: Meta<typeof FloatingNav> = {
    component: FloatingNav,
};

export default meta;
type Story = StoryObj<typeof FloatingNav>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Null: Story = {
    render: () => <FloatingNav />,
};

const floatingNavChildren = [
    <a className={cn(buttonVariants({ variant: 'secondary' }))} href="#">
        Home
    </a>,
    <a className={cn(buttonVariants({ variant: 'secondary' }))} href="#">
        zwai
    </a>,
    <a className={cn(buttonVariants({ variant: 'secondary' }))} href="#">
        drai
    </a>,
    <a className={cn(buttonVariants({ variant: 'secondary' }))} href="#">
        fier
    </a>,
];

const floatingNavChildrenIcons = [
    <a className={cn(buttonVariants({ variant: 'secondary' }))} href="#">
        <Home />
    </a>,
    <a className={cn(buttonVariants({ variant: 'secondary' }))} href="#">
        <Image />
    </a>,
    <a className={cn(buttonVariants({ variant: 'secondary' }))} href="#">
        <Contact />
    </a>,
];

const floatingNavMobileChildren = [
    <a className={cn(buttonVariants({ variant: 'ghost' }))} href="#">
        Home
    </a>,
    <a className={cn(buttonVariants({ variant: 'ghost' }))} href="#">
        zwi
    </a>,
    <a className={cn(buttonVariants({ variant: 'ghost' }))} href="#">
        drai
    </a>,
    <a className={cn(buttonVariants({ variant: 'ghost' }))} href="#">
        fier
    </a>,
];

const mobileAddition = <div>stuff</div>;

export const PrimaryWithMobile: Story = {
    render: () => (
        <FloatingNav
            children={floatingNavChildren}
            mobileChildren={floatingNavMobileChildren}
            mobileAddition={mobileAddition}
        />
    ),
};

export const PrimaryWithMobileTop: Story = {
    render: () => (
        <FloatingNav
            children={floatingNavChildren}
            mobileChildren={floatingNavMobileChildren}
            mobileAddition={mobileAddition}
            position={'top'}
        />
    ),
};

export const PrimaryWithMobileCenter: Story = {
    render: () => (
        <FloatingNav
            children={floatingNavChildren}
            mobileChildren={floatingNavMobileChildren}
            mobileAddition={mobileAddition}
            position={'center'}
        />
    ),
};

export const PrimaryWithMobileCenterIcons: Story = {
    render: () => (
        <FloatingNav
            children={floatingNavChildrenIcons}
            mobileChildren={floatingNavMobileChildren}
            mobileAddition={mobileAddition}
            position={'center'}
        />
    ),
};

export const PrimaryWithMobileCenterIconsLeft: Story = {
    render: () => (
        <FloatingNav
            children={floatingNavChildrenIcons}
            mobileChildren={floatingNavMobileChildren}
            mobileAddition={mobileAddition}
            position={'center'}
            side={'left'}
        />
    ),
};
