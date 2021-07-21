import React from "react";
import PropTypes from 'prop-types';

const Star = ({ index, currentValue, handleRateChange }) => {
    return (
        <label className="stars__label">
            <input className="visually-hidden" type="radio" name="rating" value={index} onChange={handleRateChange} ></input>
            <svg className={`stars__item ${index <= currentValue ? `stars__item--active` : ``}`} width="27" height="27" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={handleRateChange} >
                <path d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z" fill="currentColor" />
            </svg>
        </label>
    )
}


Star.propTypes = {
    index: PropTypes.number.isRequired,
    currentValue: PropTypes.number.isRequired,
    handleRateChange: PropTypes.func.isRequired
}

export default Star;