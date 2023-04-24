<template>
  <div class="content">
    <h3 class="display-5">
      Wat zijn termen?
    </h3>
    <p>
      Termen beschrijven waar erfgoed over gaat. Termen zijn bijvoorbeeld onderwerpen, personen of plaatsen. Neem De
      Nachtwacht: het is een ‘schilderij’, vervaardigd door ‘Rembrandt’ in ‘Amsterdam’.
    </p>
    <p>
      Toch is een term meer dan een woord. Elke term heeft namelijk een identifier, een zogeheten
      <a href="https://nl.wikipedia.org/wiki/Uniform_resource_identifier">URI</a>. Een URI is een uniek adres
      waardoor ondubbelzinnig duidelijk is welke term bedoeld wordt. Bijvoorbeeld de term ‘noodweer’: wordt hier het
      juridische concept bedoeld of een bepaalde weersgesteldheid? De betekenis wordt duidelijk als je de URI van de
      term gebruikt, zoals <a href="http://www.wikidata.org/entity/Q741507">http://www.wikidata.org/entity/Q741507</a>.
    </p>
    <p>
      Daarnaast kan een term extra informatie bevatten, zoals een definitie of een alternatieve benaming. Bijvoorbeeld
      de term ‘schilderij’ met de URI <a href="http://vocab.getty.edu/aat/300177435">http://vocab.getty.edu/aat/300177435</a>.
      De extra informatie over deze term maakt duidelijk dat het een synoniem heeft, ‘schilderstuk’.
    </p>

    <h3 class="display-5">
      Waarom zijn termen belangrijk?
    </h3>
    <p>
      Termen stellen gebruikers – zoals leerlingen, journalisten of wetenschappers – in staat om erfgoed op het web
      beter te vinden. Bijvoorbeeld: als een gebruiker enkel zoekt naar het <em>woord</em> ‘schilderij’, vindt hij
      alleen het erfgoed waarin dit woord voorkomt, niet het erfgoed met het synoniem ‘schilderstuk’. Maar als een
      gebruiker zoekt naar de <em>term</em> ‘schilderij’, vindt hij ook het erfgoed waarin ‘schilderstuk’ voorkomt.
      Gebruik van termen zorgt dus voor betere vindbaarheid.
    </p>

    <h3 class="display-5">
      Wat zijn terminologiebronnen?
    </h3>
    <p>
      Termen worden beheerd in terminologiebronnen, zoals thesauri, referentielijsten of classificatiesystemen. Zo
      zijn er bronnen met informatie over plaatsen, zoals <a href="https://www.geonames.org/">GeoNames</a>, en bronnen
      met informatie over personen, zoals <a href="https://rkd.nl/nl/explore/artists">RKDartists</a>. Ook zijn er
      algemene bronnen met informatie over allerlei onderwerpen, zoals <a href="https://www.wikidata.org/">Wikidata</a>,
      en specifieke bronnen met informatie over gerichte onderwerpen, zoals
      de <a href="https://vtmk.data.momu.be/id.html">Visuele Thesaurus voor Mode en Kostuums</a>.
    </p>

    <h3 class="display-5">
      Waarom zijn terminologiebronnen belangrijk?
    </h3>
    <p>
      Termen zijn niet zomaar wat begrippen: het zijn officiële aanduidingen. De beheerders van terminologiebronnen
      staan in voor de kwaliteit ervan. Bijvoorbeeld inhoudelijk: termen moeten accuraat en actueel zijn. Maar ook wat
      betreft de houdbaarheid: beheerders zorgen ervoor dat hun termen duurzaam beschikbaar zijn en voor lange tijd
      gebruikt kunnen worden.
    </p>

    <a id="what-is" />
    <h3 class="display-5">
      Wat is het Termennetwerk?
    </h3>
    <p>
      Het Termennetwerk is een zoekmachine voor termen. Je voert er een zoekvraag in – zoals ‘Rembrandt’ – en het
      Termennetwerk zoekt vervolgens rechtstreeks, realtime in terminologiebronnen naar overeenkomende termen. Uit de
      termen die dit oplevert kun je een keuze maken. Bijvoorbeeld ‘Rembrandt’ in RKDartists of ‘Rembrandt Harmensz.
      van Rijn’ in de Nederlandse Thesaurus van Auteursnamen.
    </p>

    <h3 class="display-5">
      Waarom is het Termennetwerk belangrijk?
    </h3>
    <p>
      Het Termennetwerk maakt het eenvoudiger om te zoeken in terminologiebronnen. Een collectiebeheerder hoeft enkel
      het Termennetwerk te raadplegen, niet meer de individuele bronnen. En een ontwikkelaar van erfgoedsoftware hoeft
      enkel te koppelen met het Termennetwerk, niet meer met de individuele bronnen. Dit scheelt tijd en geld.
    </p>

    <h3 class="display-5">
      Hoe kan ik het Termennetwerk gebruiken?
    </h3>
    <p>
      Je gebruikt het Termennetwerk in je collectiebeheersysteem. Je hoeft dus niet tussen beide te <em>switchen</em>.
      Hoe je het Termennetwerk precies kunt gebruiken, ligt aan de mogelijkheden die de leverancier van je systeem
      biedt. Dat kan er bijvoorbeeld als volgt uitzien:
    </p>
    <p>
      Stel, je bent in je systeem bezig met het beschrijven van een erfgoedobject, zoals De Nachtwacht. Bij het veld
      ‘Vervaardiger’ wil je aangeven wie de maker van het object is. Daartoe voer je in het veld een zoekvraag in,
      zoals ‘Rembrandt’, en geef je aan in welke terminologiebron je wilt zoeken, zoals RKDartists. Vervolgens stuurt
      het collectiebeheersysteem deze informatie naar het Termennetwerk. Het Termennetwerk antwoordt daarop met termen
      die voldoen aan de zoekvraag. Het collectiebeheersysteem toont jou de antwoorden in een lijst. Je kiest daarna
      de term die het beste past. Onder water, onzichtbaar, slaat het collectiebeheersysteem de identifier – de URI –
      van de gekozen term op, zoals <a href="https://data.rkd.nl/artists/66219">https://data.rkd.nl/artists/66219</a>.
      Daarmee is er een link gelegd tussen jouw erfgoedobject en de terminologiebron.
    </p>

    <h3 class="display-5">
      Hoe kan ik het Termennetwerk uitproberen?
    </h3>
    <p>
      Je kunt gebruikmaken van onze <em>demonstrator</em>, een website waarmee je zoekvragen aan het Termennetwerk
      kunt stellen. De demonstrator is te bereiken op de volgende locatie:
    </p>
    <p><a href="https://termennetwerk.netwerkdigitaalerfgoed.nl/">https://termennetwerk.netwerkdigitaalerfgoed.nl/</a></p>
    <p>
      Bovenaan de pagina kun je je zoekvraag invullen en aangeven in welke terminologiebron of -bronnen je wilt
      zoeken. Als je klikt op de knop <em>Zoeken</em> wordt je zoekvraag verwerkt. Onderaan de pagina verschijnen
      vervolgens de termen die gevonden zijn in de terminologiebronnen.
    </p>
    <p>
      Let op: de demonstrator en het Termennetwerk zijn verschillende toepassingen. De demonstrator illustreert de
      werking van het Termennetwerk, maar is geen onderdeel van het Termennetwerk.
    </p>

    <h3 class="display-5">
      Wie maakt en beheert het Termennetwerk?
    </h3>
    <p>
      Het Termennetwerk wordt gemaakt en beheerd door de samenwerkende erfgoedinstellingen in het Netwerk Digitaal
      Erfgoed. De instellingen staan in voor de werking en beschikbaarheid van het Termennetwerk.
    </p>

    <h3 class="display-5">
      Kan ik het Termennetwerk al gebruiken?
    </h3>
    <p>
      Jazeker! Het Termenetwerk is geschikt voor gebruik.
      We horen graag wat je ervan vindt. Bijvoorbeeld: zijn de zoekmogelijkheden toereikend? Zijn de zoekresultaten bruikbaar?
    </p>
    <p>
      Als je een stap verder wilt gaan, dan kun je het Termennetwerk in je collectiebeheersysteem laten implementeren
      door je leverancier. Wij ondersteunen je hier graag bij.
    </p>

    <h3 class="display-5">
      Ik wil een bepaalde terminologiebron gebruiken, maar die komt niet voor in het Termennetwerk.
      Kan die toegevoegd worden?
    </h3>
    <p>
      Laat ons weten welke bron het is en we kijken er graag naar. We gaan onderzoeken of de bron aan een aantal
      voorwaarden voldoet. Zo moet de bron als ‘open data’ beschikbaar zijn, bepaalde metadatastandaarden gebruiken en
      bepaalde zoekmogelijkheden bieden. Als de bron hier niet aan voldoet, dient de beheerder zijn bron eerst aan te
      passen voordat deze kan worden toegevoegd aan het Termennetwerk.
    </p>

    <h3 class="display-5">
      Ik heb een vraag, probleem of wens. Met wie kan ik contact opnemen?
    </h3>
    <p>
      Het Termennetwerk wordt beheerd en onderhouden door de Rijksdienst voor het Cultureel Erfgoed.<br>
      Wij zijn bereikbaar via <a href="mailto:thesauri@cultureelerfgoed.nl">thesauri@cultureelerfgoed.nl</a>.
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FaqNl1',
});
</script>