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
      Who assigns terms to heritage?
    </h3>
    <p>
      Terms are assigned by collection managers of heritage institutions. They are subject matter experts and
      know which terms best describe the heritage in their collections.
    </p>
    <p>
      When assigning a term to a heritage object, the collection manager records the URI of the term, not the word.
      If the administrator were to record the word, its meaning could be unclear. Take, for example, the
      word <em>bank</em>: is it a seat or a credit institution? The URI, on the other hand, indicates very
      precisely which term is meant, so that there are never any misunderstandings about the meaning.
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
      How does the Network of Terms work, technically?
    </h3>
    <p>
      The Network of Terms has a <em>Application Programming Interface</em> (API) that provides a collection management system
      with a means to query. The Network of Terms receives the query from the
      collection management system and forwards it to the APIs of the terminology resources. The Network of Terms does this
      according to the technical specifications of each terminology source, with the query language SPARQL. The
      terminology sources then search for answers to the query and return them to the Network of Terms. They
      do this according to their own specifications, for example in a certain data format (such as JSON-LD or RDF/XML) or
      a particular metadata standard (such as SKOS or Schema.org). The Network of Terms collects and unifies the
      results and returns them to the collection management system.
    </p>
    <p>Schematically this looks like this:</p>
    <p><img src="../assets/tn-diagram-nl.png"></p>

    <h3 class="display-5">
      How does the API of the Network of Terms work?
    </h3>
    <p>
      The API uses <a href="https://graphql.org/">GraphQL</a> as the query language. GraphQL enables developers to
      indicate very precisely what information they want to receive back from the Network of Terms. This makes the API
      flexible and versatile. The API uses <a href="https://en.wikipedia.org/wiki/JSON">JSON</a> as data format.
      JSON is technology independent and therefore suitable for all kinds of applications. Finally, the API uses
      <a href="https://www.w3.org/TR/skos-reference/">SKOS</a> as a metadata standard. SKOS is an accessible,
      commonly used model to structure information about terms.
    </p>

    <h3 class="display-5">
      How can I try out the Network of Terms?
    </h3>
    <p>
      You can use <a href="https://termennetwerk-api.netwerkdigitaalerfgoed.nl">GraphQL Playground</a>,
      an interactive editor that allows you to submit GraphQL questions to the Network of Terms through your browser.
    </p>
    <p>
      On the left side of the page you can specify your GraphQL query. For example: with the following query you specify
      you want to search for terms containing the word 'painting' in the terminology sources Art &amp; Architecture
      Thesaurus (AAT) and Cultural History Thesaurus (CHT).
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
      Note: in this query, you only specify its identifier (‘uri’), preferred name for each term found
      (‘prefLabel’) and alternative name (‘altLabel’). However, there are more fields per term
      available. With the following question you indicate that you want to get all fields back:
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
      If you click on the button with the triangle in the top middle, your query will be executed. The right side of
      the page then displays the terms found in the terminology sources.
    </p>

    <h3 class="display-5">
      How can I access the Network of Terms API?
    </h3>
    <p>
      The first step is to select a GraphQL <em>client library</em> that fits your technology used in your
      collection management system, such as Java, .NET or Python. A list of available libraries can be found at the
      <a href="https://graphql.org/code/#graphql-clients">GraphQL website</a>. The second step is use this
      library to access the API of the Network of Terms with GraphQL queries. The API can be reached at the following
      location:
    </p>
    <p>https://termennetwerk-api.netwerkdigitaalerfgoed.nl/graphql</p>

    <h3 class="display-5">
      How can I use the Network of Terms from my collection management system?
    </h3>
    <p>
      In a way that suits your collection management system. The Network of Terms offers certain search options, but
      does not dictate how users of your system interact with it or how search results should be presented
      become. You can determine functionality and design yourself, in consultation with your users. A possible workflow
      is as follows:
    </p>
    <p>
      A collection manager is busy describing a heritage object in its collection management system, such as
      The Night Watch. In the 'Manufacturer' field, she wants to indicate who the maker of the object is. To this end, the
      collection manager enters a query in the field, such as 'Rembrandt', and indicates in which terminology source
      to be searched for, such as RKDartists. The collection management system then sends this information to the API
      of the Network of Terms. The Network of Terms responds with terms that meet the search query. It
      collection management system shows the answers in a list to the collection manager. The collection manager chooses
      then the term that best fits. It hits underwater, invisible to the collection manager
      collection management system the identifier – the URI – of the chosen term, such as <a href="https://data.rkd.nl/artists/66219">https://data.rkd.nl/artists/66219</a>.
    </p>

    <h3 class="display-5">
      Who creates and manages the Network of Terms?
    </h3>
    <p>
      The Network of Terms is created and managed by the collaborating heritage institutions in the Network Digital
      Heritage. The settings are responsible for the operation and availability of the Network of Terms.
    </p>

    <h3 class="display-5">
      Can I already use the Network of Terms?
    </h3>
    <p>
      Of course! The Terme network is ready for use.
      We'd love to hear what you think. For example: are the search options sufficient? Are the search results useful?
    </p>
    <p>
      If you want to go a step further, you can implement the Network of Terms in your collection management system so that
      collection managers can work with it. We are happy to support you in this.
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
  name: 'FaqEn3',
});
</script>
