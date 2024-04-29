import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
