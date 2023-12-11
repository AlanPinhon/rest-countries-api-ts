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

export type Currencies = {
  AUD?: Currency;
  ERN?: Currency;
  WST?: Currency;
  MKD?: Currency;
  DJF?: Currency;
  JOD?: Currency;
  PKR?: Currency;
  XPF?: Currency;
  EUR?: Currency;
  MRU?: Currency;
  DKK?: Currency;
  NAD?: Currency;
  ZAR?: Currency;
  GHS?: Currency;
  SSP?: Currency;
  USD?: Currency;
  MDL?: Currency;
  KPW?: Currency;
  MOP?: Currency;
  SCR?: Currency;
  AMD?: Currency;
  ANG?: Currency;
  XAF?: Currency;
  SYP?: Currency;
  AOA?: Currency;
  TJS?: Currency;
  VES?: Currency;
  PLN?: Currency;
  SAR?: Currency;
  BAM?: Currency;
  CZK?: Currency;
  GTQ?: Currency;
  KRW?: Currency;
  NPR?: Currency;
  BWP?: Currency;
  PHP?: Currency;
  IQD?: Currency;
  LBP?: Currency;
  BIF?: Currency;
  MNT?: Currency;
  FOK?: Currency;
  PYG?: Currency;
  NOK?: Currency;
  NZD?: Currency;
  GBP?: Currency;
  GGP?: Currency;
  DZD?: Currency;
  PAB?: Currency;
  EGP?: Currency;
  ILS?: Currency;
  YER?: Currency;
  BRL?: Currency;
  NGN?: Currency;
  JPY?: Currency;
  TZS?: Currency;
  KZT?: Currency;
  SHP?: Currency;
  LKR?: Currency;
  MAD?: Currency;
  MMK?: Currency;
  COP?: Currency;
  PEN?: Currency;
  XOF?: Currency;
  KGS?: Currency;
  CNY?: Currency;
  AFN?: Currency;
  TRY?: Currency;
  LRD?: Currency;
  CLP?: Currency;
  KID?: Currency;
  CVE?: Currency;
  JEP?: Currency;
  ISK?: Currency;
  GMD?: Currency;
  VUV?: Currency;
  UYU?: Currency;
  OMR?: Currency;
  SDG?: Currency;
  INR?: Currency;
  LAK?: Currency;
  AWG?: Currency;
  KMF?: Currency;
  XCD?: Currency;
  UZS?: Currency;
  MVR?: Currency;
  GIP?: Currency;
  IDR?: Currency;
  VND?: Currency;
  MYR?: Currency;
  CKD?: Currency;
  SZL?: Currency;
  UGX?: Currency;
  MGA?: Currency;
  FJD?: Currency;
  TWD?: Currency;
  PGK?: Currency;
  RWF?: Currency;
  CDF?: Currency;
  RSD?: Currency;
  KHR?: Currency;
  AED?: Currency;
  BMD?: Currency;
  CUC?: Currency;
  CUP?: Currency;
  HKD?: Currency;
  MUR?: Currency;
  ARS?: Currency;
  NIO?: Currency;
  UAH?: Currency;
  GYD?: Currency;
  TVD?: Currency;
  LSL?: Currency;
  TOP?: Currency;
  GEL?: Currency;
  ETB?: Currency;
  DOP?: Currency;
  BZD?: Currency;
  IMP?: Currency;
  HTG?: Currency;
  BDT?: Currency;
  KWD?: Currency;
  JMD?: Currency;
  RON?: Currency;
  STN?: Currency;
  BSD?: Currency;
  MXN?: Currency;
  TMT?: Currency;
  SRD?: Currency;
  SEK?: Currency;
  BOB?: Currency;
  MZN?: Currency;
  MWK?: Currency;
  ALL?: Currency;
  ZMW?: Currency;
  CHF?: Currency;
  QAR?: Currency;
  SBD?: Currency;
  LYD?: Currency;
  BBD?: Currency;
  HNL?: Currency;
  SOS?: Currency;
  KYD?: Currency;
  KES?: Currency;
  BHD?: Currency;
  GNF?: Currency;
  RUB?: Currency;
  BND?: Currency;
  SGD?: Currency;
  ZWL?: Currency;
  BYN?: Currency;
  THB?: Currency;
  TND?: Currency;
  SLL?: Currency;
  BTN?: Currency;
  FKP?: Currency;
  CAD?: Currency;
  TTD?: Currency;
  HUF?: Currency;
  CRC?: Currency;
  BGN?: Currency;
  AZN?: Currency;
  IRR?: Currency;
}

export type Currency = {
  name:   string;
  symbol?: string;
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
