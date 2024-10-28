import { db } from "@/config/db";
import { storage } from "@/config/firebaseConfig";
import { AiGeneratedImage } from "@/config/schema";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_KEY,
});

export async function POST(req) {
  const { imageUrl, roomType, designType, additionalReq, userEmail } =
    await req.json();

  //   Convert Image to AI Image

  try {
    const input = {
      image: imageUrl,
      prompt:
        "Une " +
        roomType +
        " avec un style de design " +
        designType +
        " intérieur" +
        additionalReq,
    };

    // const output = await replicate.run(
    //   "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
    //   { input }
    // );
    // console.log(output);
    // return NextResponse.json({ result: output });
    const output =
      "https://replicate.delivery/pbxt/KhTNuTIKK1F1tvVl8e7mqOlhR3z3D0SAojAMN8BNftCvAubM/bedroom_3.jpg";

    //  Convert Output Url to BASE64 Image

    const base64Image = await ConvertImageToBase64(output);

    // Save BASE64 to Firebase
    const fileName = Date.now() + ".png";
    const storageRef = ref(storage, "heist-redesign/" + fileName);
    await uploadString(storageRef, base64Image, "data_url");

    const downloadUrl = await getDownloadURL(storageRef);
    console.log(downloadUrl);

    //    Save All to Database

    const dbResult = await db
      .insert(AiGeneratedImage)
      .values({
        roomType: roomType,
        designType: designType,
        orgImage: imageUrl,
        aiImage: downloadUrl,
        userEmail: userEmail,
      })
      .returning({ id: AiGeneratedImage.id });
    console.log(dbResult);

    return NextResponse.json({ result: dbResult[0] });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}

async function ConvertImageToBase64(imageUrl) {
  const res = await axios.get(imageUrl, { responseType: "arraybuffer" });
  const base64ImageRaw = Buffer.from(res.data).toString("base64");

  return "data:image/png;base64," + base64ImageRaw;
}
