export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn("relative h-full font-sans antialiased")}>
      <main className="relative flex flex-col min-h-screen gap-8">
        {children}
      </main>
    </div>
  );
};
