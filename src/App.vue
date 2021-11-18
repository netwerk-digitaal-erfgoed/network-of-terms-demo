<template>
  <nav class="navbar navbar-expand-sm navbar-light border-bottom shadow-sm">
    <div class="container">
      <router-link
        :to="{name: 'home'}"
        class="navbar-brand"
      >
        <img
          v-if="locale === 'en'"
          src="./assets/logo-en.png"
          height="30"
        >
        <img
          v-if="locale === 'nl'"
          src="./assets/logo-nl.png"
          height="30"
        >
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
              :to="{name: 'home'}"
              class="nav-link"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{name: 'faq'}"
              class="nav-link"
            >
              {{ t('faq.title') }}
            </router-link>
          </li>
          <LanguageToggle />
          <li class="nav-item">
            <!-- eslint-disable vue/no-v-html -->
            <a
              class="nav-link icon"
              href="https://github.com/netwerk-digitaal-erfgoed/network-of-terms-demo"
              v-html="githubSvg"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container px-3 pt-3 pt-md-5 pb-md-4 mx-auto">
    <router-view :key="$route.fullPath" />
  </div>

  <footer class="text-muted border-top">
    <div class="container">
      <!-- eslint-disable vue/no-v-html -->
      <p v-html="t('general.messageFooter')" />
    </div>
  </footer>
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import {useRoute} from 'vue-router';
import {computed, defineComponent} from 'vue';
import LanguageToggle from './components/LanguageToggle.vue';
import githubSvg from './assets/github.svg?raw';

export default defineComponent({
  name: 'App',
  components: {
    LanguageToggle,
  },
  setup() {
    const {t, locale} = useI18n();
    const route = useRoute();

    const currentLocation = computed(() => {
      const {...rest} = route;
      return rest;
    });

    return {t, locale, currentLocation, githubSvg};
  },
});
</script>
