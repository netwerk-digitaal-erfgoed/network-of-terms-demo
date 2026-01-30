<template>
  <option
    :value="dataset.uri"
    :data-subtext="creator"
    :data-content="statusContent"
  >
    {{ datasetNameWithAbbreviation }}
  </option>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useI18n} from 'vue-i18n';

export default defineComponent({
  name: 'DatasetOption',
  props: {
    dataset: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const {t} = useI18n();
    return {t};
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
    statusContent(): string {
      const name = this.datasetNameWithAbbreviation;
      const creator = `<small class="text-muted">${this.creator}</small>`;
      if (!this.dataset.status) {
        return `${name} ${creator}`;
      }
      // Use Unicode symbols for status (accessible, not stripped by sanitizer)
      const statusSymbol = this.dataset.status.isAvailable ? '●' : '○';
      const statusClass = this.dataset.status.isAvailable ? 'status-available' : 'status-unavailable';
      return `<span class="text"><span class="${statusClass}">${statusSymbol}</span> ${name}${creator}</span>`;
    },
  },
});
</script>

<style>
/* Status indicators for dropdown (not scoped: Bootstrap Select renders outside component) */
.status-available,
.status-unavailable {
  display: inline-block;
  width: 1em;
  font-size: 0.6em;
  vertical-align: middle;
  margin-right: 0.25em;
  text-align: center;
}
.status-available {
  color: #28a745;
}
.status-unavailable {
  color: #dc3545;
}

/* Hide creator text in collapsed/selected dropdown state */
.filter-option-inner-inner .text-muted {
  display: none;
}
</style>
