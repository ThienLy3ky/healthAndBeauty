export default function DropdownMenu() {
  return (
    <nav
      className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
      id="navbar-vertical"
      style={{ zIndex: "999" }}
    >
      <div className="navbar-nav w-100">
        <div className="nav-item dropright dropdown dropdown-item-a">
          <a
            href="#/"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
          >
            Dresses <i className="fa fa-angle-right float-right mt-1"></i>
          </a>
          <div className="dropdown-menu position-absolute rounded-0 border-0 m-0 ">
            <a href="#/" className="dropdown-item">
              Men's Dresses
            </a>
            <a href="#/" className="dropdown-item">
              Women's Dresses
            </a>
            <a href="#/" className="dropdown-item">
              Baby's Dresses
            </a>
          </div>
        </div>
        <a href="#/" className="nav-item nav-link dropdown-item-a">
          Shirts
        </a>
        <a href="#/" className="nav-item nav-link dropdown-item-a">
          Jeans
        </a>
        <a href="#/" className="nav-item nav-link dropdown-item-a">
          Swimwear
        </a>
        <a href="#/" className="nav-item nav-link dropdown-item-a">
          Sleepwear
        </a>
        <a href="#/" className="nav-item nav-link dropdown-item-a">
          Sportswear
        </a>
        <a href="#/" className="nav-item nav-link dropdown-item-a">
          Jumpsuits
        </a>
        <a href="#/" className="nav-item nav-link dropdown-item-a">
          Blazers
        </a>
        <a href="#/" className="nav-item nav-link dropdown-item-a">
          Jackets
        </a>
        <a href="#/" className="nav-item nav-link dropdown-item-a">
          Shoes
        </a>
      </div>
    </nav>
  );
}
