import React from "react";

import Logo from "../logo/logo.jsx";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Logo />
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link" href="/#">Автомобили</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="/#">Контакты</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="/#">Услуги</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="/#">Вакансии</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;