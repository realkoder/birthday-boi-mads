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
        counter % 2 === 0 ? "🇩🇰ÅHHHHH FØDSELSDAG🇩🇰" : "🇩🇰TILLYKKE MED DIN FØDSELSDAG!🇩🇰"
      );
      setEvenFlag(counter % 2 === 0 ? "🇩🇰" : "🎁");
      setOddFlag(counter % 2 === 0 ? "🎁" : "🇩🇰");
      ++counter;
    }, 1000);
  }, []);

  return (
    <main className="min-w-max min-h-max bg-green-100 flex h-screen overflow-auto">
      <div className="flex-1 flex flex-col text-center items-center">
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
      <div className="flex-1 flex flex-col text-center items-center">
        <h1 className="text-lg my-4">ÅHHH FØDSELSDAGS MADS!!</h1>
        <h1 className="text-lg my-4">
          TILLYKKE MED DIN FØDSELSDAG BIRTHDAY BOI MADS
        </h1>
        <DialogBox />
        <h2 className="text-lg my-4">{textContent}</h2>
        <h2 className="text-lg my-4">{textContent}</h2>
        <h2 className="text-lg my-4">{textContent}</h2>
        <h2 className="text-lg my-4">{textContent}</h2>
        <iframe
          className="rounded-lg"
          frameborder="0"
          height="200"
          src="https://www.youtube.com/embed/Ifj_-a3l8P0?autoplay=1"
          width="200"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex-1 flex flex-col text-center items-center">
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
    </main>
  );
}
