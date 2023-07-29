import CardProductShort from "component/card/card.product.short";
import products from "config/MOCK_DATA.product.json";
export default function ListProduct() {
  return (
    <div className="row px-xl-5">
      {products.slice(0, 8).map((product) => (
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <CardProductShort
            name={product.name}
            image={product.image}
            rate={3.3}
            oldPrice={product.priceOlder}
            newPrice={product.priceNew}
            totalRate={40}
            id={product.id.toString()}
            key={product.id}
          />
        </div>
      ))}
    </div>
  );
}
