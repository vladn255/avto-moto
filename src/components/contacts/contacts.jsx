import React from "react";

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__wrapper">
                <div className="contacts__address">
                    <h3 className="contacts__title">Адрес</h3>
                    <p className="contacts__text">
                        Санкт-Петербург,<br />набережная реки Карповки, дом 5
                    </p>
                </div>
                <div className="contacts__workhours">
                    <h3 className="contacts__title">Режим работы</h3>
                    <p className="contacts__text">
                        Ежедневно, с 10:00 до 21:00
                    </p>
                </div>
                <div className="contacts__phone">
                    <h3 className="contacts__title">Телефон</h3>
                    <a className="contacts__text" href="tel:88003335599">
                        8 (800) 333-55-99
                    </a>
                </div>
                <div className="contacts__email">
                    <h3 className="contacts__title">E-mail</h3>
                    <a className="contacts__text" href="mailto:info@avto-moto.ru">
                        info@avto-moto.ru
                    </a>
                </div>
            </div>
            <div className="contacts__map map">

            </div>
        </div>
    )
}

export default Contacts;