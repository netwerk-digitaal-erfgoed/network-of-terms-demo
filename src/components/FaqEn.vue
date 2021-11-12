<template>
  <div class="content">
    <h2 id="termennetwerk">
      Network of Terms
    </h2>

    <h3 class="display-5">
      What is the Network of Terms?
    </h3>
    <p>
      The Network of Terms is a new service being developed by the Dutch Digital Heritage Network for finding terms in
      terminology sources such as thesauri, classification systems, and reference lists. The Network of Terms searches
      all of the terminology sources available in the Heritage Network. We are still working on the final product, but
      this website will give you a taste of what’s in store for you.
    </p>

    <h3 class="display-5">
      Who is the Network of Terms for?
    </h3>
    <p>
      The Network of Terms is intended for everyone who manages heritage information and wants to provide standardized
      terms from common terminology sources, for example heritage collection managers or heritage portal editors.
      Please note that, as a user, you do not search the Network of Terms directly; your collection or content
      management system will do it for you.
    </p>

    <h3 class="display-5">
      Why is the Network of Terms being developed?
    </h3>
    <p>
      The Network of Terms will make it easier for collection managers and editors to use terms from terminology
      sources. Of course it is possible to search terminology sources directly, without the Network of Terms. This can
      be a challenge, however. Terminology sources use different ways to unlock their information. The Network of
      Terms facilitates the process by providing a uniform way of searching.
    </p>

    <h3 class="display-5">
      How does the Network of Terms work?
    </h3>
    <p>
      You search the Network of Terms through your collection or content management system. This is where you enter
      your search query, for instance: <em>Rembrandt</em> or <em>fiets</em> (‘bicycle’). You then select the
      terminology source you want to search, for instance: <em>Netherlands Thesaurus of Author’s names</em> (NTA) or
      <em>Art &amp; Architecture Thesaurus</em> (AAT). The Network of Terms then performs a real-time query of the
      terminology source and returns all the matching results. For <em>Rembrandt</em> it will return, for example, all
      the people going by that name, and for <em>fiets</em>, all concepts containing that noun, such as
      <em>bakfiets</em> (‘cargo bike’) and <em>waterfiets</em> (‘pedal boat’). The Network of Terms unlocks the
      information as it appears in the terminology sources, without any modifications.
    </p>

    <h2
      id="technology"
      class="display-5"
    >
      Technology
    </h2>

    <h3 class="display-5">
      How does the Network of Terms work, technically?
    </h3>
    <p>
      Users search the Network of Terms through their client systems, for instance a collection management system or
      content management system. The client forwards the user’s query to the Network of Terms server using
      <a href="https://graphql.org/">GraphQL</a>, a widely used search language. The server parses the query and
      sends it to the Linked Data API of the terminology source. The Network of Terms does so according to the
      terminology source protocol, for example SPARQL. The terminology source then searches for answers to the query
      and returns them to the Network of Terms, again according to its own protocol, for example in a certain data
      format (such as JSON-LD or RDF/XML) or a certain metadata standard (such as SKOS or Schema.org). The Network of
      Terms then converts the results to GraphQL and returns them to the user’s client system, which finally processes
      and presents them.
    </p>

    <h3 class="display-5">
      How can I address the prototype?
    </h3>
    <p>The user interface of the API can be accessed at:</p>
    <p>
      <a href="https://termennetwerk-api.netwerkdigitaalerfgoed.nl">https://termennetwerk-api.netwerkdigitaalerfgoed.nl</a>
    </p>
    <p>The prototype’s API can be accessed at the following location:</p>
    <p><a href="https://termennetwerk-api.netwerkdigitaalerfgoed.nl">https://termennetwerk-api.netwerkdigitaalerfgoed.nl</a></p>

    <h3 class="display-5">
      Is the source code of the prototype available?
    </h3>
    <p>Certainly! The source code can be found on GitHub:</p>
    <p><a href="https://github.com/netwerk-digitaal-erfgoed/network-of-terms-api">https://github.com/netwerk-digitaal-erfgoed/network-of-terms-api</a></p>

    <h3 class="display-5">
      I have a technical question. Who can I contact?
    </h3>
    <p>We are happy to help you if you send an email to <a href="mailto:tech@netwerkdigitaalerfgoed.nl">tech@netwerkdigitaalerfgoed.nl</a>.</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FaqEn',
});
</script>
