"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import Link from "next/link";
import { db } from "@/config/db";
import { AiGeneratedImage } from "@/config/schema";
import { eq } from "drizzle-orm";
import RoomDesignCard from "./RoomDesignCard";

function Listing() {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);

  useEffect(() => {
    user && getUserRoomList();
  }, [user]);

  const getUserRoomList = async () => {
    const result = await db
      .select()
      .from(AiGeneratedImage)
      .where(
        eq(AiGeneratedImage.userEmail, user?.primaryEmailAddress?.emailAddress)
      );

    setUserRoomList(result);
    console.log(result);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between  md:p-6 lg:p-8">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-0">
          Bonjour, {user?.fullName}. <br />
        </h2>
        <Link href="/dashboard/create-new">
          <Button>+ Commencer le Redesign</Button>
        </Link>
      </div>

      {userRoomList?.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="mt-10">
          <h2 className="font-medium text-primary text-lg mb-10">
            Studio IA pour la conception de pièces
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Listing */}
            {userRoomList.map((room, index) => {
              return <RoomDesignCard key={index} room={room} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Listing;
