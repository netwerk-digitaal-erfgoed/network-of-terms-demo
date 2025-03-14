<template>
  <div v-if="q && data">
    <div
      v-for="dataset in data.terms"
      :key="dataset.source.uri"
      class="container mb-5 mt-5"
    >
      <SourceHeader :source="dataset.source" />
      <template v-if="'terms' in dataset.result">
        <p class="text-center text-muted">
          {{ t('search.termsFound', dataset.result.terms.length) }} (in {{ dataset.responseTimeMs }} ms)
        </p>
        <TermResult
          v-for="term in dataset.result.terms"
          :key="term.uri"
          :term="term"
        />
      </template>
      <template v-else>
        <div
          class="text-center alert alert-danger"
          role="alert"
        >
          <ExclamationCircleIcon class="icon" />
          {{ t('api.' + dataset.result.__typename, 'api.Error') }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {useQuery} from 'villus';
import {useI18n} from 'vue-i18n';
import {defineComponent, reactive} from 'vue';
import {TermsQueryResult} from '../query';
import TermResult from './TermResult.vue';
import SourceHeader from './SourceHeader.vue';
import {ExclamationCircleIcon} from '@heroicons/vue/24/outline';
import state from '../store';

export default defineComponent({
  name: 'SearchResults',
  components: {SourceHeader, TermResult, ExclamationCircleIcon},
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
    const {t, locale} = useI18n();

    if (!props.q || !props.datasets) {
      return {
        data: null,
        t,
      };
    }

    const {data, isFetching} = useQuery<TermsQueryResult>({
      query: `query Terms ($sources: [ID]!, $query: String!) {
                terms (sources: $sources query: $query queryMode: OPTIMIZED) {
                  source {
                    name
                    uri
                    alternateName
                    description
                    creators {
                      name
                      alternateName
                    }
                  }
                  result {
                    ... on Terms {
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
                        exactMatch {
                          uri
                          prefLabel
                        }
                      }
                    }
                    ... on Error {
                      __typename
                      message
                    }
                  }
                  responseTimeMs
                }
              }`,
      variables: {
        sources: props.datasets,
        query: props.q,
        locale: locale.value,
      },
      context: {
        headers: reactive({'Accept-Language': locale}),
      },
    });

    return {data, isFetching, t};
  },
  watch: {
    isFetching(newState) {
      state.loading = newState;
    },
  },
});
</script>
