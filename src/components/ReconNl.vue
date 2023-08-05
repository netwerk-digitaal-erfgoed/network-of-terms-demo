<template>
  <div class="content">
    <h3 class="display-5">
      Kan ik het Termennetwerk gebruiken voor <em>reconciliation</em>, bijvoorbeeld in OpenRefine?
    </h3>
    <p>
      Ja! Het Termennetwerk biedt een <em>Reconciliation Service</em> waarmee je je data kunt
      matchen met termen. Hierdoor wordt het mogelijk om woorden om te zetten naar URI's, bijvoorbeeld
      van 'Rembrandt' naar diens URI in de bron RKDartists, <a href="https://data.rkd.nl/artists/66219">https://data.rkd.nl/artists/66219</a>.
      Dit proces heet <em>reconciliation</em>. Met de Reconciliation Service kun je deze omzettingen
      geautomatiseerd doen, voor een hele dataset. Dat bespaart je enorm veel tijd.
    </p>
    <p>
      Je kunt de Reconciliation Service gebruiken in <a href="https://openrefine.org/">OpenRefine</a>.
      Handleidingen hiervoor vind je in de volgende documenten:
      <ul>
        <li><a href="https://zenodo.org/record/7728880#.ZBxJWC8w1f0">Verrijk je collectie met termen: Handleiding Reconciliation met OpenRefine en het Termennetwerk</a></li>
        <li>Hoofdstuk <a href="https://docs.openrefine.org/manual/reconciling">Reconciling</a> in de documentatie van OpenRefine.</li>
        <li>Sectie 'Reconciliation service' in de <a href="https://www.adlibug.nl/wp-content/uploads/2015/05/20150430_Handout_Open_Refine_workshop.pdf">Handout Workshop Open Refine</a> (PDF; blz. 4).</li>
      </ul>
    </p>

    <h3 class="display-5">
      Welke aandachtspunten zijn er bij het gebruik van het Termennetwerk voor reconciliation?
    </h3>
    <ul>
      <li>
        het Termennetwerk biedt weliswaar de Reconciliation Service, maar het daadwerkelijk
        matchen van termen wordt gedaan door de terminologiebronnen, niet door het Termennetwerk. Je zoekt dus
        altijd in de bronnen zelf, waardoor je altijd met actuele termen werkt.
        Dit betekent ook dat de snelheid waarmee termen gematcht worden, afhankelijk is van de bronnen;
        soms gaat dit snel, soms duurt dit iets langer. Ga ook verstandig om met de hoeveelheid woorden waarop
        je zoekt: de bronnen kunnen flink belast worden als het om grote aantallen gaat.
      </li>
      <li>
        het Termennetwerk kan slechts eenvoudig zoeken in terminologiebronnen.
        Het heeft bijvoorbeeld geen weet van de types van termen, bijvoorbeeld of bronnen bestaan uit
        'personen', 'plaatsen' of 'gebeurtenissen'; voor het Termennetwerk zijn alle termen van het type 'concept' ('skos:Concept').
        Dit betekent dat het Termennetwerk meer matches kan vinden dan je nodig hebt.
      </li>
      <li>bij het reconciliëren in OpenRefine moet je de optie <strong>Reconcile against no particular type</strong> selecteren.</li>
    </ul>

    <h3 class="display-5">
      Wat betekent het getal tussen haakjes achter elk zoekresultaat?
    </h3>
    <p>
      Dat is de procentuele relevantiescore van de zoekresultaten (op een schaal van 1 t/m 100).
      De score geeft aan in hoeverre elke gevonden term overeenkomt met de zoekwoorden.
      Omdat de terminologiebronnen dit niet zelf ondersteunen, wordt de score toegekend door het Termennetwerk.
      De score wordt bepaald op basis van de letterlijke overeenkomst tussen enerzijds de zoekwoorden uit je data en
      anderzijds de naam en alternatieve labels van elke term.
    </p>
    <p>
      Wanneer bijvoorbeeld het woord ‘glas’ voorkomt in je data:
    </p>
    <ul>
      <li>krijgt een gevonden term met naam ‘glas’ score 100%</li>
      <li>een term met naam ‘breukglas’ score 55%</li>
      <li>en een term met naam ‘borosilicaatglas’ en alternatief label ‘boraxglas’ ook score 55%.</li>
    </ul>

    <h3 class="display-5">
      Welke terminologiebronnen kan ik gebruiken voor reconciliation?
    </h3>
    <p>
      Hieronder vind je een lijst van beschikbare bronnen. Bij elke bron staat diens URL vermeld.
      Deze URL heb je bijvoorbeeld nodig om de bron te kunnen inrichten in OpenRefine als zogeheten 'Standaarddienst'.
    </p>
    <p>
      Merk op: het Termennetwerk biedt niet voor alle bronnen een Reconciliation Service.
      Sommige bronnen hebben zelf al zo'n service, zoals Wikidata.
    </p>

    <suspense>
      <ReconciliationEndpoints />
    </suspense>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ReconciliationEndpoints from './ReconciliationEndpoints.vue';

export default defineComponent({
  name: 'ReconNl',
  components: {ReconciliationEndpoints},
});
</script>
