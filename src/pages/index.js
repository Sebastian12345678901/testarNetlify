import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import BarChart from "../components/barChart"
import LineChart from "../components/lineChart"
import PieChart from "../components/pieChart"

export default () => (
  <Layout style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <Container>
      <img src="gädda.jpeg" />
      <p>
        Here you can see some statistics over pikefishing and, pikefishers over
        the years.
      </p>
      <BarChart />
      <LineChart />
      <PieChart />
    </Container>
  </Layout>
)
