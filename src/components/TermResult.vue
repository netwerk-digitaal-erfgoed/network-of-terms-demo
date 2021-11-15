<template>
  <div
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
        @click="copied=true"
        @mouseout="copied=false"
      >
        {{ t('search.copyUri') }}
        <ClipboardCheckIcon
          v-if="copied"
          class="icon"
        />
        <ClipboardIcon
          v-else
          class="icon"
        />
      </button>
      <a
        :href="term.seeAlso[0] ?? term.uri"
        class="btn btn-primary ml-2"
      >
        {{ t('search.viewAtSource') }}
        <ExternalLinkIcon class="icon" />
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
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
import {Term} from '../query';
import {useI18n} from 'vue-i18n';
import RelatedTerms from './RelatedTerms.vue';
import ClipboardJS from 'clipboard';
import {ClipboardCheckIcon, ClipboardIcon, ExternalLinkIcon} from '@heroicons/vue/outline';

export default defineComponent({
  name: 'TermResult',
  components: {RelatedTerms, ClipboardIcon, ClipboardCheckIcon, ExternalLinkIcon},
  props: {
    term: {
      type: Object as PropType<Term>,
      required: true,
    },
  },
  setup() {
    const {t} = useI18n();
    new ClipboardJS('.btn-copy');

    return {t, copied: ref(false)};
  },
});
</script>

<style scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
