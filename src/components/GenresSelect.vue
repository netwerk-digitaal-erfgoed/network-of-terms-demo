<template>
  <select
    id="genres"
    v-model="state.selectedGenres"
    class="form-control form-control-lg selectpicker"
    :title="t('search.placeholderGenres')"
    multiple
  >
    <option
      v-for="genre in availableGenres"
      :key="genre.uri"
      :value="genre.uri"
    >
      {{ genre.name }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import {useI18n} from 'vue-i18n';
import state from '../store';
import {computed, nextTick, onMounted, onUpdated, watch} from 'vue';
import {Genre} from '../query';

const {t, locale} = useI18n();

const availableGenres = computed(() => {
  const selectedSources = state.sources.filter(source =>
    state.selectedDatasets.includes(source.uri),
  );
  const genreSourcesWithFeature = selectedSources.filter(source =>
    source.features.some(f => f.type === 'GENRE_FILTER'),
  );
  const genreMap = new Map<string, Genre>();
  for (const source of genreSourcesWithFeature) {
    for (const genre of source.genres) {
      if (!genreMap.has(genre.uri)) {
        genreMap.set(genre.uri, genre);
      }
    }
  }
  return [...genreMap.values()].sort((a, b) => a.name.localeCompare(b.name));
});

// Prune selections that are no longer available.
watch(availableGenres, (genres) => {
  const availableUris = new Set(genres.map(g => g.uri));
  state.selectedGenres = state.selectedGenres.filter(uri => availableUris.has(uri));
  nextTick(() => {
    $('#genres').selectpicker('refresh');
  });
});

watch(locale, () => {
  $('#genres').selectpicker({
    title: t('search.placeholderGenres'),
  });
  $('#genres').selectpicker('refresh');
});

function initSelectpicker() {
  $('#genres').selectpicker('show');
  $('#genres').selectpicker('refresh');
}

onMounted(initSelectpicker);
onUpdated(initSelectpicker);
</script>
