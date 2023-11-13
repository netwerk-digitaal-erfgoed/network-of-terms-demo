<template>
  <div class="list-group">
    <a
      v-for="source in reconciliationSources"
      :key="source.uri"
      class="list-group-item list-group-item-action"
      style="text-decoration: none"
    >
      <div class="d-flex pb-1 w-100 justify-content-between">
        <h5 class="mb-1">{{ source.name }}
          <small class="text-muted">{{ source.creators[0].alternateName }}</small>
        </h5>
        <div>
          <CopyButton
            :text="source.features[0].url"
            class="btn btn-sm btn-primary"
            label="faq.copyUrl"
          />
          <a
            :href="source.mainEntityOfPage"
            class="btn btn-sm btn-primary ml-2"
          >
            {{ t('search.viewAtSource') }}
            <ExternalLinkIcon class="icon" />
          </a>
        </div>
      </div>
      <p>{{ source.description }}</p>
      <pre class="small mb-1 text-muted pre-scrollable">{{ source.features[0].url }}</pre>
    </a>
  </div>
</template>

<script lang="ts">
import {useClient, useQuery} from 'villus';
import {defineComponent, ref} from 'vue';
import {Feature, Source} from '../query';
import {useI18n} from 'vue-i18n';
import CopyButton from './CopyButton.vue';
import {ExternalLinkIcon} from '@heroicons/vue/outline';

export default defineComponent({
  name: "ReconciliationEndpoints",
  components: {ExternalLinkIcon, CopyButton},
  async setup() {
    const {t} = useI18n();
    useClient({
      url: import.meta.env.VITE_GRAPHQL_URL,
    });
    const result = await useQuery({query: 'query Sources { sources { name alternateName mainEntityOfPage description uri creators { uri alternateName } features { type url } } }'});
    const reconciliationSources = result.data.value.sources.filter((source: Source) => source.features.some((feature: Feature) => feature.type === 'RECONCILIATION'));

    return {t, reconciliationSources, copied: ref(false)};
  },
});
</script>

<style scoped>
svg {
  width: 1em;
  height: 1em;
}
a.btn {
  text-decoration: none;
}
</style>
