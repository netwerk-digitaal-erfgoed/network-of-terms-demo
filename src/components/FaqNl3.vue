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
      Wie kent termen toe aan erfgoed?
    </h3>
    <p>
      Termen worden toegekend door collectiebeheerders van erfgoedinstellingen. Zij zijn materiedeskundigen en weten
      met welke termen zij het erfgoed in hun collecties het beste kunnen beschrijven.
    </p>
    <p>
      Bij het toekennen van een term aan een erfgoedobject legt de collectiebeheerder de URI van de term vast, niet
      het woord. Als de beheerder het woord zou vastleggen, zou de betekenis ervan onduidelijk kunnen zijn. Neem
      bijvoorbeeld het woord <em>bank</em>: gaat het om een zitplaats of een kredietinstelling? De URI geeft
      daarentegen heel precies aan welke term bedoeld wordt, waardoor er nooit misverstanden over de betekenis zijn.
    </p>

    <h3 class="display-5">
      Wat zijn terminologiebronnen?
    </h3>
    <p>
      Termen worden beheerd in terminologiebronnen, zoals thesauri, referentielijsten of classificatiesystemen. Zo
      zijn er bronnen met informatie over plaatsen, zoals <a href="https://www.geonames.org/">GeoNames</a>, en bronnen
      met informatie over personen, zoals <a href="https://rkd.nl/nl/explore/artists">RKDartists</a>. Ook zijn er
      algemene bronnen met informatie over allerlei onderwerpen, zoals <a href="https://www.wikidata.org/">Wikidata</a>,
      en specifieke bronnen met informatie over gerichte onderwerpen, zoals de
      <a href="https://vtmk.data.momu.be/id.html">Visuele Thesaurus voor Mode en Kostuums</a>.
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
      Hoe werkt het Termennetwerk, technisch?
    </h3>
    <p>
      Het Termennetwerk heeft een <em>Programming Interface</em> (API) die door een collectiebeheersysteem
      aangesproken kan worden met een zoekvraag. Het Termennetwerk ontvangt de zoekvraag van het
      collectiebeheersysteem en zet deze door naar de API’s van de terminologiebronnen. Het Termennetwerk doet dit
      volgens de technische specificaties van elke terminologiebron, bijvoorbeeld met de zoektaal SPARQL. De
      terminologiebronnen zoeken daarna naar antwoorden op de zoekvraag en geven deze terug aan het Termennetwerk. Ze
      doen dit volgens hun eigen specificaties, bijvoorbeeld in een bepaald dataformaat (zoals JSON-LD of RDF/XML) of
      een bepaalde metadatastandaard (zoals SKOS of Schema.org). Het Termennetwerk verzamelt en uniformeert de
      resultaten en retourneert deze aan het collectiebeheersysteem.
    </p>
    <p> Schematisch ziet dit er als volgt uit: </p>
    <p><img src="../assets/tn-diagram-nl.png"></p>

    <h3 class="display-5">
      Hoe steekt de API van het Termennetwerk in elkaar?
    </h3>
    <p>
      De API gebruikt <a href="https://graphql.org/">GraphQL</a> als zoektaal. GraphQL stelt ontwikkelaars in staat om
      heel precies aan te geven welke informatie zij terug willen krijgen van het Termennetwerk. Dit maakt de API
      flexibel en veelzijdig. De API gebruikt <a href="https://nl.wikipedia.org/wiki/JSON">JSON</a> als dataformaat.
      JSON is technologie-onafhankelijk en daarmee geschikt voor allerlei toepassingen. Tot besluit gebruikt de API
      <a href="https://www.w3.org/TR/skos-reference/">SKOS</a> als metadatastandaard. SKOS is een laagdrempelig,
      veelgebruikt model om informatie over termen te structureren.
    </p>

    <h3 class="display-5">
      Hoe kan ik het Termennetwerk uitproberen?
    </h3>
    <p>
      Je kunt gebruikmaken van <a href="https://termennetwerk-api.netwerkdigitaalerfgoed.nl">GraphQL Playground</a>,
      een interactieve editor waarmee je GraphQL-vragen aan het Termennetwerk kunt stellen via je browser.
    </p>
    <p>
      Aan de linkerkant van de pagina kun je je GraphQL-query opgeven. Bijvoorbeeld: met de volgende query geef je aan
      te willen zoeken naar termen met het woord ‘schilderij’ in de terminologiebronnen Art &amp; Architecture
      Thesaurus (AAT) en Cultuurhistorische Thesaurus (CHT).
    </p>
    <pre>query Terms {
  terms(
    sources: [
      "http://vocab.getty.edu/aat/sparql",
      "https://data.cultureelerfgoed.nl/PoolParty/sparql/term/id/cht",
    ]
    query: "schilderij"
  ) {
    source {
      name
    }
    result {
      __typename
      ... on Terms {
        terms {
          uri
          prefLabel
          altLabel
        }
      }
      ... on Error {
        message
      }
    }
  }
}</pre>
    <p>
      Merk op: in deze query geef je aan per gevonden term alleen diens identifier (‘uri’), voorkeursnaam
      (‘prefLabel’) en alternatieve naam (‘altLabel’) terug te willen krijgen. Er zijn echter meer velden per term
      beschikbaar. Met de volgende vraag geef je aan alle velden terug te willen krijgen:
    </p>
    <pre>query Terms {
  terms(
    sources: [
      "http://vocab.getty.edu/aat/sparql",
      "https://data.cultureelerfgoed.nl/PoolParty/sparql/term/id/cht",
    ]
    query: "schilderij"
  ) {
    source {
      uri
      name
      creators {
        uri
        name
        alternateName
      }
    }
    result {
      __typename
      ... on Terms {
        terms {
          uri
          prefLabel
          altLabel
          hiddenLabel
          scopeNote
          broader {
            uri
            prefLabel
          }
          narrower {
            uri
            prefLabel
          }
          related {
            uri
            prefLabel
          }
          exactMatch {
            uri
            prefLabel
          }
        }
      }
      ... on Error {
        message
      }
    }
  }
}</pre>
    <p>
      Als je midden bovenin klikt op de knop met het driehoekje, dan wordt je query uitgevoerd. Aan de rechterkant van
      de pagina verschijnen vervolgens de termen die gevonden zijn in de terminologiebronnen.
    </p>

    <h3 class="display-5">
      Hoe kan ik de API van het Termennetwerk aanspreken?
    </h3>
    <p>
      De eerste stap is door een GraphQL <em>client library</em> te selecteren die past bij de technologie van je
      collectiebeheersysteem, zoals Java, .NET of Python. Een lijst met beschikbare libraries is te vinden op de
      <a href="https://graphql.org/code/#graphql-clients">website van GraphQL</a>. De tweede stap is door in je
      library de API van het Termennetwerk aan te spreken met GraphQL-queries. De API is te bereiken op de volgende
      locatie:
    </p>
    <p>https://termennetwerk-api.netwerkdigitaalerfgoed.nl/graphql</p>

    <h3 class="display-5">
      Hoe kan ik vanuit mijn collectiebeheersysteem gebruikmaken van het Termennetwerk?
    </h3>
    <p>
      Op een manier die past bij jouw collectiebeheersysteem. Het Termennetwerk biedt bepaalde zoekmogelijkheden, maar
      schrijft niet voor hoe gebruikers van je systeem hiermee interacteren of hoe zoekresultaten gepresenteerd moeten
      worden. Functionaliteit en vormgeving kun je zelf bepalen, in overleg met je gebruikers. Een mogelijke workflow
      is als volgt:
    </p>
    <p>
      Een collectiebeheerder is in haar collectiebeheersysteem bezig met het beschrijven van een erfgoedobject, zoals
      De Nachtwacht. Bij het veld ‘Vervaardiger’ wil zij aangeven wie de maker van het object is. Daartoe voert de
      collectiebeheerder in het veld een zoekvraag in, zoals ‘Rembrandt’, en geeft aan in welke terminologiebron
      gezocht moet worden, zoals RKDartists. Vervolgens stuurt het collectiebeheersysteem deze informatie naar de API
      van het Termennetwerk. Het Termennetwerk antwoordt daarop met termen die voldoen aan de zoekvraag. Het
      collectiebeheersysteem toont de antwoorden in een lijst aan de collectiebeheerder. De collectiebeheerder kiest
      daarna de term die het beste past. Onder water, onzichtbaar voor de collectiebeheerder, slaat het
      collectiebeheersysteem de identifier – de URI – van de gekozen term op, zoals <a href="https://data.rkd.nl/artists/66219">https://data.rkd.nl/artists/66219</a>.
    </p>

    <h3 class="display-5">
      Welke terminologiebronnen moet ik doorzoeken?
    </h3>
    <p>
      Welke terminologiebronnen relevant zijn om te doorzoeken, is afhankelijk van de aard van de beheerde collecties.
      De selectie van bronnen kun je daarom het beste maken in overleg met de gebruikers van je collectiebeheersysteem.
      Een mogelijkheid is dat gebruikers zelf de selectie maken per collectie of per veld.
    </p>
    <p>
      Hoe dan ook is het belangrijk om niet onnodig veel, laat staan <em>alle</em>, bronnen te doorzoeken.
      Dat leidt namelijk tot onnodig lange wachttijden en verwarrende resultaten.
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
      Jazeker! Het Termennetwerk is geschikt voor gebruik.
      We horen graag wat je ervan vindt. Bijvoorbeeld: zijn de zoekmogelijkheden toereikend? Is de API bruikbaar?
    </p>
    <p>
      Als je een stap verder wilt gaan, dan kun je het Termennetwerk in je collectiebeheersysteem implementeren zodat
      collectiebeheerders ermee aan de slag kunnen. Wij ondersteunen je hier graag bij.
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
  name: 'FaqNl3',
});
</script>
