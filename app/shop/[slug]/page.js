import PageLoader from "@/components/PageLoader";
import { sanity } from "@/data/sanity";
import CategoryPage from "@/templates/CategoryPage";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const data = await sanity.getCategoryBySlug(params.slug);
  const seo = data[0].seo;

  return {
    title: seo?.meta_title,
    description: seo?.meta_description,
  };
}

export default function Page({ params }) {
  return (
    <Suspense fallback={<PageLoader />}>
      <CategoryPage slug={params.slug} />
    </Suspense>
  );
}
