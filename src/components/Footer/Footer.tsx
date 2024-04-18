import Image from "next/image";
import React from "react";
import SocialMidia from "../ui/SocialMidia";
import { NavItem } from "../header/Header";

export default function Footer() {
  return (
    <div className="flex flex-col items-center border-t-4 border-primary shadow-2xl shadow-white">
      <div className="flex h-full items-center flex-col md:flex-row w-screen min-h-40 bg-zinc-800 text-primary mt-6 gap-4 justify-around">
        <div>
          <ul className="flex flex-col gap-2">
            <NavItem href="#encontros">Contato</NavItem>
            <NavItem href="/page">Page</NavItem>
            <NavItem href="/page">Page</NavItem>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <NavItem href="#quem_somos">Quem somos</NavItem>
            <NavItem href="#solucoes">Soluções</NavItem>
            <NavItem href="#encontros">Eventos</NavItem>
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
        <span>
          Copyright © 2024 Todos os direitos reservados a www.mulheres.com.br
        </span>
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
