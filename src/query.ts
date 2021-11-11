export interface TermsQuery {
  terms: [
    {
      source: Source,
      terms: Term[],
    },
  ]
}

export interface LookupQuery {
  lookup: [
    {
      source: Source,
      result: Term,
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
  creators: Creator[];
}

export interface Creator {
  name: string;
  alternateName: string;
}
