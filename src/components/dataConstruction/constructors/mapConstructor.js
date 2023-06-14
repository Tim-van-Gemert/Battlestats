import { useEffect } from "react";

const ConstructMapData = (props) => {
    const { APIData, setMapData } = props;

    const mapData = [
        { name: APIData.maps[0].mapName, data: APIData.maps[0].winPercent },
        { name: APIData.maps[1].mapName, data: APIData.maps[1].winPercent },
        { name: APIData.maps[2].mapName, data: APIData.maps[2].winPercent },
        { name: APIData.maps[3].mapName, data: APIData.maps[3].winPercent },
        { name: APIData.maps[4].mapName, data: APIData.maps[4].winPercent },
        { name: APIData.maps[5].mapName, data: APIData.maps[5].winPercent },
    ];

    const sortedMapData = mapData.map(item => {
        const winRate = parseFloat(item.data.replace("%", ""));
        return { name: item.name, data: winRate };
    }).sort((a, b) => b.data - a.data).map(item => {
        const winRateFormatted = item.data.toFixed(2) + "%";
        return { name: item.name, data: winRateFormatted };
    });

    console.log(sortedMapData)
    setMapData(sortedMapData);
};

export default ConstructMapData;
