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

    <a id="terminology-source" />
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
      How can I use the Network of Terms?
    </h3>
    <p>
      You use the Network of Terms in your collection management system. So you don't have to <em>switch</em> between the two.
      Exactly how you can use the Network of Terms depends on the possibilities offered by the supplier of your system.
      For example, it could look like this:
    </p>
    <p>
      Suppose you are busy describing a heritage object in your system, such as The Night Watch. At the field
      'Manufacturer' you want to indicate who the maker of the object is. To do this, enter a search query in the field,
      such as "Rembrandt", and indicate which terminology source you want to search, such as RKDartists.
      The collection management system sends this information to the Network of Terms. The Network of Terms responds with terms
      that match the query. The collection management system shows you the answers in a list. You then choose
      the term that fits best. Under water, invisible, the collection management system stores the identifier – the URI –
      of the chosen term, such as <a href="https://data.rkd.nl/artists/66219">https://data.rkd.nl/artists/66219</a>.
      This creates a link between your heritage object and the terminology source.
    </p>

    <h3 class="display-5">
      How can I try out the Network of Terms?
    </h3>
    <p>
      You can use our <em>demonstrator</em>, a website that allows you to submit queries to the Network of Terms.
      The demonstrator can be reached at the following location:
    </p>
    <p><a href="https://termennetwerk.netwerkdigitaalerfgoed.nl/">https://termennetwerk.netwerkdigitaalerfgoed.nl/</a></p>
    <p>
      At the top of the page you can enter your search query and indicate which terminology source or sources you want
      to search. If you click on the <em>Search</em> button, your query will be processed. Appear at the bottom of the page
      then the terms found in the terminology sources.
    </p>
    <p>
      Please note that the demonstrator and the Network of Terms are different applications. The demonstrator illustrates the
      operation of the Network of Terms, but is not part of the Network of Terms.
    </p>

    <h3 class="display-5">
      Who creates and manages the Network of Terms?
    </h3>
    <p>
      The Network of Terms is created and managed by the collaborating heritage institutions in the Network Digital
      Heritage. Theses organisations are responsible for the operation and availability of the Network of Terms.
    </p>

    <h3 class="display-5">
      Can I already use the Network of Terms?
    </h3>
    <p>
      Of course! The Terme network is ready for use.
      We'd love to hear what you think. For example: are the search options sufficient? Are the search results useful?
    </p>
    <p>
      If you want to go a step further, you can have the Network of Terms implemented in your collection management system
      by your supplier. We are happy to support you in this.
    </p>

    <h3 class="display-5">
      I want to use a particular terminology source, but it is not in the Network of Terms.
      Can it be added?
    </h3>
    <p>
      Let us know what source it is and we'll be happy to look into it. We are going to investigate if the source meets
      the conditions. For example, the source must be available as 'open data', use certain metadata standards and
      provide certain search options. If the source does not meet these requirements, the administrator must first create his source
      before it can be added to the Network of Terms.
    </p>

    <a id="ServerError" />
    <h3 class="display-5">
      I'm getting an error: "{{ t('api.ServerError') }}". What does this mean?
    </h3>
    <p>
      The Network of Terms searches <a href="#terminology-source">terminology sources</a> directly (in real time).
      When a terminology source is unavailable,
      for example because of a service interruption or maintenance by the source provider,
      the Network of Terms cannot provide search results.
      Please retry your search request later.
      If the problem persists, you can report it to the
      <router-link :to="{name: 'sources'}">
        source provider
      </router-link>.
    </p>

    <a id="TimeoutError" />
    <h3 class="display-5">
      I'm getting an error: "{{ t('api.TimeoutError') }}". What does this mean?
    </h3>
    <p>
      The Network of Terms searches
      <a href="#terminology-source">terminology sources</a> directly (in real time).
      Sometimes a terminology source responds slowly, for example due to high load.
      When a source takes too long to respond, the Network of Terms stops waiting and displays this error.
      Please retry your search request later or contact the
      <router-link :to="{name: 'sources'}">
        source provider
      </router-link>.
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
import {useI18n} from 'vue-i18n';

export default defineComponent({
  name: 'FaqEn1',
  setup() {
    const {t} = useI18n();
    return {t};
  },
});
</script>
