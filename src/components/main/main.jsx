import React from "react";

import Info from "../info/info";
import Slider from "../slider/slider";
import Summary from "../summary/summary";

const Main = () => {
    return (
        <main className="main">
            <h1 className="visually-hidden">Avto moto</h1>
            <Slider />
            <Summary />
            <Info />
        </main>
    )
}

export default Main;