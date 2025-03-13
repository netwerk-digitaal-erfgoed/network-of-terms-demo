<template>
  <div v-if="data">
    <div v-if="data.lookup && data.lookup[0].source.__typename === 'Source'">
      <SourceHeader :source="data.lookup[0].source" />
      <template v-if="data.lookup[0].result.__typename === 'Term'">
        <p class="text-center text-muted">
          {{ t('search.termFound') }} in {{ data.lookup[0].responseTimeMs }} ms
        </p>
        <TermResult
          v-if="data.lookup[0].result.__typename === 'Term'"
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
      query: `query ($uris: [ID]!) {
                lookup (uris: $uris) {
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
                    ... on Term {
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
                  responseTimeMs
                }
              }`,
      variables: {
        uris: [props.uri],
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
