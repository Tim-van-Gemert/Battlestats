import { useEffect } from "react";

const ConstructMapData = (props) => {
    const { APIData, setMapData, setMapGraphData } = props;

    const mapData = [
        { name: APIData.maps[0].mapName, data: APIData.maps[0].winPercent },
        { name: APIData.maps[1].mapName, data: APIData.maps[1].winPercent },
        { name: APIData.maps[2].mapName, data: APIData.maps[2].winPercent },
        { name: APIData.maps[3].mapName, data: APIData.maps[3].winPercent },
        { name: APIData.maps[4].mapName, data: APIData.maps[4].winPercent },
        { name: APIData.maps[5].mapName, data: APIData.maps[5].winPercent },
    ];

    const maps = [];
    const wins = [];
    const losses = [];
    const amountPlayed = [];

    APIData.maps.map((m) => {
        maps.push(m.mapName);
        wins.push(m.wins);
        losses.push(m.losses);
        amountPlayed.push(m.matches);
    })  

    const mapGraphData = [
        {
        name: 'Maps',
        data: maps,
        borderColor: "rgb(62,149,205)",
        backgroundColor: "rgb(62,149,205,0.1)",
        },
        {
        name: 'Wins',
        data: wins,
        borderColor: "rgb(64, 230, 108)",
        backgroundColor: "rgb(64, 230, 108,0.1)",
        }, 
        {
        name: 'Losses',
        data: losses,
  
        borderColor: "rgb(245, 69, 69)",
        backgroundColor: "rgb(245, 69, 69,0.1)",
        }, 
        {
        name: 'Matches',
        data: amountPlayed,
        borderColor: "rgb(62,149,205)",
        backgroundColor: "rgb(62,149,205,0.1)",
        }]


    const sortedMapData = mapData.map(item => {
        const winRate = parseFloat(item.data.replace("%", ""));
        return { name: item.name, data: winRate };
    }).sort((a, b) => b.data - a.data).map(item => {
        const winRateFormatted = item.data.toFixed(2) + "%";
        return { name: item.name, data: winRateFormatted };
    });


    setMapData(sortedMapData);
    setMapGraphData(mapGraphData)
};

export default ConstructMapData;
