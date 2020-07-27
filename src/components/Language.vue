<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ t('language.label') }}</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a href="" v-bind:class="{active: locale === 'en'}" class="dropdown-item" @click.prevent="locale = 'en'">English</a>
            <a href="" v-bind:class="{active: locale === 'nl'}" class="dropdown-item" @click.prevent="locale = 'nl'">Nederlands</a>
        </div>
    </li>
</template>

<script lang="ts">
    import {useI18n} from 'vue-i18n'

    export default {
        name: 'Language',
        setup() {
            const {t, locale} = useI18n()

            return {t, locale}
        },
    }
</script>

<style scoped>

</style>
