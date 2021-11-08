export interface TermsQuery {
  terms: [
    {
      source: {
        uri: string;
        name: string;
        alternateName: string;
        creators: Creator[];
      };
      terms: [
        {
          uri: string;
          prefLabel: string[];
          altLabel: string[];
          hiddenLabel: string[];
          scopeNote: string[];
          seeAlso: string[];
          broader: RelatedTerm[];
          narrower: RelatedTerm[];
          related: RelatedTerm[];
        },
      ],
    },
  ]
}

export interface RelatedTerm {
  uri: string;
  prefLabel: string;
}

export interface Creator {
  name: string;
  alternateName: string;
}
