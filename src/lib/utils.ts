import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const positionClasses = {
    top: 'top-1/2',
    center: 'top-1/2 -translate-y-1/2',
    bottom: 'bottom-1/2',
    // Add other positions as needed
};

export const sideClasses = {
    right: 'right-8',
    left: 'left-8',
    // Add other sides as needed
};
