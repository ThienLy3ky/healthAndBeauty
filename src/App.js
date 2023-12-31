import logo from "./logo.svg";

function App() {
  return (
    <div>
      {/* <!-- Header --> */}
      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <h2>
                Sixteen <em>Clothing</em>
              </h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="products.html">
                    Our Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- Page Content --> */}
      {/* <!-- Banner Starts Here --> */}
      <div className="banner header-text">
        <div className="owl-banner owl-carousel">
          <div className="banner-item-01">
            <div className="text-content">
              <h4>Best Offer</h4>
              <h2>New Arrivals On Sale</h2>
            </div>
          </div>
          <div className="banner-item-02">
            <div className="text-content">
              <h4>Flash Deals</h4>
              <h2>Get your best products</h2>
            </div>
          </div>
          <div className="banner-item-03">
            <div className="text-content">
              <h4>Last Minute</h4>
              <h2>Grab last minute deals</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner Ends Here --> */}

      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest Products</h2>
                <a href="products.html">
                  view all products <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="#">
                  <img src="assets/images/product_01.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="#">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$25.75</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (24)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="#">
                  <img src="assets/images/product_02.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="#">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$30.25</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (21)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="#">
                  <img src="assets/images/product_03.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="#">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$20.45</h6>
                  <p>
                    Sixteen Clothing is free CSS template provided by
                    TemplateMo.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (36)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="#">
                  <img src="assets/images/product_04.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="#">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$15.25</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (48)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="#">
                  <img src="assets/images/product_05.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="#">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$12.50</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (16)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="#">
                  <img src="assets/images/product_06.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="#">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$22.50</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (32)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="best-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>About Sixteen Clothing</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Looking for the best products?</h4>
                <p>
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/tm-546-sixteen-clothing"
                    target="_parent"
                  >
                    This template
                  </a>{" "}
                  is free to use for your business websites. However, you have
                  no permission to redistribute the downloadable ZIP file on any
                  template collection website.{" "}
                  <a rel="nofollow" href="https://templatemo.com/contact">
                    Contact us
                  </a>{" "}
                  for more info.
                </p>
                <ul className="featured-list">
                  <li>
                    <a href="#">Lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a href="#">Consectetur an adipisicing elit</a>
                  </li>
                  <li>
                    <a href="#">It aquecorporis nulla aspernatur</a>
                  </li>
                  <li>
                    <a href="#">Corporis, omnis doloremque</a>
                  </li>
                  <li>
                    <a href="#">Non cum id reprehenderit</a>
                  </li>
                </ul>
                <a href="about.html" className="filled-button">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="assets/images/feature-image.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-md-8">
                    <h4>
                      Creative &amp; Unique <em>Sixteen</em> Products
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Itaque corporis amet elite author nulla.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <a href="#" className="filled-button">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <p>
                  Copyright &copy; 2020 Sixteen Clothing Co., Ltd. - Design:{" "}
                  <a
                    rel="nofollow noopener"
                    href="https://templatemo.com"
                    target="_blank"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- Bootstrap core JavaScript --> */}
      {/* <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> */}

      {/* <!-- Additional Scripts --> */}
      {/* <script src="assets/js/custom.js"></script>
      <script src="assets/js/owl.js"></script>
      <script src="assets/js/slick.js"></script>
      <script src="assets/js/isotope.js"></script>
      <script src="assets/js/accordions.js"></script> */}

      {/* <script language = "text/Javascript"> 
      cleared[0] = cleared[1] = cleared[2] = 0; //set a cleared flag for each field
      function clearField(t){                   //declaring the array outside of the
      if(! cleared[t.id]){                      // function makes it static and global
          cleared[t.id] = 1;  // you could use true and false, but that's more typing
          t.value='';         // with more chance of typos
          t.style.color='#fff';
          }
      }
    </script> */}
    </div>
  );
}

export default App;
