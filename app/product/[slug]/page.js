import { sanity } from "@/data/sanity";
import ProductPage from "@/templates/ProductPage";

export async function generateMetadata({ params }) {
  const data = await sanity.getProductBySlug(params.slug);

  return {
    title: `${data[0].category.title} Gushka - ${data[0].category.productTitle} ${data[0].articul}`,
    description: `${data[0].category.title} Gushka - ${data[0].category.productTitle} ${data[0].articul}`,
  };
}

export default async function page({ params }) {
  const data = await sanity.getProductBySlug(params.slug);

  return <ProductPage product={data.at(0)} />;
}
