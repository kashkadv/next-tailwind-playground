import ProductCard from "@/components/Product/ProductCard";

export default function ProductPage({ product }) {
  return (
    <ProductCard product={product}>
      <ProductCard.Single>
        <ProductCard.SingleInfo />
        <ProductCard.SingleGallery />
        <ProductCard.SingleActions />
      </ProductCard.Single>
    </ProductCard>
  );
}
