<template>
  <button
    ref="buttonRef"
    :class="['btn-copy', {'btn-reset': !label}]"
    :data-clipboard-text="text"
    @click="copied=true"
    @mouseout="copied=false"
  >
    <template v-if="label">
      {{ t(label) }}
    </template>
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
import {defineComponent, ref, useTemplateRef, onMounted} from 'vue';
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
      required: false,
      default: '',
    },
  },
  setup() {
    const {t} = useI18n();
    const buttonRef = useTemplateRef('buttonRef');

    onMounted(() => {
      new ClipboardJS(buttonRef.value as string);
    });

    return {t, copied: ref(false), buttonRef};
  },
});
</script>

<style scoped>
.btn-reset {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
  outline: inherit;
  box-shadow: none;
}

.btn-reset:hover {
  background: none;
  color: blue;
}
</style>
