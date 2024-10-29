import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

function AiOutputDialog({ openDialog, closeDialog, orgImage, aiImage }) {
  return (
    <AlertDialog open={openDialog} onOpenChange={closeDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Résultat :</AlertDialogTitle>
        </AlertDialogHeader>
        <ReactBeforeSliderComponent
          firstImage={{
            imageUrl: aiImage,
          }}
          secondImage={{
            imageUrl: orgImage,
          }}
        />
        <Button onClick={closeDialog} className="mt-4">
          Fermer
        </Button>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AiOutputDialog;
