import React, { Component } from "react"
import { Bar, Line, Pie } from "react-chartjs-2"
import chartStyles from "./chart.module.css"
import BarChart from "./barChart"

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: [1990, 1994, 1998, 2002, 2006, 2010, 2014, 2016, 2019],
        datasets: [
          {
            label: "New amature fishers",
            backgroundColor: "rgba(0, 255, 0, 0.3)",
            data: [
              50000,
              45000,
              37000,
              39000,
              32000,
              27000,
              26500,
              30000,
              26000,
            ],
          },
          {
            label: "Total total amature fishers",
            backgroundColor: "rgba(255,0,255,0.6)",
            data: [
              50000,
              45000,
              32000,
              34000,
              29000,
              26000,
              25000,
              28500,
              24500,
            ],
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
        <Line data={this.state.chartData} options={{ responsive: true }} />
      </div>
    )
  }
}

export default LineChart
