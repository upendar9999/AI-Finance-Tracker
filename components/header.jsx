import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

import Link from "next/link";

import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full  backdrop-blur-md z-50 border-b ">
      <nav className="container mx-auto px-2 py-2 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="welth logo"
            height={40}
            width={150}
            className="h-10 w-auto object-contain "
          />
        </Link>
        <div className="flex items-center space-x-2 ">
          <SignedIn>
            <Link href={"/dashboard"} className="flex items-center gap-1">
              <Button varaint="outline">
                <LayoutDashboard size={14} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href={"/transaction/create"}>
              <Button>
                <PenBox size={14} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button varaint="outline">LogIn</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
