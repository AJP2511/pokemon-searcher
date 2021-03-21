import styled from "styled-components";

export const MainContainer = styled.div`
  background: #f0efb5;
  height: 100vh;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
`;

export const Title = styled.h1`
  margin: 30px auto;
  font-size: 4rem;
  color: #feca1b;
  text-align: center;
  font-family: "chango";
  -webkit-text-stroke-color: #395ba8;
  -webkit-text-stroke-width: 2px;
`;

export const InputPokemonName = styled.input`
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  outline: none;
  border-radius: 5px;
  margin-bottom: 30px;
  border: 2px solid #feca1b;
`;

export const ButtonSearch = styled.button`
  border: none;
  color: #fbfbfb;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  background-color: #4a2ff0;
  font-size: 1.125rem;
  font-weight: bold;
  transition: all 400ms ease;
  cursor: pointer;

  &:hover {
    background-color: #feca1b;
    color: #666;
  }
`;

export const OutputCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
