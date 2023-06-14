import { useEffect } from "react";

const ConstructCombatData = (props) => {
    const { APIData, setCombatData } = props;
    console.log(APIData)
    const combatData = [
        { name: 'Kills', data: APIData.kills },
        { name: 'KPMA', data: APIData.killsPerMatch },
        { name: 'KPMI', data: APIData.killsPerMinute },
        { name: 'Assists', data: APIData.killAssists },
        { name: 'Headshots', data: APIData.headShots },
        { name: 'Damage', data: APIData.damage }
    ];

    const sortedCombatData = combatData.sort((a, b) => b.data - a.data);
    setCombatData(sortedCombatData);
};

export default ConstructCombatData;
