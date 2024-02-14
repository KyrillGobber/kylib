import { AtSign, Code, Github, Linkedin } from "lucide-react";

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

export const KyFooter = ({
    footerText,
    footerSocials,
    footerSourceText,
}: KyFooterProps) => {
    return (
        <footer className="mt-auto mb-6 flex flex-col justify-center items-center bottom-0 gap-4">
            <FooterText text={footerText} />
            <FooterSocials {...footerSocials} />
            <FooterSrc sourceText={footerSourceText} />
        </footer>
    );
};

const FooterText = ({ text }: { text?: string }) => {
    if (!text) return null;
    return <p className="text-sm md:text-base">{text}</p>;
};

const FooterSocials = ({
    showMail,
    showGithub,
    showLinkedin,
    additionalSocials,
}: FooterSocials) => {
    return (
        <div className="grid grid-flow-col gap-4">
            {showMail && (
                <a
                    target="_blank"
                    href={"mailto:kyrill@gobber.ch"}
                    rel="noopener noreferrer"
                >
                    <AtSign />
                </a>
            )}
            {showGithub && (
                <a
                    target="_blank"
                    href={"https://github.com/KyrillGobber"}
                    rel="noopener noreferrer"
                >
                    <Github />
                </a>
            )}
            {showLinkedin && (
                <a
                    target="_blank"
                    href={"https://www.linkedin.com/in/kyrill-gobber-022a71199/"}
                    rel="noopener noreferrer"
                >
                    <Linkedin />
                </a>
            )}
            {additionalSocials}
        </div>
    );
};

const FooterSrc = ({ sourceText }: { sourceText?: string }) => {
    if (!sourceText) return null;
    return (
        <a
            className="flex flex-row gap-2 text-sm md:text-base"
            target="_blank"
            href={"https://github.com/KyrillGobber/kyFrontpage"}
            rel="noopener noreferrer"
        >
            {sourceText}
            <Code />
        </a>
    );
};
