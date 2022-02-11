import RestaurantCard from "../Cards/RestaurantCard/RestaurantCard";

//TODO: Remove the DUMMY_DATA and get it from the props!
const RESTAURANT_DATA = {
    "address": "615 E Iona Rd, Idaho Falls",
    "city": "Idaho Falls",
    "id": "ChIJa0ULuUBcVFMRjhzFvzz2TcY",
    "image": "http://tny.im/rdJ",
    "name": "Mitchell's Restaurant",
    "phone": "(208) 525-8834",
    "price_range": "$",
    "rating": 3.5,
    "type": [
    "American",
    "Burgers",
    "Fries",
    "Steak"
    ],
    "website": "https://www.mitchellsrestaurant-idaho.com/"
};

const Home = () => {
  return <div>
        <RestaurantCard restaurante={RESTAURANT_DATA}/>
    </div>
};

export default Home;