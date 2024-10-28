import React from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import Image from "next/image";

function CustomLoading({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <div className="bg-white flex flex-col items-center my-10 justify-center">
          <Image src={"/loader.gif"} alt="loading" width={100} height={100} />
          <h2 className="text-sm">
            Le Redesign de votre pièce en cours... Ne rafraîchissez pas la page
          </h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CustomLoading;
