"use client";
import { useEffect, useState } from "react";
import Desktop from "./carousel/desktop";
import Mobile from "./carousel/mobile";

export default function Carousel() {
  const [isXl, setIsXl] = useState(false);

  // 화면 크기 감지
  useEffect(() => {
    const handleResize = () => {
      setIsXl(window.innerWidth >= 756);
    };

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row w-full h-auto">
      {isXl ? <Desktop /> : <Mobile />}
    </section>
  );
}
