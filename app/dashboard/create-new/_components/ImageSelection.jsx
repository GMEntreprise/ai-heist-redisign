import Image from "next/image";
import React, { useState } from "react";

function ImageSelection({ selectedImage }) {
  const [file, setFile] = useState();

  const onFileSelected = (event) => {
    console.log(event.target.files[0]);

    setFile(event.target.files[0]);
    selectedImage(event.target.files[0]);
  };

  return (
    <div>
      <label>Sélectionnez l'image de votre pièce</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`p-28 border rounded-xl border-dotted flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow-lg ${
              file && "p-0 bg-white"
            }`}
          >
            {!file ? (
              <Image
                src={"/image-upload.webp"}
                width={70}
                height={70}
                alt="upload"
              />
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover"
                alt="image"
              />
            )}
          </div>
        </label>
        <input
          type="file"
          id="upload-image"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
}

export default ImageSelection;
