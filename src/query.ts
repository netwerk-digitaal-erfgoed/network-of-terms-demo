export interface TermsQuery {
  terms: [
    {
      source: {
        uri: string;
        name: string;
      };
      terms: [
        {
          uri: string;
          prefLabel: string[];
          altLabel: string[];
          hiddenLabel: string[];
          scopeNote: string[];
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
