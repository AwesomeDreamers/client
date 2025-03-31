"use client";
import { Icon } from "@/components/ui/icon";
import noUser from "@/public/images/noProfileImage.jpg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartButton } from "./cart/cart-button";
import Search from "./search";

export default function Header() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const NAVMENU = [
    {
      title: "홈",
      href: "/",
    },
    {
      title: "게임 목록",
      href: "/browse",
    },
  ];
  return (
    <header className="h-14 flex justify-between items-center bg-[#101014] z-[1000] sticky top-0 right-0 px-5 py-10">
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
        <CartButton />
        {status === "authenticated" && (
          <div className="relative size-8">
            <Image
              src={
                session?.member.profile_url
                  ? session?.member.profile_url
                  : noUser
              }
              className="rounded-full object-cover"
              fill
              alt={"user"}
            />
          </div>
        )}
      </div>
    </header>
  );
}
