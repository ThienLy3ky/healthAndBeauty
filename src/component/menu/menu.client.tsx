import NameShop from "component/logo/name";

const MenuClient = (props: any) => {
  const { data } = props;
  console.log(data);

  return (
    <div className="container-fluid">
      <div className="banner_bg_main">
        <div className="container-fluid bg-dark menu-animation menu-layer">
          <div className="row px-xl-5">
            <div className="col-lg-12" style={{ padding: "0 5%" }}>
              <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                <NameShop
                  href="#/"
                  className="text-decoration-none d-block d-lg-none"
                />

                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav mr-auto py-0">
                    <a href="/" className="nav-item nav-link active">
                      Home
                    </a>
                    <a href="shops" className="nav-item nav-link">
                      Shop
                    </a>
                    <a href="products" className="nav-item nav-link">
                      Shop Detail
                    </a>
                    <div className="nav-item dropdowns">
                      <a href="/checkout" className="nav-link nav-item">
                        Sign In
                      </a>
                    </div>
                  </div>
                  <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                    <a href="#/" className="btn px-0">
                      <i className="fas fa-heart text-primary"></i>
                      <span
                        className="badge text-secondary border border-secondary rounded-circle"
                        style={{ paddingBottom: "2px" }}
                      >
                        0
                      </span>
                    </a>
                    <a href="#/" className="btn px-0 ml-3">
                      <i className="fas fa-shopping-cart text-primary"></i>
                      <span
                        className="badge text-secondary border border-secondary rounded-circle"
                        style={{ paddingBottom: "2px" }}
                      >
                        0
                      </span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuClient;
