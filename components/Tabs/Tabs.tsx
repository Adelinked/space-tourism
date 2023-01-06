const Tabs: React.FC<{
  tabs: string[];
  activeTab: number;
  setActiveTab: (id: number) => void;
}> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="font-subHeading2 text-lightBlue flex justify-between  items-center w-[238px] md:w-[286px] h-[28px] md:h-[34px] text-sm lg:text-[1rem]  md:leading-[1.0625rem] lg:leading-[1.1875rem] md:tracking-[0.1475rem] lg:tracking-[0.16875rem] mb-5 md:mb-8 lg:mb-9 ">
      {tabs.map((i, index) => (
        <div
          className={`hover:cursor-pointer  h-full relative ${
            activeTab == index ? "text-white activeTab" : "tab"
          } `}
          id={String(index)}
          key={i}
          onClick={(e) => {
            const target = e.target as HTMLDivElement;
            setActiveTab(Number(target.id));
          }}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
