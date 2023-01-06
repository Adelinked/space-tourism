import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import data from "../data.js";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const crew = data.crew[activeSlide];
  const slidesNum = data.crew.length;

  return (
    <div className="flex flex-col min-h-[710px] md:min-h-screen backgrounds bg-crewMobile sm:bg-crewTablet lg:bg-crewDesktop">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
        <meta
          name="description"
          content="A solution to space tourism frontend mentor challenge"
        />
      </Head>
      <NavBar />
      <main className="lg:relative overflow-hidden flex w-full flex-col justify-between  text-center pt-20 md:pt-36 lg:pt-52 px-6 md:px-20 xl:px-40 pb-0 md:pb-0 lg:text-left z-10">
        <p className="text-lightBlue mb-8 md:mb-16 lg:mb-[154px] md:text-left font-subHeading2 md:text-[1.25rem] lg:text-[1.75rem] leading-[1.2rem] md:leading-[1.5rem] lg:leading-[2.1rem] tracking-[0.16rem] md:tracking-[0.21rem] lg:tracking-[0.295rem] ">
          <span className="text-lightGray opacity-25 number font-bold	mr-4 lg:mr-6">
            02
          </span>{" "}
          MEET YOUR CREW
        </p>

        <div className=" flex flex-col items-center lg:items-end justify-center  lg:justify-between lg:flex-row ">
          <div className="lg:absolute bottom-0 left-[60%] xl:left-[51%] flex md:order-2 items-center justify-center w-[327px] h-[223px] md:w-[456px] md:h-[572px] lg:w-[420px] lg:h-[620px] xl:w-[568px] xl:h-[712px] mb-8 md:mb-0 border-b md:border-none border-veryDarkGray">
            <div className="relative w-[117px] h-[222px] md:w-full md:h-full ">
              <Image
                src={crew.images.webp}
                layout="fill"
                alt={`${crew.name} image`}
                priority
              />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start justify-center md:w-[458px] lg:w-[574px] md:pb-10 lg:pb-32  ">
            <Slider
              slidesNum={slidesNum}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
            <div className="text-center lg:text-left md:mb-10 lg:mb-[0px] lg:w-[550px] lg:h-[390px]">
              <p className="font-heading mb-2 lg:mb-4 opacity-50 uppercase md:text-[1.5rem] lg:text-[2rem] leading-[1.125rem] md:leading-[1.75rem] lg:leading-[2.29rem]  ">
                {crew.role}
              </p>
              <h3 className="font-heading mb-4 lg:mb-7 uppercase text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.75rem] md:leading-[2.875rem] lg:leading-[4rem]   ">
                {crew.name}
              </h3>
              <p className="text-lightBlue text-[0.93rem] md:text-base lg:text-[1.125rem] leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[2rem]">
                {crew.bio}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
