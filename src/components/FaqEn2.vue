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
      Wie maakt en beheert het Termennetwerk?
    </h3>
    <p>
      Het Termennetwerk wordt gemaakt en beheerd door de samenwerkende erfgoedinstellingen in het Netwerk Digitaal
      Erfgoed. De instellingen staan in voor de werking en beschikbaarheid van het Termennetwerk.
    </p>

    <h3 class="display-5">
      Mijn terminologiebron komt niet voor in het Termennetwerk. Wat betekent het als ik mijn bron
      toevoeg?
    </h3>
    <p>
      Daarmee geef je aan dat je bron van belang is voor de samenwerkende instellingen in het Netwerk Digitaal
      Erfgoed. Het stelt collectiebeheerders in staat om de termen in je bron eenvoudiger te vinden en te gebruiken
      bij het beschrijven van hun collecties. En dat zorgt ervoor dat digitaal erfgoed beter vindbaar wordt voor
      gebruikers.
    </p>
    <p>
      Let wel: het toevoegen van je bron aan het Termennetwerk betekent niet dat je bron verplaatst wordt van jouw
      systeem naar het Termennetwerk. Jij bent en blijft de eigenaar.
    </p>

    <h3 class="display-5">
      Aan welke voorwaarden moet mijn bron voldoen om toegevoegd te kunnen worden aan het
      Termennetwerk?
    </h3>
    <p>
      We stellen een aantal voorwaarden. Deze voorwaarden gaan bijvoorbeeld over functionaliteit en techniek: je bron
      moet met bepaalde metadatastandaarden werken, bepaalde zoekmogelijkheden bieden en technologieën als linked data
      ondersteunen. Maar de voorwaarden gaan ook over je organisatie: je moet ervoor zorgen dat je termen duurzaam
      beschikbaar zijn en voor lange tijd gebruikt kunnen worden.
    </p>

    <h3 class="display-5">
      Ik heb een vraag. Met wie kan ik contact opnemen?
    </h3>
    <p>We helpen je graag als je een e-mail stuurt naar <a href="mailto:tech@netwerkdigitaalerfgoed.nl">tech@netwerkdigitaalerfgoed.nl</a>.</p>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FaqEn2'
});
</script>