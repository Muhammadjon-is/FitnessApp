import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "./link";

type Props = {
  selectedPage:string
  setSelectedPage:(value:string) => void;
};
const Navbar = ({selectedPage, setSelectedPage}: Props) => {


  const felxBetween = "flex items-center justify-between";


  return (
    <nav>
      <div className={`${felxBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${felxBetween} mx-auto w-5/6`}>
          <div className={`${felxBetween} w-full gap-16`}>
            <img src={Logo} alt="Logo" />
            {/* Left site */}

            {/* Right site */}
            <div className={`${felxBetween} w-full`}>
              {/* Inner Lefit */}
              <div className={`${felxBetween} gap-8 text-sm`}>
                <Link
                 page="Home" 
                 selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                 />
                <Link 
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page="Our classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page="Contact us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
              </div>
              {/* INner right  */}
              <div className={`${felxBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
