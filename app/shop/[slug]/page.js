import PageLoader from "@/components/PageLoader";
import CategoryPage from "@/templates/CategoryPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<PageLoader />}>
      <CategoryPage />
    </Suspense>
  );
}
