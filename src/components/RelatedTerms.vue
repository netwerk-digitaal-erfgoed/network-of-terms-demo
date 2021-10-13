<template>
  <p class="card-text text-left">
    <small class="text-muted">
      <strong>{{ caption }}</strong>:
      <span
        v-for="(term, index) in terms"
        :key="term.uri"
      >
        <a :href="term.uri">{{ term.prefLabel[0] }}</a>
        <span v-if="index !== terms.length - 1"> • </span>
      </span>
    </small>
  </p>
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
