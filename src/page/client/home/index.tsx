import BannerClient from "component/banner/banner.client";
import Categories from "./categori";
import FlashProducts from "./products.flash";
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
      <FlashProducts />
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Sản phẩm mới</span>
        </h2>
        <ListProduct />
      </div>
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Sản phẩm tin dùng</span>
        </h2>
        <ListProduct />
      </div>
      <Sale />
    </div>
  );
}
