import ProductBanner from "@/components/modules/products/banner";
import NMContainer from "@/components/ui/core/NMContainer";

const AllProductsPage = () => {
  return (
    <NMContainer>
      <ProductBanner title="All Products" path="Home - Products" />
    </NMContainer>
  );
};

export default AllProductsPage;
