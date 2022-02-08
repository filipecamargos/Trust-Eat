import { Outlet } from "react-router-dom";
import HomeNavBar from "./NavBar/HomeNavBar";

const Layout = () => {
  return (
    <>
      <HomeNavBar />
      <Outlet />
    </>
  );
};

export default Layout;
