import { useEffect } from "react"
import { Chart } from "chart.js";
const MatchChart = ({playerData}) => {
    useEffect(() => {
        let ctx = document.getElementById('myChart').getContext('2d');
        const maps = [];
        const wins = [];
        const losses = [];
        const amountPlayed = [];
        playerData.maps.map((m) => {
            maps.push(m.mapName);
            wins.push(m.wins);
            losses.push(m.losses);
            amountPlayed.push(m.matches);
        })  

  


        let matchChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: maps,
                datasets: [{
                    data: amountPlayed,
                    label: "Matches",
                    borderColor: "rgb(62,149,205)",
                    backgroundColor: "rgb(62,149,205,0.1)",
                }, {
                    data: wins,
                    label: "Wins",
                    borderColor: "rgb(60,186,159)",
                    backgroundColor: "rgb(60,186,159,0.1)",
                }, {
                    data: losses,
                    label: "Losses",
                    borderColor: "rgb(255,165,0)",
                    backgroundColor: "rgb(255,165,0,0.1)",
                }
                ]
            },
        });
    }, [])


    return (
        <>
            {/* Filled line chart */}
            <div className="w-full h-full flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-full my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default MatchChart;