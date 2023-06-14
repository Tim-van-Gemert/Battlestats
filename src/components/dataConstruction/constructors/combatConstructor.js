import { useEffect } from "react";

const ConstructCombatData = (props) => {
    const { APIData, setCombatData, game } = props;
    let combatData
    if (game != undefined) {
        if (game == 'bf2042') {
            combatData = [
                { name: 'Kills', data: APIData.kills || 0},
                { name: 'Assists', data: APIData.killAssists || 0},
                { name: 'Deaths', data: APIData.deaths || 0},
                { name: 'Headshots', data: APIData.headShots || 0},
                { name: 'Accuracy', data: APIData.accuracy || 0},
                { name: 'KPMI', data: APIData.killsPerMinute || 0},
            ];
        } else {
            combatData = [
                { name: 'Kills', data: APIData.kills || 0},
                { name: 'Assists', data: APIData.killAssists || 0},
                { name: 'Deaths', data: APIData.deaths || 0},
                { name: 'Headshots', data: APIData.headShots || 0},
                { name: 'Accuracy', data: APIData.accuracy || 0},
                { name: 'KPMI', data: APIData.killsPerMinute || 0},
            ];
        }
    }
    if (game != undefined && combatData != undefined) {
        // const sortedCombatData = combatData.sort((a, b) => b.data - a.data);
        setCombatData(combatData);
    }
};

export default ConstructCombatData;
