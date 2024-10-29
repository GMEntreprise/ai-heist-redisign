import React, { useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import AiOutputDialog from "./AiOutputDialog";

function RoomDesignCard({ room }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="shadow-md rounded-md" onClick={handleDialogOpen}>
      <ReactBeforeSliderComponent
        firstImage={{
          imageUrl: room?.aiImage,
        }}
        secondImage={{
          imageUrl: room?.orgImage,
        }}
      />
      <div className="p-4">
        <h2>🏡 Type de pièce : {room?.roomType}</h2>
        <h2>🎨 Type de design : {room?.designType}</h2>
      </div>

      {/* <AiOutputDialog
        aiImage={room.aiImage}
        orgImage={room.orgImage}
        closeDialog={handleDialogClose}
        openDialog={openDialog}
      /> */}
    </div>
  );
}

export default RoomDesignCard;
