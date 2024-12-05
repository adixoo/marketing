import { Spotlight } from "./components/ui/spotlight";
import Particles from "./components/ui/particles";
export function Hero() {
  return (
    <section>
      <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden antialiased">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl lg:text-7xl xl:text-8xl">
            Grow Your Business <br /> with Trusted Ad Accounts
          </h1>
          <div className="mx-auto mt-10 flex w-full flex-col gap-4 sm:w-max sm:flex-row">
            <button className="rounded-full border-2 border-white/80 px-6 py-2 font-medium shadow transition-[background,box-shadow] hover:bg-white/10 hover:shadow-xl hover:shadow-white/5 max-sm:w-full lg:px-8 lg:py-3">
              Know More
            </button>
            <button className="rounded-full bg-white px-6 py-2 font-medium text-black shadow transition-shadow hover:shadow-xl hover:shadow-white/5 max-sm:w-full lg:px-8 lg:py-3">
              Get Started
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 py-10 opacity-80">
          <h2 className="text-center text-base sm:text-lg md:text-xl">
            Our Partners
          </h2>
          <div className="mx-auto mt-6 flex w-max items-center gap-10">
            <img className="h-4 sm:h-6 md:h-8" src="meta.png" alt="meta" />
            <img
              className="h-6 translate-y-1 sm:h-8 md:h-10"
              src="google.png"
              alt="google"
            />
          </div>
        </div>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
      </div>
    </section>
  );
}
