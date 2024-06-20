/// <reference types="react" />
type FooterSocials = {
    showMail?: boolean;
    showGithub?: boolean;
    showLinkedin?: boolean;
    additionalSocials?: JSX.Element[];
};
type FooterSourceProps = {
    sourceText: string;
    link: string;
};
type KyFooterProps = {
    footerText?: string;
    footerSocials?: FooterSocials;
    footerSource?: FooterSourceProps;
};
export declare const KyFooter: ({ footerText, footerSocials, footerSource, }: KyFooterProps) => import("react/jsx-runtime").JSX.Element;
declare const FooterSocials: ({ showMail, showGithub, showLinkedin, additionalSocials, }: FooterSocials) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=KyFooter.d.ts.map