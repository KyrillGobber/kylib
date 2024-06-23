import { type ClassValue } from 'clsx';
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
export declare enum TextGradients {
    Red = "bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent",
    Green = "bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent",
    Blue = "bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent",
    Purple = "bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 bg-clip-text text-transparent",
    Teal = "bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 bg-clip-text text-transparent",
    Lime = "bg-gradient-to-r from-lime-300 via-lime-500 to-lime-700 bg-clip-text text-transparent"
}
export declare const getRandomTextGradient: () => TextGradients;
export declare function getRandomEnumValue<T>(anEnum: T): T[keyof T];
//# sourceMappingURL=utils.d.ts.map