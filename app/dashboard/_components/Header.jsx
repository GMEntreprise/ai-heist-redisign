"use client";

import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function Header() {
  const { userDetail } = useContext(UserDetailContext);

  return (
    <div className="w-full">
      <div className="p-4 shadow-sm flex justify-between items-center">
        {/* Logo et Titre */}
        <Link href={"/"}>
          <div className="flex gap-2 items-center">
            <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
            <h2 className="font-bold text-base sm:text-lg md:text-xl">
              Ai Heist Design
            </h2>
          </div>
        </Link>

        {/* Version Desktop */}
        <div className="hidden md:flex justify-center items-center gap-4">
          <Link href={"/dashboard/buy-credits"}>
            <Button variant="ghost" className="rounded-full text-primary">
              Boostez votre expérience en ajoutant des crédits !
            </Button>
          </Link>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 p-2 items-center bg-slate-200 px-4 rounded-full">
              <Image src={"/star.png"} alt="star" width={20} height={20} />
              <h2 className="text-base">{userDetail?.credits}</h2>
            </div>
            <UserButton />
          </div>
        </div>

        {/* Version Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <Link href={"/dashboard/buy-credits"}>
            <Button
              variant="outline"
              size="sm"
              className="text-primary whitespace-nowrap"
            >
              + Crédits
            </Button>
          </Link>
          <div className="flex gap-2 p-1 items-center bg-slate-200 px-2 rounded-full">
            <Image src={"/star.png"} alt="star" width={16} height={16} />
            <h2 className="text-sm">{userDetail?.credits}</h2>
          </div>
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
