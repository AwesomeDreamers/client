import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function priceFormat(price: number) {
  const formattedPrice = price.toLocaleString("ko-KR", {
    style: "currency",
    currency: "KRW",
  });
  return formattedPrice;
}

export function calcDiscountedPrice(
  originalPrice: number,
  discountPercentage: number
) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;
  return discountedPrice;
}
