/// <reference types="react" />
type FooterSocials = {
    showMail?: boolean;
    showGithub?: boolean;
    showLinkedin?: boolean;
    additionalSocials?: JSX.Element[];
};
type KyFooterProps = {
    footerText?: string;
    footerSocials?: FooterSocials;
    footerSourceText?: string;
};
export declare const KyFooter: ({ footerText, footerSocials, footerSourceText, }: KyFooterProps) => import("react/jsx-runtime").JSX.Element;
declare const FooterSocials: ({ showMail, showGithub, showLinkedin, additionalSocials, }: FooterSocials) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=KyFooter.d.ts.map