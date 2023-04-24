<template>
  <h1 class="display-5">
    {{ t('general.privacy') }}
  </h1>
  <PrivacyEn v-if="locale === 'en'" />
  <PrivacyNl v-else />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useI18n} from 'vue-i18n';
import PrivacyEn from './PrivacyEn.vue';
import PrivacyNl from './PrivacyNl.vue';

export default defineComponent({
  name: 'PrivacyStatement',
  components: {PrivacyEn, PrivacyNl},
  setup () {
    const {t, locale} = useI18n();

    return {t, locale};
  },
});
</script>

<style scoped>

</style>
