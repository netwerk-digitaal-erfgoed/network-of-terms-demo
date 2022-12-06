<template>
  <h1 class="display-5">
    {{ t('faq.title_o') }}
  </h1>
  <FaqEn3 v-if="locale === 'en'" />
  <FaqNl3 v-else />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useI18n} from 'vue-i18n';
import FaqEn3 from './FaqEn3.vue';
import FaqNl3 from './FaqNl3.vue';

export default defineComponent({
  name: 'TheFaq3',
  components: {FaqEn3, FaqNl3},
  setup () {
    const {t, locale} = useI18n();

    return {t, locale};
  },
});
</script>

<style scoped>

</style>
