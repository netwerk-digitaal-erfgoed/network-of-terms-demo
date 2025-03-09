<template>
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-3">
        <p>{{ t('termSources.selectGenres') }}</p>
        <div
          v-for="genre in genres"
          :key="genre.uri"
          class="mt-1"
        >
          <input
            :id="genre.uri"
            v-model="selectedGenres"
            :value="genre.uri"
            autocomplete="off"
            class="btn-check"
            name="genres"
            type="checkbox"
          >
          <label
            :for="genre.uri"
            class="btn btn-outline-primary"
          >{{ genre.name }}</label><br>
        </div>
      </div>
      <div class="col">
        <p>
          {{ t('termSources.matchingSources', terminologySources.length) }}
          <router-link
            :to="{
              name: 'home', query: {datasets: terminologySourceUris}
            }"
            class="btn btn-primary btn-md ms-1"
          >
            {{ t('termSources.search') }}
            <ArrowRightCircleIcon class="icon" />
          </router-link>
        </p>
        <div class="list-group">
          <a
            v-for="source in terminologySources"
            :key="source.uri"
            class="list-group-item list-group-item-action"
            style="text-decoration: none"
          >
            <div class="d-flex pb-1 w-100 justify-content-between">
              <h5 class="mb-1">{{ source.name }}
                <small class="text-muted">{{ source.creators[0].alternateName }}</small>
              </h5>
              <div>
                <a
                  :href="source.mainEntityOfPage"
                  class="btn btn-sm btn-primary ml-2"
                >
                  {{ t('search.viewAtSource') }}
                  <ArrowTopRightOnSquareIcon class="icon" />
                </a>
              </div>
            </div>
            <p>{{ source.description }}</p>
            <p>
              <span
                v-for="genre in source.genres.sort((a: { 'name': string}, b: {'name': string}) => a.name.localeCompare(b.name))"
                :key="genre.uri"
                class="badge rounded-pill text-bg-secondary"
              >
                {{ genre.name }}
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useClient, useQuery} from 'villus';
import {Source} from '../query';
import {ArrowRightCircleIcon, ArrowTopRightOnSquareIcon} from '@heroicons/vue/16/solid';

export default defineComponent({
  name: 'TerminologySourcesList',
  components: {ArrowRightCircleIcon, ArrowTopRightOnSquareIcon},
  async setup() {
    const {t, locale} = useI18n();
    useClient({
      url: import.meta.env.VITE_GRAPHQL_URL,
    });
    const variables = reactive({locale: locale}); // Use query variables to cache per locale and re-fetch when locale changes.
    const headers = reactive({'Accept-Language': locale});
    const {data} = await useQuery({
      query: 'query Sources { sources { name alternateName mainEntityOfPage description uri creators { uri alternateName } genres { uri name } features { type url } } }',
      context: {
        headers,
      },
      variables,
    });

    const selectedGenres = ref([] as string[]);
    const allGenres = reactive([...data.value.sources.reduce((acc: Map<string, string>, source: Source) => {
      source.genres.forEach((source => acc.set(source.uri, source.name)));
      return acc;
    }, new Map<string, string>())].sort().map(([uri, name]) => ({name, uri})));

    const terminologySources = computed(() => {
      if (selectedGenres.value.length == 0) {
        return data.value.sources;
      }
      return data.value.sources.filter((source: Source) => source.genres.some(genre => selectedGenres.value.includes(genre.uri)));
    });
    const terminologySourceUris = computed(() => terminologySources.value.map((source: Source) => source.uri).join(','));

    return {t, selectedGenres, terminologySources, terminologySourceUris, genres: allGenres, copied: ref(false)};
  },
});
</script>

<style scoped>
a.btn {
  text-decoration: none;
}
.badge {
  margin-right: 0.2em;
}
</style>
