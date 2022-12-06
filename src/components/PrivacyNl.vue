<template>
  <div class="content">
    <p>In deze privacyverklaring beschrijven wij hoe wij je gegevens verwerken en beschermen. We volgen daarin de eisen van de Algemene Verordening Gegevensbescherming (AVG) die sinds 25 mei 2018 van kracht is. Deze privacyverklaring is op 24 mei 2018 in werking getreden en is een aanvulling op de <a href="https://netwerkdigitaalerfgoed.nl/privacy/">privacyverklaring van het Netwerk Digitaal Erfgoed</a>.</p>
    <h3>Onze gegevens</h3>
    <p>Deze website is eigendom van en wordt beheerd en onderhouden door de Rijksdienst voor het Cultureel Erfgoed. Je kunt ons bereiken via <a href="mailto:info@cultureelerfgoed.nl">info@cultureelerfgoed.nl</a>.</p>
    <h3>Deze dienst</h3>
    <p>De website en de API's van het Termennetwerk maken geen gebruik van cookies voor tracking of analytische doeleinden.</p>
    <p>Bevragingen van website en API worden vastgelegd in een logbestand. Deze technische informatie, waaronder het IP-adres dat de bevraging doet, is alleen toegankelijk door technische beheerders en wordt gebruikt om inzicht te krijgen in het gebruik van het Termennetwerk.</p>      
  </div>
</template>

<script lang="ts">
import {useI18n} from 'vue-i18n';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'PrivacyNl',
  setup() {
    const {t} = useI18n();
    return {t};
  },
});
</script>
