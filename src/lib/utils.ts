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

export enum TextGradients {
    Red = 'bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent',
    Green = 'bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent',
    Blue = 'bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent',
    Purple = 'bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 bg-clip-text text-transparent',
    Teal = 'bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 bg-clip-text text-transparent',
    Lime = 'bg-gradient-to-r from-lime-300 via-lime-500 to-lime-700 bg-clip-text text-transparent',
}

export const getRandomTextGradient = (): TextGradients => {
    return getRandomEnumValue(TextGradients);
}

export function getRandomEnumValue<T>(anEnum: T): T[keyof T] {
    //@ts-ignore
    const enumValues = Object.values(anEnum) as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex];
}
