import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeaderHome from "./HeaderHome";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import {
  BookOpen,
  Brush,
  ChevronRight,
  MessagesSquare,
  TabletSmartphone,
} from "lucide-react";

export default function Home() {
  const assets = [
    {
      title: "Télécharger",
      desc: "Téléchargez la photo de votre pièce",
      icon: <TabletSmartphone color={"#fff"} />,
    },
    {
      title: "Choisir un Design",
      desc: "Sélectionnez le type de design et de pièce",
      icon: <Brush color={"#fff"} />,
    },
    {
      title: "Prêt à Télécharger",
      desc: "Votre design d'intérieur pour la pièce/maison est prêt",
      icon: <BookOpen color={"#fff"} />,
    },
    {
      title: "Support 24/7",
      desc: "Contactez-nous 24h/24 et 7j/7",
      icon: <MessagesSquare color={"#fff"} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderHome />

      {/* Section Header */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div class="mt-5 max-w-2xl text-center mx-auto">
          <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            Design Intérieur par IA pour votre
            <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              {" "}
              Maison et Pièce
            </span>
          </h1>
        </div>
        <div class="mt-5 max-w-3xl text-center mx-auto">
          <p class="text-lg text-gray-600 dark:text-neutral-400">
            Transformez votre espace avec l'IA : un design d'intérieur pour
            votre maison et vos pièces, à portée de main !
          </p>
        </div>
        <Link href={"/dashboard"} className="mt-8 gap-3 flex justify-center">
          <Button className="inline-flex justify-center items-center  gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800 ">
            Commencer
            <ChevronRight color="#fff" />
          </Button>
        </Link>
      </div>

      {/* Image Comparison Section */}
      <div className="flex items-center justify-center sm:flex-col">
        <div className="flex flex-col sm:flex-row gap-8">
          <Image
            src="/LivingRoom.jpg"
            alt="Room Before"
            width={300}
            height={200}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
          <span className="flex justify-center items-center text-4xl">→</span>
          <Image
            src="/replicate.png"
            alt="Room After"
            width={300}
            height={200}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
          {assets.map((step, idx) => (
            <Link
              key={idx}
              href={"/"}
              className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            >
              <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
                {step.icon}
              </div>
              <div class="mt-5">
                <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                  {step.title}
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400">
                  {step.desc}
                </p>
                <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  En savoir plus
                  <ChevronRightIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
