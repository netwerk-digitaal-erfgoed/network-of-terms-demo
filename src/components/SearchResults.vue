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
          <ExclamationCircleIcon class="icon icon-text" />
          <router-link
            :to="{name: 'faq1', hash: '#timeout'}"
            class="alert-link"
          >
            {{ t('api.' + dataset.result.__typename, t('api.Error')) }}
          </router-link>
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
      query: `query Terms ($sources: [ID]!, $query: String!, $languages: [Language!]) {
                terms (sources: $sources query: $query languages: $languages) {
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
                    ... on TranslatedTerms {
                      terms {
                        uri
                        prefLabel { language value }
                        altLabel { language value }
                        hiddenLabel { language value }
                        scopeNote { language value }
                        seeAlso
                        broader {
                          uri
                          prefLabel { language value }
                        }
                        narrower {
                          uri
                          prefLabel { language value }
                        }
                        related {
                          uri
                          prefLabel { language value }
                        }
                        exactMatch {
                          uri
                          prefLabel { language value }
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
        languages: [...new Set([locale.value, 'nl', 'en'])],
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
