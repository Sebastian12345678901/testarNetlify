import React, { Component } from "react"
import { Bar, Line, Pie } from "react-chartjs-2"
import chartStyles from "./chart.module.css"

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: [1990, 1994, 1998, 2002, 2006, 2010, 2014, 2016, 2019],
        datasets: [
          {
            label: "tons of Pikes fished",
            backgroundColor: "rgba(255,0,255,0.6)",
            data: [50, 47, 38, 43, 47, 52, 36, 40, 20],
          },
          {
            label: " tons of Pikes repopulated",
            backgroundColor: "rgba(0,255,0,0.6)",
            data: [0, 3, 12, 7, 3, 0, 14, 10, 30],
          },
        ],
      },
    }
  }
  render() {
    return (
      <div
        className={chartStyles.centered}
        style={{ position: "relative", width: 600, height: 550 }}
      >
        <Bar data={this.state.chartData} options={{ responsive: true }} />
      </div>
    )
  }
}

export default BarChart
