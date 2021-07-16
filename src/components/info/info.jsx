import React, { useState } from "react";

import { Tabs } from "../../const.js";

import Specs from "../specs/specs.jsx";
import Reviews from "../reviews/reviews.jsx";
import Contacts from "../contacts/contacts.jsx";

const Info = () => {
    const [activeTab, setActiveTab] = useState(Tabs.SPECS);

    const handleTabClick = (evt) => {
        evt.preventDefault();
        setActiveTab(evt.target.name);
    }

    const getTabPanel = (tab) => {
        switch (tab) {
            case Tabs.SPECS:
                return <Specs />;
            case Tabs.REVIEWS:
                return <Reviews />;
            case Tabs.CONTACTS:
                return <Contacts />
            default:
                return <Specs />
        }
    }

    return (
        <section className="main__info info">
            <ul className="info__tab-list">
                <li className="info__tab">
                    <button className={`info__tab-button ${activeTab === Tabs.SPECS ? `info__tab-button--active` : ``} `} type="button" name="specs" onClick={handleTabClick}>
                        Характеристики
                    </button>
                </li>
                <li className="info__tab">
                    <button className={`info__tab-button ${activeTab === Tabs.REVIEWS ? `info__tab-button--active` : ``} `} type="button" name="reviews" onClick={handleTabClick}>
                        Отзывы
                    </button>
                </li>
                <li className="info__tab">
                    <button className={`info__tab-button ${activeTab === Tabs.CONTACTS ? `info__tab-button--active` : ``} `} type="button" name="contacts" onClick={handleTabClick}>
                        Контакты
                    </button>
                </li>
            </ul>
            {getTabPanel(activeTab)}
        </section>
    )
}

export default Info;