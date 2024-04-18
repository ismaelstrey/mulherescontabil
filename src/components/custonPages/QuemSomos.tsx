"use client";
export function QuemSomos() {
  return (
    <section className="flex bg-primary justify-center w-screen">
      <div className="flex container px-4 md:px-6">
        <div className="space-y-8">
          <div className="mx-auto w-full">
            <div className="flex flex-col md:flex-row md:text-xl/relaxed md:mx-auto lg:text-base/relaxed xl:text-xl/relaxed font-bold">
              <div className="flex justify-end content-end items-end w-full rounded-lg">
                <div className="bg-image-mulher-calc bg-no-repeat bg-cover hidden md:flex w-96 h-96  z-40"></div>
              </div>
              <div
                className="leading-loose text-black shadow-lg shadow-zinc-400 p-4 rounded-lg bg-white z-40 -my-10"
                id="quem_somos"
              >
                <div className="text-center">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                    Quem somos
                  </h1>
                </div>
                Na <span className="text-primary">MC</span>, somos mais do que
                uma simples empresa de contabilidade. Somos uma equipe
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
                financeiras.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
