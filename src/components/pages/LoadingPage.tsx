import { LoadingDots } from "../atoms/LoadingDots";

type LoadingPageProps = {
    loader?: React.ReactNode;
    text?: string;
};

export const LoadingPage = ({ loader = <LoadingDots />, text = "Loading..." }: LoadingPageProps) => {
    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center">
            {loader}
            <p>{text}</p>
        </div>
    );
};
