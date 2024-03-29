<template>
  <h1 class="display-5">
    {{ t('faq.title_r') }}
  </h1>
  <FaqEn4 v-if="locale === 'en'" />
  <FaqNl4 v-else />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useI18n} from 'vue-i18n';
import FaqEn4 from './FaqEn4.vue';
import FaqNl4 from './FaqNl4.vue';

export default defineComponent({
  name: 'TheFaq4',
  components: {FaqEn4, FaqNl4},
  setup () {
    const {t, locale} = useI18n();

    return {t, locale};
  },
});
</script>

<style scoped>

</style>