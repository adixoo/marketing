import { navItems } from "@/constants/navItems";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
  return (
    <div className="relative z-50 mx-auto flex max-w-[83rem] flex-row items-center justify-between px-4 py-8 sm:justify-center">
      <div className="hidden justify-center sm:flex">
        <DesktopNav navItems={navItems} />
      </div>

      <div className="flex w-full sm:hidden">
        <MobileNav navItems={navItems} />
      </div>
    </div>
  );
};

export default Navbar;
