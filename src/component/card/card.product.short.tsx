import CartContext from "component/context/client.context";
import * as React from "react";
import { addCart } from "utils/cart.client";
interface propsIF {
  name: string;
  image: string;
  rate: number;
  oldPrice: number;
  newPrice: number;
  totalRate: number;
  id: string;
}
export default function CardProductShort(props: propsIF) {
  const { name, image, rate, oldPrice, newPrice, totalRate, id } = props;

  const product = React.useContext(CartContext);
  function RateShow() {
    return;
  }
  return (
    <div className="product-item bg-light mb-4">
      <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src={image} alt="" />
      </div>
      <div className="product-action">
        <div className="btn-groups">
          <button
            className="btn btn-slide btn-square btn-cart"
            onClick={() => {
              product.setCarts(
                addCart({
                  name,
                  image,
                  code: name,
                  price: newPrice,
                  id,
                })
              );
            }}
          ></button>
          <a className="btn btn-slide btn-square btn-heart" href="#/"></a>
        </div>

        {/* <a className="btn  btn-square" href="#/">
          <i className="far fa-heart"></i>
        </a>
        <a className="btn  btn-square" href="#/">
          <i className="fa fa-sync-alt"></i>
        </a>
        <a className="btn  btn-square" href="#/">
          <i className="fa fa-search"></i>
        </a> */}
      </div>
      <div className="text-center py-4">
        <a
          className="h6 text-decoration-none text-truncate"
          href={"/products/" + name}
        >
          {name}
        </a>
        <div className="d-flex justify-content-betwen mt-2">
          <div className="col-6 no-padding">
            {Array(5)
              .fill(1)
              .map((el, index) => {
                if (rate < index + 1 && rate > index)
                  return (
                    <small
                      key={index}
                      className="fa fa-star-half-alt text-primary mr-1"
                    ></small>
                  );
                if (rate < index + 1)
                  return (
                    <small
                      key={index}
                      className="far fa-star text-primary mr-1"
                    ></small>
                  );
                return (
                  <small
                    key={index}
                    className="fa fa-star text-primary mr-1"
                  ></small>
                );
              })}
            <small>({totalRate})</small>
          </div>
          <div
            className="col-6"
            style={{
              display: "inline-flex",
              placeContent: "flex-end",
            }}
          >
            <h6 className="text-muted mr-2 no-padding">
              <del>
                <i>{oldPrice}</i>
              </del>
            </h6>
            <h5 className=" no-padding" style={{ color: "red" }}>
              {newPrice}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
