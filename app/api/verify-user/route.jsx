import { NextResponse } from "next/server";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { db } from "@/config/db";

export async function POST(req) {
  const { user } = await req.json();

  // If user Already Exist ?
  try {
    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress.emailAddress));

    // If not will add new user to DB

    if (userInfo?.length === 0) {
      const saveResult = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress.emailAddress,
          imageUrl: user?.imageUrl,
        })
        .returning({ id: Users.id });
      console.log(saveResult);

      return NextResponse.json({ result: saveResult[0].Users });
    }
    return NextResponse.json({ result: userInfo[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error });
  }
}
