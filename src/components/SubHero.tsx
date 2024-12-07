import { features } from "@/constants/features";
import { useMotionValue } from "framer-motion";

import { CardPattern } from "./CardPattern";

type FeatureType = {
  heading: string;
  description: string | any;
  icon: any;
};

export const SubHero = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
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
  return (
    <div
      id="features"
      className="group relative bg-zinc-900 px-4 py-20 md:py-40"
      onMouseMove={onMouseMove}
    >
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] opacity-20 blur-3xl" />
      <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
          Features
        </h2>
        <p className="mt-6 text-lg tracking-tight text-blue-100">
          Voxmedia gives you all the tools you need to track, analyze, and
          improve—better and faster than ever.
        </p>
      </div>

      <CardPattern {...pattern} mouseX={mouseX} mouseY={mouseY} />

      <div className="mx-auto my-20 grid max-w-5xl grid-cols-1 gap-20 px-4 sm:grid-cols-2 md:my-40 md:grid-cols-3">
        {features.map((feature: FeatureType, idx: number) => (
          <Card
            key={`feature-${idx}`}
            heading={feature.heading}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ heading, description, icon }: FeatureType) => {
  return (
    <div className="flex flex-col items-start">
      <IconContainer icon={icon} />
      <div className="mt-8">
        <h2 className="text-2xl text-white">{heading}</h2>
        <p className="mt-8 text-sm leading-relaxed text-zinc-100">
          {description}
        </p>
      </div>
    </div>
  );
};

const IconContainer = ({ icon }: any) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 transform rounded-md bg-primary/30 blur-lg" />

      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white backdrop-blur-sm bg-grid-extrasmall-zinc-200">
        {/* <AiFillPieChart className="text-primary h-4 w-4 relative z-50" /> */}
        {icon}
        <div className="absolute inset-0 z-40 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
      </div>
    </div>
  );
};
