import React, { useState, useEffect } from "react";
import axios from "axios";
import Palette from "./Palette";
import Loading from "./Loading";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Main = () => {
  const COLOR_LOVERS_API = "http://www.colourlovers.com/api/palettes/new?format=json&numResults=10";
  const HEROKU_CORS_HELPER = "https://cors-anywhere.herokuapp.com";
  const [palets, setPalets] = useState([]);
  const [loading, setLoading] = useState(false);
  const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let resultOffset = 0;

  useEffect(() => {
    console.log("most");
    apiRequest();
  }, [resultOffset]);

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

  return <MainDiv>{loading ? <Loading /> : list.map((palette, index) => <Palette palette={palette} key={index} />)}</MainDiv>;
};

export default Main;
