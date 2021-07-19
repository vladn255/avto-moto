import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
    center: [59.968137, 30.316272],
    zoom: 15,
    controls: []
}

const MapComponent = () => {
    return (
        <YMaps>
            <Map defaultState={mapData} width={`100%`} height={`100%`}>
                <Placemark geometry={mapData.center} options={{
                    iconLayout: `default#image`,
                }
                } />
            </Map>
        </YMaps>
    )
}

export default MapComponent;