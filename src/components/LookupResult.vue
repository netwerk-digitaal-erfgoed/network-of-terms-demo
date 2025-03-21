<template>
  <div v-if="data">
    <div v-if="data.lookup && data.lookup[0].source.__typename === 'Source'">
      <SourceHeader :source="data.lookup[0].source" />
      <template v-if="data.lookup[0].result.__typename === 'TranslatedTerm'">
        <p class="text-center text-muted">
          {{ t('search.termFound') }} in {{ data.lookup[0].responseTimeMs }} ms
        </p>
        <TermResult
          class="mt-3"
          :term="data.lookup[0].result"
        />
      </template>
      <h3
        v-else
        class="text-center mt-5"
      >
        {{ t('api.' + data.lookup[0].result.__typename) }}
      </h3>
    </div>
    <div v-else>
      <h3 class="text-center mt-5">
        {{ t('search.sourceNotFound') }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import {useI18n} from 'vue-i18n';
import {useQuery} from 'villus';
import {LookupQuery} from '../query';
import TermResult from './TermResult.vue';
import SourceHeader from './SourceHeader.vue';
import state from '../store';

export default defineComponent({
  name: 'LookupResult',
  components: {SourceHeader, TermResult},
  props: {
    uri: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const {t, locale} = useI18n();

    if (!props.uri) {
      return {
        data: null,
        t,
      };
    }

    const {data, isFetching} = useQuery<LookupQuery>({
      query: `query ($uris: [ID]!, $languages: [Language]!) {
                lookup (uris: $uris, languages: $languages) {
                  source {
                    __typename
                    ... on Source {
                      name
                      uri
                      alternateName
                      creators {
                        name
                        alternateName
                      }
                    }
                  }
                  result {
                    __typename
                    ... on TranslatedTerm {
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
                  responseTimeMs
                }
              }`,
      variables: {
        uris: [props.uri],
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
