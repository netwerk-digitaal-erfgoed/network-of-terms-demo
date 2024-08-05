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
    <a
      v-for="term in terms"
      :key="term.uri"
      :href="term.uri"
      class="btn btn-outline-secondary mr-2 mb-2"
      target="_blank"
    >
      {{ term.prefLabel[0] ?? term.uri }}
      <ArrowTopRightOnSquareIcon class="icon" />
    </a>
  </dd>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {RelatedTerm} from '../query';
import {ArrowTopRightOnSquareIcon} from '@heroicons/vue/16/solid';

export default defineComponent({
  name: "RelatedTerms",
  components: {ArrowTopRightOnSquareIcon},
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
.btn {
  margin-right: .5em;
}
</style>
