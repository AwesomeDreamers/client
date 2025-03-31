"use client";
import { Icon } from "@/components/ui/icon";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import SidebarSkeleton from "./skeleton";

export default function Sidebar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const NAVMENU = [
    {
      title: "구매내역",
      icon: Icon.order,
      href: "/order",
    },
    {
      title: "마이페이지",
      icon: Icon.user,
      href: "/mypage",
    },
  ];

  return (
    <section className="h-full flex flex-col items-center max-w-[325px] bg-[#121216] px-2">
      <Logo />
      {status === "loading" ? (
        <SidebarSkeleton />
      ) : (
        <ul className="w-full">
          <Link href={"/"}>
            <li
              className={`${sidebarMenu} ${
                pathname === "/" ? "bg-[#28282c]" : ""
              }`}
            >
              <Icon.store className="size-5 mr-5" />
              스토어
            </li>
          </Link>
          {status === "authenticated" ? (
            <>
              {NAVMENU.map((menu) => (
                <Link href={menu.href} key={menu.title}>
                  <li
                    className={`${sidebarMenu} ${
                      pathname === menu.href ? "bg-[#28282c]" : ""
                    }`}
                  >
                    <menu.icon className="size-5 mr-5" />
                    {menu.title}
                  </li>
                </Link>
              ))}
              <Link href={"/logout"}>
                <li className={`${sidebarMenu}`}>
                  <Icon.logout className="size-5 mr-5" />
                  로그아웃
                </li>
              </Link>
            </>
          ) : (
            <Link href={"/login"}>
              <li className={`${sidebarMenu}`}>
                <Icon.user className="size-5 mr-5" />
                로그인
              </li>
            </Link>
          )}
        </ul>
      )}
    </section>
  );
}

const sidebarMenu =
  "flex items-center justify-start text-sm leading-10 p-4 cursor-pointer transition-all duration-300 hover:bg-[#28282c] rounded-lg mb-1";
