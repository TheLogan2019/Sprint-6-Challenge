import React from "react";
import styled from "styled-components";

const BioFormat = styled.div`
  div {
    text-align: center;
  }
`;

function CharacterBio(props) {
  const { characterImport } = props;

  return (
    <BioFormat>
      <div>
        <p>Gender: {characterImport.gender}</p>
        <p>Height: {characterImport.height}</p>
        <p>Mass: {characterImport.Mass}</p>
        <p>BirthYear: {characterImport.birth_year}</p>
        <p>Eye Color: {characterImport.eye_color}</p>
        <p>Hair Color: {characterImport.hair_color}</p>
        <p>Skin Color: {characterImport.skin_color}</p>
      </div>
    </BioFormat>
  );
}

export default CharacterBio;
