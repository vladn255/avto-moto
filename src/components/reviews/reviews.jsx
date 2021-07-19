import React, { useState } from "react";

import { MOCK_REVIEWS } from "../../const";

import ReviewsList from "../reviews-list/reviews-list.jsx";
import Star from "../star/star";

const STAR_COUNT = 5;

const Reviews = () => {
    let starsList = [];
    const [reviewList, setReviewList] = useState(MOCK_REVIEWS.slice());
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentRate, setCurrentRate] = useState(0);
    const [formData, setFormData] = useState({
        name: ``,
        pros: ``,
        cons: ``,
        comment: ``
    })
    const [isValid, setIsValid] = useState(true);

    const handleReviewButtonClick = (evt) => {
        evt.preventDefault();
        setIsPopupOpen(!isPopupOpen);
    }

    const handleRateChange = (evt) => {
        setCurrentRate(parseInt(evt.target.value, 10));
    }

    const checkValidity = () => {
        formData.name.length !== 0 && formData.comment.length
            ? setIsValid(true)
            : setIsValid(false)
    }

    const handleInputChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    }

    const handleSubmitClick = (evt) => {
        evt.preventDefault();
        checkValidity();

        if (isValid) {
            const newReviewList = reviewList.concat([{
                name: formData.name,
                pros: formData.pros,
                cons: formData.cons,
                rate: currentRate,
                comment: formData.comment
            }]);
            setReviewList(newReviewList);

            setIsPopupOpen(false);
        }
    }

    for (let i = 1; i <= STAR_COUNT; i++) {
        starsList.push(<li className="popup__rate-item" key={i}>
            <Star key={i} index={i} currentValue={currentRate} handleRateChange={handleRateChange} />
        </li>)
    }


    return (
        <div className="reviews">
            <ReviewsList reviewList={reviewList} />
            <button className="reviews__button" type="button" onClick={handleReviewButtonClick}>Оставить отзыв</button>

            <div className={`popup ${isPopupOpen ? `` : `popup--closed`}`}>
                <form className="popup__form">
                    <legend className="popup__legend">Оставить отзыв</legend>
                    <div className="popup__container">
                        <div className={`popup__input-wrapper popup__input-wrapper--name ${isValid ? `` : `popup__input-wrapper--invalid`}`}>
                            <input className={`popup__input popup__input--name ${isValid ? `` : `popup__input--invalid`}`} type="text" placeholder="Имя" name="name" id="name" required onChange={handleInputChange}></input>
                            <label className="visually-hidden" htmlFor="name">Имя</label>
                        </div>

                        <div className="popup__input-wrapper popup__input-wrapper--pros">
                            <input className={`popup__input ${isValid ? `` : `popup__input--invalid`}`} type="text" placeholder="Достоинства" id="pros" name="pros" onChange={handleInputChange}></input>
                            <label className="visually-hidden" htmlFor="pros">Достоинства</label>
                        </div>

                        <div className="popup__input-wrapper popup__input-wrapper--cons">
                            <input className={`popup__input ${isValid ? `` : `popup__input--invalid`}`} type="text" placeholder="Недостатки" id="cons" name="cons" onChange={handleInputChange}></input>
                            <label className="visually-hidden" htmlFor="cons">Недостатки</label>
                        </div>

                        <div className="popup__rate-wrapper">
                            <span className="popup__rate-title">Оцените товар:</span>
                            <ul className="popup__rate-stars stars">
                                {starsList}
                            </ul>
                        </div>

                        <div className={`popup__input-wrapper popup__input-wrapper--comment ${isValid ? `` : `popup__input-wrapper--invalid`}`}>
                            <textarea className={`popup__textarea ${isValid ? `` : `popup__textarea--invalid`}`} id="comment" placeholder="Комментарий" name="comment" required onChange={handleInputChange}></textarea>
                            <label className="visually-hidden" htmlFor="comment">Комментарий</label>
                        </div>

                        <div className="popup__close-wrapper" onClick={handleReviewButtonClick}>
                            <button className="popup__close" type="button">
                                <span className="visually-hidden">Открыть/закрыть меню</span>
                            </button>
                        </div>
                    </div>

                    <button className="popup__submit-button" type="submit" onClick={handleSubmitClick}>Оставить отзыв</button>
                </form>
                <button className="popup__close-button"></button>
            </div>
        </div>
    )
}

export default Reviews;