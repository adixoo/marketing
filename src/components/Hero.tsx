import { useEffect, useState } from "react";
// import { BlurImage } from "./BlurImage";
import Button from "./Button";
import { GridPattern } from "./GridPattern";
import { motion, useScroll } from "framer-motion";

export const Hero = () => {
  const pattern = {
    y: -6,
    squares: [
      [-1, 2],
      [1, 3],
      // Random values between -10 and 10
      ...Array.from({ length: 10 }, () => [
        Math.floor(Math.random() * 20) - 10,
        Math.floor(Math.random() * 20) - 10,
      ]),
    ],
  };

  const [isHalf, setIsHalf] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > (window.innerHeight * 2) / 10) {
        setIsHalf(true);
      } else {
        setIsHalf(false);
      }
    };
    scrollY.onChange(handleScroll);
    return () => {
      scrollY.clearListeners();
    };
  }, []);

  return (
    <div className="px-4">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={120}
          height={120}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-5deg] fill-tertiary/[0.05] stroke-gray-100 dark:fill-primary/20 dark:stroke-gray-100"
          {...pattern}
        />
      </div>
      <div className="relative z-10 mx-auto mt-32 max-w-7xl">
        <h1 className="mx-auto max-w-5xl text-center text-4xl font-semibold leading-tight tracking-tight text-zinc-800 sm:text-7xl">
          Get Better <span className="text-primary">Ad Accounts</span> <br />
          Achieve Better <span className="text-primary">Ad Results</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal tracking-tight text-slate-600 sm:text-2xl">
          Stop searching - your ideal advertising partner is right here!
        </p>

        <div className="mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          {/* <Button
            as="button"
            variant="outline"
            className="rounded-2xl border border-zinc-200 py-2"
          >
            <a href="/signup">Documentation</a>
          </Button> */}
          <Button as="button" variant="large" className="rounded-2xl py-2">
            <a href="/signup">Get Access Now</a>
          </Button>
        </div>

        <div
          style={{ perspective: "1000px" }}
          className="relative w-full overflow-hidden px-4 pt-20"
        >
          <motion.div
            animate={{
              rotateX: isHalf ? 0 : 45,
              scale: isHalf ? [0.8, 1.05, 1] : 0.8,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.5,
              },
            }}
            className="relative mx-auto -mb-12 h-[12rem] w-[100%] max-w-5xl overflow-x-hidden sm:h-[16rem] md:-mb-32 md:h-[24rem] md:w-3/4 lg:h-[32rem]"
          >
            {/* <BlurImage
              src={"/images/landing.png"}
              layout="fill"
              className="mx-auto rounded-xl border object-cover object-right-top shadow-sm md:rounded-3xl"
            /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
