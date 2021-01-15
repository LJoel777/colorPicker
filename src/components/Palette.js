import React from "react";
import Colors from "./Colors";
import styled from "styled-components";

const PaletteDiv = styled.div`
  padding: 20px;
  display: flex;
  width: 700px;
  justify-content: space-between;
  color: white;
  line-height: 30px;
  word-break: break-all;
  border: 1px solid #3c3c6870;
  box-shadow: 1px 2px #0000005c;
  margin: 10px;
  border-radius: 20px;
  h1 {
    text-shadow: 2px 2px #0000005c;
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 15px;
  }

  span {
    font-size: 20px;
    font-weight: 700;
  }
  .rating {
    margin-top: 15px;
    display: flex;
    width: 200px;
    justify-content: space-around;
    background: #3c3c6870;
    padding: 10px;
    border-radius: 20px;
    font-weight: 700;
  }
`;

const Palette = (props) => {
  const palette = props.palette;
  console.log(palette);
  return (
    <PaletteDiv>
      <div className="infos">
        <h1>{palette.title}</h1>
        <p>
          <span>Maker:</span> {palette.userName}
        </p>
        <p>
          <span>Created at:</span> {palette.dateCreated}
        </p>
        <div className="rating">
          <p>{palette.numViews} views</p>
          <p>{palette.numVotes} vote</p>
        </div>
      </div>
      <Colors colors={palette.colors} />
    </PaletteDiv>
  );
};

export default Palette;
