import { fetchReviews } from "../services/ApiMovies";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Reviews({ movieId }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then((response) => {
      setReview(response.results);
      console.log(setReview);
    });
  }, [movieId]);

  return (
    <>
      {review.length > 0 ? (
        <ul>
          {review.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>Character: {review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie </p>
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
