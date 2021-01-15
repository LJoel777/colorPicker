import React from "react";
import styled from "styled-components";
import screen from "../helpers/ScreenSizes";

const ColorsDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-left: 20px;
  .color {
    width: 30px;
    height: 100px;
  }

  @media screen and (${screen.small}) {
    padding-left: 0px;
    .color {
      margin-top: 10px;
      width: 45px;
    }
  }
`;

const Colors = (props) => {
  const colors = props.colors;
  return (
    <ColorsDiv>
      {colors.map((color, index) => (
        <div className="color" style={{ background: `#${color}` }} key={index}></div>
      ))}
    </ColorsDiv>
  );
};

export default Colors;
