import React from "react";
import PropTypes from 'prop-types';

import Review from "../review/review";


const ReviewsList = ({ reviewList }) => {
    return (
        <>
            {reviewList.map((review) => <Review key={(Math.random() * 10000).toString()} review={review} />)}
        </>
    )
}

ReviewsList.propTypes = {
    reviewList: PropTypes.arrayOf(PropTypes.shape(PropTypes.string))
}

export default ReviewsList;