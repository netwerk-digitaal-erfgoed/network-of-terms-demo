<template>
    <form @submit.prevent="onSubmit">
        <div class="form-row">
            <div class="form-group col-md-6">
                <input type="text" class="form-control form-control-lg" name="q" autocomplete="off" v-model="q"
                       :placeholder="t('search.placeholderQuery')" required>
            </div>
            <div class="form-group col-md-6">
                <Datasets/>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary btn-lg btn-block search" type="submit">{{ t('search.buttonSearch') }}
            </button>
        </div>
    </form>
    <Results :q="q" :datasets="state.selectedDatasets"></Results>
</template>

<script lang="ts">
    import {useI18n} from 'vue-i18n'
    import Datasets from "./Datasets.vue"
    import {useClient} from 'villus'
    import state from '../store'
    import {useRouter} from 'vue-router'
    import Results from './Results.vue'
    import {ref} from 'vue'

    export default {
        name: 'Search',
        props: {
            q: String,
        },
        setup() {
            const {t} = useI18n()

            useClient({
                url: import.meta.env.VITE_GRAPHQL_URL as string
            })

            const router = useRouter()
            const q = ref(router.currentRoute.value.query.q)
            const fromUrl = router.currentRoute.value.query.datasets as string
            state.selectedDatasets = (fromUrl ? fromUrl.split(',') : [])

            function onSubmit() {
                router.replace({name: 'home', query: {q: q.value, datasets: state.selectedDatasets.join(',')}})
            }

            return {t, q, onSubmit, state}
        },
        components: {Results, Datasets},
    }
</script>
