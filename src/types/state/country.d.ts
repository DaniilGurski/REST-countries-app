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