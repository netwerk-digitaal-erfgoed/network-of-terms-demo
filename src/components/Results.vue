<template>
  <div v-if="q && data">
    <div
      v-for="dataset in data.terms"
      :key="dataset.source.uri"
      class="container mb-5"
    >
      <h2 class="text-center">
        {{ dataset.source.name }}<small v-if="dataset.source.alternateName"> ({{ dataset.source.alternateName }})</small>
      </h2>
      <h3 class="text-center text-muted">
        {{ dataset.source.creators[0].name }}
      </h3>
      <p class="text-center text-muted">
        {{ t('search.termsFound', dataset.terms.length) }}
      </p>
      <div>
        <div
          v-for="term in dataset.terms"
          :key="term.uri"
          class="card bg-light shadow-sm mb-3"
        >
          <div class="card-body">
            <h3 class="card-title">
              {{ term.prefLabel.join(' • ') }}
            </h3>
            <p
              v-if="term.scopeNote"
              class="card-text"
            >
              {{ term.scopeNote.join(' • ') }}
            </p>

            <div
              v-if="term.altLabel.length > 0"
              class="card-text container"
            >
              <dl class="row mb-0">
                <dt>{{ t('search.altLabel', term.altLabel.length) }}:&nbsp;</dt>
                <dd>
                  <span
                    v-for="(altLabel, index) in term.altLabel"
                    :key="altLabel"
                  >
                    {{ altLabel }}
                    <span v-if="index !== term.altLabel.length - 1"> • </span>
                  </span>
                </dd>
              </dl>
            </div>

            <button
              class="btn btn-primary btn-copy"
              :data-clipboard-text="term.uri"
            >
              {{ t('search.copyUri') }}
            </button>

            <a
              :href="term.seeAlso[0] ?? term.uri"
              class="btn btn-primary ml-2"
            >
              {{ t('search.viewAtSource') }}
            </a>

            <dl class="mt-4 mb-0">
              <RelatedTerms
                v-if="term.broader.length > 0"
                :caption="t('search.broaderTerm', term.broader.length)"
                :terms="term.broader"
              />

              <RelatedTerms
                v-if="term.narrower.length > 0"
                :caption="t('search.narrowerTerm', term.narrower.length)"
                :terms="term.narrower"
              />

              <RelatedTerms
                v-if="term.related.length > 0"
                :caption="t('search.relatedTerm')"
                :terms="term.related"
              />
            </dl>
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

    new ClipboardJS('.btn-copy');

    return {data, t};
  },
});
</script>
