"use client";
import { useEffect, useState } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";

export default function Carousel() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 756);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row w-full h-auto">
      {isMd ? <Desktop /> : <Mobile />}
    </section>
  );
}
