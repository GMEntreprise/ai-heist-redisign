import Image from "next/image";
import React, { useState } from "react";

function DesignType({ selectedDesignType }) {
  const Designs = [
    {
      name: "Moderne",
      image: "/images/Modern.webp",
    },
    {
      name: "Industriel",
      image: "/images/Industrial.webp",
    },
    {
      name: "Bohème",
      image: "/images/Bohemian.webp",
    },
    {
      name: "Traditionnel",
      image: "/images/Traditional.webp",
    },
    {
      name: "Rustique",
      image: "/images/Rustic.webp",
    },
    {
      name: "Minimaliste",
      image: "/images/Minimalist.webp",
    },
  ];

  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className="mt-5">
      <label className="text-gray-500">
        Choisissez le type de design intérieur
      </label>
      <div className="grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Designs.map((design, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setSelectedOption(design.name);
                selectedDesignType(design.name);
              }}
            >
              <Image
                src={design.image}
                width={100}
                height={100}
                alt="image design"
                className={`h-[70px] rounded-md hover:scale-105 transition-all cursor-pointer ${
                  design.name === selectedOption &&
                  "border-2 border-primary rounded-md p-1"
                }`}
              />
              <h2>{design.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DesignType;
