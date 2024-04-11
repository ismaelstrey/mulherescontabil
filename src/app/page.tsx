import { Navgator } from "@/components/header";

export default function Home() {
  return (
    <div className="bg-image-mulher bg-no-repeat bg-cover">
      <main className="flex flex-col items-center justify-between bg-white/80">
        <Navgator />
        <article className="flex w-full relative top-0">
          <video
            autoPlay
            loop
            muted
            className="absolute -top-28 z-10 w-full max-w-none justify-between"
          >
            <source height={"50px"} src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex end-0 z-50 bg-primary absolute w-full h-2.5"></div>
        </article>
      </main>
    </div>
  );
}
