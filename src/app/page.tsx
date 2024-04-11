import { Navgator } from "@/components/header";

export default function Home() {
  return (
    <div className="bg-image-mulher bg-no-repeat bg-cover">
      <main className="flex min-h-screen flex-col items-center justify-between bg-white/80">
        <Navgator />
        <article className="flex w-full">
          <video
            autoPlay
            loop
            muted
            className="absolute -top-28 z-10 w-full max-w-none"
          >
            <source height={"50px"} src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </article>
        <div className="z-50 bg-red-500">
          {" "}
          <span>teste</span>
          <span>teste</span>
          <span>teste</span>
          <span>teste</span>
          <span>teste</span>
          <span>teste</span>
        </div>
      </main>
    </div>
  );
}
