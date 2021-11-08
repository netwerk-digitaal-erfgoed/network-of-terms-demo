<template>
  <Home>
    <div
      id="search"
      class="tab-pane show active"
      role="tabpanel"
      aria-labelledby="search-tab"
    >
      <form @submit.prevent="onSubmit">
        <div class="form-group row mt-3">
          <label
            for="q"
            class="col-lg-3 col-form-label col-form-label-lg text-lg-right"
          >{{ t('search.labelQuery') }}</label>
          <div class="col-sm-9">
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
        <div class="form-group row">
          <label
            for="datasets"
            class="col-lg-3 col-form-label col-form-label-lg text-lg-right"
          >{{ t('search.labelTermSources') }}</label>
          <div class="col-sm-8">
            <Datasets />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10 offset-lg-3">
            <button
              class="btn btn-lg btn-primary btn-block search"
              type="submit"
            >
              {{ t('search.buttonSearch') }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </Home>
  <SearchResults
    :q="q"
    :datasets="state.selectedDatasets"
  />
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import Datasets from './Datasets.vue';
import {useClient} from 'villus';
import state from '../store';
import {useRoute, useRouter} from 'vue-router';
import {defineComponent, ref} from 'vue';
import Home from './Home.vue';
import SearchResults from './SearchResults.vue';

export default defineComponent({
  name: 'SearchForm',
  components: {SearchResults, Home, Datasets},
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
      router.replace({name: 'home', query: {q: q.value, datasets: state.selectedDatasets.join(',')}});
    }

    return {t, q, onSubmit, state};
  },
});
</script>
