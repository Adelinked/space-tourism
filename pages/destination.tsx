import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Tabs from "../components/Tabs";
import data from "../data.js";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const destination = data.destinations[activeTab];

  const tabs = data.destinations.map((i) => i.name.toLocaleUpperCase());

  return (
    <div className="flex flex-col min-h-screen backgrounds bg-destinationMobile sm:bg-destinationTablet lg:bg-destinationDesktop">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
        <meta
          name="description"
          content="A solution to space tourism frontend mentor challenge"
        />
      </Head>
      <NavBar />
      <main className="flex w-full flex-col justify-between text-center pt-20 md:pt-36 lg:pt-52 px-6 md:px-10 xl:px-40 pb-14 md:pb-16 lg:pb-32 lg:text-left">
        <p className="text-lightBlue mb-8 md:mb-16 md:text-left font-subHeading2  md:text-[1.25rem] lg:text-[1.75rem] leading-[1.2rem] md:leading-[1.5rem] lg:leading-[2.1rem] tracking-[0.16rem] md:tracking-[0.21rem] lg:tracking-[0.295rem] ">
          <span className="opacity-25 number font-bold	mr-4 lg:mr-6">01</span>{" "}
          PICK YOU DESTINATION
        </p>

        <div className="flex flex-col items-center lg:items-end justify-center  lg:justify-between lg:flex-row ">
          <div className="relative  w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px] mb-6 md:mb-14 lg:mb-0">
            <Image
              src={destination.images.webp}
              layout="fill"
              alt={`${destination.name} image`}
              priority
            />
          </div>

          <div className="flex flex-col items-center lg:items-start justify-center  md:w-[573px] lg:w-[445px] ">
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className="pb-8 md:pb-12 lg:pb-14 text-center lg:text-left">
              <h2 className="uppercase font-heading md:mb-2 lg:mb-4 text-[3.5rem] md:text-[5rem] lg:text-[6.25rem] leading-[4rem] md:leading-[5.75rem] lg:leading-[7.1875rem]  ">
                {destination.name}
              </h2>
              <p className="text-lightBlue min-h-[125px] text-[0.93rem] md:text-base lg:text-[1.125rem] leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[2rem]  ">
                {destination.description}
              </p>
            </div>
            <div className="md:pt-7 flex w-full flex-col md:flex-row items-center justify-between border-t border-veryDarkGray ">
              <div className="mt-8 md:mt-0">
                <p className="text-lightBlue font-subHeading2 text-[0.875rem] leading-[1.05rem] tracking-[0.1475rem] mb-3 ">
                  AVG. DISTANCE
                </p>
                <p className="uppercase font-heading text-[1.75rem] leading-[2rem]">
                  {destination.distance}
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <p className="text-lightBlue font-subHeading2 text-[0.875rem] leading-[1.05rem] tracking-[0.1475rem] mb-3 ">
                  EST. TRAVEL TIME
                </p>
                <p className="uppercase font-heading text-[1.75rem] leading-[2rem]">
                  {destination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
