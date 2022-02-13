import RestaurantCard from "../Cards/RestaurantCard/RestaurantCard";

//TODO: Remove the DUMMY_DATA and get it from the API
const RESTAURANT_DATA = {
    "address": "615 E Iona Rd, Idaho Falls",
    "city": "Idaho Falls",
    "id": "ChIJb9xyyKwLVFMRv3Nb-tksuzk",
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
    "website": "https://www.mitchellsrestaurant-idaho.com/",
    "numberOfReviews": 5
};

//TODO:
//ONCE YOU Have the resturants determine how many reviews they have.
//JUST ADD TO THE PROP BEFORE PASSING IT.

const Home = () => {
  return <div>
        <RestaurantCard restaurante={RESTAURANT_DATA}/>
    </div>
};

export default Home;