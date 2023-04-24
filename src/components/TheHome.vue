<template>
  <div class="homecover">
    <h1 class="display-4 text-center home">
      {{ t('search.subtitle') }}
    </h1>
    <div class="hometargets">
      <router-link
        :to="{name: 'faq1'}"
        class="hbox"
        href="#faq1"
      >
        {{ t('faq.voor_c') }}
      </router-link>
      <span class="homepipe">|</span>
      <router-link
        :to="{name: 'faq2'}"
        class="hbox"
        href="#faq2"
      >
        {{ t('faq.voor_b') }}
      </router-link>
      <span class="homepipe">|</span>
      <router-link
        :to="{name: 'faq3'}"
        class="hbox"
        href="#faq3"
      >
        {{ t('faq.voor_o') }}
      </router-link>
    </div>  
  </div>
  <div>
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

export default defineComponent({
  name: 'TheHome',
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
