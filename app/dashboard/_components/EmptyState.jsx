import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function EmptyState() {
  return (
    <div className="flex items-center justify-center mt-10 flex-col">
      <Image
        src={"/placeholder.webp"}
        width={200}
        height={200}
        alt="redesign"
      />

      <h2 className="font-medium text-lg text-gray-500">
        Créez un nouveau design d'intérieur avec l'IA pour votre pièce
      </h2>
      <Link href={"/dashboard/create-new"}>
        <Button className="mt-5">+Commencer le Redesign </Button>
      </Link>
    </div>
  );
}

export default EmptyState;
