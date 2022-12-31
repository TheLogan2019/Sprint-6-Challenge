import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterBio from "./CharacterBio";
import styled from "styled-components";

const CharacterFormat = styled.div`
  h2 {
    text-align: center;
  }
`;

function Character() {
  const [characterImport, setcharacterImport] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setcharacterImport(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {characterImport.map((characterImport) => {
        return (
          <CharacterFormat key={characterImport.id}>
            <h2>{characterImport.name}</h2>
            <CharacterBio characterImport={characterImport} />
          </CharacterFormat>
        );
      })}
    </div>
  );
}

export default Character;
