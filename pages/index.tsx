import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen backgrounds bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
        <meta
          name="description"
          content="A solution to space tourism frontend mentor challenge"
        />
      </Head>
      <NavBar />
      <main className="flex  w-full flex-col lg:flex-row items-center lg:items-end  justify-between text-center pt-28 md:pt-52 lg:pt-96 px-6 md:px-40 pb-12 md:pb-24 lg:pb-32  lg:text-left">
        <div className="flex  flex-col md:w-[450px] mb-20 md:mb-40 lg:mb-0">
          <p className="text-lightBlue font-subHeading2  md:text-[1.25rem] lg:text-[1.75rem] leading-[1.2rem] md:leading-[1.5rem] lg:leading-[2.1rem] tracking-[0.16rem] md:tracking-[0.21rem] lg:tracking-[0.295rem] ">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="  font-heading text-[5rem] md:text-[9.375rem]  leading-[6.25rem] md:leading-[9.375rem] lg:leading-[10.75rem]  my-4 md:my-6">
            SPACE
          </h1>
          <p className="text-lightBlue text-[0.93rem] md:text-base lg:text-[1.125rem] leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[2rem]  ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!{" "}
          </p>
        </div>
        <div className="flex flex-col z-0 items-center  justify-end">
          <div className="relative  flex justify-center  items-center bg-white w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] rounded-full">
            <p
              onClick={() => {
                router.push("/destination");
              }}
              className="text-darkBlue peer font-heading  md:text-[1.25rem] lg:text-[2rem] leading-[1.4375rem] md:leading-[2.3125rem]  tracking-[0.078125rem]  md:tracking-[0.125rem] hover:cursor-pointer"
            >
              EXPLORE
            </p>
            <div className="bg-white opacity-0 peer-hover:opacity-10 absolute z-[-10] w-[calc(100%+88px)] h-[calc(100%+88px)]  top-[calc(50%-calc(50%+44px))] left-[calc(50%-calc(50%+44px))]  md:w-[calc(100%+176px)] md:h-[calc(100%+176px)]  md:top-[calc(50%-calc(50%+88px))] md:left-[calc(50%-calc(50%+88px))] rounded-full " />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
