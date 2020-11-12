<template>
  <option
    :value="dataset.uri"
    :data-subtext="creator"
  >
    {{ datasetNameWithAbbreviation }}
  </option>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DatasetOption',
  props: {
    dataset: {
      type: Object,
      required: true,
    },
  },
  computed: {
    datasetNameWithAbbreviation(): string {
      if (this.dataset.alternateName) {
        return this.dataset.name + ' (' + this.dataset.alternateName + ')';
      }
      return this.dataset.name;
    },
    creator(): string {
      return this.dataset.creators[0].alternateName;
    },
  },
});
</script>
