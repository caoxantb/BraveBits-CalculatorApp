import React from "react";

import "../styles/CalcDisplay.css";

const CalcDisplay = (props) => {
  const { value } = props;
  return <div className="calcDisplay">{value}</div>;
};

export default CalcDisplay;
