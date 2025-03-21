<template>
  <li class="nav-item dropdown">
    <a
      id="navbarDropdownMenuLink"
      class="nav-link dropdown-toggle"
      href="#"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >{{ t('language.label') }}</a>
    <div
      class="dropdown-menu"
      aria-labelledby="navbarDropdownMenuLink"
    >
      <a
        href=""
        :class="{active: locale === 'en'}"
        class="dropdown-item"
        @click.prevent="switchLocale('en')"
      >English</a>
      <a
        href=""
        :class="{active: locale === 'nl'}"
        class="dropdown-item"
        @click.prevent="switchLocale('nl')"
      >Nederlands</a>
    </div>
  </li>
</template>

<script lang="ts" setup>
import {useI18n} from 'vue-i18n';
import {useRoute, useRouter} from 'vue-router';

const router = useRouter();
const route = useRoute();
const {t, locale} = useI18n();

const switchLocale = (locale: string) => {
  router.replace({params: {...route.params, locale}, query: route.query});
}
</script>

<style scoped>

</style>
