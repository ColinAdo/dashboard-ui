import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="p-5 w-full max-w-[1140px]">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
