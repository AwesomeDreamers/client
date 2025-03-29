import { Carousel, GenreCarousel } from "@/components/store/carousel";
import ProductWrap from "@/components/store/product-wrap";

export default function Home() {
  return (
    <main className="w-full">
      <Carousel />
      <ProductWrap title="인기장르">
        <GenreCarousel />
      </ProductWrap>
    </main>
  );
}
