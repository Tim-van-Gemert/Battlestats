import { useEffect } from "react";

const ConstructData = (props) => {
  const { APIData, setCombatData, setObjectiveData, fetchedData, setGameModeData, setClassData, setMapData } = props;

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
 
    const classData = [
        { name: APIData.classes[0].characterName, data: Math.round(APIData.classes[0].secondsPlayed / 60 / 60) + 'H'},
        { name: APIData.classes[1].characterName, data: Math.round(APIData.classes[1].secondsPlayed / 60 / 60) + 'H'},
        { name: APIData.classes[2].characterName, data: Math.round(APIData.classes[2].secondsPlayed / 60 / 60) + 'H'},
        { name: APIData.classes[3].characterName, data: Math.round(APIData.classes[3].secondsPlayed / 60 / 60) + 'H'},
        { name: APIData.classes[4].characterName, data: Math.round(APIData.classes[4].secondsPlayed / 60 / 60) + 'H'},
        { name: APIData.classes[5].characterName, data: Math.round(APIData.classes[5].secondsPlayed / 60 / 60) + 'H'},
    ]

    const mapData = [
        { name: APIData.maps[0].mapName, data: APIData.maps[0].winPercent },
        { name: APIData.maps[1].mapName, data: APIData.maps[1].winPercent },
        { name: APIData.maps[2].mapName, data: APIData.maps[2].winPercent },
        { name: APIData.maps[3].mapName, data: APIData.maps[3].winPercent },
        { name: APIData.maps[4].mapName, data: APIData.maps[4].winPercent },
        { name: APIData.maps[5].mapName, data: APIData.maps[5].winPercent },
    ]

    setGameModeData(gameModeData)
    setCombatData(combatData);
    setObjectiveData(objectiveData);
    setClassData(classData)
    setMapData(mapData)
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