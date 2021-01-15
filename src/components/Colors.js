import React from "react";
import styled from "styled-components";

const ColorsDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100px;
  .color {
    width: 10px;
    height: 20px;
  }
`;

const Colors = (props) => {
  const colors = ["9F1F63", "D61B5B", "F6DC32", "F69C1F", "67B7A8"];
  return (
    <ColorsDiv>
      <div className="color" style={{ background: `#${colors[0]}` }}></div>
      <div className="color" style={{ background: `#${colors[1]}` }}></div>
      <div className="color" style={{ background: `#${colors[2]}` }}></div>
      <div className="color" style={{ background: `#${colors[3]}` }}></div>
      <div className="color" style={{ background: `#${colors[4]}` }}></div>
    </ColorsDiv>
  );
};

export default Colors;
