<template>
    <nav class="navbar navbar-expand-sm navbar-light border-bottom shadow-sm">
        <div class="container">
            <router-link :to="{ name: 'home' }" class="navbar-brand">
                <img v-if="locale === 'en'" src="./assets/logo-en.png" height="30"/>
                <img v-if="locale === 'nl'" src="./assets/logo-nl.png" height="30"/>
            </router-link>
            <a class="navbar-brand" href="/termennetwerk/{{languageCode}}"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'faq' }" class="nav-link">{{ t('faq.title') }}</router-link>
                    </li>
                    <Language/>
                </ul>
            </div>
        </div>
    </nav>

    <router-view :key="$route.fullPath"></router-view>

    <footer class="text-muted border-top">
        <div class="container">
            <p v-html="t('general.messageFooter')"></p>
        </div>
    </footer>
</template>

<script lang="ts">
    import Language from './components/Language.vue'
    import {useI18n} from 'vue-i18n'
    import {useRoute} from 'vue-router'
    import {computed} from 'vue'

    export default {
        name: 'App',
        setup() {
            const {t, locale} = useI18n()
            const route = useRoute()

            const currentLocation = computed(() => {
                const {matched, ...rest} = route
                return rest
            })

            return {t, locale, currentLocation}
        },
        components: {
            Language,
        }
    }
</script>
