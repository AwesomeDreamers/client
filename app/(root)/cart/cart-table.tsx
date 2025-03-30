"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import QtyButton from "@/components/ui/qty-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { priceFormat } from "@/lib/utils";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CartTable = () => {
  const product = {
    id: 6,
    src: "/swiper/6-1.avif",
    alt: "Image 6",
    genre: "액션",
    title: "몬스터 헌터 와일즈",
    price: 84800,
    discount: 25,
  };

  return (
    <div className="relative">
      <h1 className="py-4 text-lg font-bold">장바구니</h1>
      <div className="grid md:grid-cols-4 md:gap-5 h-[calc(100vh-140px)] overflow-y-auto">
        <div className="overflow-x-auto md:col-span-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>제품</TableHead>
                <TableHead className="text-center">수량</TableHead>
                <TableHead className="text-right">가격</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Link href={`/product/1`} className="flex items-center">
                    <Image
                      src={product.src}
                      alt={product.title}
                      width={50}
                      height={50}
                    />
                    <span className="px-2">{product.title}</span>
                  </Link>
                </TableCell>
                <TableCell className="gap-2">
                  <div className="flex items-center justify-center">
                    <QtyButton />
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {priceFormat(product.price)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <Card className="h-35 bg-[#121216]">
          <CardContent className="p-4 gap-4">
            <div className="flex justify-between items-center pb-3 text-xl">
              <div className="">Total (1)</div>
              <div className="text-right font-bold">
                {priceFormat(product.price)}
              </div>
            </div>
            <Button className="w-full">
              <CreditCard className="w-4 h-4" />
              결제
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CartTable;
