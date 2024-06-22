import ThemeToggler from "@/components/ThemeToggler";

const AuthPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="absolute bottom-5 right-0 text-white ">
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
};

export default AuthPage;
