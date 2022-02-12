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
import { useNavigate, useLocation } from "react-router-dom";
import allData from "../../../json data/all.json";
import { useState } from "react";
import { filterData, sortData } from "./utils";

const MainNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchText, setSearchText] = useState(location?.state?.search || "");
  const [city, setCity] = useState("all");
  const [restaurants, setRestaurants] = useState(allData);

  const rexburgData = filterData(allData, "rexburg", "address");
  const idahoFallsData = filterData(allData, "falls", "address");

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
    navigate("/", {
      state: { restaurants: restaurants, search: e.target.value },
    });
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    switch (e.target.value) {
      case "rex":
        setRestaurants(rexburgData);
        navigate("/", {
          state: { restaurants: rexburgData, search: searchText },
        });
        break;
      case "if":
        setRestaurants(idahoFallsData);
        navigate("/", {
          state: { restaurants: idahoFallsData, search: searchText },
        });
        break;
      default:
        setRestaurants(sortData(allData));
        navigate("/", { state: { restaurants: allData, search: searchText } });
    }
  };

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
            <span className={classes.hidden}>Cool App Name</span>
          </Navbar.Brand>
        </LinkContainer>
        <Form.Select
          value={city}
          size="sm"
          onChange={handleCityChange}
          style={{ width: 80, height: 38 }}
        >
          <option value="all">All</option>
          <option value="rex">Rexburg</option>
          <option value="if">Idaho Falls</option>
        </Form.Select>
        <div className={classes["button-inside"]}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchText}
            onChange={handleSearchInput}
            style={{ marginBottom: 0 }}
          />
          <DropdownButton
            id="dropdown-basic-button"
            className={classes["filter-button"]}
            align="end"
            title={
              <i className="fas fa-sliders-h" style={{ fontSize: 20 }}></i>
            }
          >
            <Dropdown.Item as="button">Review (high to low)</Dropdown.Item>
            <Dropdown.Item as="button">Price (low to high)</Dropdown.Item>
          </DropdownButton>
        </div>
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
