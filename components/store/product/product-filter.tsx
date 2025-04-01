"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function ProductFilter() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  const GENRE = [
    {
      category: "액션",
    },
    {
      category: "RPG",
    },
    {
      category: "어드벤처",
    },
    {
      category: "FPS",
    },
    {
      category: "캐주얼",
    },
    {
      category: "전략",
    },
    {
      category: "호러",
    },
    {
      category: "생존",
    },
    {
      category: "퍼즐",
    },
    { category: "스포츠" },
  ];

  const PRICE = [
    {
      title: "₩11,000 미만",
      value: 11000,
    },
    {
      title: "₩22,000 미만",
      value: 22000,
    },
    {
      title: "₩33,000 미만",
      value: 33000,
    },
    {
      title: "₩33,000 이상",
      value: 33000,
    },
  ];

  const RATING = [
    {
      title: "1점 이상",
      value: 1,
    },
    {
      title: "2점 이상",
      value: 2,
    },
    {
      title: "3점 이상",
      value: 3,
    },
    {
      title: "4점 이상",
      value: 4,
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="cursor-pointer" variant="outline">
          <Icon.filter /> 필터
        </Button>
      </SheetTrigger>
      <SheetContent className="flex z-[1200] flex-col items-start justify-start w-full px-5 ml-3">
        <div className="w-full">
          <p className="text-lg px-2 mt-10">필터</p>
        </div>
        <div className="w-full border-t-2">
          <div
            className={`flex items-center justify-between w-full cursor-pointer hover:text-foreground ${
              isGenreOpen ? "text-foreground" : "text-muted-foreground"
            }`}
            onClick={() => setIsGenreOpen(!isGenreOpen)}
          >
            <p className="px-2 leading-12">장르</p>
            {isGenreOpen ? (
              <Icon.chevronUp className="size-4" />
            ) : (
              <Icon.chevronDown className="size-4" />
            )}
          </div>
          {isGenreOpen && (
            <ul className="px-2">
              {GENRE.map((category) => (
                <li className="leading-8 hover:bg-[#28282c] text-sm rounded-md cursor-pointer text-muted-foreground hover:text-foreground">
                  <p className="px-2 py-1">{category.category}</p>
                </li>
              ))}
            </ul>
          )}
          <div
            className={`flex items-center justify-between w-full cursor-pointer border-t hover:text-foreground ${
              isPriceOpen ? "text-foreground" : "text-muted-foreground"
            }`}
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            <p className="px-2 leading-12">가격</p>
            {isPriceOpen ? (
              <Icon.chevronUp className="size-4" />
            ) : (
              <Icon.chevronDown className="size-4" />
            )}
          </div>
          {isPriceOpen && (
            <ul className="px-2">
              {PRICE.map((price) => (
                <li className="leading-8 hover:bg-[#28282c] text-sm rounded-md cursor-pointer text-muted-foreground hover:text-foreground">
                  <p className="px-2 py-1">{price.title}</p>
                </li>
              ))}
            </ul>
          )}
          <div
            className={`flex items-center justify-between w-full cursor-pointer hover:text-foreground border-t ${
              isRatingOpen ? "text-foreground" : "text-muted-foreground"
            }`}
            onClick={() => setIsRatingOpen(!isRatingOpen)}
          >
            <p className="px-2 leading-12">평점</p>
            {isRatingOpen ? (
              <Icon.chevronUp className="size-4" />
            ) : (
              <Icon.chevronDown className="size-4" />
            )}
          </div>
          {isRatingOpen && (
            <ul className="px-2">
              {RATING.map((rating) => (
                <li className="leading-8 hover:bg-[#28282c] text-sm rounded-md cursor-pointer text-muted-foreground hover:text-foreground">
                  <p className="px-2 py-1">{rating.title}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
