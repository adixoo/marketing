import Logo from "./Logo";
import { navItems } from "@/constants/navItems";
import { CustomLink } from "./CustomLink";
// import {
//   AiOutlineGithub,
//   AiOutlineLinkedin,
//   AiOutlineTwitter,
// } from "react-icons/ai";

export const Footer = () => {
  // const socials = [
  //   {
  //     name: "twitter",
  //     icon: (
  //       <AiOutlineTwitter className="h-5 w-5 transition duration-150 hover:text-primary" />
  //     ),
  //     link: "https://twitter.com/aceternitylabs",
  //   },
  //   {
  //     name: "LinkedIn",
  //     icon: (
  //       <AiOutlineLinkedin className="h-5 w-5 transition duration-150 hover:text-primary" />
  //     ),
  //     link: "https://linkedin.com/in/manuarora28",
  //   },
  //   {
  //     name: "GitHub",
  //     icon: (
  //       <AiOutlineGithub className="h-5 w-5 transition duration-150 hover:text-primary" />
  //     ),
  //     link: "https://github.com/aceternity",
  //   },
  // ];
  return (
    <div className="mx-auto max-w-6xl border-t border-slate-900/5 px-8 py-10">
      <div className="flex flex-col items-center justify-center py-10">
        <Logo textClassName="text-black text-xl" />

        <div className="mt-4 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          {navItems.map((navItem: any, idx: number) => (
            <CustomLink
              key={`footer-link-${idx}`}
              href={navItem.link}
              className="relative text-sm text-zinc-500"
            >
              <span className="relative z-10 inline-block px-2 py-2">
                {navItem.name}
              </span>
            </CustomLink>
          ))}
        </div>
        <p className="mt-8 border-t border-zinc-100 pt-4 text-center text-sm font-light text-slate-500">
          © {new Date().getFullYear()} Voxmedia. All rights reserved.
        </p>
        {/* <div className="mt-2 flex flex-row justify-center space-x-2">
          {socials.map((socialLink: any, idx: number) => (
            <a
              key={`footer-link-${idx}`}
              href={socialLink.link}
              className="relative text-sm text-zinc-500"
              target="__blank"
            >
              <span className="relative z-10 inline-block px-2 py-2">
                {socialLink.icon}
              </span>
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};
