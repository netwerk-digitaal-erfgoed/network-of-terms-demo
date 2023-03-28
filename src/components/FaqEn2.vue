<template>
  <div class="content">

    <h3 class="display-5">
      What are terms?
    </h3>
    <p>
      Terms describe what heritage is about. Terms are, for example, subjects, persons or places. For example the
      Night watch: it is a 'painting', made by 'Rembrandt' in 'Amsterdam'.
    </p>
    <p>
      Yet a term is more than a word. Each term has an identifier, a so-called
      <a href="https://en.wikipedia.org/wiki/Uniform_resource_identifier">URI</a>. A URI is a unique address
      which makes it unambiguously clear which term is meant. For example, the (Dutch) term 'noodweer' could be a
      legal concept or really bad weather? The meaning becomes clear when you read the URI of the
      term, such as <a href="http://www.wikidata.org/entity/Q741507">http://www.wikidata.org/entity/Q741507</a>.
    </p>
    <p>
      In addition, a term can contain additional information, such as a definition or an alternative name. For example
      the term "painting" with the URI <a href="http://vocab.getty.edu/aat/300177435">http://vocab.getty.edu/aat/300177435</a>.
      The extra information about this term makes it clear that it has a synonym (in Dutch), 'schilderstuk'.
    </p>

    <h3 class="display-5">
      Why are terms important?
    </h3>
    <p>
      Terms enable users – such as students, journalists or scientists – to understand heritage on the web
      better to find. For example: if a user just searches for the <em>word</em> 'painting', he will find
      only the heritage in which this word occurs, not the heritage with the synonym 'schilderstuk'. But if one
      user searches for the <em>term</em> 'painting', he also finds the heritage in which 'schilderstuk' occurs.
      The use of terms therefore ensures better findability.
    </p>

    <h3 class="display-5">
      What are terminology resources?
    </h3>
    <p>
      Terms are managed in terminology resources, such as thesauri, reference lists, or classification systems. There
      are there resources with information about places, such as <a href="https://www.geonames.org/">GeoNames</a>, and resources
      with information about individuals, such as <a href="https://rkd.nl/nl/explore/artists">RKDartists</a>. Also there are
      general resources with information on a variety of topics, such as <a href="https://www.wikidata.org/">Wikidata</a>,
      and specific sources of information on targeted topics, such as the 
      <a href="https://vtmk.data.momu.be/id.html">Visual Thesaurus for Fashion and Costumes</a>.
    </p>

    <h3 class="display-5">
      Why are terminology resources important?
    </h3>
    <p>
      Terms are not just concepts: they are official designations. The administrators of terminology resources
      guarantee its quality. For example, content: terms must be accurate and up-to-date. But also what
      with regard to sustainability: managers ensure that their terms are available sustainably and for a long time
      can be used.
    </p>

    <h3 class="display-5">
      What is the Network of Terms?
    </h3>
    <p>
      The Network of Terms is a search engine for terms. You enter a query - such as 'Rembrandt' - and the
      Network of Terms then searches terminology sources directly, in real time, for matching terms. From the
      terms that this produces you can make a choice. For example 'Rembrandt' in RKDartists or 'Rembrandt Harmensz.
      van Rijn' in the Dutch Thesaurus of Authors' Names.
    </p>

    <h3 class="display-5">
      Why is the Network of Terms important?
    </h3>
    <p>
      The Network of Terms makes it easier to search terminology sources. A collection manager needs only to 
      consult the Network of Terms, no longer the individual sources. And a heritage software developer doesn't have to
      interface with the individual sources, just one interface to the Network of Terms. This saves time and money.
    </p>

    <h3 class="display-5">
      Who creates and manages the Network of Terms?
    </h3>
    <p>
      The Network of Terms is created and managed by the collaborating heritage institutions in the Network Digital
      Heritage. The settings are responsible for the operation and availability of the Network of Terms.
    </p>

    <h3 class="display-5">
      My terminology resource is not listed in the Network of Terms. What does it mean if I use my source
      add?
    </h3>
    <p>
      This indicates that your source is important to the collaborating institutions in the Digital Network
      Heritage. It allows collection managers to more easily find and use the terms in your resource
      when describing their collections. And that ensures that digital heritage becomes easier to find for
      users.
    </p>
    <p>
      Please note: adding your resource to the Network of Terms does not mean that your resource will be moved from your
      system to the Network of Terms. You are and remain the owner.
    </p>

    <h3 class="display-5">
      What conditions must my source meet in order to be added to the
      Network of Terms?
    </h3>
    <p>
      We set a number of conditions. These terms and conditions are, for example, about functionality and technology: your source
      must work with certain metadata standards, offer certain search options and technologies such as linked data.
      But the conditions are also about your organization: you must ensure that your terms are sustainable
      are available and can be used for a long time.
    </p>

    <h3 class="display-5">
      I have a question, problem or wish. Who can I contact?
    </h3>
    <p>
      The Network of Terms is managed and maintained by the Cultural Heritage Agency of the Netherlands.<br>
      We can be reached at <a href="mailto:thesauri@cultureelerfgoed.nl">thesauri@cultureelerfgoed.nl</a>.
    </p>
    
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FaqEn2'
});
</script>