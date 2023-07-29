interface propsIF {
  name: string;
  image: string;
  rate: number;
  oldPrice: string;
  newPrice: string;
  totalRate: number;
  id: string;
}
export default function CardProductShort(props: propsIF) {
  const { name, image, rate, oldPrice, newPrice, totalRate, id } = props;
  function RateShow() {
    return;
  }
  return (
    <div className="product-item bg-light mb-4">
      <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src={image} alt="" />
        <div className="product-action">
          <a className="btn btn-outline-dark btn-square" href="#/">
            <i className="fa fa-shopping-cart"></i>
          </a>
          <a className="btn btn-outline-dark btn-square" href="#/">
            <i className="far fa-heart"></i>
          </a>
          <a className="btn btn-outline-dark btn-square" href="#/">
            <i className="fa fa-sync-alt"></i>
          </a>
          <a className="btn btn-outline-dark btn-square" href="#/">
            <i className="fa fa-search"></i>
          </a>
        </div>
      </div>
      <div className="text-center py-4">
        <a
          className="h6 text-decoration-none text-truncate"
          href={"/products/" + name}
        >
          {name}
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <h5>{newPrice}</h5>
          <h6 className="text-muted ml-2">
            <del>{oldPrice}</del>
          </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
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
      </div>
    </div>
  );
}
