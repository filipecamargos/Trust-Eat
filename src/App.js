import Home from "./components/Home/Home";
import Restaurant from "./components/Restaurant/Restaurant";
import AddRestaurant from "./components/Add Restaurant/AddRestaurant";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Layout2 from "./components/Layout/Layout2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<Layout2 />}>
          <Route path="/restaurant/:restaurant_name" element={<Restaurant />} />
          <Route path="/addrestaurant" element={<AddRestaurant />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
