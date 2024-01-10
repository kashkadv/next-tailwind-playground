import ProductSize from "./ProductSize";

export default function ProductSizeList({ data }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {data.sizes.map((size, i) => (
        <ProductSize key={`${data.slug}-size-${i}`} size={size} />
      ))}
    </div>
  );
}
