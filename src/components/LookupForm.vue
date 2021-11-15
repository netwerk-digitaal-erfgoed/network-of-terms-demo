<template>
  <TheHome>
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
          <div class="col-sm-12 col-lg-8">
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
              class="form-text text-muted"
            >
              {{ t('search.helpUri') }}&nbsp;
              <template
                v-for="example in examples"
                :key="example.uri"
              >
                <a
                  class="btn btn-outline-secondary btn-sm"
                  href=""
                  @click.prevent="uri = example.uri"
                >{{ example.label }}</a>&nbsp;
              </template>
            </p>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10 offset-lg-3">
            <button
              class="btn btn-primary btn-lg search"
              type="submit"
            >
              {{ t('search.buttonLookup') }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </TheHome>
  <LookupResult
    :uri="uri"
  />
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useClient} from 'villus';
import {useRoute, useRouter} from 'vue-router';
import state from '../store';
import LookupResult from './LookupResult.vue';
import TheHome from './TheHome.vue';

export default defineComponent({
  name: 'LookupForm',
  components: {
    TheHome,
    LookupResult,
  },
  setup() {
    const {t, tm} = useI18n();

    useClient({
      url: import.meta.env.VITE_GRAPHQL_URL,
    });

    const router = useRouter();
    const route = useRoute();
    const uri = ref(route.query.uri as string);

    function onSubmit() {
      router.replace({name: 'lookup', query: {uri: uri.value}});
    }

    return {
      t,
      examples: computed(() => tm('search.examplesUri') as [{uri: string, label: string}]),
      uri,
      onSubmit,
      state,
    };
  },
});
</script>

<style scoped>
  p#uriHelp {
    line-height: 2.5;
  }
</style>
