import React from "react";

const Summary = () => {
    return (
        <section className="main__summary summary">
            <h2 className="visually-hidden">Общая информация</h2>
            <h3 className="summary__title">Марпех 11</h3>
            <ul className="summary__list">
                <li className="summary__item summary__item--fuel">
                    Бензин
                </li>
                <li className="summary__item summary__item--transmission">
                    Механика
                </li>
                <li className="summary__item summary__item--horsepower">
                    100 л.с.
                </li>
                <li className="summary__item summary__item--volume">
                    1.4л
                </li>
            </ul>
            <div className="summary__cost-wrapper">
                <p className="summary__cost">2 300 000 ₽</p>
                <p className="summary__previous-cost">2 400 000 ₽</p>
            </div>
            <a className="summary__button summary__button--order" href="/#">Оставить заявку</a>
            <a className="summary__button summary__button--credit" href="/#">В кредит от 11 000 ₽</a>
        </section>
    )
}

export default Summary;