import {i18n} from './main';

export interface TermsQueryResult {
  terms: [
    {
      source: Source,
      result: Terms | Error,
      responseTimeMs: number,
    },
  ]
}

export interface Terms {
  terms: Term[];
}

export interface Error {
  __typename: string;
  message: string;
}

export interface LookupQuery {
  lookup: [
    {
      source: Source,
      result: Term,
      responseTimeMs: number,
    },
  ]
}

export interface LanguageString {
  language: string;
  value: string;
}

export interface Term {
  __typename: string;
  uri: string;
  prefLabel: LanguageString[];
  altLabel: LanguageString[];
  hiddenLabel: LanguageString[];
  scopeNote: LanguageString[];
  seeAlso: string[];
  broader: RelatedTerm[];
  narrower: RelatedTerm[];
  related: RelatedTerm[];
  exactMatch: RelatedTerm[];
}

export interface RelatedTerm {
  uri: string;
  prefLabel: LanguageString[];
}

export interface Source {
  __typename: string;
  uri: string;
  name: string;
  alternateName: string;
  description: string;
  creators: Creator[];
  features: Feature[];
  genres: Genre[];
}

export interface Creator {
  name: string;
  alternateName: string;
}

export interface Feature {
  type: string;
  url: string;
}

export interface Genre {
  uri: string;
  name: string;
}

export const filterLanguageStrings = (languageStrings: LanguageString[]) => {
  const preferredValues = languageStrings.filter(languageString => languageString.language === i18n.global.locale);
  if (preferredValues.length > 0) {
    return preferredValues.map(languageString => languageString.value);
  }

  return languageStrings.map(languageString => languageString.value);
}
