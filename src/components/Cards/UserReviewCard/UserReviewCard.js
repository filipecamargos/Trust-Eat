import styles from "./UserReviewCard.module.css"
import StarReviews from "../StarReviews/StarReviews"

const DUMMY_DATA = {
    place_id : 'restaurant_id',
    user_name: 'John Dough',
    review_title: 'Title for Review',
    review_rating: 1.5,
    review_date: 'Jan 31, 2022',
    review_description: 'Publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
}

const UserReviewCard = (props) => {
    return (
        <div className={styles.user_card} key={props.id}>
            <div className={styles.user_card_head}>
                <i className={styles.avatar + " fa-solid fa-user"}></i>
                <div className={styles.user_card_head_right}>
                    <h5 className={styles.user_card_head_right_name}>{DUMMY_DATA.user_name}</h5>
                    <h5 className={styles.user_card_head_right_title}>{DUMMY_DATA.review_title}</h5>
                </div>
            </div>
            <section className={styles.user_card_star_review}>
                <StarReviews review={DUMMY_DATA.review_rating}/>
                <p>Reviewed on {DUMMY_DATA.review_date}</p>
            </section>
                <p>{DUMMY_DATA.review_description}</p>
        </div>
    )
  };
  
  export default UserReviewCard ;