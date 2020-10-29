<template>
  <h1 class="display-4 text-center">
    {{ t('faq.title') }}
  </h1>
  <p class="lead text-center">
    {{ t('faq.subtitle') }}
  </p>
  <template v-if="locale === 'en'">
    <FaqEn />
  </template>
  <template v-else>
    <FaqNl />
  </template>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useI18n} from 'vue-i18n';
import FaqEn from './FaqEn.vue';
import FaqNl from './FaqNl.vue';

export default defineComponent({
  name: 'Faq',
  components: {FaqEn, FaqNl},
  setup () {
    const { t, locale } = useI18n()

    return { t, locale }
  },
})
</script>

<style scoped>

</style>
