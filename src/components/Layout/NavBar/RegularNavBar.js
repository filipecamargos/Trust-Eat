import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./RegularNavBar.module.css";
import logo from "../../../images/logo192.png";

const MainNavBar = () => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span>Cool App Name</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ borderColor: "transparent" }}
        >
          <i className="fa fa-angle-down" style={{ fontSize: 24 }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <LinkContainer to="/">
            <Nav.Link className={classes.hidden}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/addrestaurant">
            <Nav.Link>Add Restaurant</Nav.Link>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
