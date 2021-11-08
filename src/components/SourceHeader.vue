<template>
  <h2 class="text-center mt-5">
    {{ source.name }}<small v-if="source.alternateName"> ({{
      source.alternateName
    }})</small>
  </h2>
  <h3 class="text-center text-muted">
    {{ source.creators[0].name }}
  </h3>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {Source} from '../query';

export default defineComponent({
  name: 'SourceHeader',
  props: {
    source: {
      type: Object as PropType<Source>,
      required: true,
    },
  },
});
</script>
