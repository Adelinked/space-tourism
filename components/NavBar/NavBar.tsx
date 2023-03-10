import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import VerticalNavBar from "./VerticalNavBar";
import Hamburger from "./Hamburger";

const NavBar = () => {
  const [showVerticalNavBar, setShowVerticalNavBar] = useState(false);
  const navbarRef = useRef(null);
  const router = useRouter();

  const pathname = router.pathname;
  const links = ["home", "destination", "crew", "technology"];

  return (
    <nav className="relative z-20">
      <div
        className="fixed flex px-10 md:px-0 md:pl-10 lg:pl-14 lg:mt-10 items-center justify-between w-full h-[6rem]"
        ref={navbarRef}
      >
        <div className="relative w-10 h-10 md:w-12 md:h-12 ">
          <Image src="/assets/shared/logo.svg" alt="Space Logo" layout="fill" />
        </div>
        <div className="hidden lg:block absolute h-[1px] w-[20%] left-[120px] xl:left-[11.5%] xl:w-[32.8%] z-[30] bg-white opacity-25"></div>
        <div
          className="md:hidden hover:cursor-pointer w-6 h-6"
          onClick={() => setShowVerticalNavBar(true)}
        >
          {showVerticalNavBar ? null : <Hamburger />}
        </div>
        <div className="hidden md:flex justify-between items-center navBar h-full text-sm lg:text-[1rem] md:leading-[1.0625rem] lg:leading-[1.1875rem] md:tracking-[0.1475rem] lg:tracking-[0.16875rem] px-12 lg:px-[123px]">
          <>
            {links.map((i: string, index) => (
              <a
                key={i}
                href={`${i == "home" ? "/" : `/${i}`}`}
                className={`uppercase ${
                  pathname == `/${i == "home" ? `` : `${i}`}`
                    ? "activeLink"
                    : "navBarLink"
                }`}
              >
                <span className="hidden font-bold font-subHeading2 lg:block mr-[11px]">
                  0{index}
                </span>
                {i}
              </a>
            ))}
          </>
        </div>
      </div>
      <VerticalNavBar
        showVerticalNavBar={showVerticalNavBar}
        setShowVerticalNavBar={setShowVerticalNavBar}
      />
    </nav>
  );
};
export default NavBar;
