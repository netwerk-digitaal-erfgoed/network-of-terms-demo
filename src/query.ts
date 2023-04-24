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

export interface Term {
  __typename: string;
  uri: string;
  prefLabel: string[];
  altLabel: string[];
  hiddenLabel: string[];
  scopeNote: string[];
  seeAlso: string[];
  broader: RelatedTerm[];
  narrower: RelatedTerm[];
  related: RelatedTerm[];
}

export interface RelatedTerm {
  uri: string;
  prefLabel: string;
}

export interface Source {
  __typename: string;
  uri: string;
  name: string;
  alternateName: string;
  description: string;
  creators: Creator[];
  features: Feature[];
}

export interface Creator {
  name: string;
  alternateName: string;
}

export interface Feature {
  type: string;
  url: string;
}
