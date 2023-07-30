import DropdownMenu from "component/dropdown/categori.menu";
import categories from "config/MOCK_DATA.categori.json";
export default function BannerClient() {
  return (
    <div className="container-fluid">
      <div className="banner_bg_main" style={{ marginBottom: "20px" }}>
        <div className="logo_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- logo section end --> */}
        {/* <!-- header section start --> */}
        <div className="header_section">
          <div className="container">
            <div className="containt_main d-flex justify-content-center">
              <div className="dropdown " style={{ paddingRight: "10px" }}>
                <a
                  className="btn btn-success dropdown-toggle"
                  data-toggle="collapse"
                  href="#navbar-vertical"
                  style={{ borderRadius: "0.25rem" }}
                >
                  Nhóm sản phẩm
                </a>
                <DropdownMenu data={categories} />
              </div>
              <div className="main col-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search this blog"
                    style={{ borderRadius: "0.25rem" }}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      style={{
                        backgroundColor: "#f26522",
                        borderColor: "#f26522",
                        borderRadius: "0.25rem",
                      }}
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_section layout_padding">
          <div className="container">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">
                        Get Start <br />
                        Your favriot shoping
                      </h1>
                      <div className="buynow_bt">
                        <a href="#/">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">
                        Get Start <br />
                        Your favriot shoping
                      </h1>
                      <div className="buynow_bt">
                        <a href="#/">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">
                        Get Start <br />
                        Your favriot shoping
                      </h1>
                      <div className="buynow_bt">
                        <a href="#/">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#my_slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                className="carousel-control-next"
                href="#my_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
