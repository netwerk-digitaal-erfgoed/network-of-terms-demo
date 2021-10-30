<template>
  <dt class="mb-1 mt-3">
    {{ caption }}
  </dt>
  <dd
    v-for="term in terms"
    :key="term.uri"
    :href="term.uri"
    class="btn btn-outline-primary mr-2 mb-2"
  >
    {{ term.prefLabel[0] }}
  </dd>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {RelatedTerm} from '../query';

export default defineComponent({
  name: "RelatedTerms",
  props: {
    caption: {
      type: String,
      required: true,
    },
    terms: {
      type: Object as PropType<RelatedTerm[]>,
      required: true,
    },
  },
});
</script>
