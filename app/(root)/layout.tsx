import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root">
      <div className="container">
        <div className="wrapper">
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
