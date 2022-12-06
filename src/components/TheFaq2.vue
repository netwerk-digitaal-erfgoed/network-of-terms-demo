<template>
  <h1 class="display-5">
    {{ t('faq.title_b') }}
  </h1>
  <FaqEn2 v-if="locale === 'en'" />
  <FaqNl2 v-else />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useI18n} from 'vue-i18n';
import FaqEn2 from './FaqEn2.vue';
import FaqNl2 from './FaqNl2.vue';

export default defineComponent({
  name: 'TheFaq2',
  components: {FaqEn2, FaqNl2},
  setup () {
    const {t, locale} = useI18n();

    return {t, locale};
  },
});
</script>

<style scoped>

</style>
