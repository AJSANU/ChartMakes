import React from "react";
import Charts from "../../charts/Charts";
import "../Chart.css";

import Dropdown from "../Dropdown/index";

export default function Chart6() {
  return (
    <>
      <Dropdown />
      <div className="layout">
        <div className="header">
          <h3>
            List of unfulfilled activities, per student and by component Curriculum
          </h3>
        </div>
          <div className="row">
            <div className="chart">
              <Charts
                legendY={"% of Unfulfilled Activitiess"}
                legendX={"Componente Curricular"}
                type={"bar"}
                title={"Student 1"}
                data={{
                  labels: [
                    "Mathematics",
                    "English",
                    "History",
                    "French",
                    "Arts",
                    "Geography"
                  ],
                  datasets: [
                    {
                      data: [50, 70, 70.5, 90, 40, 80, 100],
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
            <div className="chart">
              <Charts
                legendY={"% of fullfilled activity"}
                legendX={"Componente Curricular"}
                type={"bar"}
                title={"Student 2"}
                data={{
                  labels: [
                    "Mathematics",
                    "English",
                    "History",
                    "French",
                    "Arts",
                    "Geography"
                  ],
                  datasets: [
                    {
                      data: [80, 90, 50.9, 80, 70, 40, 100],
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
