import { Carousel, GenreCarousel } from "@/components/store/carousel";
import ProductList from "@/components/store/product/product-list";
import ProductWrap from "@/components/store/product/product-wrap";

export default function Home() {
  return (
    <main className="w-full">
      <Carousel />
      <ProductWrap title="인기장르">
        <GenreCarousel />
      </ProductWrap>
      <ProductWrap title="인기제품">
        <ProductList />
      </ProductWrap>
    </main>
  );
}
