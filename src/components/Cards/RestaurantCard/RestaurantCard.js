import styles from "./RestaurantCard.module.css";
import StarReviews from "../StarReviews/StarReviews";

const RestaurantCard = (props) => {
  //Set up if this is the first review
  const componentReview = (
    <div className={styles.ratings}>
      <StarReviews review={props.restaurant.rating} />
      <span> {props.restaurant.num_of_reviews} reviews</span>
    </div>
  );

  //Check for the website
  let website = '';
  if (props.restaurant.website) {
    website = props.restaurant.website;
  }

  return (

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
          <a href={website} target="_blank">{website}</a>
        </p>
      </div>
  );
};

export default RestaurantCard;
