import styles from "./RestaurantCard.module.css";
import StarReviews from "../StarReviews/StarReviews";

//TODO: Remove the DUMMY_DATA and get it from the props!
// const DUMMY_DATA = {
//   name: "Restaurante Name",
//   priceTag: "$",
//   review: 3.5,
//   numberOfReviews: 100,
//   address: "123 Random St. Rexburg, ID 83440",
//   site: "www.restaurant.whatever",
//   phone: "(123) 456 -7890",
//   type: ["Burgers", "American"],
//   id: 1,
// };

const RestaurantCard = (props) => {
  //Set up if this is the first review
  let componentReview = (
    <div className={styles.ratings}>
      <StarReviews review={props.review} />
      <span> First to review!</span>
    </div>
  );

  if (props.review > 0) {
    componentReview = (
      <div className={styles.ratings}>
        <StarReviews review={props.review} />
        <span> {props.numberOfReviews} reviews</span>
      </div>
    );
  }

  return (
    <div className={styles.restaurant_card} id={props.id}>
      <div className={styles.restaurant_card_top_title}>
        <h3>{props.name}</h3>
        <h3>{props.priceTag}</h3>
      </div>
      {componentReview}
      <p className={styles.restaurant_card_single_description}>
        {props.address}
      </p>
      <p className={styles.restaurant_card_single_description}>{props.phone}</p>
      <p className={styles.restaurant_card_single_description}>
        {props.type.toString().replace(",", ", ")}
      </p>
      <p className={styles.restaurant_card_single_description}>
        <a href={props.site}>{props.site}</a>
      </p>
    </div>
  );
};

export default RestaurantCard;
