import { sanity } from "@/data/sanity";
import ProductPage from "@/templates/ProductPage";

export default async function page({ params }) {
  const data = await sanity.getProductBySlug(params.slug);

  return <ProductPage {...data?.at(0)} />;
}
