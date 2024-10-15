"use client"
import "chart.js/auto";
import {Radar} from "react-chartjs-2";

export default function RadarChart({attrs}: {attrs: any}) {
    const data = {
        labels: ["Attackl", "Defense", "Agility", "Speed", "Capacity"],
        datasets: [
            {
                label: "Attributes",
                data: [
                    attrs.Attack,
                    attrs.Defense,
                    attrs.Agility,
                    attrs.Speed,
                    attrs.Capacity
                ],
                backgroundColor: "rgba(99, 200, 132, 0.2)",
                borderColor: "rgba(99, 200, 132, 1)",
                borderWidth: 1
            }
        ]
    }

    return (
        <div>
            <Radar data={data} options={{scales: {r: { suggestedMin: 0, suggestedMax: 5}}}}/>
        </div>
    );
}