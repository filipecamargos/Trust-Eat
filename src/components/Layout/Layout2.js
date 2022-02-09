import { Outlet } from "react-router-dom";
import RegularNavBar from "./NavBar/RegularNavBar";

const Layout = () => {
  return (
    <>
      <RegularNavBar />
      <Outlet />
    </>
  );
};

export default Layout;
