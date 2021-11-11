<template>
  <Home>
    <div
      id="lookup"
      class="tab-pane show active"
      role="tabpanel"
      aria-labelledby="lookup-tab"
    >
      <form @submit.prevent="onSubmit">
        <div class="form-group row mt-3">
          <label
            for="uri"
            class="col-lg-3 col-form-label col-form-label-lg text-lg-right"
          >{{ t('search.labelUri') }}</label>
          <div class="col-sm-8">
            <input
              id="uri"
              v-model="uri"
              type="url"
              class="form-control form-control-lg"
              name="uri"
              autocomplete="off"
              :placeholder="t('search.placeholderUri')"
              required
              aria-describedby="uriHelp"
            >
            <p
              id="uriHelp"
              class="form-text text-muted mt-2"
            >
              {{ t('search.helpUri') }}&nbsp;
              <span
                v-for="(_, i) in 3"
                :key="t('search.examplesUri[' + i + '].uri')"
              >
                <a
                  class="btn btn-outline-secondary btn-sm"
                  href=""
                  @click.prevent="uri = t('search.examplesUri[' + i + '].uri')"
                >{{ t('search.examplesUri[' + i + '].label') }}</a>&nbsp;
              </span>
            </p>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10 offset-sm-3">
            <button
              class="btn btn-primary btn-lg search"
              type="submit"
            >
              {{ t('search.buttonSearch') }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </Home>
  <LookupResult
    :uri="uri"
  />
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useClient} from 'villus';
import {useRoute, useRouter} from 'vue-router';
import state from '../store';
import LookupResult from './LookupResult.vue';
import Home from './Home.vue';

export default defineComponent({
  name: 'LookupForm',
  components: {
    Home,
    LookupResult,
  },
  setup() {
    const {t} = useI18n();

    useClient({
      url: import.meta.env.VITE_GRAPHQL_URL,
    });

    const router = useRouter();
    const route = useRoute();
    const uri = ref(route.query.uri as string);

    function onSubmit() {
      router.replace({name: 'lookup', query: {uri: uri.value}});
    }

    return {t, uri, onSubmit, state};
  },
});
</script>
