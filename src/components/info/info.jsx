import React from "react";

const Info = () => {
    return (
        <section className="main__info info">
            <ul className="info__tab-list">
                <li className="info__tab">
                    <button className="info__tab-button info__tab-button--active" type="button">
                        Характеристики
                    </button>
                </li>
                <li className="info__tab">
                    <button className="info__tab-button" type="button">
                        Отзывы
                    </button>
                </li>
                <li className="info__tab">
                    <button className="info__tab-button" type="button">
                        Контакты
                    </button>
                </li>
            </ul>
            <ul className="info__list">
                <li className="info__item">
                    <span className="info__key">Трансмиссия</span>
                    <span className="info__value">Роботизированная</span>
                </li>
                <li className="info__item">
                    <span className="info__key">Мощность двигателя, л.с.</span>
                    <span className="info__value">249</span>
                </li>
                <li className="info__item">
                    <span className="info__key">Тип двигателя</span>
                    <span className="info__value">Бензиновый</span>
                </li>
                <li className="info__item">
                    <span className="info__key">Привод</span>
                    <span className="info__value">Полный</span>
                </li>
                <li className="info__item">
                    <span className="info__key">Объем двигателя, л</span>
                    <span className="info__value">2.4</span>
                </li>
                <li className="info__item">
                    <span className="info__key">Макс.крутящий момент</span>
                    <span className="info__value">370/4500</span>
                </li>
                <li className="info__item">
                    <span className="info__key">Количество цилиндров</span>
                    <span className="info__value">4</span>
                </li>
            </ul>
        </section>
    )
}

export default Info;