import React from "react";
import {
  CardMaincontainer,
  TitleCard,
  PictureContainer,
  NameContainer,
  TypeContainer,
  AbilitiesContainer,
  InfosContainer,
  PokemonContainer,
  GenericContainer,
} from "../styles/PokemonCard.styled";
import { ICardOutput } from "../Interfaces/CardInterface";

const PokemonCard = ({
  picture,
  loaded,
  name,
  types,
  ability,
}: ICardOutput) => {
  return (
    <CardMaincontainer>
      {loaded && (
        <InfosContainer>
          <TitleCard>Results</TitleCard>
          <PokemonContainer>
            <PictureContainer>
              <img src={picture} alt="pokemon" />
            </PictureContainer>
            <NameContainer>
              <strong>Name:</strong> {name}
            </NameContainer>
            <GenericContainer>
              <strong>Type:</strong>
              {types !== undefined &&
                types.map((type, index) => (
                  <TypeContainer key={index}>{type.type.name}</TypeContainer>
                ))}
            </GenericContainer>
            <GenericContainer>
              <strong>Abilities:</strong>
              {ability !== undefined &&
                ability.map((data, index) => (
                  <AbilitiesContainer key={index}>
                    {data.ability.name}
                  </AbilitiesContainer>
                ))}
            </GenericContainer>
          </PokemonContainer>
        </InfosContainer>
      )}
    </CardMaincontainer>
  );
};

export default PokemonCard;
