import { useState } from "react";
import { cn } from "./lib/utils";
import { Menu09Icon, MultiplicationSignIcon } from "./components/icons";
export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-20 px-4 pt-10">
        <div
          data-open={active}
          className={cn(
            "mx-auto flex w-full flex-col justify-between rounded-full bg-white/5 px-5 py-3 backdrop-blur-lg sm:w-max sm:flex-row sm:items-center sm:gap-40",

            active ? "rounded-3xl" : "transition-[border-radius] delay-100",
          )}
        >
          <div className="flex justify-between">
            <span className="text-2xl font-bold">VoxMedia</span>
            <button className="sm:hidden" onClick={() => setActive(!active)}>
              {active ? <MultiplicationSignIcon /> : <Menu09Icon />}
            </button>
          </div>
          <div
            data-open={active}
            className={cn(
              "transition-[grid-template-rows] max-sm:grid",
              active ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <nav className="flex flex-col gap-2 overflow-hidden text-lg font-medium text-gray-100 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="#"
                className="hover:text-white hover:underline max-sm:pt-4"
              >
                Home
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white hover:underline"
              >
                About
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white hover:underline"
              >
                FAQs
              </a>
              <a
                href="#"
                className="rounded-full bg-white px-6 py-2 text-center text-base text-black"
              >
                Sign in
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
