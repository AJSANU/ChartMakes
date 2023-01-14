import React from "react";
import Charts from "../../charts/Charts";
import "../Chart.css";

import Dropdown from "../Dropdown/index";

export default function Chart3() {
  return (
    <>
      <Dropdown />
      <div className="layout">
        <div className="header">
          <h3>
            Student Performance
          </h3>
        </div>
        <h2 style={{ color: "#464646" }}>Class 1</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendY={"Activities"}
              legendX={"Percentage %"}
              type={"horizontalbar"}
              title={""}
              data={{
                labels: [
                  "Activity 1",
                  "Activity 2",
                  "Activity 3",
                  "Activity 4",
                  "Activity 5"
                ],
                datasets: [
                  {
                    data: [50, 80, 60, 50, 90, 100],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)"
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 1
                  }
                ]
              }}
            />
          </div>
        </div>
        <h2 style={{ color: "#464646" }}>Class 2</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendY={"Activitys"}
              legendX={"Percentage %"}
              type={"horizontalbar"}
              title={""}
              data={{
                labels: [
                  "Activity 1",
                  "Activity 2",
                  "Activity 3",
                  "Activity 4",
                  "Activity 5"
                ],
                datasets: [
                  {
                    label: "Percentage %",
                    data: [50, 80, 60, 50, 90, 100],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)"
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 1
                  }
                ]
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
