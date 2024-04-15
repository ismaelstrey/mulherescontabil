"use client";
import Image from "next/image";

export function Profissionais() {
  return (
    <section className="flex bg-zinc-800 justify-center w-screen py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:gap-10 md:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Image
              alt="Avatar"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center"
              height="200"
              src="/image/jaque.jpeg"
              width="200"
            />
            <div className="flex flex-col gap-1.5 text-center text-stone-50">
              <h3 className="text-lg font-bold">Geriani Jaqueline Nunes </h3>
              <div className="text-sm text-gray-200">
                <h2 className="text-xl">Formação</h2>
                <p> Contabeis</p> <p>Recursos Humanos</p>
                <span>Especialista em tributação Agricola</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md">
            <Image
              alt="Avatar"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center"
              height="200"
              src="/image/vania.jpg"
              width="200"
            />
            <div className="flex flex-col gap-1.5 text-center">
              <h3 className="text-lg font-bold text-stone-50">
                Vania Cristina Alves
              </h3>
              <div className="text-sm text-gray-200">
                <h2 className="text-xl">Formação</h2>
                <p> Contabeis</p> <p>Recursos Humanos</p>
                <span>Com esperiencia no setor de petrolifero</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
