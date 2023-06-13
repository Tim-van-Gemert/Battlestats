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

        props.setBestWeapon([{
            name: props.APIData.weapons[0].weaponName,
            type: props.APIData.weapons[0].type,
            kills: props.APIData.weapons[0].kills,
            timeEquiped: props.APIData.weapons[0].timeEquipped,   
            img: props.APIData.weapons[0].image,
        },
        {
            name: props.APIData.weapons[1].weaponName,
            type: props.APIData.weapons[1].type,
            kills: props.APIData.weapons[1].kills,
            timeEquiped: props.APIData.weapons[1].timeEquipped,   
            img: props.APIData.weapons[1].image,
        }]
        )
    }, [props.fetchedData])
};

export default ConstructData;
