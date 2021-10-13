<template>
  <div v-if="q && data && data">
    <div
      v-for="dataset in data.terms"
      :key="dataset.source.uri"
      class="container"
    >
      <h2 class="display-5 text-center py-3">
        {{ dataset.source.name }}
        <small class="termCount">({{ t('search.termsFound', dataset.terms.length) }})</small>
      </h2>
      <div class="card-columns">
        <div
          v-for="term in dataset.terms"
          :key="term.uri"
          class="card shadow-sm"
        >
          <div class="card-body">
            <h5 class="card-title">
              <a :href="term.uri">{{ term.prefLabel.join(' • ') }}</a>
            </h5>
            <p
              v-if="term.scopeNote"
              class="card-text text-left"
            >
              {{ term.scopeNote.join(' • ') }}
            </p>

            <p
              v-if="term.altLabel.length > 0"
              class="card-text text-left"
            >
              <small class="text-muted">
                <strong>{{ t('search.altLabel') }}</strong>:
                <span
                  v-for="(altLabel, index) in term.altLabel"
                  :key="altLabel"
                >
                  {{ altLabel }}
                  <span v-if="index !== term.altLabel.length - 1"> • </span>
                </span>
              </small>
            </p>

            <RelatedTerms
              v-if="term.broader.length > 0"
              :caption="t('search.broaderTerm')"
              :terms="term.broader"
            />

            <RelatedTerms
              v-if="term.narrower.length > 0"
              :caption="t('search.narrowerTerm')"
              :terms="term.narrower"
            />

            <RelatedTerms
              v-if="term.related.length > 0"
              :caption="t('search.relatedTerm')"
              :terms="term.related"
            />

            <button
              class="btn btn-secondary btn-copy"
              :data-clipboard-text="term.uri"
            >
              {{ t('search.copyUri') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {useQuery} from 'villus';
import {useI18n} from 'vue-i18n';
import {defineComponent} from 'vue';
import ClipboardJS from 'clipboard';
import RelatedTerms from './RelatedTerms.vue';
import {TermsQuery} from '../query';

export default defineComponent({
  name: 'Results',
  components: {RelatedTerms},
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
                  }
                  terms {
                    uri
                    prefLabel
                    altLabel
                    hiddenLabel
                    scopeNote
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

    new ClipboardJS('.btn-copy');

    return {data, t};
  },
});
</script>
