export type CountriesData = {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  { [key: string]: Currency };
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms?:    Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  car:          SideToDrive;
  timezones:    string[];
  continents:   Continent[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  cioc?:        string;
  borders?:     string[];
  fifa?:        string;
  gini?:        { [key: string]: number };
}

export type CapitalInfo = {
  latlng?: number[];
}

export type SideToDrive = {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export type CoatOfArms = {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export type Currency = {
  name:   string;
  symbol: string;
}

export type Demonyms = {
  eng:  Eng;
  fra?: Eng;
}

export type Eng = {
  f: string;
  m: string;
}

export type Flags = {
  png:  string;
  svg:  string;
  alt?: string;
}

export type Idd = {
  root?:     string;
  suffixes?: string[];
}

export type Maps = {
  googleMaps:     string;
  openStreetMaps: string;
}

export type Name = {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

export type Translation = {
  official: string;
  common:   string;
}

export type PostalCode = {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
