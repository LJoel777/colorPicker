import React from "react";
import styled from "styled-components";
import LoadingGif from "../img/loading.gif";

const LoadingDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: white;
  left: 0px;
  top: 0px;
  z-index: 100;
  background-color: rgb(6, 148, 184);
  color: white;
  font-weight: 700;
  span {
    font-size: 29px;
  }
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    top: 35%;
    margin: 0 auto;
    img {
      width: 200px;
    }
  }
`;

const Loading = () => {
  return (
    <LoadingDiv>
      <div className="content">
        <img src={LoadingGif} alt="loading" />
        <span>Loading...</span>
      </div>
    </LoadingDiv>
  );
};

export default Loading;
