import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TextGradients } from './constants';

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

export const getRandomTextGradient = (): TextGradients => {
    return getRandomEnumValue(TextGradients);
}

export function getRandomEnumValue<T>(anEnum: T): T[keyof T] {
    //@ts-ignore
    const enumValues = Object.values(anEnum) as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex];
}
