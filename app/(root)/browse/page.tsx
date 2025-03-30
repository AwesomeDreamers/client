import ProductList from "@/components/store/product/product-list";
import ProductWrap from "@/components/store/product/product-wrap";

export default function BrowsePage() {
  return (
    <main className="w-full">
      <ProductWrap title="게임 목록">
        <ProductList />
      </ProductWrap>
    </main>
  );
}
