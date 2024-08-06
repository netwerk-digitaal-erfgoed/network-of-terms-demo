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
        @click.prevent="locale = 'en'"
      >English</a>
      <a
        href=""
        :class="{active: locale === 'nl'}"
        class="dropdown-item"
        @click.prevent="locale = 'nl'"
      >Nederlands</a>
    </div>
  </li>
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'LanguageToggle',
  setup () {
    const {t, locale} = useI18n();

    return {t, locale};
  },
});
</script>

<style scoped>

</style>
