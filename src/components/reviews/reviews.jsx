import React, { useEffect, useRef, useState } from "react";

import { MOCK_REVIEWS } from "../../const";

import ReviewsList from "../reviews-list/reviews-list.jsx";
import Star from "../star/star";

const STAR_COUNT = 5;
const ESCAPE = "Escape";

const Reviews = () => {
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

    const inputNameRef = useRef(null);

    useEffect(() => {
        if (isPopupOpen) {
            inputNameRef.current.focus();
            document.addEventListener("keydown", handleReviewButtonKeydown);
        }
        return () => {
            document.removeEventListener("keydown", handleReviewButtonKeydown);
        }
    }, [isPopupOpen]);

    const handleReviewButtonClick = (evt) => {
        evt.preventDefault();
        setIsPopupOpen(!isPopupOpen);
    }

    const handlePopupOverlayClick = (evt) => {
        evt.preventDefault();
        if (evt.target.className === `popup `) {
            setIsPopupOpen(false)
        }
    }

    const handleReviewButtonKeydown = (evt) => {
        evt.preventDefault();
        if (evt.code === ESCAPE) {
            setIsPopupOpen(false)
        }
    }

    const handleRateChange = (evt) => {
        setCurrentRate(parseInt(evt.target.closest(".stars__label").querySelector("input").value, 10));
    }

    const checkValidity = () => {
        (formData.name.length !== 0 && formData.comment.length !== 0)
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
        if (formData.name.length !== 0 && formData.comment.length !== 0) {
            const newReviewList = reviewList.concat([{
                name: formData.name,
                pros: formData.pros,
                cons: formData.cons,
                rate: currentRate,
                comment: formData.comment
            }]);
            localStorage.setItem(`state`, JSON.stringify({
                name: formData.name,
                pros: formData.pros,
                cons: formData.cons,
                rate: currentRate,
                comment: formData.comment
            }))
            setReviewList(newReviewList);

            setIsPopupOpen(false);
        }
    }

    return (
        <div className="reviews">
            <ReviewsList reviewList={reviewList} />
            <button className="reviews__button" type="button" onClick={handleReviewButtonClick}>Оставить отзыв</button>

            <div className={`popup ${isPopupOpen ? `` : `popup--closed`}`} tabIndex="0" onKeyDown={handleReviewButtonKeydown} onClick={handlePopupOverlayClick}>
                <form className="popup__form">
                    <legend className="popup__legend">Оставить отзыв</legend>
                    <div className="popup__container">
                        <div className={`popup__input-wrapper popup__input-wrapper--name ${isValid ? `` : `popup__input-wrapper--invalid`}`}>
                            <input className={`popup__input popup__input--name ${isValid ? `` : `popup__input--invalid`}`} type="text" placeholder="Имя" name="name" id="name" required onChange={handleInputChange} ref={inputNameRef}></input>
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
                                {[...Array(STAR_COUNT).keys()].map((index) => <li className="popup__rate-item" key={index}>
                                    <Star key={index} index={index} currentValue={currentRate} handleRateChange={handleRateChange} />
                                </li>)}
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