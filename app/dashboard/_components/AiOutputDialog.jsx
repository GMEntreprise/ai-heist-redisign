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
    <AlertDialog open={openDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Result : {}</AlertDialogTitle>
          <ReactBeforeSliderComponent
            firstImage={{
              imageUrl: aiImage,
            }}
            secondImage={{
              imageUrl: orgImage,
            }}
          />
          <Button onClick={() => closeDialog(false)}>Fermer</Button>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AiOutputDialog;
