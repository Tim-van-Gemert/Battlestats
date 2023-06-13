import { useEffect } from "react";

const ConstructData = (props) => {
    useEffect(() => {
        props.setCombatData([
            {
                name: 'Kills',
                data: props.APIData.kills,
            },
            {
                name: 'KPMA',
                data: props.APIData.killsPerMatch,
            },
            {
                name: 'KPMI',
                data: props.APIData.killsPerMinute,
            },
            {
                name: 'Assists',
                data: props.APIData.killAssists,
            },
            {
                name: 'Headshots',
                data: props.APIData.headShots,
            },
            {
                name: 'Damage',
                data: props.APIData.damage,
            }
            ])
    },[props.fetchedData])  
  };
  
  export default ConstructData;
  