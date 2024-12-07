import clsx from "clsx";

import { twMerge } from "tailwind-merge";

const Logo = ({ textClassName }: { textClassName?: string }) => {
  return (
    <a
      href="/"
      className={clsx(
        "flex items-center justify-center space-x-2 text-sm font-bold text-white",
        textClassName,
      )}
    >
      {/* <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-[6px] bg-primary font-mono">
        <span className="absolute h-full w-full translate-x-3 rotate-45 transform bg-white/[0.2]" />
      </span> */}
      <span className={twMerge("pl-3 font-mono text-xl", textClassName)}>
        VoxMedia
      </span>
    </a>
  );
};

export default Logo;
