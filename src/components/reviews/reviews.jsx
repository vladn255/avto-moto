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
            document.addEventListener("focusin", handlePopupFocus);
            document.querySelector(".body").classList.add("body--hidden");
        }
        return () => {
            document.removeEventListener("keydown", handleReviewButtonKeydown);
            document.removeEventListener("focusin", handlePopupFocus);
            document.querySelector(".body").classList.remove("body--hidden");
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
        if (evt.code === ESCAPE) {
            setIsPopupOpen(false)
        }
    }

    const handleRateChange = (evt) => {
        setCurrentRate(parseInt(evt.target.closest(".stars__label").querySelector("input").value, 10));
    }

    const handleRateKeydown = (evt) => {
        if (evt.code === "ArrowLeft" && currentRate >= 1) {
            setCurrentRate(currentRate - 1)
        } else if (evt.code === "ArrowRight" && currentRate <= 5) {
            setCurrentRate(currentRate + 1)
        }
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

    const handlePopupFocus = (evt) => {
        if (evt.target.closest(".popup") === null) {
            inputNameRef.current.focus();
        }
    }

    return (
        <div className="reviews" inert="false">
            <ReviewsList reviewList={reviewList} />
            <button className="reviews__button" type="button" onClick={handleReviewButtonClick}>???????????????? ??????????</button>

            <div className={`popup ${isPopupOpen ? `` : `popup--closed`}`} onKeyDown={handleReviewButtonKeydown} onClick={handlePopupOverlayClick} tabIndex="0" role="dialog" aria-labelledby="modal-label" >
                <form className="popup__form">
                    <legend className="popup__legend" id="modal-label">???????????????? ??????????</legend>
                    <div className="popup__container">
                        <div className={`popup__input-wrapper popup__input-wrapper--name ${isValid ? `` : `popup__input-wrapper--invalid`}`}>
                            <input className={`popup__input popup__input--name ${isValid ? `` : `popup__input--invalid`}`} type="text" placeholder="??????" name="name" id="name" required onChange={handleInputChange} ref={inputNameRef}></input>
                            <label className="visually-hidden" htmlFor="name">??????</label>
                        </div>

                        <div className="popup__input-wrapper popup__input-wrapper--pros">
                            <input className={`popup__input ${isValid ? `` : `popup__input--invalid`}`} type="text" placeholder="??????????????????????" id="pros" name="pros" onChange={handleInputChange}></input>
                            <label className="visually-hidden" htmlFor="pros">??????????????????????</label>
                        </div>

                        <div className="popup__input-wrapper popup__input-wrapper--cons">
                            <input className={`popup__input ${isValid ? `` : `popup__input--invalid`}`} type="text" placeholder="????????????????????" id="cons" name="cons" onChange={handleInputChange}></input>
                            <label className="visually-hidden" htmlFor="cons">????????????????????</label>
                        </div>

                        <div className="popup__rate-wrapper">
                            <span className="popup__rate-title">?????????????? ??????????:</span>
                            <ul className="popup__rate-stars stars" tabIndex="0" onKeyDown={handleRateKeydown}>
                                {[...Array(STAR_COUNT).keys()].map((index) => <li className="popup__rate-item" key={index}>
                                    <Star key={index} index={index + 1} currentValue={currentRate} handleRateChange={handleRateChange} />
                                </li>)}
                            </ul>
                        </div>

                        <div className={`popup__input-wrapper popup__input-wrapper--comment ${isValid ? `` : `popup__input-wrapper--invalid`}`}>
                            <textarea className={`popup__textarea ${isValid ? `` : `popup__textarea--invalid`}`} id="comment" placeholder="??????????????????????" name="comment" required onChange={handleInputChange}></textarea>
                            <label className="visually-hidden" htmlFor="comment">??????????????????????</label>
                        </div>

                        <div className="popup__close-wrapper" onClick={handleReviewButtonClick} tabIndex="0">
                            <button className="popup__close" type="button">
                                <span className="visually-hidden">??????????????/?????????????? ????????</span>
                            </button>
                        </div>
                    </div>

                    <button className="popup__submit-button" type="submit" onClick={handleSubmitClick}>???????????????? ??????????</button>
                </form>
            </div>
        </div>
    )
}

export default Reviews;