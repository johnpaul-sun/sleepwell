/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Sidebar from "~/components/molecules/Sidebar";
import Topbar from "~/components/molecules/Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [toggleCollapse, setToggleCollapse] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<any>(typeof window !== 'undefined' && window.innerWidth);

  useEffect(():any => {
    function handleResize() {
      setScreenWidth(typeof window !== 'undefined' && window.innerWidth);
    }

    typeof window !== 'undefined' && window.addEventListener('resize', handleResize);
    screenWidth <= 500 ? setToggleCollapse(false) : setToggleCollapse(true)
    return () => typeof window !== 'undefined' && window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="h-screen flex justify-start">
      <Topbar handleClick={() => setToggleCollapse(!toggleCollapse)} />
      <Sidebar
        toggleCollapse={toggleCollapse}
        setToggleCollapse={setToggleCollapse}
      />
      <div
        className={`bg-swell-60  flex-1 p-4 items-center justify-center overflow-y-auto flex ${
          toggleCollapse && "hidden sm:flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
