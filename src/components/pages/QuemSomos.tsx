"use client";
import React, { useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

export default function QuemSomos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin: "top",
        duration: 2000,
        distance: "20%",
        opacity: 0,
        reset: true,
        rotate: {
          x: -180,
        },
      });
  }, []);
  return (
    <section
      className="flex bg-primary justify-center w-full py-12 md:py-24 lg:py-32"
      id="quem_somos"
    >
      <div className="container px-4 md:px-6" id="" ref={sectionRef}>
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Quem somos
            </h1>
          </div>
          <div className="mx-auto w-full space-y-6">
            <div className="text-white md:text-xl/relaxed md:mx-auto lg:text-base/relaxed xl:text-xl/relaxed dark:text-green-800 font-bold">
              <div className="leading-loose">
                Na <span className="text-3xl text-white">MC</span>, somos mais
                do que uma simples empresa de contabilidade. Somos uma equipe
                comprometida que compreende profundamente a realidade econômica
                e as nuances do setor agrícola em nosso país. Reconhecemos as
                dificuldades enfrentadas pelos agricultores e empresas
                agrícolas, especialmente em meio ao crescimento contínuo que o
                setor tem experimentado. É por isso que nos dedicamos a fornecer
                uma atenção especializada em tributação, uma área crucial que
                muitas vezes pode ser complexa e desafiadora para aqueles no
                setor agrícola. Nossa experiência abrangente nos permite não
                apenas lidar com as demandas tradicionais da contabilidade, mas
                também nos posiciona como parceiros estratégicos para ajudar os
                agricultores a navegar pelas complexidades tributárias e
                financeiras. Compreendemos que cada negócio agrícola é único, e
                é por isso que oferecemos soluções personalizadas e orientação
                especializada, adaptadas às necessidades específicas de cada
                cliente. Na <span>MC</span>, estamos comprometidos em capacitar
                nossos clientes com conhecimento e recursos que lhes permitam
                tomar decisões financeiras informadas e estratégicas.
                Acreditamos firmemente que, ao fornecer serviços contábeis de
                alta qualidade e consultoria especializada em tributação,
                podemos contribuir significativamente para o sucesso e o
                crescimento sustentável do setor agrícola em nosso país. Nossa
                equipe dedicada está aqui para ajudar a simplificar suas
                operações financeiras, aliviar o fardo da conformidade
                tributária e permitir que você concentre sua energia no que
                realmente importa: cultivar seus negócios. Junte-se a nós na{" "}
                <span>MC</span> e descubra como podemos fazer a diferença para o
                seu negócio agrícola.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
