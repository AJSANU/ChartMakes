import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const [ativar, setAtivar] = useState(true);

  const handleAtivar = () => {
    setAtivar(!ativar);
  };

  return (
    <div className="dropdown">
      <button onClick={handleAtivar} className="dropbtn">
        Categories
      </button>
      <div
        style={ativar ? { display: "none" } : { display: "grid" }}
        className="content"
      >
        <Link to="/1">Horizontal Bar 1</Link>
        <Link to="/2">Horizontal Bar/pie chart</Link>
        <Link to="/3">Horizontal Bar 2</Link>
        <Link to="/4">Tabular Data</Link>
        <Link to="/6">Vertical chart</Link>
        <Link to="/9">Horizontal vertical graph</Link>
        <Link to="/19">Pie Chart</Link>
      </div>
    </div>
  );
};

export default Dropdown;
