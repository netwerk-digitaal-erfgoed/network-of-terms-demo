<template>
  <button
    class="btn-copy"
    :data-clipboard-text="text"
    @click="copied=true"
    @mouseout="copied=false"
  >
    {{ t(label) }}
    <ClipboardDocumentCheckIcon
      v-if="copied"
      class="icon"
    />
    <ClipboardDocumentIcon
      v-else
      class="icon"
    />
  </button>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import ClipboardJS from 'clipboard';
import {useI18n} from 'vue-i18n';
import {ClipboardDocumentCheckIcon, ClipboardDocumentIcon} from '@heroicons/vue/16/solid';

export default defineComponent({
  name: "CopyButton",
  components: {ClipboardDocumentIcon, ClipboardDocumentCheckIcon},
  props: {
    text: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup() {
    const {t} = useI18n();
    new ClipboardJS('.btn-copy');

    return {t, copied: ref(false)};
  },
});
</script>

<style scoped>

</style>
