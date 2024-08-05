<template>
  <TheHome>
    <div
      id="search"
      class="tab-pane show active"
      role="tabpanel"
      aria-labelledby="search-tab"
    >
      <form @submit.prevent="onSubmit">
        <div class="row mt-3 mb-3">
          <label
            for="q"
            class="col-lg-3 col-form-label col-form-label-lg text-end"
          >{{ t('search.labelQuery') }}</label>
          <div class="col-sm-12 col-lg-8">
            <input
              id="q"
              v-model="q"
              type="text"
              class="form-control form-control-lg"
              name="q"
              autocomplete="off"
              :placeholder="t('search.placeholderQuery')"
              required
            >
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="datasets"
            class="col-lg-3 col-form-label col-form-label-lg text-end"
          >{{ t('search.labelTermSources') }}</label>
          <div class="col-sm-12 col-lg-8">
            <DatasetsSelect />
          </div>
        </div>
        <div class="form-group row">
          <div class="d-grid col-sm-3 offset-lg-3">
            <button
              class="btn btn-primary btn-lg text-start"
              type="submit"
            >
              {{ t('search.buttonSearch') }}<div
                v-show="state.loading"
                class="lds-ellipsis"
                role="status"
              >
                <div /><div /><div /><div />
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  </TheHome>
  <SearchResults
    :q="q"
    :datasets="state.selectedDatasets"
  />
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import DatasetsSelect from './DatasetsSelect.vue';
import {useClient} from 'villus';
import state from '../store';
import {useRoute, useRouter} from 'vue-router';
import {defineComponent, ref} from 'vue';
import TheHome from './TheHome.vue';
import SearchResults from './SearchResults.vue';

export default defineComponent({
  name: 'SearchForm',
  components: {SearchResults, TheHome, DatasetsSelect},
  setup() {
    const {t} = useI18n();

    useClient({
      url: import.meta.env.VITE_GRAPHQL_URL,
    });

    const router = useRouter();
    const route = useRoute();
    const q = ref(route.query.q as string);
    const fromUrl = route.query.datasets as string;
    state.selectedDatasets = (fromUrl ? fromUrl.split(',') : []);

    function onSubmit() {
      state.loading = true;
      router.replace({name: 'home', query: {q: q.value, datasets: state.selectedDatasets.join(',')}});
    }

    return {t, q, onSubmit, state};
  },
});
</script>
