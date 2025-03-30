"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Desktop from "./desktop";
import Mobile from "./mobile";

export function Carousel() {
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

export function GenreCarousel() {
  const SWIPERIMG = [
    {
      src: "/swiper/1-2.avif",
      alt: "Image 1",
      title: "액션",
      video: "https://www.youtube.com/embed/0L4vsmIOGSs?si=f3-6CY-fM0EcGgJ2",
      description:
        "액션 장르는 빠른 속도와 긴장감을 특징으로 하며, 플레이어는 적들과의 전투에서 생존해야 합니다.",
      price: 12500,
    },
    {
      src: "/swiper/2-2.avif",
      alt: "Image 2",
      title: "RPG",
      video: "https://www.youtube.com/embed/XNM-m9Bry-E?si=_k0HhSW3RJ5YqCqy",
      description:
        "RPG 장르는 플레이어가 캐릭터를 조작하여 퀘스트를 수행하고 경험치를 얻는 게임입니다.",
      price: 64800,
    },
    {
      src: "/swiper/3-2.avif",
      alt: "Image 3",
      title: "어드벤처",
      video: "https://www.youtube.com/embed/FTNUGKeZ3CA?si=v16-dv2N7-uUL3Xe",
      description:
        "어드벤처 장르는 탐험과 퍼즐 해결을 중심으로 한 게임으로, 플레이어는 다양한 환경을 탐험합니다.",
      price: 77520,
    },
    {
      src: "/swiper/4-2.avif",
      alt: "Image 4",
      title: "FPS",
      video: "https://www.youtube.com/embed/LDBvqCDzeUc?si=GF-8np6PZyJlZoVC",
      description:
        "FPS 장르는 1인칭 슈팅 게임으로, 플레이어는 총기를 사용하여 적들과 전투를 벌입니다.",
      price: 52800,
    },
    {
      src: "/swiper/5-2.avif",
      alt: "Image 5",
      title: "캐주얼",
      video: "https://www.youtube.com/embed/v7WmOVcbiJc?si=tp2We-4g-Ep3beeS",
      description:
        "캐주얼 장르는 간단한 조작과 짧은 플레이 타임을 특징으로 하며, 누구나 쉽게 즐길 수 있습니다.",
      price: 58800,
    },
    {
      src: "/swiper/6-2.avif",
      alt: "Image 6",
      title: "전략",
      video: "https://www.youtube.com/embed/Sy2-bD_YUiE?si=hIVMN5ngev4FtW68",
      description:
        "전략 장르는 자원 관리와 전투 전략을 중심으로 한 게임으로, 플레이어는 자신의 군대를 이끌고 적과 싸웁니다.",
      price: 84800,
    },
    {
      src: "/swiper/7-2.avif",
      alt: "Image 7",
      title: "호러",
      video: "https://www.youtube.com/embed/0qjts7C7vqM?si=MqINiz0U47tNLHKf",
      description:
        "호러 장르는 공포와 긴장감을 중심으로 한 게임으로, 플레이어는 생존을 위해 적들과 싸워야 합니다.",
      price: 12500,
    },
    {
      src: "/swiper/8-2.avif",
      alt: "Image 8",
      title: "생존",
      video: "https://www.youtube.com/embed/lnPaqSUQlcU?si=zrV-xw3H_pu2rxjJ",
      description:
        "생존 장르는 자원 관리와 생존을 중심으로 한 게임으로, 플레이어는 제한된 자원으로 생존해야 합니다.",
      price: 64800,
    },
    {
      src: "/swiper/9-2.avif",
      alt: "Image 9",
      title: "퍼즐",
      video: "https://www.youtube.com/embed/rsSdwAyLOIU?si=u-Y_gPVnhpv9E_EI",
      description:
        "퍼즐 장르는 문제 해결과 논리적 사고를 중심으로 한 게임으로, 플레이어는 다양한 퍼즐을 풀어야 합니다.",
      price: 77520,
    },
    {
      src: "/swiper/10-2.avif",
      alt: "Image 10",
      title: "스포츠",
      video: "https://www.youtube.com/embed/mHnhOVbY1V8?si=cGYfILFa53uP46xs",
      description:
        "스포츠 장르는 실제 스포츠를 기반으로 한 게임으로, 플레이어는 다양한 스포츠 경기를 즐길 수 있습니다.",
      price: 52800,
    },
  ];
  const [swiperData, setSwiperData] = useState(
    SWIPERIMG.map((game) => ({ ...game, active: false }))
  );

  const toggleVideo = (index: number) => {
    setSwiperData((prev) =>
      prev.map((game, i) =>
        i === index ? { ...game, active: !game.active } : game
      )
    );
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={3}
      // coverflowEffect={{
      //   rotate: 35,
      //   stretch: 200,
      //   depth: 250,
      //   modifier: 1,
      //   slideShadows: true,
      // }}
      coverflowEffect={{
        rotate: 35,
        stretch: 100,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="w-full mt-10"
    >
      {swiperData.map((game, i) => (
        <SwiperSlide key={game.title} className="w-[550px] h-[350px]">
          <div className="relative w-[550px] h-[350px] bg-center bg-cover p-8 overflow-hidden z-0 genre-slider">
            <div>
              <iframe
                className={`absolute bg-[#101014] right-0 top-0 w-[85%] h-[75%] rounded-tr-[30px] rounded-bl-[30px] border-[5px] border-transparent shadow z-[100] ${
                  game.active
                    ? "translate-y-0 opacity-100 scale-100"
                    : "-translate-y-full opacity-0 scale-0"
                }`}
                style={{
                  transformOrigin: "top right",
                  transition:
                    "transform 0.1s ease-in-out, opacity 0.5s ease-in-out",
                }}
                width={1280}
                height={720}
                src={game.active ? `${game.video}&autoplay=1` : undefined}
                title={game.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              ></iframe>
              {/* <iframe
                className={`absolute bg-[#101014] right-0 top-0 w-[85%] h-[75%] rounded-tr-[30px] rounded-bl-[30px] border-[5px] border-transparent shadow z-[1100] iframe ${
                  game.active ? "iframe-true" : "iframe-false"
                }`}
                width={1280}
                height={720}
                src={game.active ? `${game.video}&autoplay=1` : undefined}
                title={game.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              ></iframe> */}
            </div>
            <Image
              src={game.src}
              alt={game.alt}
              fill
              className="absoulute left-0 top-0 size-full object-center object-cover rounded-[30px]"
              priority
            />
            <div className="absolute bottom-5 z-[10] w-[60%]">
              <h2
                className="text-5xl"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }}
              >
                {game.title}
              </h2>
              <p
                className="text-[#ebebeb] text-sm"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }}
              >
                {game.description}
              </p>
              <div className="mt-5 flex items-center">
                <Button className="mr-5 cursor-pointer">보러가기</Button>
                <div
                  className=" size-[50px] bg-[#ffffff33] backdrop-blur-[20px] flex justify-center items-center rounded-full text-[2.5rem] cursor-pointer"
                  onClick={() => toggleVideo(i)}
                >
                  {game.active ? <Icon.pause /> : <Icon.play />}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
