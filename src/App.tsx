import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import { IPkmApi } from "./Interfaces/PkmInterface";
import {
  MainContainer,
  ButtonSearch,
  InputPokemonName,
  Title,
  SearchContainer,
  OutputCardContainer,
} from "./styles/App.styled";

const App = () => {
  const [name, setName] = useState<string>("");
  const [pkm, setPkm] = useState<IPkmApi | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleClick = () => {
    const getPkm = async () => {
      const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data: IPkmApi = await request.json();
      setPkm(data);
      setIsLoaded(true);
    };
    getPkm();
  };

  return (
    <MainContainer>
      <SearchContainer>
        <Title>Pokémon Searcher</Title>
        <InputPokemonName
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value.toLowerCase())}
          placeholder="Search a pokémon"
        />
        <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
      </SearchContainer>
      <OutputCardContainer>
        <PokemonCard
          ability={pkm?.abilities}
          types={pkm?.types}
          name={pkm?.name}
          loaded={isLoaded}
          picture={pkm?.sprites.front_default}
        />
      </OutputCardContainer>
    </MainContainer>
  );
};

export default App;
