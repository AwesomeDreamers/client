"use client";
import { Icon } from "@/components/ui/icon";
import user from "@/public/images/user.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./search";

export default function Header() {
  const pathname = usePathname();
  const NAVMENU = [
    {
      title: "탐색",
      href: "/",
    },
    {
      title: "찾아보기",
      href: "/browse",
    },
  ];
  return (
    <header className="h-14 flex justify-between items-center bg-[#101014] sticky top-0 px-5 py-10">
      <div className="flex items-center">
        <Search />
        {NAVMENU.map((menu) => (
          <Link href={menu.href} key={menu.title}>
            <p
              className={`text-md hover:text-foreground ml-7 cursor-pointer ${
                pathname === menu.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {menu.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <Link href="/wishlist">
          <Icon.heart className="size-7 text-muted-foreground hover:text-foreground mr-7" />
        </Link>
        <Link href="/cart" className="relative ">
          <Icon.cart className="size-7 text-muted-foreground hover:text-foreground mr-7" />
          <span className="absolute top-0 right-6 bg-[red] size-4 rounded-full text-xs text-center">
            0
          </span>
        </Link>
        <div className="relative size-8">
          <Image
            src={user}
            className="rounded-full object-cover"
            fill
            alt={"user"}
          />
        </div>
      </div>
    </header>
  );
}
