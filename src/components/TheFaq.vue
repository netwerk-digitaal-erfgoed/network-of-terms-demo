<template>
  <h1 class="display-5">
    {{ t('faq.subtitle') }}
  </h1>
  <FaqEn v-if="locale === 'en'" />
  <FaqNl v-else />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useI18n} from 'vue-i18n';
import FaqEn from './FaqEn.vue';
import FaqNl from './FaqNl.vue';

export default defineComponent({
  name: 'TheFaq',
  components: {FaqEn, FaqNl},
  setup () {
    const {t, locale} = useI18n();

    return {t, locale};
  },
});
</script>

<style scoped>

</style>
