"use client";

import DialogBox from "@/components/DialogBox/DialogBox";
import { VoucherCard } from "@/components/VoucherCard/VoucherCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  const [textContent, setTextContent] = useState();
  const [evenFlag, setEvenFlag] = useState();
  const [oddFlag, setOddFlag] = useState();

  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      setTextContent(
        counter % 2 === 0
          ? "🇩🇰ÅHHHHH FØDSELSDAG🇩🇰"
          : "TILLYKKE MED DIN FØDSELSDAG!"
      );
      setEvenFlag(counter % 2 === 0 ? "🇩🇰" : "🎁");
      setOddFlag(counter % 2 === 0 ? "🎁" : "🇩🇰");
      ++counter;
    }, 1000);
  }, []);

  return (
    <main className="min-w-max min-h-max bg-green-100 flex h-screen justify-center">
      <div className="flex flex-col text-center items-center">
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
      </div>

      <div className="flex max-sm:w-80 flex-col text-center items-center">
        <h1 className="text-lg my-4 text-wrap">ÅHHH FØDSELSDAGS MADS!!</h1>
        <h1 className="text-lg my-4">
          TILLYKKE MED DIN FØDSELSDAG BIRTHDAY BOI MADS
        </h1>
        <DialogBox setShowCard={setShowCard} />
        <Toaster />
        <h2 className="text-lg my-4">{textContent}</h2>
        <h2 className="text-lg my-4">{textContent}</h2>
        <h2 className="text-lg my-4">{textContent}</h2>
        <h2 className="text-lg my-4">{textContent}</h2>
        {!showCard && (
          <iframe
            className="rounded-lg"
            height="250"
            src="https://www.youtube.com/embed/XBb92XtexS8?autoplay=1&mute=1"
            width="250"
            allow="autoplay; fullscreen"
          ></iframe>
        )}
        {showCard && <VoucherCard setShowCard={setShowCard} />}
      </div>
      <div className="flex flex-col text-center items-center">
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
        <p className="text-lg my-4">{oddFlag}</p>
        <p className="text-lg my-4">{evenFlag}</p>
      </div>
    </main>
  );
}
