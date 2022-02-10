import styles from "./StarReviews.module.css"

const StarReviews = (props) => {
    //Check the review to represent the stars if its in range
    if (props.review > 5 || props.review < 0) {
        throw new Error('Number of stars represented by review must be between 0 and 5!')
    }

    //Set up the stars to be displayed
    let starReview = [];
    let reviewReduce = props.review;

    while (reviewReduce >= 1) {
        starReview.push(<i className="fa-solid fa-star" key={reviewReduce}></i>)
        reviewReduce--;
    }

    if (reviewReduce % 1 !== 0) {
        starReview.push(<i className="fa-solid fa-star-half-stroke" key={reviewReduce}></i>)
    }

    while (starReview.length < 5) {
        starReview.push(<i className="fa fa-star-o" key={starReview.length + 5}></i>) 
    }

    //Set up the number of reviews
    let componentReview = (
        <div className="ratings">{starReview} 
            <span> First to review!</span>
        </div>
    );
    if (props.review > 0) {
        componentReview  = (
            <div className="ratings">{starReview} 
                <span> {props.numberOfReviews} reviews</span>
            </div>
        )
    }

    return <>{componentReview}</>;
};
  
export default StarReviews;