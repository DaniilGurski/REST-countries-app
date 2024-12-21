export type NativeName = {
  official: string;
  common: string;
}

export type Name = {
  common: string;
  official: string;
  nativeName: {
    [key: string]: NativeName;
  };
}

export type Flags = {
  png: string,
  svg: string,
  alt: string,
}

export type Country = {
  name: Name;
  capital: string[];
  region: string;
  population: number;
  flags: Flags,
}


export type CountryExtended = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      }
    }
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  flags: Flags,
  borders: string[],
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    }
  },
  languages: {
    [key: string]: string;
  },
  tld: string[],
}