import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "../../styles/reviews.sass";

const Reviews = (props) => {
  const reviews = props.data.allContentfulReviews.edges;

  const reviewsOutput = [];
  reviews.forEach((review) => {
    console.log("review -", review);
    const reviewData = renderRichText(review.node.reviews);
    reviewData.forEach((element) => {
      reviewsOutput.push(element);
    });
  });
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      {reviewsOutput}
    </div>
  );
};

export default Reviews;
