import { CustomLink } from "@/components/CustomLink";
import Logo from "@/components/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
export const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);
  const item = {
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
      },
    },
    show: {
      height: "100vh",
      opacity: 1,
      transition: { duration: 0.1, staggerChildren: 0.1 },
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const childItems = {
    hidden: { x: "-2vw", opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  return (
    <>
      <div className="flex w-full flex-row items-center justify-between">
        <Logo textClassName="text-black" />
        <BsList className="h-6 w-6" onClick={() => setOpen(!open)} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-10 bg-white text-xl font-bold text-zinc-600 transition duration-200 hover:text-zinc-800"
          >
            <BsX
              className="absolute right-8 top-14 h-9 w-9"
              onClick={() => setOpen(!open)}
            />
            {navItems.map((navItem: any, idx: number) => (
              <CustomLink key={`link=${idx}`} href={navItem.link}>
                <motion.span variants={childItems} className="block">
                  {navItem.name}
                </motion.span>
              </CustomLink>
            ))}
            <motion.button
              variants={childItems}
              className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#464d55] to-[#25292e] px-4 py-2 text-sm text-white shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:opacity-80 hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none"
            >
              Sign up
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
