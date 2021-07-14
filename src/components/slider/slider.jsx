/* eslint-disable no-undef */
import React from "react";

const Slider = () => {
    return (
        <section className="main__slider slider">
            <h2 className="visually-hidden">Model slider</h2>
            <div className="slider__main-wrapper">
                <img className="slider__main-img" src={`${process.env.PUBLIC_URL}/img/slider/desktop_slide_1.jpg`}
                    alt="car view" width="600" height="375" />
                <span className="slider__tag">New Model</span>
            </div>

            <div className="slider__preview-wrapper">
                <ul className="slider__preview-list">
                    <li className="slider__preview-item">
                        <img className="slider__main-img" src={`${process.env.PUBLIC_URL}/img/slider/desktop_slide_min_1.jpg`}
                            alt="car view" width="128" height="80" />
                    </li>
                    <li className="slider__preview-item">
                        <img className="slider__main-img" src={`${process.env.PUBLIC_URL}/img/slider/desktop_slide_min_2.jpg`}
                            alt="interior view" width="128" height="80" />
                    </li>
                    <li className="slider__preview-item">
                        <img className="slider__main-img" src={`${process.env.PUBLIC_URL}/img/slider/desktop_slide_min_3.jpg`}
                            alt="panel view" width="128" height="80" />
                    </li>
                </ul>

                <svg className="slider__decor slider__decor--left slider__decor--disabled" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26" cy="26" r="25.5" fill="white" stroke="#D7D9DF" />
                    <path d="M17.0043 26.1719L22.9184 20.3686M17.0043 26.1719L22.6929 31.9692M17.0043 26.1719L35.9813 26.3513" stroke="currentColor" />
                </svg>
                <svg className="slider__decor slider__decor--right" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.500408 26C0.500408 40.0834 11.9143 51.5 25.9939 51.5C40.0734 51.5 51.4873 40.0834 51.4873 26C51.4873 11.9166 40.0734 0.5 25.9939 0.5C11.9143 0.5 0.500408 11.9166 0.500408 26Z" fill="white" stroke="#D7D9DF" />
                    <path d="M34.9873 26.1719L29.0747 20.3686M34.9873 26.1719L29.3001 31.9692M34.9873 26.1719L16.0151 26.3513" stroke="currentColor" />
                </svg>
            </div>

        </section>
    )
}

export default Slider;