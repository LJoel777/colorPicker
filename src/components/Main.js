import React, { useState, useEffect } from "react";
import axios from "axios";
import Palette from "./Palette";
import Loading from "./Loading";
import styled from "styled-components";

const MainDiv = styled.div`
  .title {
    padding: 20px;
    text-align: center;
    font-weight: 400;
    color: white;
    font-size: 50px;
  }
  .container {
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
  }
`;

const Main = () => {
  const COLOR_LOVERS_API = "http://www.colourlovers.com/api/palettes/new?format=json&numResults=10";
  const HEROKU_CORS_HELPER = "https://cors-anywhere.herokuapp.com";
  const [palets, setPalets] = useState([]);
  const [loading, setLoading] = useState(false);
  const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let resultOffset = 0;

  useEffect(() => {
    apiRequest();
  }, [resultOffset]);

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      resultOffset += 10;
      apiRequest();
    }
  };

  const apiRequest = () => {
    // setLoading(true);
    // axios(`${HEROKU_CORS_HELPER}/${COLOR_LOVERS_API}&resultOffset=${resultOffset}`)
    //   .then((res) => {
    //     setPalets(res.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setLoading(false);
    //   });
  };

  return (
    <MainDiv>
      <h1 className="title">ColorLovers Palettes</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          {list.map((palette, index) => (
            <Palette palette={palette} key={index} />
          ))}
        </div>
      )}
    </MainDiv>
  );
};

export default Main;
