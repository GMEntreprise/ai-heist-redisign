"use client";

import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { useRouter } from "next/navigation";

function BuyCredits() {
  const [selectedOption, setSelectedOption] = useState([]);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const router = useRouter();
  const creditsOption = [
    {
      credits: 5,
      amount: 0.99,
    },
    {
      credits: 10,
      amount: 1.99,
    },
    {
      credits: 25,
      amount: 3.99,
    },
    {
      credits: 50,
      amount: 6.99,
    },
    {
      credits: 100,
      amount: 9.99,
    },
  ];

  const onPaymentSuccess = async () => {
    console.log("Payment Sucess..");

    // Update User Credits in DB

    const result = await db
      .update(Users)
      .set({
        credits: userDetail?.credits + selectedOption?.credits,
      })
      .returning({ id: Users.id });

    if (result) {
      setUserDetail((prev) => ({
        ...prev,
        credits: userDetail?.credits + selectedOption?.credits,
      }));
      router.push("/dashboard");
    }
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Achetez Plus de Crédits</h2>
      <p>
        Déverrouillez des possibilités infinies – Achetez des crédits
        supplémentaires et transformez votre pièce grâce à la magie de l'IA !
        ✨🛋️
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10 ">
        {creditsOption.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-2 justify-center items-center border shadow-md rounded-lg p-5 ${
                selectedOption?.credits == item.credits && "border-primary"
              }`}
            >
              <h2 className="font-bold text-3xl"> {item.credits} </h2>
              <h2 className="font-medium text-xl"> Credits </h2>

              <Button
                className="w-full"
                onClick={() => setSelectedOption(item)}
              >
                Acheter
              </Button>

              <h2 className="font-medium text-primary"> €{item.amount} </h2>
            </div>
          );
        })}
      </div>
      <div className="mt-20">
        {selectedOption?.amount && (
          <PayPalButtons
            style={{ layout: "horizontal" }}
            onApprove={() => onPaymentSuccess()}
            onCancel={() => console.log("Payment Cancel")}
            createOrder={(data, actions) => {
              return actions?.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: selectedOption?.amount?.toFixed(2),
                      currency_code: "USD",
                    },
                  },
                ],
              });
            }}
          />
        )}
      </div>
    </div>
  );
}

export default BuyCredits;
