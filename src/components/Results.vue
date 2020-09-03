<template>
    <div v-if="data && q" v-for="dataset in data.terms" class="container">
        <h2 class="display-5 text-center py-3">{{ dataset.source.name }}
            <small class="termCount">({{ t('search.termsFound', dataset.terms.length) }})</small>
        </h2>
        <div class="card-columns">
            <div v-for="term in dataset.terms" class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title"><a :href="term.uri">{{ term.prefLabel[0] }}</a></h5>
                    <p v-if="term.scopeNote" class="card-text">{{ term.scopeNote[0] }}</p>

                    <p v-if="term.altLabel" class="card-text">
                        <small class="text-muted">
                            <strong>{{ t('search.altLabel') }}</strong>: {{ term.altLabel[0] }}
                        </small>
                    </p>

                    <button class="btn btn-secondary btn-copy" :data-clipboard-text="term.uri">
                        {{ t('search.copyUri') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {useQuery} from 'villus'
    import {useI18n} from 'vue-i18n'

    export default {
        name: 'Results',
        props: {
            q: String,
            datasets: Array
        },
        setup(props) {
            const {t} = useI18n()

            if (!props.q || !props.datasets) {
                return {
                    data: null,
                    t
                }
            }

            const {data} = useQuery({
                query: `query Terms ($sources: [ID]!, $query: String!) {
                    terms (sources: $sources query: $query) { source { name uri } terms { uri prefLabel altLabel hiddenLabel scopeNote } } }`,
                variables: {
                    sources: props.datasets,
                    query: props.q,
                }
            })

            new ClipboardJS('.btn-copy')

            return {data, t}
        },
    }
</script>

<style scoped>

</style>
