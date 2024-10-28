"use client";

import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useContext } from "react";

function Header() {
  const { userDetail } = useContext(UserDetailContext);

  return (
    <div className="p-4 shadow-sm flex justify-between items-center flex-wrap gap-4 md:gap-0 md:flex-nowrap">
      {/* Logo et Titre */}
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        <h2 className="font-bold text-base sm:text-lg md:text-xl">
          Ai Heist Design
        </h2>
      </div>

      {/* Bouton principal - Cacher sur petit écran */}
      <div className="hidden sm:block">
        <Button
          variant="ghost"
          className="rounded-full text-primary text-sm sm:text-base"
        >
          Boostez votre expérience en ajoutant des crédits !
        </Button>
      </div>

      {/* Crédits et Bouton utilisateur */}
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
          <Image src={"/star.png"} alt="star" width={20} height={20} />
          <h2 className="text-sm sm:text-base">{userDetail?.credits}</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
