import { CustomLink } from "@/components/CustomLink";
import Logo from "@/components/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const DesktopNav = ({ navItems }: any) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-row items-center space-x-8 rounded-2xl border bg-vulcan-800 px-2 py-2 antialiased">
      <Logo />
      {navItems.map((navItem: any, idx: number) => (
        <CustomLink
          key={`link=${idx}`}
          href={navItem.link}
          className="relative text-sm text-white"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 scale-105 transform rounded-xl bg-gradient-to-b from-[#464d55] to-[#25292e]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10 inline-block px-2 py-2">
            {navItem.name}
          </span>
        </CustomLink>
      ))}
      <a
        href="/signup"
        className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#464d55] to-[#25292e] px-4 py-2 text-sm font-medium text-white shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] transition duration-150 hover:opacity-80 hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none"
      >
        Sign Up
      </a>
    </div>
  );
};
