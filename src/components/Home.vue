<template>
  <div class="text-center">
    <div id="beta">
      <span class="note">
        <router-link
          :to="{ name: 'faq', hash: '#prototype'}"
        >{{ t('search.messageBeta') }}</router-link>
      </span>
    </div>

    <h1 class="display-4">
      {{ t('search.title') }}
    </h1>
    <p class="lead">
      {{ t('search.subtitle') }}
    </p>

    <Search />
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import Search from './Search.vue'
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Search
  },
  setup () {
    const { t } = useI18n()

    return { t }
  }
})
</script>

<style scoped>

</style>
