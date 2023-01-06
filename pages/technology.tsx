import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Slider2 from "../components/Slider2";
import data from "../data.js";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const technology = data.technology[activeSlide];

  const slidesNum = data.technology.length;

  const tabs = data.technology.map((i) => i.name.toLocaleUpperCase());
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window?.innerWidth);
    console.log(windowWidth);
  }, []);

  return (
    <div className="flex flex-col min-h-screen backgrounds bg-technologyMobile sm:bg-technologyTablet lg:bg-technologyDesktop">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
        <meta
          name="description"
          content="A solution to space tourism frontend mentor challenge"
        />
      </Head>
      <NavBar />
      <main className="flex w-full flex-col justify-between text-center pt-20 md:pt-36 lg:pt-52 lg:pl-[0] lg:pb-32 lg:text-left ">
        <p className="text-lightBlue mb-8 md:mb-16 lg:mb-6 md:ml-[38.5px] lg:ml-6 xl:ml-[166.5px] md:text-left font-subHeading2  md:text-[1.25rem] lg:text-[1.75rem] leading-[1.2rem] md:leading-[1.5rem] lg:leading-[2.1rem] tracking-[0.16rem] md:tracking-[0.21rem] lg:tracking-[0.295rem] ">
          <span className="opacity-25 number font-bold	mr-4 lg:mr-6">03</span>{" "}
          SPACE LAUNCH 101
        </p>

        <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row lg:pl-6 xl:pl-[165px] ">
          <div className="relative lg:order-2 w-full h-[170px] md:h-[310px] lg:max-w-[515px] lg:h-[527px] mb-6 md:mb-14 lg:mb-0">
            <Image
              src={`${
                windowWidth < 1280
                  ? technology.images.landscape
                  : technology.images.portrait
              }`}
              layout="fill"
              alt={`${technology.name} image`}
              priority
            />
          </div>

          <div className="flex flex-col lg:flex-row w-full items-center  justify-between px-6 md:px-[155px] lg:px-0  pb-20 md:pb-24 lg:pb-0 ">
            <Slider2
              slidesNum={slidesNum}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
            <div className=" text-center lg:text-left lg:w-[475px] lg:mx-2">
              <p className="text-lightBlue text-[0.875rem] md:text-base leading-[1.5625rem] md:leading-[1.2rem] tracking-[0.1475rem] md-tracking-[0.16875] pb-2 md:pb-4 lg:pb-3 ">
                THE TECHNOLOGY ...
              </p>
              <h4 className=" font-heading mb-4 uppercase text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.718rem] md:leading-[1.865rem] lg:leading-[4.01rem]  ">
                {technology.name}
              </h4>
              <p className="text-lightBlue min-h-[125px] text-[0.93rem] md:text-base lg:text-[1.125rem] leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[2rem]  ">
                {technology.description}
              </p>
            </div>
            <div className="w-[1px] h-full"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
