import React, { Component } from "react"
import { Bar, Line, Pie } from "react-chartjs-2"
import chartStyles from "./chart.module.css"

class PieChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: [
          "Tons of pikes fished by amatures",
          "Tons of pikes fished by proffesionals",
        ],
        datasets: [
          {
            label: "Vättern",
            backgroundColor: ["rgba(255,0,255,0.6)", "rgba(0,255,0,0.6)"],
            data: [13, 6.5],
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
        <Pie data={this.state.chartData} options={{ responsive: true }} />
      </div>
    )
  }
}

export default PieChart
