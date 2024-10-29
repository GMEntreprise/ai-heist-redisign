"use client";

import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function HeaderHome() {
  const { user } = useUser();
  return (
    <div className="p-4 shadow-sm flex justify-between items-center flex-wrap gap-4 md:gap-0 md:flex-nowrap">
      {/* Logo et Titre */}
      <Link href={"/"}>
        <div className="flex gap-2 items-center">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <h2 className="font-bold text-base sm:text-lg md:text-xl">
            Ai Heist Design
          </h2>
        </div>
      </Link>

      {/* Bouton principal - Cacher sur petit écran */}
      <div className="hidden sm:block">
        <Link href={"/dashboard/buy-credits"}>
          <Button
            variant="ghost"
            className="rounded-full text-primary text-sm sm:text-base"
          >
            Boostez votre expérience en ajoutant des crédits !
          </Button>
        </Link>
      </div>

      {/* Crédits et Bouton utilisateur */}
      {user ? (
        <div className="flex gap-4 items-center">
          <Link href={"/dashboard"}>
            <Button>--Tableau de bord--</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link href={"/dashboard"}>
          <Button>
            Commencer <ChevronRightIcon />
          </Button>
        </Link>
      )}
    </div>
  );
}

export default HeaderHome;
