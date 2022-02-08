import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./HomeNavBar.module.css";
import logo from "../../../images/logo192.png";

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
            <DropdownButton
              id="dropdown-basic-button"
              className={classes["filter-button"]}
              title={
                <i className="fas fa-sliders-h" style={{ fontSize: 20 }}></i>
              }
            >
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </Form>
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
