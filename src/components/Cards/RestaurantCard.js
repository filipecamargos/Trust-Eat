import styles from "./RestaurantCard.module.css"

//TODO: Remove the DUMMY_DATA and get it from the props!
const DUMMY_DATA = {
    name: "Restaurante Name",
    priceTag: '$$',
    review: 2,
    numberOfReviews: 100,
    address: "123 Random St. Rexburg, ID 83440",
    site: "www.restaurant.whatever",
    phone: "(123) 456 -7890",
    type: ['Burgers', 'American'],
    id:1
}

const RestaurantCard = (props) => {
    return (
        <div className={styles.restaurant_card} key={DUMMY_DATA.id}>
            <div className={styles.restaurant_card_top_title}>
                <h4>{DUMMY_DATA.name}</h4>
                <span>{DUMMY_DATA.priceTag}</span>
            </div>
            <div className={styles.restaurant_review_line}>
                <span>{DUMMY_DATA.review} </span>
                <span>{DUMMY_DATA.numberOfReviews} reviews</span>
            </div>
            <p className={styles.restaurant_card_single_description}>{DUMMY_DATA.address}</p>
            <p className={styles.restaurant_card_single_description}>{DUMMY_DATA.site}</p>
            <p className={styles.restaurant_card_single_description}>{DUMMY_DATA.phone}</p>
            <p className={styles.restaurant_card_single_description}>{DUMMY_DATA.type.toString().replace(',', ', ')}</p>        
        </div>
    );
};
  
export default RestaurantCard;