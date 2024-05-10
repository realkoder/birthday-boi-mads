"use client";

import DialogBox from "@/components/DialogBox/DialogBox";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [textContent, setTextContent] = useState();

  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      setTextContent(
        counter % 2 === 0 ? "" : "🇩🇰TILLYKKE MED DIN FØDSELSDAG!🇩🇰"
      );
      ++counter;
    }, 1000);
  }, []);

  return (
    <main className="min-w-max h-screen bg-green-100 w-screen overflow-hidden flex">
      <div className="flex-1 flex flex-col text-center items-center">
        <Image
          src="./public/flag.jpeg"
          width={250}
          height={250}
          alt="Flag image"
          className="rounded-full m-16"
        />
        <Image
          src="/flag.jpeg"
          width={250}
          height={250}
          alt="Flag image"
          className="rounded-full m-16"
        />
        <Image
          src="/flag.jpeg"
          width={250}
          height={250}
          alt="Flag image"
          className="rounded-full m-16"
        />
      </div>
      <div className="flex-1 flex flex-col text-center items-center">      
        <h1 className="text-3xl m-8">ÅHHH FØDSELSDAG!!</h1>
        <h1 className="text-xl m-8">
          TILLYKKE MED DIN FØDSELSDAG BIRTHDAY BOI MADS
        </h1>
        <DialogBox />
        <h2 className="text-xl m-8">{textContent}</h2>
        <h2 className="text-xl m-8">{textContent}</h2>
        <h2 className="text-xl m-8">{textContent}</h2>
        <h2 className="text-xl m-8">{textContent}</h2>
      </div>
      <div className="flex-1 flex flex-col text-center items-center">
      <Image
          src="/flag.jpeg"
          width={250}
          height={250}
          alt="Flag image"
          className="rounded-full m-16"
        />
        <Image
          src="/flag.jpeg"
          width={250}
          height={250}
          alt="Flag image"
          className="rounded-full m-16"
        />
        <Image
          src="/flag.jpeg"
          width={250}
          height={250}
          alt="Flag image"
          className="rounded-full m-16"
        />
      </div>      
    </main>
  );
}
