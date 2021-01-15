import React from "react";
import Colors from "./Colors";

const Palette = (props) => {
  const palette = props.palette;
  console.log(palette);
  return (
    <div>
      <h1>The Oversea</h1>
      <p>MistyAamen</p>
      <p>17</p>
      <p>1</p>
      <p>2021-01-15 04:45:14</p>
      <Colors colors="s" />
    </div>
  );
};

export default Palette;
