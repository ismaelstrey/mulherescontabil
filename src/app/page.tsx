import { Navgator } from "@/components/header";
import { QuemSomos } from "@/components/QuemSomos";

export default function Home() {
  return (
    <div className="bg-zinc-800 bg-no-repeat bg-cover">
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
        </article>
      </main>

      <div className="bg-zinc-800">
        <QuemSomos />
      </div>
    </div>
  );
}
