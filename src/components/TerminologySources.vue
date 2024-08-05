<template>
  <div class="content">
    <h1 class="display-5 mb-3">
      {{ t('termSources.title') }}
    </h1>
    <p class="mb-5">
      {{ t('termSources.intro') }}
    </p>
    <suspense>
      <TerminologySourcesList />
    </suspense>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useI18n} from 'vue-i18n';
import TerminologySourcesList from './TerminologySourcesList.vue';

export default defineComponent({
  name: 'TerminologySources',
  components: {TerminologySourcesList},
  setup() {
    const {t} = useI18n();
    return {t};
  },
});
</script>
