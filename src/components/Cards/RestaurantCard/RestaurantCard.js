import styles from "./RestaurantCard.module.css";
import StarReviews from "../StarReviews/StarReviews";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  //Set up if this is the first review
  const componentReview = (
    <div className={styles.ratings}>
      <StarReviews review={props.restaurant.rating} />
      <span> {props.restaurant.num_of_reviews} reviews</span>
    </div>
  );

  return (
    <Link
      className={styles.link_style}
      to={"restaurant/" + props.restaurant.id}
    >
      <div className={styles.restaurant_card}>
        <div className={styles.restaurant_card_top_title}>
          <h3>{props.restaurant.name}</h3>
          <h3>{props.restaurant.price_range}</h3>
        </div>
        {componentReview}
        <p className={styles.restaurant_card_single_description}>
          {props.restaurant.address}
        </p>
        <p className={styles.restaurant_card_single_description}>
          {props.restaurant.phone}
        </p>
        <p className={styles.restaurant_card_single_description}>
          {props.restaurant.type.toString().replaceAll(",", ",  ")}
        </p>
        <p className={styles.restaurant_card_single_description}>
          {props.restaurant.website}
        </p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
