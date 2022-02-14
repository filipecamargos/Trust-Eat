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
import { useEffect, useState } from "react";
import { filterData, sortData } from "./utils";
import baseUrl from "../../../FirebaseConfigFile";
import useHttp from "../../../hooks/use-Http";

const MainNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [allData, setAllData] = useState([]);
  const restaurantsUrl = `${baseUrl}/restaurants.json`;
  const { error: error1, sendRequest: getRestaurants } = useHttp();
  // Data that is sent through navigate is below
  const [searchText, setSearchText] = useState(location?.state?.search || "");
  const [city, setCity] = useState(location?.state?.city || "all");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const formatData = (restaurantsObj) => {
      console.log(restaurantsObj);
      const restaurantsArray = Object.values(restaurantsObj).map(
        (value) => value
      );
      setAllData(restaurantsArray);
    };

    getRestaurants({ url: restaurantsUrl }, formatData);
  }, [getRestaurants, restaurantsUrl]);

  location.state = location?.state || { error: error1 };
  location.state.error = location.state.error || error1;

  const rexburgData = filterData(allData, "rexburg", "city");
  const idahoFallsData = filterData(allData, "falls", "city");

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
    navigate("/", {
      state: { restaurants: restaurants, search: e.target.value, city: city },
    });
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    switch (e.target.value) {
      case "rex":
        setRestaurants(rexburgData);
        navigate("/", {
          state: {
            restaurants: rexburgData,
            search: searchText,
            city: e.target.value,
          },
        });
        break;
      case "if":
        setRestaurants(idahoFallsData);
        navigate("/", {
          state: {
            restaurants: idahoFallsData,
            search: searchText,
            city: e.target.value,
          },
        });
        break;
      default:
        setRestaurants(sortData(allData));
        navigate("/", {
          state: {
            restaurants: allData,
            search: searchText,
            city: e.target.value,
          },
        });
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
