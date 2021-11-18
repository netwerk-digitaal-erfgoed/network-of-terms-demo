<template>
  <div>
    <h1 class="display-4 text-center">
      {{ t('search.title') }}
    </h1>
    <p class="lead text-center">
      {{ t('search.subtitle') }}
      <router-link to="faq#what-is">
        <QuestionMarkCircleIcon class="icon" />
      </router-link>
    </p>

    <ul
      class="nav nav-tabs mt-5"
      role="tablist"
    >
      <li class="nav-item">
        <router-link
          id="tab-search"
          active-class="active"
          :to="{name: 'home'}"
          class="nav-link"
          href="#search"
          role="tab"
          aria-controls="search"
        >
          {{ t('search.tabSearch') }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          id="tab-lookup"
          active-class="active"
          :to="{name: 'lookup'}"
          href="#lookup"
          role="tab"
          class="nav-link"
          aria-controls="lookup"
        >
          {{ t('search.tabLookup') }}
        </router-link>
      </li>
    </ul>

    <div class="tab-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import {defineComponent} from 'vue';
import {QuestionMarkCircleIcon} from '@heroicons/vue/solid';

export default defineComponent({
  name: 'TheHome',
  components: {QuestionMarkCircleIcon},
  setup() {
    const {t} = useI18n();
    return {t};
  },
});
</script>

<style scoped>
.nav-tabs {
  font-size: 1.25rem;
}
</style>
