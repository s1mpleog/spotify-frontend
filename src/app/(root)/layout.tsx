import Navbar from "@/components/shared/navbar/Navbar";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="gap-5 flex">
      <aside className="">
        <Sidebar />
      </aside>
      <section className="flex flex-col w-full pl-[360px]">
        <nav className="flex items-center justify-between">
          <Navbar />
        </nav>
        <div>{children}</div>
      </section>
    </main>
  );
};

export default layout;
