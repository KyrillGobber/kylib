import { cn } from "@/lib/utils";

export const HeroWrapper = ({ children, addClasses}: { children: React.ReactNode, addClasses?: string }) => {
  return (
    <div className="flex flex-col justify-start items-center gap-20">
      <div className={cn("flex w-10/12 sm:w-2/3 flex-col items-center gap-8 mt-12 md:mt-32 text-center", addClasses)}>
        {children}
      </div>
    </div>
  );
};
