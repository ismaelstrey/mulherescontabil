import { Navgator } from "@/components/header";
import { QuemSomos } from "@/components/QuemSomos";

export default function Home() {
  return (
    <div className="bg-zinc-800 bg-no-repeat bg-cover">
      <main className="flex h-screen flex-col items-center justify-between bg-white/80">
        <Navgator />
        <article className="flex w-full relative top-20">
          <video
            autoPlay
            loop
            muted
            className="absolute -top-28 z-10 w-full max-w-none justify-between"
          >
            <source height={"50px"} src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>{" "}
          <div className="flex z-20 relative w-full h-full">
            <div className="flex flex-col text-xl w-full h-full min-h-96 justify-end items-center content-center bg-gradient-to-b from-zinc-800 to-primary/5 uppercase">
              Contabilidade e Tributação do Agronegócio para pequenos e grandes
              produtores
            </div>
          </div>
        </article>
      </main>

      <div className=" bg-red-50">
        <QuemSomos />
      </div>
    </div>
  );
}
