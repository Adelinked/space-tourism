const Slider: React.FC<{
  slidesNum: number;
  activeSlide: number;
  setActiveSlide: (id: number) => void;
}> = ({ slidesNum, activeSlide, setActiveSlide }) => {
  const slides = Array.from({ length: slidesNum });
  return (
    <div className="font-subHeading2 text-lightBlue flex md:order-4 justify-between items-center w-[88px]  lg:w-[132px] h-[10px] md:h-[15px] mb-8 md:mb-0">
      {slides.map((i, index) => (
        <div
          className={`hover:cursor-pointer hover:bg-lightGray hover:opacity-50 bg-white opacity-17  w-[10px] h-[10px] rounded-full ${
            activeSlide == index ? " opacity-100" : "bg-darkGray"
          } `}
          key={index}
          id={String(index)}
          onClick={(e) => {
            const target = e.target as HTMLDivElement;
            setActiveSlide(Number(target.id));
          }}
        />
      ))}
    </div>
  );
};

export default Slider;
