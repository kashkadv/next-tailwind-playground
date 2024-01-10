export const ProductCardLoading = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-between gap-4 rounded-lg bg-white p-6">
        <div className="relative aspect-[3/4] w-full animate-pulse bg-gray-200"></div>
        <div className="grid animate-pulse grid-cols-4">
          <div className="h-6 w-full bg-gray-200"></div>
          <div className="col-end-5 h-6 w-full bg-gray-200"></div>
        </div>
        <div className="h-6 w-1/2 animate-pulse bg-gray-200"></div>
      </div>
    </div>
  );
};
