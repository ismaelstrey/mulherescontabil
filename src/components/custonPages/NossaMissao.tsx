"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

export function NossaMissao() {
  const container = useRef<HTMLDivElement | any>();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      container.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".missao",
            start: "top 500px",
            end: "bottom 100px",
            scrub: true,
          },
        })
        .fromTo(
          "#test",
          {
            opacity: 0,
            y: 20,
            z: 5,
          },
          {
            opacity: 1,
            y: 0,
            z: 0,
            textTransform: "lowercase",
          }
        );
    });

    return () => {
      gsap.killTweensOf("texto");
    };
  });

  return (
    <section className="flex bg-primary/20 justify-center w-screen py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 missao">
        <div className="grid max-w-3xl gap-6 mx-auto lg:gap-12">
          <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-white">
            Nossa Missão
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
            Tornar se referencia no seguimento contábil para agricultura.
          </h2>
          <div className="space-y-4 text-white md:text-xl/relaxed lg:text-base/relaxed">
            <div className="leading-loose texto" id={"test"}>
              Missão Na MC, nossa missão é ser a parceira confiável e essencial
              para o sucesso financeiro de nossos clientes no setor agrícola.
              Compreendemos as complexidades e desafios únicos enfrentados pelos
              agricultores e empresas agrícolas, e estamos comprometidos em
              fornecer serviços contábeis de alta qualidade, soluções
              personalizadas e orientação especializada para ajudá-los a
              prosperar em um ambiente em constante mudança. Nosso objetivo é ir
              além da simples conformidade fiscal e contábil, trabalhando lado a
              lado com nossos clientes para otimizar suas operações, maximizar
              sua rentabilidade e promover o crescimento sustentável de seus
              negócios. Através da nossa experiência e conhecimento profundo do
              setor agrícola, buscamos capacitar nossos clientes com informações
              financeiras claras e insights estratégicos que os ajudem a tomar
              decisões informadas e orientadas para o sucesso a longo prazo.
              Aqui na MC estamos comprometidos com a excelência, integridade e
              serviço excepcional. Valorizamos fortemente a confiança depositada
              em nós por nossos clientes e nos esforçamos para superar suas
              expectativas em todas as interações. Ao fornecer serviços
              contábeis de primeira linha e suporte personalizado, buscamos ser
              o parceiro de escolha para agricultores e empresas agrícolas que
              buscam alcançar seus objetivos financeiros e operacionais. Este
              texto comunica a dedicação da empresa em fornecer serviços
              contábeis de qualidade, compreendendo as necessidades específicas
              do setor agrícola e trabalhando em estreita colaboração com os
              clientes para alcançar o sucesso financeiro.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
