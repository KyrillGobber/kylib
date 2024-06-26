import { LoadingDots } from "../atoms/LoadingDots";

type LoadingPageProps = {
    loader?: React.ReactNode;
};

export const LoadingPage = ({ loader = <LoadingDots /> }: LoadingPageProps) => {
    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center">
            {loader}
            <p>Loading...</p>
        </div>
    );
};
