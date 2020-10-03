<template>
  <h1 class="display-4 text-center">
    {{ t('faq.title') }}
  </h1>
  <p class="lead text-center">
    {{ t('faq.subtitle') }}
  </p>
  <div class="content">
    <h2
      id="termennetwerk"
      class="display-5"
    >
      {{ t('faq.sections.1.title') }}
    </h2>

    <FaqEntry
      v-for="n in 5"
      :key="'1-' + n"
      :section="1"
      :question="n"
    />

    <h2
      id="prototype"
      class="display-5"
    >
      {{ t('faq.sections.2.title') }}
    </h2>
    <FaqEntry
      v-for="n in 5"
      :key="'2-' + n"
      :section="2"
      :question="n"
    />

    <h2
      id="technology"
      class="display-5"
    >
      {{ t('faq.sections.3.title') }}
    </h2>
    <FaqEntry
      v-for="n in 4"
      :key="'3-' + n"
      :section="3"
      :question="n"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useI18n} from 'vue-i18n'
import FaqEntry from './FaqEntry.vue'

export default defineComponent({
  name: 'Faq',
  components: {FaqEntry},
  setup () {
    const { t } = useI18n()

    return { t }
  },
})
</script>

<style scoped>

</style>
