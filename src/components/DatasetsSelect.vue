<template>
  <select
    id="datasets"
    v-model="state.selectedDatasets"
    class="form-control form-control-lg selectpicker"
    :title="t('search.placeholderDatasets')"
    multiple
    required
  >
    <template v-if="datasets">
      <DatasetOption
        v-for="dataset in datasets.sources"
        :key="dataset.uri"
        :dataset="dataset"
      />
    </template>
  </select>
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import {useQuery} from 'villus';
import state from '../store';
import DatasetOption from './DatasetOption.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DatasetsSelect',
  components: {DatasetOption},
  setup() {
    const {data} = useQuery({
      query: 'query Sources { sources { name alternateName uri creators { uri alternateName } } }',
    });

    const {t, locale} = useI18n();

    return {t, datasets: data, state: state, locale, placeholder: t('search.placeholderDatasets')};
  },
  watch: {
    // The select doesn't pick up the change of its HTML select element’s title (= placeholder),
    // so refresh the placeholder manually.
    locale() {
      $('select').selectpicker({
        title: this.t('search.placeholderDatasets'),
      });
      $('select').selectpicker('refresh');
    },
  },

  updated() {
    $('select').selectpicker('show');

    // Refresh select after options have loaded.
    $('select').selectpicker('refresh');
  },
});
</script>
