import { useEffect } from "react";

const ConstructCombatData = (props) => {
    const { APIData, setCombatData, game } = props;
    let combatData
    if (game != undefined) {
        if (game == 'bf2042') {
            combatData = [
                { name: 'Kills', data: APIData.kills },
                { name: 'Assists', data: APIData.killAssists },
                { name: 'Deaths', data: APIData.deaths },
                { name: 'Headshots', data: APIData.headShots },
                { name: 'Accuracy', data: APIData.accuracy },
                { name: 'KPMI', data: APIData.killsPerMinute },
            ];
        } else {
            combatData = [
                { name: 'Kills', data: APIData.kills },
                { name: 'Assists', data: APIData.killAssists },
                { name: 'Deaths', data: APIData.deaths },
                { name: 'Headshots', data: APIData.headShots },
                { name: 'Accuracy', data: APIData.accuracy },
                { name: 'KPMI', data: APIData.killsPerMinute },
            ];
        }
    }
    if (game != undefined && combatData != undefined) {
        // const sortedCombatData = combatData.sort((a, b) => b.data - a.data);
        setCombatData(combatData);
    }
};

export default ConstructCombatData;
