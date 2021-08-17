<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-row">
        <div class="form-group col-md-6">
          <input
            v-model="q"
            type="text"
            class="form-control form-control-lg"
            name="q"
            autocomplete="off"
            :placeholder="t('search.placeholderQuery')"
            required
          >
        </div>
        <div class="form-group col-md-6">
          <Datasets />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button
          class="btn btn-primary btn-lg btn-block search"
          type="submit"
        >
          {{ t('search.buttonSearch') }}
        </button>
      </div>
    </form>
    <Results
      :q="q"
      :datasets="state.selectedDatasets"
    />
  </div>
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import Datasets from './Datasets.vue';
import {useClient} from 'villus';
import state from '../store';
import {useRoute, useRouter} from 'vue-router';
import Results from './Results.vue';
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'Search',
  components: {Results, Datasets},
  setup () {
    const {t} = useI18n();

    useClient({
      url: import.meta.env.VITE_GRAPHQL_URL,
    });

    const router = useRouter();
    const route = useRoute();
    const q = ref(route.query.q as string);
    const fromUrl = route.query.datasets as string;
    state.selectedDatasets = (fromUrl ? fromUrl.split(',') : []);

    function onSubmit () {
      router.replace({name: 'home', query: {q: q.value, datasets: state.selectedDatasets.join(',')}});
    }

    return {t, q, onSubmit, state};
  },
});
</script>
