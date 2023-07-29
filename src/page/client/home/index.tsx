import BannerClient from "component/banner/banner.client";
import Categories from "./categori";
import ProductHot from "./products.hot";
import Sale from "./sale";
import Feature from "./feature";
import TestProduct from "./test";
import HomeSlide from "./slide.home";
import ListProduct from "./list.product";
export default function home() {
  return (
    <div>
      <BannerClient />
      <Feature />
      <HomeSlide />
      <Categories />
      {/* <TestProduct /> */}
      <ProductHot />
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Recent Products</span>
        </h2>
        <ListProduct />
      </div>
      <Sale />
    </div>
  );
}
