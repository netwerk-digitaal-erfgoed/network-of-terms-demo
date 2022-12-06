<template>
  <div class="content">
    <p>In this privacy statement we describe how we process and protect your data. We follow the requirements of the General Data Protection Regulation (GDPR) that has been in force since 25 May 2018. This privacy statement came into effect on 24 May 2018 and supplements the <a href="https://netwerkdigitaalerfgoed.nl/privacy/">privacy statement of the Network Digital Heritage</a>.</p>
    <h3>Our data</h3>
    <p>This website is owned, managed and maintained by the Cultural Heritage Agency. You can reach us via<a href="mailto:info@cultureelerfgoed.nl">info@cultureelerfgoed.nl</a>.</p>
    <h3>This service</h3>
    <p>The website and API's of the Network of Terms do not use cookies for tracking or analytical purposes.</p>
    <p>Website and API queries are recorded in a log file. This technical information, including the IP address that makes the query, is only accessible by technical administrators and is used to gain insight into the use of the Network of Terms.</p>      
  </div>
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'PrivacyEn',
  setup() {
    const {t} = useI18n();
    return {t};
  },
});
</script>
