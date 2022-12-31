import React from "react";
import styled from "styled-components";
import Character from "./components/Character";

const AppFormat = styled.div`
  h1 {
    text-align: center;
    color: black;
    font-size: 50px;
  }
`;

function App() {
  return (
    <AppFormat>
      <h1>REACT WARS</h1>
      <h2>
        <Character />
      </h2>
    </AppFormat>
  );
}

export default App;
