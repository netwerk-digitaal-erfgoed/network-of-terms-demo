<template>
    <select v-if="datasets" v-model="state.selectedDatasets" class="form-control form-control-lg selectpicker" :title="t('search.placeholderDatasets')" multiple required>
        <option v-for="dataset in datasets.sources" :value="dataset.identifier">
            {{ dataset.name }}
        </option>
    </select>
</template>

<script lang="ts">
    import {useI18n} from 'vue-i18n'
    import {useQuery} from 'villus'
    import state from '../store'

    export default {
        name: 'Datasets',
        setup() {
            const {data} = useQuery({
                query: 'query Sources { sources { name identifier } }',
            })

            const {t} = useI18n()

            return {t, datasets: data, state: state}
        },
        updated() {
            (<any>window).$('select').selectpicker('show')
        },
    }
</script>
