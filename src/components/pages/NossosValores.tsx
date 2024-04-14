"use client";
import React, { useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

export default function NossosValores() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin: "left",
        duration: 2000,
        distance: "20%",
        reset: true,
      });
  }, []);
  return (
    <section className="flex bg-primary/10 justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6" ref={sectionRef}>
        <div className="grid max-w-3xl gap-6 mx-auto lg:gap-12">
          <div className="inline-block rounded-lg bg-zinc-800 text-white px-3 py-1 text-sm">
            Nossos Valores
          </div>
          <h2 className="text-2xl text-center font-bold tracking-tighter sm:text-3xl text-white">
            Compromisso com a Excelência, Parceria de Confiança, Conhecimento
            Especializado e Inovação Contínua
          </h2>
          <div className="space-y-4 text-white md:text-xl/relaxed lg:text-base/relaxed">
            <span className="leading-loose gap-3 flex flex-col">
              <p>
                {" "}
                Na MC, nossos valores fundamentais são o alicerce sobre o qual
                construímos cada interação e cada serviço que oferecemos. Esses
                valores são mais do que simples princípios - eles são a essência
                do nosso compromisso com nossos clientes e com o setor agrícola
                como um todo.
              </p>
              <p>
                <strong className="text-primary text-lg ml-6">
                  1. Compromisso com a Excelência:
                </strong>{" "}
                Buscamos a excelência em tudo o que fazemos. Desde a precisão
                dos nossos registros contábeis até a qualidade do nosso
                aconselhamento tributário, esforçamo-nos continuamente para
                superar as expectativas dos nossos clientes e entregar
                resultados excepcionais.
              </p>
              <p>
                {" "}
                <strong className="text-primary text-lg ml-6">
                  2. Integridade Inabalável:
                </strong>{" "}
                A integridade é a pedra angular do nosso negócio. Agimos com
                honestidade, transparência e ética em todas as nossas
                interações, mantendo sempre os mais altos padrões de conduta
                profissional.
              </p>
              <p>
                <strong className="text-primary text-lg ml-6">
                  3. Parceria de Confiança:
                </strong>{" "}
                Construímos relações de longo prazo baseadas na confiança mútua
                com os nossos clientes. Estamos ao lado deles em cada passo do
                caminho, oferecendo suporte, orientação e soluções
                personalizadas para ajudá-los a alcançar seus objetivos
                financeiros e operacionais.{" "}
              </p>
              <p>
                <strong className="text-primary text-lg ml-6">
                  4. Conhecimento Especializado:
                </strong>{" "}
                Reconhecemos a importância do conhecimento especializado no
                setor agrícola. Nossa equipe é composta por profissionais
                altamente qualificados e experientes, que compreendem as
                complexidades únicas enfrentadas pelos agricultores e empresas
                agrícolas e estão comprometidos em fornecer soluções sob medida
                para suas necessidades específicas.
              </p>
              <p>
                {" "}
                <strong className="text-primary text-lg ml-6">
                  5. Inovação Contínua:{" "}
                </strong>
                Estamos sempre buscando maneiras de melhorar e inovar. Através
                da adoção de tecnologias de ponta e da busca incessante por
                melhores práticas, buscamos oferecer aos nossos clientes
                serviços contábeis e de consultoria tributária que estejam na
                vanguarda do setor. Na MC, esses valores não são apenas palavras
                em uma página - são os princípios pelos quais vivemos e
                trabalhamos todos os dias. Estamos comprometidos em incorporar
                esses valores em cada aspecto do nosso negócio, para que
                possamos continuar sendo o parceiro de confiança e a força
                motriz por trás do sucesso financeiro do setor agrícola.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
