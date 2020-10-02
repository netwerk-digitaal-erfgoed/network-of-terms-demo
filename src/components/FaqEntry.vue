<template>
  <h3 class="display-5">
    {{ t('faq.sections.' + section + '.q' + question) }}
  </h3>
  <!-- eslint-disable vue/no-v-html -->
  <p v-html="t('faq.sections.' + section + '.a' + question)" />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useI18n} from 'vue-i18n';

export default defineComponent({
  name: 'FaqEntry',
  props: {
    section: {
      type: Number,
      required: true
    },
    question: {
      type: Number,
      required: true
    }
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
</script>
