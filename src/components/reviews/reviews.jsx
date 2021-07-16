import React, { useState } from "react";

import { MOCK_REVIEWS } from "../../const";

import Review from "../review/review";

const Reviews = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleReviewButtonClick = (evt) => {
        evt.preventDefault();
        setIsPopupOpen(!isPopupOpen);
    }

    return (
        <div className="reviews">
            {MOCK_REVIEWS.map((review) => <Review key={(Math.random() * 10000).toString()} review={review} />)}
            <button className="reviews__button" type="button" onClick={handleReviewButtonClick}>Оставить отзыв</button>

            <div className={`popup ${isPopupOpen ? `` : `popup--closed`}`}>
                <form className="popup__form">
                    <legend className="popup__legend">Оставить отзыв</legend>
                    <div className="popup__container">
                        <input className="popup__input popup__input--name" type="text" placeholder="Имя" id="name" required></input>
                        <label className="visually-hidden" htmlFor="name">Имя</label>

                        <input className="popup__input popup__input--pros" type="text" placeholder="Достоинства" id="pros"></input>
                        <label className="visually-hidden" htmlFor="pros">Достоинства</label>

                        <input className="popup__input popup__input--cons" type="text" placeholder="Недостатки" id="cons"></input>
                        <label className="visually-hidden" htmlFor="cons">Недостатки</label>

                        <div className="popup__rate-wrapper">

                        </div>

                        <textarea className="popup__textarea" id="comment" placeholder="Комментарий" required></textarea>
                        <label className="visually-hidden" htmlFor="comment">Комментарий</label>
                    </div>

                    <button className="popup__submit-button" type="submit">Оставить отзыв</button>
                </form>
                <button className="popup__close-button"></button>
            </div>
        </div>
    )
}

export default Reviews;