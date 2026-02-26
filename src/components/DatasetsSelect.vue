<template>
  <select
    id="datasets"
    v-model="state.selectedDatasets"
    class="form-control form-control-lg selectpicker"
    data-live-search="true"
    :data-deselect-all-text="t('search.selectNone')"
    :data-select-all-text="t('search.selectAll')"
    data-actions-box="true"
    :title="t('search.placeholderDatasets')"
    multiple
    required
  >
    <template v-if="data">
      <DatasetOption
        v-for="dataset in data.sources"
        :key="dataset.uri"
        :dataset="dataset"
      />
    </template>
  </select>
</template>

<script lang="ts" setup>
import {useI18n} from 'vue-i18n';
import {useQuery} from 'villus';
import state from '../store';
import DatasetOption from './DatasetOption.vue';
import {onUpdated, reactive, watch} from 'vue';

const {t, locale} = useI18n();
const variables = reactive({locale: locale}); // Use query variables to cache per locale and re-fetch when locale changes.
const headers = reactive({'Accept-Language': locale});
const {data} = useQuery({
  query: 'query Sources { sources { name alternateName uri creators { uri alternateName } status { isAvailable } features { type } genres { uri name } } }',
  context: {
    headers,
  },
  variables,
});

watch(data, (newData) => {
  if (newData?.sources) {
    state.sources = newData.sources;
  }
});

watch(locale, async () => {
  // The select doesn't pick up the change of its HTML select element's title (= placeholder),
  // so refresh the placeholder manually.
  $('#datasets').selectpicker({
    title: t('search.placeholderDatasets'),
  });
  $('#datasets').selectpicker('refresh');
});

onUpdated(() => {
  // Disable HTML sanitization to allow SVG icons in data-content.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ($.fn.selectpicker.Constructor.DEFAULTS as any).sanitize = false;

  $('#datasets').selectpicker('show');

  // Refresh select after options have loaded.
  $('#datasets').selectpicker('refresh');

  $('#datasets').parent().find('.bs-searchbox input').on('input', (event) => $(event.target).attr('spellcheck', 'false'));
});
</script>
