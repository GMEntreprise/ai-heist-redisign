"use client";

import React, { useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AddtionalReq from "./_components/AddtionalReq";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { storage } from "@/config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useUser } from "@clerk/nextjs";
import CustomLoading from "./_components/CustomLoading";

function CreateNew() {
  const { user } = useUser();
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [outputResult, setOutputResult] = useState();

  const onHandleInputChange = (value, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
    console.log(formData);
  };

  const generateAiImage = async () => {
    setLoading(true);
    const rawImageUrl = await saveRawImageToFirebase();

    const result = await axios.post("/api/redesign-room", {
      imageUrl: rawImageUrl,
      roomType: formData?.roomType,
      designType: formData?.designType,
      additionalReq: formData?.additionalReq,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });

    console.log(result.data);
    setOutputResult(result.data.result);
    setLoading(false);
  };

  const saveRawImageToFirebase = async () => {
    // Save Raw File Image to Firebase

    const fileName = Date.now() + "_raw.png";
    const imageRef = ref(storage, "heist-redesign/" + fileName);

    await uploadBytes(imageRef, formData.image).then((res) => {
      console.log("File Uploaded...");
    });

    // Uploaded File image URL

    const downloadUrl = await getDownloadURL(imageRef);
    console.log("downloadUrl ;", downloadUrl);

    return downloadUrl;
  };

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

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 ">
        {/* Image Selection */}
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        {/* Form input selection */}
        <div>
          {/* Room type */}
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "roomType")}
          />
          {/* Design Type */}
          <DesignType
            selectedDesignType={(value) =>
              onHandleInputChange(value, "designType")
            }
          />

          {/* Additional Requirement TextArea (optional) */}
          <AddtionalReq
            additionalRequirementInput={(value) =>
              onHandleInputChange(value, "additionalReq")
            }
          />

          {/* Button to generate image */}

          <Button className="w-full mt-5" onClick={generateAiImage}>
            Générer
          </Button>
          <p className="text-sm text-gray-400 mb-5">
            REMARQUE : 1 crédit sera utilisé pour le redesign de votre pièce
          </p>
        </div>
      </div>
      <CustomLoading loading={true} />
    </div>
  );
}

export default CreateNew;
