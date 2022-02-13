import styles from "./UserReviewCard.module.css"
import StarReviews from "../StarReviews/StarReviews"

const UserReviewCard = (props) => {
    return (
        <div className={styles.user_card}>
            <div className={styles.user_card_head}>
                <i className={styles.avatar + " fa-solid fa-user"}></i>
                <div className={styles.user_card_head_right}>
                    <h5 className={styles.user_card_head_right_name}>{props.user_name}</h5>
                    <h5 className={styles.user_card_head_right_title}>{props.review_title}</h5>
                </div>
            </div>
            <section className={styles.user_card_star_review}>
                <StarReviews review={props.review_rating}/>
                <p>Reviewed on {props.review_date}</p>
            </section>
                <p>{props.review_description}</p>
        </div>
    )
  };
  
  export default UserReviewCard ;