import { useRef, useEffect, memo } from "react";
import Close from "./Close";

interface verticalNavBarProps {
  showVerticalNavBar: boolean;
  setShowVerticalNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const VerticalNavBar = ({
  showVerticalNavBar,
  setShowVerticalNavBar,
}: verticalNavBarProps): JSX.Element => {
  const verticalNavRef = useRef(null);

  useEffect(() => {
    const vertBar = verticalNavRef.current as HTMLDivElement | null;
    if (vertBar == null) return;
    if (showVerticalNavBar) {
      vertBar.style.left = "32.27%";
    } else {
      vertBar.style.left = "100%";
    }
  }, [showVerticalNavBar]);

  return (
    <div
      className="fixed top-0 left-[100%] verticalNavBar z-20 w-[67.73%] h-full  overflow-y-auto  "
      ref={verticalNavRef}
    >
      <div
        className="mt-[34px] mr-[26.45px] flex items-center justify-end hover:cursor-pointer"
        onClick={() => setShowVerticalNavBar(false)}
      >
        <Close />
      </div>
      <div className="flex flex-col justify-start items-start mt-16 w-full md:leading-[1.0625rem] lg:leading-[1.1875rem] md:tracking-[0.1475rem] lg:tracking-[0.16875rem] px-12 lg:px-32 ">
        <a href="/">
          <span>00</span>HOME
        </a>
        <a href="/destination">
          <span>01</span>DESTINATION
        </a>
        <a href="/crew">
          <span>02</span>CREW
        </a>
        <a href="/technology">
          <span>03</span>TECHNOLOGY
        </a>
      </div>
    </div>
  );
};

export default memo(
  VerticalNavBar,
  (previousProps, currentProps) =>
    previousProps.showVerticalNavBar === currentProps.showVerticalNavBar
);
