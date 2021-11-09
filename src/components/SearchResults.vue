<template>
  <div v-if="q && data">
    <div
      v-for="dataset in data.terms"
      :key="dataset.source.uri"
      class="container mb-5 mt-5"
    >
      <SourceHeader :source="dataset.source" />
      <p class="text-center text-muted">
        {{ t('search.termsFound', dataset.terms.length) }}
      </p>
      <TermResult
        v-for="term in dataset.terms"
        :key="term.uri"
        :term="term"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {useQuery} from 'villus';
import {useI18n} from 'vue-i18n';
import {defineComponent} from 'vue';
import {TermsQuery} from '../query';
import TermResult from './TermResult.vue';
import SourceHeader from './SourceHeader.vue';

export default defineComponent({
  name: 'SearchResults',
  components: {SourceHeader, TermResult},
  props: {
    q: {
      type: String,
      default: null,
    },
    datasets: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const {t} = useI18n();

    if (!props.q || !props.datasets) {
      return {
        data: null,
        t,
      };
    }

    const {data} = useQuery<TermsQuery>({
      query: `query Terms ($sources: [ID]!, $query: String!) {
                terms (sources: $sources query: $query) {
                  source {
                    name
                    uri
                    alternateName
                    creators {
                      name
                      alternateName
                    }
                  }
                  terms {
                    uri
                    prefLabel
                    altLabel
                    hiddenLabel
                    scopeNote
                    seeAlso
                    broader {
                      uri
                      prefLabel
                    }
                    narrower {
                      uri
                      prefLabel
                    }
                    related {
                      uri
                      prefLabel
                    }
                  }
                }
              }`,
      variables: {
        sources: props.datasets,
        query: props.q,
      },
    });

    return {data, t};
  },
});
</script>
