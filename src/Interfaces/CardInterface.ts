export interface ICardOutput {
  picture: string | undefined;
  loaded: boolean;
  name: string | undefined;
  types: Type[] | undefined;
  ability: Ability2[] | undefined;
}

interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Type {
  slot: number;
  type: Ability;
}

interface Ability {
  name: string;
  url: string;
}
