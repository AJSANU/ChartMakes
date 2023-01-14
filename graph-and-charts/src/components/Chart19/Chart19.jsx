import React from "react";
import Charts from "../../charts/Charts";
import "../Chart.css";

import Dropdown from '../Dropdown/index';

export default function Chart19() {
  return (
    <>
    <Dropdown />
      <div className="layout">
        <div className="header">
          <h3>
           Graphical statistics of correct answers and errors by evaluation, year and series
          </h3>
        </div>
        <h2 style={{ color: "#464646" }}>5th Year - 4th Grade (Evaluation 1)</h2>
        <div className="row">
          <div className="chart">
            <Charts
              type={"pie"}
              title={""}
              data={{
                labels: ["Errors", "Hits"],
                datasets: [
                  {
                    data: [12, 19],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(75, 192, 192, 0.2)"
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(75, 192, 192, 1)"
                    ],
                    borderWidth: 1
                  }
                ]
              }}
            />
          </div>
          <div className="chart">
            <Charts
              legendY={"Quantity"}
              legendX={"Answers"}
              type={"bar"}
              title={""}
              data={{
                labels: ["Errors", "Hits"],
                datasets: [
                  {
                    data: [19, 12],
                    backgroundColor: [
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(255, 99, 132, 0.2)"
                    ],
                    borderColor: [
                      "rgba(75, 192, 192, 1)",
                      "rgba(255, 99, 132, 1)"
                    ],
                    borderWidth: 1
                  }
                ]
              }}
            />
          </div>
        </div>
        <h2 style={{ color: "#464646" }}>5th Year - 4th Grade (Evaluation 1)</h2>
        <div className="row">
          <div className="chart">
            <Charts
              type={"pie"}
              title={""}
              data={{
                labels: ["Errors", "Answers"],
                datasets: [
                  {
                    data: [30, 12],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(75, 192, 192, 0.2)"
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(75, 192, 192, 1)"
                    ],
                    borderWidth: 1
                  }
                ]
              }}
            />
          </div>
          <div className="chart">
            <Charts
              legendY={"Questions"}
              legendX={"Response"}
              type={"bar"}
              title={""}
              data={{
                labels: ["Errors", "Answer"],
                datasets: [
                  {
                    data: [12, 30],
                    backgroundColor: [
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(255, 99, 132, 0.2)"
                    ],
                    borderColor: [
                      "rgba(75, 192, 192, 1)",
                      "rgba(255, 99, 132, 1)"
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
