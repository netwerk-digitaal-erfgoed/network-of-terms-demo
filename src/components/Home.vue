<template>
  <div class="text-center">
    <h1 class="display-4">
      {{ t('search.title') }}
    </h1>
    <p class="lead">
      {{ t('search.subtitle') }}
    </p>

    <Search />
  </div>
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import Search from './Search.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Search,
  },
  setup () {
    const {t} = useI18n();

    return {t};
  },
});
</script>

<style scoped>

</style>
