<template>
  <div class="container px-3 pt-3 pt-md-5 pb-md-4 text-center mx-auto">
    <div id="beta">
      <span class="note">
        <a href="/termennetwerk/{{languageCode}}/faq#prototype">{{ t('search.messageBeta') }}</a>
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

<script>
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
