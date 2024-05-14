export const HeroWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-start items-center gap-20">
      <div className="flex w-10/12 sm:w-2/3 flex-col items-center gap-8 mt-12 md:mt-32 text-center">
        {children}
      </div>
    </div>
  );
};
