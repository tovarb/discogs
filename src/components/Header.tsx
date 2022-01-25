import banner from "../banner.png";

const Header = () => {
  return (
    <div className="grid justify-items-center bg-black pb-1 jumbotron">
      <img src={banner} alt="banner" />
    </div>
  );
};

export default Header;
