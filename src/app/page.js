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
        ? "🇩🇰ÅHHHHH DU HAVDE FØDSELSDAG🇩🇰"
        : "TILLYKKE MED DIN FØDSELSDAG!"
      );
      setEvenFlag(counter % 2 === 0 ? "🇩🇰" : "🎁");
      setOddFlag(counter % 2 === 0 ? "🎁" : "🇩🇰");
      ++counter;
    }, 1000);
  }, []);

  return (
    <main className="min-w-max min-h-max bg-blue-300 flex h-screen justify-center">
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
        <h1 className="text-lg my-4 text-wrap">ÅHHH DU HAVDE FØDSELSDAGS MADS!!</h1>
        <h1 className="text-lg my-4">
          TILLYKKE MED DIN FØDSELSDAG GANGSTAAA
        </h1>
        <DialogBox setShowCard={setShowCard} />
        <Toaster />
        <h2 className="text-lg my-4">{textContent}</h2>
        <h2 className="text-lg my-4">{textContent}</h2>
        <h2 className="text-lg my-4">{textContent}</h2>
        <h2 className="text-lg my-4">{textContent}</h2>
        {!showCard && (
          <iframe
            width="250"
            height="250"
            src="https://www.youtube.com/embed/Zy_JR9_Y8dE?si=xcXjUdbBT66YfwOo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
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
