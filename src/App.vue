<template>
  <div class="flex-wrapper">
    <nav class="navbar navbar-expand-sm">
      <div class="container">
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
        >
          <router-link
            :to="{name: 'home'}"
            class="navbar-brand"
          >
            <!-- eslint-disable vue/no-v-html -->
            <span
              v-if="locale === 'nl'"
              v-html="logoNlSvg"
            />
            <span
              v-if="locale === 'en'"
              v-html="logoEnSvg"
            />
          </router-link>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                :href="newsUrl"
              >{{ t('general.news') }}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://status.termennetwerk.netwerkdigitaalerfgoed.nl"
              >{{ t('general.status') }}</a>
            </li>
            <li class="nav-item dropdown">
              <a
                id="faqDropdownMenuLink"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >{{ t('faq.title') }}</a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link
                  :to="{name: 'faq1'}"
                  class="dropdown-item"
                  href="#faq1"
                >
                  {{ t('faq.voor_c') }}
                </router-link>
                <router-link
                  :to="{name: 'faq2'}"
                  class="dropdown-item"
                  href="#faq2"
                >
                  {{ t('faq.voor_b') }}
                </router-link>
                <router-link
                  :to="{name: 'faq4'}"
                  class="dropdown-item"
                  href="#faq4"
                >
                  {{ t('faq.voor_r') }}
                </router-link>
                <router-link
                  :to="{name: 'faq3'}"
                  class="dropdown-item"
                  href="#faq3"
                >
                  {{ t('faq.voor_o') }}
                </router-link>
              </ul>
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
          <div class="col-md-3">
            <p><a href="https://termennetwerk-api.netwerkdigitaalerfgoed.nl">GraphQL Playground</a></p>
            <p>
              <router-link
                :to="{name: 'sources'}"
              >
                {{ t('termSources.title') }}
              </router-link>
            </p>
            <p>
              <router-link
                :to="{name: 'reconciliation'}"
              >
                {{ t('faq.reconciliation') }}
              </router-link>
            </p>
            <p>
              <a :href="newsUrl">{{ t('general.news') }}</a>
            </p>
            <p>
              <a href="https://status.termennetwerk.netwerkdigitaalerfgoed.nl">{{ t('general.status') }} <ArrowTopRightOnSquareIcon class="icon" /></a>
            </p>
          </div>
          <div class="col-md-3">
            <p>
              <router-link
                :to="{name: 'privacy'}"
              >
                {{ t('general.privacy') }}
              </router-link>
            </p>
            <p>
              <router-link
                :to="{name: 'contact'}"
              >
                Contact
              </router-link>
            </p>
          </div>
          <div class="col-md-6 text-right">
            <p>{{ t('general.volg') }}:</p>

            <!-- eslint-disable vue/no-v-html -->
            <a
              class="nav-link icon"
              href="https://twitter.com/DigitaalErfgoed"
              title="Follow us on Twitter"
              v-html="twitterSvg"
            />
            <!-- eslint-disable vue/no-v-html -->
            <a
              class="nav-link icon"
              href="https://github.com/netwerk-digitaal-erfgoed/network-of-terms-demo"
              title="Follow us at Github"
              v-html="githubSvg"
            />
            <!-- eslint-disable vue/no-v-html -->
            <a
              class="nav-link icon"
              href="https://www.linkedin.com/company/netwerkdigitaalerfgoed/?originalSubdomain=nl"
              title="Follow us at LinkedIn"
              v-html="linkedinSvg"
            />
            <!-- eslint-disable vue/no-v-html -->
            <a
              class="nav-link icon"
              href="https://www.youtube.com/channel/UCvHDarEQeREkRVLdzJSbKWw"
              title="Follow us at YouTube"
              v-html="youtubeSvg"
            />
          </div>
        </div>
        <br>
        <!-- eslint-disable vue/no-v-html -->
        <div class="row">
          <div class="col-md-3">
            <a
              href="https://www.cultureelerfgoed.nl/"
              title="Rijksdienst voor het Cultureel Erfgoed (RCE)"
            >
              <span
                v-if="locale === 'nl'"
                v-html="logoRCENlSvg"
              />
              <span
                v-if="locale === 'en'"
                v-html="logoRCEEnSvg"
              />
            </a>
          </div>
          <div class="col-md-9">
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
import {ArrowTopRightOnSquareIcon} from '@heroicons/vue/16/solid';
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
    ArrowTopRightOnSquareIcon,
  },
  setup() {
    const {t, locale} = useI18n();
    const route = useRoute();

    const currentLocation = computed(() => {
      const {...rest} = route;
      return rest;
    });

    const newsUrl = computed(() => {
      return locale.value === 'nl'
        ? 'https://docs.nde.nl/nl/blog/tags/network-of-terms'
        : 'https://docs.nde.nl/blog/tags/network-of-terms';
    });

    return {t, locale, currentLocation, newsUrl, githubSvg, twitterSvg, youtubeSvg, linkedinSvg, logoNlSvg, logoEnSvg, logoRCENlSvg, logoRCEEnSvg};
  },
});
</script>
