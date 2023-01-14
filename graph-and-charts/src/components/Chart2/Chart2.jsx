import React from "react";
import Charts from "../../charts/Charts";
import "../Chart.css";

import Dropdown from '../Dropdown/index';

export default function Chart2() {
  return (
    <>
      <Dropdown />
      <div className="layout">
        <div className="header">
          <h3>
           Comparitive Performance
          </h3>
        </div>
        <h2 style={{ color: "#464646" }}>Students</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendY={"Students"}
              legendX={"Net Average"}
              type={"horizontalbar"}
              title={""}
              data={{
                labels: [
                  "Student 1",
                  "Student 2",
                  "Student 3",
                  "Student 4",
                  "Student 5",
                  "Student 6"
                ],
                datasets: [
                  {
                    data: [8, 5, 6, 6.5, 7.8, 9],
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
              type={"pie"}
              title={""}
              data={{
                labels: [
                  "Student 1",
                  "Student 2",
                  "Student 3",
                  "Student 4",
                  "Student 5",
                  "Student 6"
                ],
                datasets: [
                  {
                    data: [80, 23, 50, 65, 70, 90],
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
        <h2 style={{ color: "#464646" }}>Classes</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendX={"Average"}
              legendY={"Classes"}
              type={"horizontalbar"}
              title={""}
              data={{
                labels: [
                  "Class 1",
                  "Class 2",
                  "Class 3",
                  "Class 4",
                  "Class 5",
                  "Class 6"
                ],
                datasets: [
                  {
                    data: [75, 53, 65, 64, 39, 100],
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
              type={"pie"}
              title={""}
              data={{
                labels: [
                  "Class 1",
                  "Class 2",
                  "Class 3",
                  "Class 4",
                  "Class 5",
                  "Class 6"
                ],
                datasets: [
                  {
                    data: [75, 53, 65, 64, 39, 100],
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
        <h2 style={{ color: "#464646" }}>Schools</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendX={"Avergare Percnetage"}
              legendY={"Schools"}
              type={"horizontalbar"}
              title={""}
              data={{
                labels: [
                  "School 1",
                  "School 2",
                  "School 3",
                  "School 4",
                  "Schools 5",
                  "Schools 6"
                ],
                datasets: [
                  {
                    data: [85, 73, 65, 45, 90, 39],
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
              type={"pie"}
              title={""}
              data={{
                labels: [
                  "School 1",
                  "School 2",
                  "School 3",
                  "School 4",
                  "Schools 5",
                  "Schools 6"
                ],
                datasets: [
                  {
                    data: [85, 73, 65, 45, 90, 39],
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
        <h2 style={{ color: "#464646" }}>Average Percentage</h2>
        <div className="row">
          <div className="chart">
            <Charts
              legendX={"Averags"}
              legendY={"Boards"}
              type={"horizontalbar"}
              title={""}
              data={{
                labels: ["01", "02", "03", "04", "05", "06"],
                datasets: [
                  {
                    data: [95, 72, 58, 69, 78, 80],
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
              type={"pie"}
              title={""}
              data={{
                labels: ["01", "02", "03", "04", "05", "06"],
                datasets: [
                  {
                    data: [95, 72, 58, 69, 78, 80],
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
