const Slider2: React.FC<{
  slidesNum: number;
  activeSlide: number;
  setActiveSlide: (id: number) => void;
}> = ({ slidesNum, activeSlide, setActiveSlide }) => {
  const slides = Array.from({ length: slidesNum });
  return (
    <div className="font-heading flex  lg:flex-col justify-between items-center w-[152px] md:w-[210px] lg:w-[82px] h-[40px] md:h-[60px] lg:h-[304px] mb-[26px] md:mb-11 lg:mb-0  text-white text-center md:text-[1.5rem] lg:text-[2rem] leading-[1.14625rem] md:leading-[1.71875rem] lg:leading-[2.291875rem] tracking-[0.0625rem] md:tracking-[0.09375rem] lg:tracking-[0.125rem]">
      {slides.map((i, index) => (
        <div
          className={`flex justify-center items-center hover:cursor-pointer  hover:border-opacity-100 border-opacity-25 w-[39px] h-[39px] md:w-[59px] md:h-[59px] lg:w-[79px] lg:h-[79px] border border-white  rounded-full ${
            activeSlide == index ? " bg-white text-darkBlue" : " "
          } `}
          key={index}
          id={String(index)}
          onClick={(e) => {
            const target = e.target as HTMLDivElement;
            setActiveSlide(Number(target.id));
          }}
        >
          {" "}
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Slider2;
