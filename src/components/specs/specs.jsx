import React from "react";

const Specs = () => {
    return (
        <ul className="specs">
            <li className="specs__item">
                <span className="specs__key">Трансмиссия</span>
                <span className="specs__value">Роботизированная</span>
            </li>
            <li className="specs__item">
                <span className="specs__key">Мощность двигателя, л.с.</span>
                <span className="specs__value">249</span>
            </li>
            <li className="specs__item">
                <span className="specs__key">Тип двигателя</span>
                <span className="specs__value">Бензиновый</span>
            </li>
            <li className="specs__item">
                <span className="specs__key">Привод</span>
                <span className="specs__value">Полный</span>
            </li>
            <li className="specs__item">
                <span className="specs__key">Объем двигателя, л</span>
                <span className="specs__value">2.4</span>
            </li>
            <li className="specs__item">
                <span className="specs__key">Макс.крутящий момент</span>
                <span className="specs__value">370/4500</span>
            </li>
            <li className="specs__item">
                <span className="specs__key">Количество цилиндров</span>
                <span className="specs__value">4</span>
            </li>
        </ul>
    )
}

export default Specs;