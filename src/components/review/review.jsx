import React from "react";
import PropTypes from "prop-types";

const Review = ({ review: { name, pros, cons, comment, rate } }) => {
    return (
        <article className="reviews__item review">
            <h3 className="review__author">{name}</h3>

            <h4 className="review__title review__title--pros">Достоинства</h4>
            <p className="review__text review__text--pros">{pros}</p>

            <h4 className="review__title review__title--cons">Недостатки</h4>
            <p className="review__text review__text--cons">{cons}</p>

            <h4 className="review__title">Комментарий</h4>
            <p className="review__text">{comment}</p>

            <div className="review__rate-wrapper">
                <h4 className="visually-hidden">{`Рейтинг - ${rate}`}</h4>
                <div className="review__rating stars">
                    <svg className="stars__item stars__item--active" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z" fill="currentColor" />
                    </svg>
                    <svg className="stars__item stars__item--active" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z" fill="currentColor" />
                    </svg>
                    <svg className="stars__item stars__item--active" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z" fill="currentColor" />
                    </svg>
                    <svg className="stars__item" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z" fill="currentColor" />
                    </svg>
                    <svg className="stars__item" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z" fill="currentColor" />
                    </svg>
                </div>

                <span className="stars__text">Советует</span>
            </div>

            <div className="review__footer">
                <span className="review__time">1 минуту назад</span>
                <span className="review__respond">Ответить</span>
            </div>

        </article>

    )
}

Review.propTypes = {
    review: PropTypes.shape({
        name: PropTypes.string.isRequired,
        pros: PropTypes.string.isRequired,
        cons: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired
    }).isRequired
}

export default Review;