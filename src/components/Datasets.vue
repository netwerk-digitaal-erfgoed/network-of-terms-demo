<template>
  <select
    v-if="datasets"
    v-model="state.selectedDatasets"
    class="form-control form-control-lg selectpicker"
    :title="t('search.placeholderDatasets')"
    multiple
    required
  >
    <DatasetOption
      v-for="dataset in datasets.sources"
      :key="dataset.uri"
      :dataset="dataset"
    />
  </select>
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n'
import {useQuery} from 'villus'
import state from '../store'
import DatasetOption from './DatasetOption.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Datasets',
  components: {DatasetOption},
  setup() {
    const {data} = useQuery({
      query: 'query Sources { sources { name alternateName uri creators { uri alternateName } } }',
    })

    const {t} = useI18n()

    return {t, datasets: data, state: state}
  },
  updated() {
    $('select').selectpicker('show')
  },
})
</script>
