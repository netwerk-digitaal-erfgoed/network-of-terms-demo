<template>
  <dt class="mb-1 mt-3">
    {{ caption }}
  </dt>
  <dd v-if="lookupLink">
    <router-link
      v-for="term in terms"
      :key="term.uri"
      class="btn btn-outline-secondary mr-2 mb-2"
      :to="{
        name: 'lookup', query: {uri: term.uri}
      }"
    >
      {{ term.prefLabel[0] }}
    </router-link>
  </dd>
  <dd v-if="!lookupLink">
    <span
      v-for="term in terms"
      :key="term.uri"
      class="btn btn-outline-secondary mr-2 mb-2 disabled user-select-all"
    >
      {{ term.prefLabel[0] ?? term.uri }}
    </span>
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
    lookupLink: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped>
span.disabled {
  opacity: initial;
}
</style>
