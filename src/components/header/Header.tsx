import Link from "next/link";
import React, { ReactNode } from "react";
import Logo from "../icons/logo";
interface PropsItem {
  href: string;
  children: ReactNode;
}

function NavItem(props: PropsItem) {
  return (
    <li className="hover:border-b-4 border-primary pb-1">
      <Link {...props} />
    </li>
  );
}

function Navgator() {
  return (
    <>
      {" "}
      <div className="flex fixed top-0 z-50 h-20 bg-zinc-800 w-full text-white justify-around">
        <div className="flex content-start items-center">
          <div className="flex gap-3">
            <Logo />
            <span className="text-2xl mt-2 text-primary">
              Mulheres contábil
            </span>
          </div>
        </div>
        <ul className="flex gap-8 justify-center items-center">
          <NavItem href="#quem_somos">Quem somos</NavItem>
          <NavItem href="#solucoes">Soluçoes</NavItem>
          <NavItem href="#encontros">Encontros</NavItem>
        </ul>
      </div>
    </>
  );
}

export { Navgator };
