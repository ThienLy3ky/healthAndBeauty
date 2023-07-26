import NameShop from "component/logo/name";

const Header = (props: any) => {
  const { data } = props;
  console.log(data);

  return (
    <div className="container-fluid">
      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-6">
          <NameShop href="/" className="text-decoration-none" />
        </div>

        <div className="col-lg-6 col-6 text-right">
          <p className="m-0">Customer Service</p>
          <h5 className="m-0">+012 345 6789</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
