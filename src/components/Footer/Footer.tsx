import Image from "next/image";
import React from "react";
import SocialMidia from "../ui/SocialMidia";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row w-screen min-h-40 bg-zinc-800 text-white/15 gap-4 justify-around">
        <div>
          <ul>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col h-full justify-between content-between">
            <li>b</li>
            <li>b</li>
            <li className="text-center">b</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4 justify-center h-full items-center">
            <li>
              <SocialMidia alt="Facebook" link="" src="/image/facebook.svg" />
            </li>
            <li>
              <SocialMidia
                alt="Instagran"
                link="https://www.instagram.com/mulheres_contabil/"
                src="/image/instagram.svg"
              />
            </li>
            <li>
              <SocialMidia alt="Facebook" link="" src="/image/youtube.svg" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-screen text-center justify-center text-zinc-400">
        <span>Todos os direitos reservados a mulheres.com.br</span>
      </div>
      <a
        href="https://wa.me/555199160766?text=Olá%20gostaria%20de%20saber%20mais!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={"/image/whatsapp.svg"}
          height={50}
          width={50}
          alt="Logo wats"
          className="fixed bottom-8 right-8 animate-bounce hover:animate-none cursor-pointer scale-125 z-50"
        />
      </a>
    </div>
  );
}
