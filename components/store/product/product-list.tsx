import ProductCard from "./product-card";

export default function ProductList() {
  return (
    <div className="flex justify-center w-full">
      {/* 제품 카드 컨테이너 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </div>
  );
}
