import React, { useState, useEffect } from "react";
import axios from "axios";
import Palette from "./Palette";
import Loading from "./Loading";
import styled from "styled-components";
import screen from "../helpers/ScreenSizes";

const MainDiv = styled.div`
  .title {
    text-shadow: 2px 2px #0000005c;
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
  @media screen and (${screen.small}) {
    .title {
      font-size: 40px;
    }
  }
`;

const Main = () => {
  const COLOR_LOVERS_API = "http://www.colourlovers.com/api/palettes/new?format=json&numResults=10";
  const HEROKU_CORS_HELPER = "https://cors-anywhere.herokuapp.com";
  const [palets, setPalets] = useState([]);
  const [loading, setLoading] = useState(false);
  const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [resultOffset, setResultOffset] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading) {
      setResultOffset(resultOffset + 10);
      getData();
    }
  };

  const getData = () => {
    setLoading(true);
    axios(`${HEROKU_CORS_HELPER}/${COLOR_LOVERS_API}&resultOffset=${resultOffset}`)
      .then((res) => {
        setPalets(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <MainDiv>
      <h1 className="title">ColorLovers Palettes</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          {palets.map((palette, index) => (
            <Palette palette={palette} key={index} />
          ))}
        </div>
      )}
    </MainDiv>
  );
};

export default Main;
