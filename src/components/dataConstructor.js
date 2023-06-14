import { useEffect } from "react";

const ConstructData = (props) => {
  const { APIData, setCombatData, setObjectiveData, fetchedData, setGameModeData } = props;

  useEffect(() => {
    const combatData = [
      { name: 'Kills', data: APIData.kills },
      { name: 'KPMA', data: APIData.killsPerMatch },
      { name: 'KPMI', data: APIData.killsPerMinute },
      { name: 'Assists', data: APIData.killAssists },
      { name: 'Headshots', data: APIData.headShots },
      { name: 'Damage', data: APIData.damage }
    ];

    const objectiveData = [
      { name: 'Captured', data: APIData.objective.captured },
      { name: 'Neutralized', data: APIData.objective.neutralized },
      { name: 'Defused', data: APIData.objective.defused },
      { name: 'Destroyed', data: APIData.objective.destroyed },
      { name: 'Attacked', data: APIData.objective.time.attacked },
      { name: 'Defended', data: APIData.objective.time.defended }
    ];

    const gameModeData = [
        { name: APIData.gamemodes[0].gamemodeName, data: APIData.gamemodes[0].winPercent },
        { name: 'Breakthrough S', data: APIData.gamemodes[4].winPercent },
        { name: APIData.gamemodes[2].gamemodeName, data: APIData.gamemodes[2].winPercent },
        { name: 'Conquest S', data: APIData.gamemodes[4].winPercent },
        { name: 'Portal', data: APIData.gamemodes[4].winPercent },
        { name: APIData.gamemodes[5].gamemodeName, data: APIData.gamemodes[5].winPercent },
    ]

    setGameModeData(gameModeData)
    setCombatData(combatData);
    setObjectiveData(objectiveData);
  }, [APIData, setCombatData, setObjectiveData, fetchedData]);

  return null; // Assuming this component is only responsible for side effects
};

export default ConstructData;







// props.setBestWeapon([{
//     name: props.APIData.weapons[0].weaponName,
//     type: props.APIData.weapons[0].type,
//     kills: props.APIData.weapons[0].kills,
//     timeEquiped: props.APIData.weapons[0].timeEquipped,   
//     img: props.APIData.weapons[0].image,
// },
// {
//     name: props.APIData.weapons[1].weaponName,
//     type: props.APIData.weapons[1].type,
//     kills: props.APIData.weapons[1].kills,
//     timeEquiped: props.APIData.weapons[1].timeEquipped,   
//     img: props.APIData.weapons[1].image,
// }]
// )