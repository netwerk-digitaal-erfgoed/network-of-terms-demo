<template>
  <div class="content">
    <h3 class="display-5">
      Achtergrond
    </h3>
    <p>Heeft jouw organisatie een thesaurus, termenlijst of andere terminologiebron die handig is voor het verbinden van collecties van verschillende organisaties? En wordt deze terminologiebron op een duurzame manier beheerd en beschikbaar gesteld? Overweeg dan om deze terminologiebron op te laten nemen in het NDE Termennetwerk. Zo kunnen andere erfgoedorganisaties jouw termen gebruiken om hun objecten op een duurzame en uniforme manier te beschrijven. Denk bijvoorbeeld aan termen over gebouwen, personen, gebeurtenissen, enzovoort.</p>
    <p>Het Termennetwerk staat open voor suggesties voor nieuwe bronnen. Of een terminologiebron kan worden toegevoegd, hangt af van enkele inhoudelijke en technische afwegingen die in deze handleiding aan bod komen.</p>
    <p>Heb je na het lezen nog vragen? Aarzel dan niet om contact op te nemen met de Rijksdienst voor het Cultureel Erfgoed, de coördinator van het Termennetwerk, via <a href="mailto:thesauri@cultureelerfgoed.nl">thesauri@cultureelerfgoed.nl</a>.</p>
    <h3 class="display-5">
      Inhoudelijke voorwaarden voor opname binnen het Termennetwerk
    </h3>
    <p>Loop de volgende punten na om erachter te komen of jouw terminologiebron inhoudelijk geschikt is voor het Termennetwerk.</p>
    <p><strong>Komen mijn termen al voor in andere terminologiebronnen binnen het Termennetwerk?</strong></p>
    <ul>
      <li>Nee: opname in het Termennetwerk is mogelijk.</li>
      <li>Ja: opname in het Termennetwerk is niet nodig omdat dit kan leiden tot duplicatie met een andere terminologiebron.</li>
      <li>Gedeeltelijke overlap met een andere terminologiebron:</li>
      <ul>
        <li>neem contact op met de bronhouder van deze bron en ga na of het mogelijk is om jouw termen hierin op te laten nemen, en/of:</li>
        <li>maak verwijzingen tussen jouw termen en deze termen voorafgaand aan opname binnen het Termennetwerk.</li>
      </ul>
    </ul>
    <p><strong>Verwacht je dat collectiebeheerders, registratoren en andere collega’s jouw termen zullen gaan gebruiken voor het beschrijven van hun objecten?</strong></p>
    <ul>
      <li>Ja: opname in het Termennetwerk is mogelijk.</li>
      <li>Nee: opname in het Termennetwerk is niet nodig omdat de bron weinig door het netwerk gebruikt zal gaan worden.</li>
      <li>Weet niet: stem dit af met de coördinator Termennetwerk via <a href="mailto:thesauri@cultureelerfgoed.nl">thesauri@cultureelerfgoed.nl</a>.</li>
    </ul>
    <p><strong>Om een zo goed mogelijke vindbaarheid, bruikbaarheid en hergebruik van termen te garanderen, voldoet mijn terminologiebron inhoudelijk aan de volgende voorwaarden:</strong></p>
    <ul>
      <li>Mijn terminologiebron wordt duurzaam beheerd door de organisatie waarvoor ik werk. Dit betekent dat er financiële middelen en/of uren beschikbaar zijn om de bron structureel beschikbaar te blijven stellen voor het Termennetwerk.</li>
      <li>De termen worden op een eenduidige manier vastgelegd.</li>
      <li>Alle termen hebben ten minste een definitie en voorkeurslabel (voorgestelde schrijfwijze) in het Nederlands.</li>
      <li>Als een term een relatie heeft met een andere term in mijn terminologiebron, zijn deze kenbaar gemaakt. Bijvoorbeeld: als een bron het datamodel SKOS gebruikt, kunnen relaties met andere termen in de terminologiebron via relaties als skos:broader, skos:narrower of skos:related gepubliceerd worden.</li>
      <li>Als een term een relatie heeft met een term uit een andere thesaurus of terminologiebron, is dit duidelijk gemaakt. Bijvoorbeeld: de term klatergoud in de Cultuurhistorische Thesaurus heeft een skos:exactMatch relatie met dezelfde term in de Art and Architecture Thesaurus van Getty.</li>
    </ul>
    <h3 class="display-5">
      Technische voorwaarden voor opname binnen het Termennetwerk
    </h3>
    <p>De technische eisen voor opname worden hieronder beschreven. Deze kunnen een uitdaging vormen als je collectiebeheersysteem of IT-omgeving dit nog niet ondersteunt. Voldoet je terminologiebron nog niet aan deze vereisten, bespreek dit dan eerst met je leverancier en/of IT-afdeling. Voor advies kun je altijd contact opnemen met de provinciale digitaal-erfgoed-coaches of de coördinator van het Termennetwerk.</p>
    <p><strong>Technische voorwaarde 1: De terminologiebron maakt de termen vindbaar via een SPARQL-endpoint</strong></p>
    <p>Het Termennetwerk is een federatieve zoekmachine voor termen. Dit betekent dat het Termennetwerk zelf geen database van termen beheert, maar de termen ophaalt bij de bronhouder (oftewel de beheerder van de terminologiebron). Daarom moet de bronhouder, naast het duurzaam beheren van de termen, de terminologiebron koppelen aan het Termennetwerk. Dit gebeurt via een SPARQL-endpoint, omdat dit de ‘taal’ is die alle bronnen binnen het Termennetwerk verbindt en doorzoekbaar maakt.</p>
    <p>Een bronhouder hoeft niet per se zelf het SPARQL-endpoint aan te bieden, maar kan dit ook doen via samenwerkende organisaties, een erfgoedhuis of een ander samenwerkingsverband.</p>
    <p>Het is ook mogelijk om hiervoor gebruik te maken van het online thesaurusbeheersysteem PoolParty, waarbij een SPARQL-endpoint inbegrepen is. Dit wordt kosteloos aangeboden aan erfgoedorganisaties en samenwerkingsverbanden via de Rijksdienst voor het Cultureel Erfgoed. Wil je hier meer over weten? Neem dan contact op via <a href="mailto:thesauri@cultureelerfgoed.nl">thesauri@cultureelerfgoed.nl</a>.</p>
    <p><strong>Technische voorwaarde 2: De terminologiebron gebruikt openbare URI’s om termen vast te leggen</strong></p>
    <p>Termen kunnen alleen worden gebruikt om erfgoed met elkaar te verbinden als ze machineleesbaar zijn. Dit wordt bereikt door het gebruik van URI’s: unieke webadressen die door mensen en computers kunnen worden gebruikt om informatie over de term op te halen, zoals definities, labels en verbonden relaties. Het is belangrijk dat deze URI's openbaar toegankelijk zijn, zonder dat er authenticatie nodig is, zoals inloggegevens.</p>
    <p>Een voorbeeld van een URI is <a href="https://data.niod.nl/WO2_Thesaurus/events/9358">https://data.niod.nl/WO2_Thesaurus/events/9358</a> waarop alle informatie over de term ‘Evacuatie van Breda’ kan worden gevonden. Zoals hierboven beschreven bij ‘Inhoudelijke voorwaarden’, bevat een URI bij voorkeur zoveel mogelijk informatie over de term en in ieder geval voldoende informatie om gebruikers duidelijk te maken waar de term over gaat.</p>
    <h3 class="display-5">
      Aanvullende overwegingen en voorkeuren
    </h3>
    <p>De hierboven beschreven inhoudelijke en technische voorwaarden zijn in meer detail na te lezen in het document met requirements van het Termennetwerk. In dit document vind je daarnaast meer aanbevelingen en ‘nice-to-haves’ die je kunt overwegen als je een terminologiebron wilt aanbieden.</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
 name: 'FaqNl4',
});
</script>
