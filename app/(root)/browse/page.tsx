import ProductFilter from "@/components/store/product/product-filter";
import ProductList from "@/components/store/product/product-list";
import ProductWrap from "@/components/store/product/product-wrap";

export default function BrowsePage() {
  return (
    <main className="w-full h-full ">
      <ProductWrap title="게임 목록">
        <div className="float-right mt-5 pr-10">
          <ProductFilter />
        </div>
        <ProductList />
      </ProductWrap>
    </main>
  );
}
