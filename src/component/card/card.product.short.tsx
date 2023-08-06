import CartContext from "component/context/client.context";
import * as React from "react";
import { addCart } from "utils/cart.client";
import { formatMoney } from "utils/action.helper";

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
      <div className="product-img position-relative overflow-hidden d-flex justify-content-center">
        <img
          className="img-fluid"
          style={{ width: "unset" }}
          src={image}
          alt=""
        />
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
      </div>
      <div className="col py-4">
        <a
          title={name}
          className="h6 text-decoration-none text-truncate"
          href={"/products/" + name}
        >
          {name.slice(0, 30)}
        </a>
        <div className="d-flex justify-content-betwen mt-2">
          <div className="col-6 no-padding">
            {rate}
            <small>({totalRate})</small>
          </div>
          <div
            className="col-6 no-padding"
            style={{
              display: "inline-flex",
              placeContent: "flex-end",
            }}
          >
            <h5 className=" no-padding" style={{ color: "red" }}>
              {formatMoney(newPrice)}
            </h5>
          </div>
        </div>
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
          </div>
          <div
            className="col-6 no-padding"
            style={{
              display: "inline-flex",
              placeContent: "flex-end",
            }}
          >
            <h6 className="text-muted mr-2 no-padding no-margin">
              <del>
                <i>{formatMoney(oldPrice)}</i>
              </del>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
