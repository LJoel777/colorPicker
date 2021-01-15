import React from "react";
import styled from "styled-components";

const ColorsDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-left: 20px;
  .color {
    width: 30px;
    height: 100px;
  }
`;

const Colors = (props) => {
  const colors = props.colors;
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
