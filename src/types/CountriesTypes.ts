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
  AUD?: ArabEmiratesDirhamsExchangeRate;
  ERN?: ArabEmiratesDirhamsExchangeRate;
  WST?: ArabEmiratesDirhamsExchangeRate;
  MKD?: ArabEmiratesDirhamsExchangeRate;
  DJF?: ArabEmiratesDirhamsExchangeRate;
  JOD?: ArabEmiratesDirhamsExchangeRate;
  PKR?: ArabEmiratesDirhamsExchangeRate;
  XPF?: ArabEmiratesDirhamsExchangeRate;
  EUR?: ArabEmiratesDirhamsExchangeRate;
  MRU?: ArabEmiratesDirhamsExchangeRate;
  DKK?: ArabEmiratesDirhamsExchangeRate;
  NAD?: ArabEmiratesDirhamsExchangeRate;
  ZAR?: ArabEmiratesDirhamsExchangeRate;
  GHS?: ArabEmiratesDirhamsExchangeRate;
  SSP?: ArabEmiratesDirhamsExchangeRate;
  USD?: ArabEmiratesDirhamsExchangeRate;
  MDL?: ArabEmiratesDirhamsExchangeRate;
  KPW?: ArabEmiratesDirhamsExchangeRate;
  MOP?: ArabEmiratesDirhamsExchangeRate;
  SCR?: ArabEmiratesDirhamsExchangeRate;
  AMD?: ArabEmiratesDirhamsExchangeRate;
  ANG?: ArabEmiratesDirhamsExchangeRate;
  XAF?: ArabEmiratesDirhamsExchangeRate;
  SYP?: ArabEmiratesDirhamsExchangeRate;
  AOA?: ArabEmiratesDirhamsExchangeRate;
  TJS?: ArabEmiratesDirhamsExchangeRate;
  VES?: ArabEmiratesDirhamsExchangeRate;
  PLN?: ArabEmiratesDirhamsExchangeRate;
  SAR?: ArabEmiratesDirhamsExchangeRate;
  BAM?: BosniaConvertibleMarksExchangeRate;
  CZK?: ArabEmiratesDirhamsExchangeRate;
  GTQ?: ArabEmiratesDirhamsExchangeRate;
  KRW?: ArabEmiratesDirhamsExchangeRate;
  NPR?: ArabEmiratesDirhamsExchangeRate;
  BWP?: ArabEmiratesDirhamsExchangeRate;
  PHP?: ArabEmiratesDirhamsExchangeRate;
  IQD?: ArabEmiratesDirhamsExchangeRate;
  LBP?: ArabEmiratesDirhamsExchangeRate;
  BIF?: ArabEmiratesDirhamsExchangeRate;
  MNT?: ArabEmiratesDirhamsExchangeRate;
  FOK?: ArabEmiratesDirhamsExchangeRate;
  PYG?: ArabEmiratesDirhamsExchangeRate;
  NOK?: ArabEmiratesDirhamsExchangeRate;
  NZD?: ArabEmiratesDirhamsExchangeRate;
  GBP?: ArabEmiratesDirhamsExchangeRate;
  GGP?: ArabEmiratesDirhamsExchangeRate;
  DZD?: ArabEmiratesDirhamsExchangeRate;
  PAB?: ArabEmiratesDirhamsExchangeRate;
  EGP?: ArabEmiratesDirhamsExchangeRate;
  ILS?: ArabEmiratesDirhamsExchangeRate;
  YER?: ArabEmiratesDirhamsExchangeRate;
  BRL?: ArabEmiratesDirhamsExchangeRate;
  NGN?: ArabEmiratesDirhamsExchangeRate;
  JPY?: ArabEmiratesDirhamsExchangeRate;
  TZS?: ArabEmiratesDirhamsExchangeRate;
  KZT?: ArabEmiratesDirhamsExchangeRate;
  SHP?: ArabEmiratesDirhamsExchangeRate;
  LKR?: ArabEmiratesDirhamsExchangeRate;
  MAD?: ArabEmiratesDirhamsExchangeRate;
  MMK?: ArabEmiratesDirhamsExchangeRate;
  COP?: ArabEmiratesDirhamsExchangeRate;
  PEN?: ArabEmiratesDirhamsExchangeRate;
  XOF?: ArabEmiratesDirhamsExchangeRate;
  KGS?: ArabEmiratesDirhamsExchangeRate;
  CNY?: ArabEmiratesDirhamsExchangeRate;
  AFN?: ArabEmiratesDirhamsExchangeRate;
  TRY?: ArabEmiratesDirhamsExchangeRate;
  LRD?: ArabEmiratesDirhamsExchangeRate;
  CLP?: ArabEmiratesDirhamsExchangeRate;
  KID?: ArabEmiratesDirhamsExchangeRate;
  CVE?: ArabEmiratesDirhamsExchangeRate;
  JEP?: ArabEmiratesDirhamsExchangeRate;
  ISK?: ArabEmiratesDirhamsExchangeRate;
  GMD?: ArabEmiratesDirhamsExchangeRate;
  VUV?: ArabEmiratesDirhamsExchangeRate;
  UYU?: ArabEmiratesDirhamsExchangeRate;
  OMR?: ArabEmiratesDirhamsExchangeRate;
  SDG?: BosniaConvertibleMarksExchangeRate;
  INR?: ArabEmiratesDirhamsExchangeRate;
  LAK?: ArabEmiratesDirhamsExchangeRate;
  AWG?: ArabEmiratesDirhamsExchangeRate;
  KMF?: ArabEmiratesDirhamsExchangeRate;
  XCD?: ArabEmiratesDirhamsExchangeRate;
  UZS?: ArabEmiratesDirhamsExchangeRate;
  MVR?: ArabEmiratesDirhamsExchangeRate;
  GIP?: ArabEmiratesDirhamsExchangeRate;
  IDR?: ArabEmiratesDirhamsExchangeRate;
  VND?: ArabEmiratesDirhamsExchangeRate;
  MYR?: ArabEmiratesDirhamsExchangeRate;
  CKD?: ArabEmiratesDirhamsExchangeRate;
  SZL?: ArabEmiratesDirhamsExchangeRate;
  UGX?: ArabEmiratesDirhamsExchangeRate;
  MGA?: ArabEmiratesDirhamsExchangeRate;
  FJD?: ArabEmiratesDirhamsExchangeRate;
  TWD?: ArabEmiratesDirhamsExchangeRate;
  PGK?: ArabEmiratesDirhamsExchangeRate;
  RWF?: ArabEmiratesDirhamsExchangeRate;
  CDF?: ArabEmiratesDirhamsExchangeRate;
  RSD?: ArabEmiratesDirhamsExchangeRate;
  KHR?: ArabEmiratesDirhamsExchangeRate;
  AED?: ArabEmiratesDirhamsExchangeRate;
  BMD?: ArabEmiratesDirhamsExchangeRate;
  CUC?: ArabEmiratesDirhamsExchangeRate;
  CUP?: ArabEmiratesDirhamsExchangeRate;
  HKD?: ArabEmiratesDirhamsExchangeRate;
  MUR?: ArabEmiratesDirhamsExchangeRate;
  ARS?: ArabEmiratesDirhamsExchangeRate;
  NIO?: ArabEmiratesDirhamsExchangeRate;
  UAH?: ArabEmiratesDirhamsExchangeRate;
  GYD?: ArabEmiratesDirhamsExchangeRate;
  TVD?: ArabEmiratesDirhamsExchangeRate;
  LSL?: ArabEmiratesDirhamsExchangeRate;
  TOP?: ArabEmiratesDirhamsExchangeRate;
  GEL?: ArabEmiratesDirhamsExchangeRate;
  ETB?: ArabEmiratesDirhamsExchangeRate;
  DOP?: ArabEmiratesDirhamsExchangeRate;
  BZD?: ArabEmiratesDirhamsExchangeRate;
  IMP?: ArabEmiratesDirhamsExchangeRate;
  HTG?: ArabEmiratesDirhamsExchangeRate;
  BDT?: ArabEmiratesDirhamsExchangeRate;
  KWD?: ArabEmiratesDirhamsExchangeRate;
  JMD?: ArabEmiratesDirhamsExchangeRate;
  RON?: ArabEmiratesDirhamsExchangeRate;
  STN?: ArabEmiratesDirhamsExchangeRate;
  BSD?: ArabEmiratesDirhamsExchangeRate;
  MXN?: ArabEmiratesDirhamsExchangeRate;
  TMT?: ArabEmiratesDirhamsExchangeRate;
  SRD?: ArabEmiratesDirhamsExchangeRate;
  SEK?: ArabEmiratesDirhamsExchangeRate;
  BOB?: ArabEmiratesDirhamsExchangeRate;
  MZN?: ArabEmiratesDirhamsExchangeRate;
  MWK?: ArabEmiratesDirhamsExchangeRate;
  ALL?: ArabEmiratesDirhamsExchangeRate;
  ZMW?: ArabEmiratesDirhamsExchangeRate;
  CHF?: ArabEmiratesDirhamsExchangeRate;
  QAR?: ArabEmiratesDirhamsExchangeRate;
  SBD?: ArabEmiratesDirhamsExchangeRate;
  LYD?: ArabEmiratesDirhamsExchangeRate;
  BBD?: ArabEmiratesDirhamsExchangeRate;
  HNL?: ArabEmiratesDirhamsExchangeRate;
  SOS?: ArabEmiratesDirhamsExchangeRate;
  KYD?: ArabEmiratesDirhamsExchangeRate;
  KES?: ArabEmiratesDirhamsExchangeRate;
  BHD?: ArabEmiratesDirhamsExchangeRate;
  GNF?: ArabEmiratesDirhamsExchangeRate;
  RUB?: ArabEmiratesDirhamsExchangeRate;
  BND?: ArabEmiratesDirhamsExchangeRate;
  SGD?: ArabEmiratesDirhamsExchangeRate;
  ZWL?: ArabEmiratesDirhamsExchangeRate;
  BYN?: ArabEmiratesDirhamsExchangeRate;
  THB?: ArabEmiratesDirhamsExchangeRate;
  TND?: ArabEmiratesDirhamsExchangeRate;
  SLL?: ArabEmiratesDirhamsExchangeRate;
  BTN?: ArabEmiratesDirhamsExchangeRate;
  FKP?: ArabEmiratesDirhamsExchangeRate;
  CAD?: ArabEmiratesDirhamsExchangeRate;
  TTD?: ArabEmiratesDirhamsExchangeRate;
  HUF?: ArabEmiratesDirhamsExchangeRate;
  CRC?: ArabEmiratesDirhamsExchangeRate;
  BGN?: ArabEmiratesDirhamsExchangeRate;
  AZN?: ArabEmiratesDirhamsExchangeRate;
  IRR?: ArabEmiratesDirhamsExchangeRate;
}

export type ArabEmiratesDirhamsExchangeRate = {
  name:   string;
  symbol: string;
}

export type BosniaConvertibleMarksExchangeRate = {
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
