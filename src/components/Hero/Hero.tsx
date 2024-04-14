import React from "react";
import { Navgator } from "../header";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-between bg-white/80">
      <Navgator />
      <article className="flex w-full relative">
        <video
          autoPlay
          loop
          muted
          className="z-10 w-full max-w-none justify-between"
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute w-full h-full md:h-[50%] bottom-0 left-0 z-20 bg-gradient-to-t from-primary/50 to-primary/0">
          <div className=" flex mt-20 md:-mt-10 xl:-mt-10 w-full h-full justify-around items-top: , content-end">
            <div className="text-center text-4xl">
              {" "}
              <span className="text-primary font-extrabold">
                Contabilidade
              </span>{" "}
              e Tributação{" "}
              <p>
                {" "}
                do{" "}
                <span className="text-primary font-extrabold">
                  Agronegócio
                </span>{" "}
                para pequenos e{" "}
              </p>{" "}
              <p>grandes produtores</p>
            </div>
            <span className="text-end size-96 opacity-40 ">
              <Image
                src={"/image/brazil.svg"}
                width={400}
                height={400}
                alt="brazil"
              />
            </span>
          </div>
        </div>
      </article>
    </main>
  );
}
