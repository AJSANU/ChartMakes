import React from "react";
import Charts from "../../charts/Charts";
import "../Chart.css";

import Dropdown from "../Dropdown/index";

export default function Chart9() {
  return (
    <>
      <Dropdown />
      <div className="layout">
        <div className="header">
          <h3>Results of class and student assessments</h3>
        </div>
        <h2 style={{ color: "#464646" }}>Classes</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendY={"Evaluations"}
              legendX={"Class Average"}
              type={"horizontalbar"}
              title={"class 1"}
              data={{
                labels: [
                  "Evaluations 1",
                  "Evaluations 2",
                  "Evaluations 3",
                  "Evaluations 4",
                  "Evaluations 5"
                ],
                datasets: [
                  {
                    data: [5, 8, 6, 5, 9, 10],
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
              legendY={"Evaluations"}
              legendX={"class average"}
              type={"horizontalbar"}
              title={"class 2"}
              data={{
                labels: ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5"],
                datasets: [
                  {
                    data: [5, 8, 6, 5, 9, 10],
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
        <h2 style={{ color: "#464646" }}>Students</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendY={"Notes"}
              legendX={"Evaluation"}
              type={"bar"}
              title={"Student 1"}
              data={{
                labels: [
                  "Evaluation 1",
                  "Evaluation 2",
                  "Evaluation 3",
                  "Evaluation 4",
                  "Evaluation 5",
                  "Evaluation 6"
                ],
                datasets: [
                  {
                    data: [5, 7, 7.5, 9, 4, 8, 10],
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
              legendY={"NoNotestas"}
              legendX={"Evaluation"}
              type={"bar"}
              title={"Student 2"}
              data={{
                labels: [
                  "Evaluation 1",
                  "Evaluation 2",
                  "Evaluation 3",
                  "Evaluation 4",
                  "Evaluation 5",
                  "Evaluation 6"
                ],
                datasets: [
                  {
                    data: [8, 9, 5.9, 8, 7, 4, 10],
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
