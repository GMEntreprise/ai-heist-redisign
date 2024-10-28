"use client";

import React from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";

function CreateNew() {
  const onHandleInputChange = (value, fieldName) => {};

  return (
    <div>
      <h2 className="font-bold text-3xl text-primary text-center">
        {" "}
        Plongez dans la magie du remodelage avec l'IA
      </h2>
      <p className="text-center text-gray-500">
        Transformez n'importe quelle pièce en un clic. Sélectionnez un espace,
        choisissez un style et laissez l'IA réinventer instantanément votre
        environnement.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-10">
        {/* Image Selection */}
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        {/* Form input selection */}
        <div>
          {/* Room type */}
          <RoomType />
          {/* Design Type */}

          {/* Additional Requirement TextArea (optional) */}

          {/* Button to generate image */}
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
