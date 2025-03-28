"use client";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

export default function Sidebar() {
  const pathname = usePathname();

  const NAVMENU = [
    {
      title: "스토어",
      icon: Icon.store,
      href: "/",
    },
    {
      title: "주문내역",
      icon: Icon.order,
      href: "/order",
    },
  ];

  return (
    <section className="h-full flex flex-col items-center w-[325px] bg-[#121216] px-2">
      <Logo />
      <ul className="w-full">
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
        <Link href={"/login"}>
          <li className={`${sidebarMenu}`}>
            <Icon.user className="size-5 mr-5" />
            로그인
          </li>
        </Link>
        {/* 로그인 했을 경우 */}
        {/* <Link href={"/mypage"}>
          <li className={`${sidebarMenu}`}>
            <Icon.user className="size-5 mr-5" />
            마이페이지
          </li>
        </Link>
        <Link href={"/logout"}>
          <li className={`${sidebarMenu}`}>
            <Icon.logout className="size-5 mr-5" />
            로그아웃
          </li>
        </Link> */}
      </ul>
    </section>
  );
}

const sidebarMenu =
  "flex items-center justify-start text-sm leading-10 p-4 cursor-pointer transition-all duration-300 hover:bg-[#28282c] rounded-lg mb-1";
