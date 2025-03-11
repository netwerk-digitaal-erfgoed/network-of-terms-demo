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
  query: 'query Sources { sources { name alternateName uri creators { uri alternateName } } }',
  context: {
    headers,
  },
  variables,
});

watch(locale, async () => {
  // The select doesn't pick up the change of its HTML select element’s title (= placeholder),
  // so refresh the placeholder manually.
  $('select').selectpicker({
    title: t('search.placeholderDatasets'),
  });
  $('select').selectpicker('refresh');
});

onUpdated(() => {
  $('select').selectpicker('show');

  // Refresh select after options have loaded.
  $('select').selectpicker('refresh');

  $('.bs-searchbox input').on('input', (event) => $(event.target).attr('spellcheck', 'false'));
});
</script>
