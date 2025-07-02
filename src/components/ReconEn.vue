<template>
  <div class="content">
    <h3 class="display-5">
      Can I use the Network of Terms for <em>reconciliation</em>, for example in OpenRefine?
    </h3>
    <p>
      Yes! The Network of Terms offers a <em>Reconciliation Service</em> that allows you to match your data
      with terms. This makes it possible to convert words to URIs, for example from 'Rembrandt' to his URI
      in the source RKDartists, <a href="https://data.rkd.nl/artists/66219">https://data.rkd.nl/artists/66219</a>.
      This process is called <em>reconciliation</em>. With the Reconciliation Service you can make these conversions
      automated, for an entire dataset. That saves you a lot of time.
    </p>
    <p>
      You can use the Reconciliation Service in <a href="https://openrefine.org/">OpenRefine</a>.
      You will find manuals for this in the following documents:
      <ul>
        <li><a href="https://zenodo.org/record/7728880#.ZBxJWC8w1f0">Verrijk je collectie met termen: Handleiding Reconciliation met OpenRefine en het Termennetwerk</a></li>
        <li>Chapter <a href="https://docs.openrefine.org/manual/reconciling">Reconciling</a> of the OpenRefine documentation.</li>
        <li>Section 'Reconciliation service' in the (Dutch) <a href="https://www.adlibug.nl/wp-content/uploads/2015/05/20150430_Handout_Open_Refine_workshop.pdf">Handout Workshop Open Refine</a> (PDF; page 4).</li>
      </ul>
    </p>

    <h3 class="display-5">
      What considerations are there when using the Network of Terms for reconciliation?
    </h3>
    <ul>
      <li>
        the Network of Terms does offer the Reconciliation Service, but the actual
        term matching is done by the terminology resources, not the Network of Terms. So you search
        always in the sources themselves, so you always work with current terms.
        This also means that the speed at which terms are matched depends on the sources;
        sometimes this goes quickly, sometimes it takes a little longer. Also be wise with the amount of words on which
        you are looking for: the resources can be quite taxed when large numbers are involved.
      </li>
      <li>
        the Network of Terms can only search terminology resources in a simple way.
        For example, it does not know the types of terms, for example whether resources consist of
        'persons', 'places' or 'events'; for the Network of Terms all terms are of type 'concept' ('skos:Concept').
        This means that the Network of Terms can find more matches than you need.
      </li>
      <li>when reconciling in OpenRefine you must select the <strong>Reconcile against no particular type</strong> option.</li>
    </ul>

    <h3 class="display-5">
      What terminology resources can I use for reconciliation?
    </h3>
    <p>
      See the <router-link :to="{name: 'sources'}">
        {{ t('termSources.title') }}
      </router-link> for a list of available terminology sources.
      Each source has its reconciliation URL listed, if available.
      You need this URL, for example, to set up the source in OpenRefine as a so-called 'Standard service'.
    </p>
    <p>
      Note: The Network of Terms does not offer a Reconciliation Service for all sources.
      Some sources already have such a service, such as Wikidata.
    </p>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
</script>
