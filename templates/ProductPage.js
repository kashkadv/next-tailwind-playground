export default function ProductPage(props) {
  const { title, category, articul, base_price, sizes, _id } = props;

  return (
    <div className="section section--top">
      <div className="pb-8">Breadcrumbs</div>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <div>{title ?? category.productTitle}</div>
            <div>{articul}</div>
          </div>
          <div>
            <div>Materials</div>
            <div>Care</div>
            <div>Payment</div>
            <div>Shipping</div>
          </div>
        </div>
        <div className="aspect-square bg-slate-200">Gallery block</div>
        <div className="flex h-full flex-col items-center justify-center">
          <div>Sizes</div>
          <div>Add to cart</div>
        </div>
      </div>
    </div>
  );
}