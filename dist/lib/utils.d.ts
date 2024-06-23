import { type ClassValue } from 'clsx';
import { TextGradients } from './constants';
export declare function cn(...inputs: ClassValue[]): string;
export declare const positionClasses: {
    top: string;
    center: string;
    bottom: string;
};
export declare const sideClasses: {
    right: string;
    left: string;
};
export declare const getRandomTextGradient: () => TextGradients;
export declare function getRandomEnumValue<T>(anEnum: T): T[keyof T];
export declare function getEnumKeyByValue<T extends object>(enumObj: T, value: T[keyof T]): keyof T | undefined;
//# sourceMappingURL=utils.d.ts.map