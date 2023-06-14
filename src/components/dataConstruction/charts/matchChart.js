import { useEffect } from "react"
import { Chart } from "chart.js";
const MatchChart = ({mapGraphData}) => {
    useEffect(() => {
        let ctx = document.getElementById('myChart').getContext('2d');
        console.log(mapGraphData)

        let matchChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: mapGraphData[0].data,
                datasets: [{
                    data: mapGraphData[3].data,
                    label: "Matches",
                    borderColor: "rgb(62,149,205)",
                    backgroundColor: "rgb(62,149,205,0.1)",
                }, {
                    data: mapGraphData[1].data,
                    label: "Wins",
                    borderColor: "rgb(60,186,159)",
                    backgroundColor: "rgb(60,186,159,0.1)",
                }, {
                    data: mapGraphData[2].data,
                    label: "Losses",
                    borderColor: "rgb(255,165,0)",
                    backgroundColor: "rgb(255,165,0,0.1)",
                }
                ]
            },
        });
    }, [mapGraphData])


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