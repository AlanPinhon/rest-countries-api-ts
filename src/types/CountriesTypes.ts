export type CountriesData = {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
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
  car:          Car;
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

export type Car = {
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

export type Currencies = {
  AUD?: Aed;
  ERN?: Aed;
  WST?: Aed;
  MKD?: Aed;
  DJF?: Aed;
  JOD?: Aed;
  PKR?: Aed;
  XPF?: Aed;
  EUR?: Aed;
  MRU?: Aed;
  DKK?: Aed;
  NAD?: Aed;
  ZAR?: Aed;
  GHS?: Aed;
  SSP?: Aed;
  USD?: Aed;
  MDL?: Aed;
  KPW?: Aed;
  MOP?: Aed;
  SCR?: Aed;
  AMD?: Aed;
  ANG?: Aed;
  XAF?: Aed;
  SYP?: Aed;
  AOA?: Aed;
  TJS?: Aed;
  VES?: Aed;
  PLN?: Aed;
  SAR?: Aed;
  BAM?: BAM;
  CZK?: Aed;
  GTQ?: Aed;
  KRW?: Aed;
  NPR?: Aed;
  BWP?: Aed;
  PHP?: Aed;
  IQD?: Aed;
  LBP?: Aed;
  BIF?: Aed;
  MNT?: Aed;
  FOK?: Aed;
  PYG?: Aed;
  NOK?: Aed;
  NZD?: Aed;
  GBP?: Aed;
  GGP?: Aed;
  DZD?: Aed;
  PAB?: Aed;
  EGP?: Aed;
  ILS?: Aed;
  YER?: Aed;
  BRL?: Aed;
  NGN?: Aed;
  JPY?: Aed;
  TZS?: Aed;
  KZT?: Aed;
  SHP?: Aed;
  LKR?: Aed;
  MAD?: Aed;
  MMK?: Aed;
  COP?: Aed;
  PEN?: Aed;
  XOF?: Aed;
  KGS?: Aed;
  CNY?: Aed;
  AFN?: Aed;
  TRY?: Aed;
  LRD?: Aed;
  CLP?: Aed;
  KID?: Aed;
  CVE?: Aed;
  JEP?: Aed;
  ISK?: Aed;
  GMD?: Aed;
  VUV?: Aed;
  UYU?: Aed;
  OMR?: Aed;
  SDG?: BAM;
  INR?: Aed;
  LAK?: Aed;
  AWG?: Aed;
  KMF?: Aed;
  XCD?: Aed;
  UZS?: Aed;
  MVR?: Aed;
  GIP?: Aed;
  IDR?: Aed;
  VND?: Aed;
  MYR?: Aed;
  CKD?: Aed;
  SZL?: Aed;
  UGX?: Aed;
  MGA?: Aed;
  FJD?: Aed;
  TWD?: Aed;
  PGK?: Aed;
  RWF?: Aed;
  CDF?: Aed;
  RSD?: Aed;
  KHR?: Aed;
  AED?: Aed;
  BMD?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  HKD?: Aed;
  MUR?: Aed;
  ARS?: Aed;
  NIO?: Aed;
  UAH?: Aed;
  GYD?: Aed;
  TVD?: Aed;
  LSL?: Aed;
  TOP?: Aed;
  GEL?: Aed;
  ETB?: Aed;
  DOP?: Aed;
  BZD?: Aed;
  IMP?: Aed;
  HTG?: Aed;
  BDT?: Aed;
  KWD?: Aed;
  JMD?: Aed;
  RON?: Aed;
  STN?: Aed;
  BSD?: Aed;
  MXN?: Aed;
  TMT?: Aed;
  SRD?: Aed;
  SEK?: Aed;
  BOB?: Aed;
  MZN?: Aed;
  MWK?: Aed;
  ALL?: Aed;
  ZMW?: Aed;
  CHF?: Aed;
  QAR?: Aed;
  SBD?: Aed;
  LYD?: Aed;
  BBD?: Aed;
  HNL?: Aed;
  SOS?: Aed;
  KYD?: Aed;
  KES?: Aed;
  BHD?: Aed;
  GNF?: Aed;
  RUB?: Aed;
  BND?: Aed;
  SGD?: Aed;
  ZWL?: Aed;
  BYN?: Aed;
  THB?: Aed;
  TND?: Aed;
  SLL?: Aed;
  BTN?: Aed;
  FKP?: Aed;
  CAD?: Aed;
  TTD?: Aed;
  HUF?: Aed;
  CRC?: Aed;
  BGN?: Aed;
  AZN?: Aed;
  IRR?: Aed;
}

export type Aed = {
  name:   string;
  symbol: string;
}

export type BAM = {
  name: string;
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
