import MainNavBar from "./components/NavBar/MainNavBar";
import Home from "./components/Home/Home";
import Restaurant from "./components/Restaurant/Restaurant";
import AddRestaurant from "./components/Add Restaurant/AddRestaurant";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RouteWithNavbar = ({ exact, path, component: Component, ...rest }) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        return (
          <>
            <MainNavBar {...routeProps} />
            <Component {...routeProps} />
          </>
        );
      }}
    />
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <MainNavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/restaurant/:restaurant_name"
              element={<Restaurant />}
            />
            <Route path="/addrestaurant" element={<AddRestaurant />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
