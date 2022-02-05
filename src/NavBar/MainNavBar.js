import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import classes from "./MainNavBar.module.css";
import logo from "../images/logo192.png";

const MainNavBar = () => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <span className={classes.hidden}>Cool App Name</span>
        </Navbar.Brand>

        <Form className="d-flex">
          <Form.Select size="sm" style={{ width: 80, height: 38 }}>
            <option>All</option>
            <option>Rexburg</option>
            <option>Idaho Falls</option>
          </Form.Select>
          <div className={classes["button-inside"]}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button className={classes["filter-button"]}>
              <i className="fas fa-sliders-h" style={{ fontSize: 24 }}></i>
            </button>
          </div>
        </Form>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ borderColor: "transparent" }}
        >
          <i className="fa fa-angle-down" style={{ fontSize: 24 }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link href="#action2" className={classes.hidden}>
            Home
          </Nav.Link>

          <Nav.Link href="#action2">Add Restaurant</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
