import { ProductProvider } from "@/context/ProductProvider";
import ProductInfoCatalog from "./ProductInfoCatalog";
import { ProductImage } from "./ProductImage";
import { CardInfoBlock } from "./CardInfoBlock";
import { ProductName } from "./ProductName";
import { ProductPriceRange } from "./ProductPriceRange";
import { ProductSizesList } from "./ProductSizesList";

export default function ProductCard({ children, product }) {
  return (
    <ProductProvider product={product} sizes={product.sizes}>
      {children}
    </ProductProvider>
  );
}

ProductCard.CatalogInfo = ProductInfoCatalog;
ProductCard.Image = ProductImage;
ProductCard.CardInfoBlock = CardInfoBlock;
ProductCard.Name = ProductName;
ProductCard.PriceRange = ProductPriceRange;
ProductCard.SizeList = ProductSizesList;
