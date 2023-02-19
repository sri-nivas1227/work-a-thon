import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="h-16 px-4 flex justify-between items-center text-white ">
      <div className="flex justify-between items-center">
        {" "}
        <a href="/" className="logo">
          {/* <img src={logo} style={{ width: "35px" }} alt="logo" /> */}
        </a>
        <a className="logo">officeLaunge</a>
      </div>
      <div className="nav text-base" style={{fontSize:"1.2rem", fontWeight:"bolder"}}>
        <a href="task" className="nav-item">
          Task
        </a>
        <a href="acheivements" className="nav-item">
          Acheivements
        </a>
        <a href="user" className="nav-item">
          Profile
        </a>
      </div>
    </header>
  );
};

export default Header;
