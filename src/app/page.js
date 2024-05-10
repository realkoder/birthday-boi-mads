"use client";

import DialogBox from "@/components/DialogBox/DialogBox";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [textContent, setTextContent] = useState();
  const [evenFlag, setEvenFlag] = useState();
  const [oddFlag, setOddFlag] = useState();

  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      setTextContent(
        counter % 2 === 0 ? "" : "🇩🇰TILLYKKE MED DIN FØDSELSDAG!🇩🇰"
      );
      setEvenFlag(counter % 2 === 0 ? "🇩🇰" : "🎁");
      setOddFlag(counter % 2 === 0 ? "🎁" : "🇩🇰");
      ++counter;
    }, 1000);
  }, []);

  return (
    <main className="min-w-max h-screen bg-green-100 w-screen flex">
      <div className="flex-1 flex flex-col text-center items-center">
        <p className="text-xl m-12">{evenFlag}</p>
        <p className="text-xl m-12">{oddFlag}</p>
        <p className="text-xl m-12">{evenFlag}</p>
        <p className="text-xl m-12">{oddFlag}</p>
      </div>
      <div className="flex-1 flex flex-col text-center items-center">
        <h1 className="text-2xl m-16">ÅHHH FØDSELSDAGS MADS!!</h1>
        <h1 className="text-xl m-8">
          TILLYKKE MED DIN FØDSELSDAG BIRTHDAY BOI MADS
        </h1>
        <DialogBox />
        <h2 className="text-xl m-8">{textContent}</h2>
        <h2 className="text-xl m-8">{textContent}</h2>
        <h2 className="text-xl m-8">{textContent}</h2>
        <h2 className="text-xl m-8">{textContent}</h2>
        <iframe
          className="rounded-lg"
          frameborder="0"
          height="315"
          src="https://www.youtube.com/embed/Ifj_-a3l8P0?autoplay=1"
          width="420"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex-1 flex flex-col text-center items-center">
        <p className="text-xl m-12">{evenFlag}</p>
        <p className="text-xl m-12">{oddFlag}</p>
        <p className="text-xl m-12">{evenFlag}</p>
        <p className="text-xl m-12">{oddFlag}</p>
      </div>
    </main>
  );
}
