<template>
  <div class="flex-wrapper">
    <nav class="navbar navbar-expand-sm navbar border-bottom shadow-sm">
      <div class="container">
        <router-link
          :to="{name: 'home'}"
          class="navbar-brand"
        >
          <span v-if="locale === 'nl'" v-html="logoNlSvg"></span>
          <span v-if="locale === 'en'" v-html="logoEnSvg"></span>
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
            <li class="nav-item dropdown">
              <a
                id="faqDropdownMenuLink"
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{ t('faq.title') }}</a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
              <router-link :to="{name: 'faq1'}" class="dropdown-item" href="#faq1">{{ t('faq.voor_c') }}</router-link>
              <router-link :to="{name: 'faq2'}" class="dropdown-item" href="#faq2">{{ t('faq.voor_b') }}</router-link>
              <router-link :to="{name: 'faq3'}" class="dropdown-item" href="#faq3">{{ t('faq.voor_o') }}</router-link>
              </div>
            </li>
            <LanguageToggle />
          </ul>
        </div>
      </div>
    </nav>

    <div class="container px-3 pt-3 pb-md-4 mx-auto">
      <router-view :key="$route.fullPath" />
    </div>
    <br>
    <footer class="border-top">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <p><a href="https://termennetwerk-api.netwerkdigitaalerfgoed.nl">GraphQL Playground</a></p>
            <p><router-link :to="{name: 'reconciliation'}"  href="#reconciliation">{{ t('faq.reconciliation') }}</router-link></p>
          </div>
          <div class="col-3">
            <p><router-link :to="{name: 'privacy'}"  href="#privacy">{{ t('general.privacy') }}</router-link></p>
            <p><router-link :to="{name: 'contact'}"  href="#contact">Contact</router-link></p>
          </div>
          <div class="col-6 text-right">
            <p>{{ t('general.volg') }}:</p>
          
            <!-- eslint-disable vue/no-v-html -->
            <a
              class="nav-link icon"
              href="https://twitter.com/DigitaalErfgoed"
              v-html="twitterSvg"
              title="Follow us on Twitter"
            />
            <!-- eslint-disable vue/no-v-html -->
            <a
              class="nav-link icon"
              href="https://github.com/netwerk-digitaal-erfgoed/network-of-terms-demo"
              v-html="githubSvg"
              title="Follow us at Github"
            />
            <!-- eslint-disable vue/no-v-html -->
            <a
              class="nav-link icon"
              href="https://www.linkedin.com/company/netwerkdigitaalerfgoed/?originalSubdomain=nl"
              v-html="linkedinSvg"
              title="Follow us at LinkedIn"
            />
            <!-- eslint-disable vue/no-v-html -->
            <a
              class="nav-link icon"
              href="https://www.youtube.com/channel/UCvHDarEQeREkRVLdzJSbKWw"
              v-html="youtubeSvg"
              title="Follow us at YouTube"
            />
          </div>
        </div>
        <br>
        <!-- eslint-disable vue/no-v-html -->
        <div class="row">
          <div class="col-3">
            <span v-if="locale === 'nl'" v-html="logoRCENlSvg"></span>
            <span v-if="locale === 'en'" v-html="logoRCEEnSvg"></span>
          </div>
          <div class="col-9">
            <p v-html="t('general.messageFooter')" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import {useRoute} from 'vue-router';
import {computed, defineComponent} from 'vue';
import LanguageToggle from './components/LanguageToggle.vue';
import githubSvg from './assets/github.svg?raw';
import twitterSvg from './assets/twitter.svg?raw';
import youtubeSvg from './assets/youtube.svg?raw';
import linkedinSvg from './assets/linkedin.svg?raw';
import logoNlSvg from './assets/logo-nde-nl.svg?raw';
import logoEnSvg from './assets/logo-nde-en.svg?raw';
import logoRCENlSvg from './assets/logo-cultureelerfgoed-nl.svg?raw';
import logoRCEEnSvg from './assets/logo-cultureelerfgoed-en.svg?raw';

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

    return {t, locale, currentLocation, githubSvg, twitterSvg, youtubeSvg, linkedinSvg, logoNlSvg, logoEnSvg, logoRCENlSvg, logoRCEEnSvg};
  },
});
</script>
