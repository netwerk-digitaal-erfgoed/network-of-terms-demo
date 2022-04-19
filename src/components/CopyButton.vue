<template>
  <button
    class="btn-copy"
    :data-clipboard-text="text"
    @click="copied=true"
    @mouseout="copied=false"
  >
    {{ t(label) }}
    <ClipboardCheckIcon
      v-if="copied"
      class="icon"
    />
    <ClipboardIcon
      v-else
      class="icon"
    />
  </button>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import ClipboardJS from 'clipboard';
import {useI18n} from 'vue-i18n';
import {ClipboardCheckIcon, ClipboardIcon} from '@heroicons/vue/outline';

export default defineComponent({
  name: "CopyButton",
  components: {ClipboardIcon, ClipboardCheckIcon},
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
