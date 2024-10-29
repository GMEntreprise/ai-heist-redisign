"use client";

import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { ChevronRightIcon, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function HeaderHome() {
  const { user } = useUser();

  return (
    <div className="w-full">
      {/* Header principal */}
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

        {/* Actions sur la droite - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href={"/dashboard/buy-credits"}>
            <Button variant="ghost" className="rounded-full text-primary">
              Boostez votre expérience en ajoutant des crédits !
            </Button>
          </Link>

          {user ? (
            <div className="flex gap-4 items-center">
              <Link href={"/dashboard"}>
                <Button>Tableau de bord</Button>
              </Link>
              <UserButton />
            </div>
          ) : (
            <Link href={"/dashboard"}>
              <Button>
                Commencer <ChevronRightIcon className="ml-2" />
              </Button>
            </Link>
          )}
        </div>

        {/* Actions sur la droite - Mobile */}
        <div className="flex md:hidden items-center gap-3">
          {user ? (
            <>
              <Link href={"/dashboard/buy-credits"}>
                <Button variant="outline" size="sm" className="text-primary">
                  Ajouter des crédits
                </Button>
              </Link>
              <Link href={"/dashboard"}>
                <Button size="sm">Tableau</Button>
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href={"/dashboard"}>
              <Button size="sm">
                Commencer <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderHome;
