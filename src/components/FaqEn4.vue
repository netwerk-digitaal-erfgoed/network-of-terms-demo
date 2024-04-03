<template>
  <div class="content">
    <h3 class="display-5">
      Background
    </h3>
    <p>Does your organization have a thesaurus, term list, or other terminology source that is useful for connecting objects across organizations? And is this terminology source managed and made available in a sustainable manner? Then you can consider having this terminology source included in the NDE Network of Terms. This way, other heritage organizations can use your terms to describe their objects in a sustainable and uniform manner. Think, for example, of terms related to buildings, persons, events, and so forth.</p>
    <p>The Network of Terms is open to suggestions for new terminology sources. Whether a terminology source can be added depends on content related and technical considerations. These are outlined below.</p>
    <p>If you have any questions after reading this, please feel free to contact the Cultural Heritage Agency of the Netherlands, the coordinator of the Network of Terms, via <a href="mailto:thesauri@cultureelerfgoed.nl">thesauri@cultureelerfgoed.nl</a>.</p>
    <h3 class="display-5">
      Content related requirements for Inclusion in the Network of Terms
    </h3>
    <p>Go through the following points to determine if your terminology source is suitable for inclusion in the Network of Terms.</p>
    <p><strong>Do my terms already exist in other terminology sources within the Term Network?</strong></p>
    <ul>
      <li>No: inclusion in the Term Network is possible.</li>
      <li>Yes: inclusion in the Term Network is not necessary as this could lead to duplication with another terminology source.</li>
      <li>Partial overlap with another terminology source:</li>
      <ul>
        <li>Contact the owner of this source and determine if it's possible to include your terms in it, and/or:</li>
        <li>Establish alignments between your terms and these terms prior to inclusion in the Term Network.</li>
      </ul>
    </ul>
    <p><strong>Do you expect collection managers, registrars, and other colleagues to use your terms to describe their objects?</strong></p>
    <ul>
      <li>Yes: inclusion in the Term Network is possible.</li>
      <li>No: inclusion in the Term Network is not necessary as the source will be used sparingly by the network.</li>
      <li>Don't know: Coordinate with the Term Network coordinator via <a href="mailto:thesauri@cultureelerfgoed.nl">thesauri@cultureelerfgoed.nl</a>.</li>
    </ul>
    <p><strong>To ensure the best possible findability, usability, and reuse of terms, does my terminology source meet the following requirements?</strong></p>
    <ul>
      <li>My terminology source is sustainably managed by the organization I work for. This means that there are financial resources and/or hours available to keep the source structurally available for the Term Network.</li>
      <li>Terms are uniformly recorded.</li>
      <li>All terms have at least one definition and preferred label (proposed writing style) in Dutch.</li>
      <li>If a term has a relationship with another term in my terminology source, these relationships are indicated. For example, if a source uses the SKOS data model, relationships with other terms in the terminology source can be published via relationships such as skos:broader, skos:narrower, or skos:related.</li>
      <li>If a term has a relationship with a term from another thesaurus or terminology source, this is clearly indicated. For example, the term "gilded brass" in the Cultural Heritage Thesaurus has an skos: exactMatch relationship with the same term in the Getty's Art and Architecture Thesaurus.</li>
    </ul>
    <h3 class="display-5">
      Technical Requirements for Inclusion in the Term Network
    </h3>
    <p>The technical requirements for inclusion are described below. These can pose a challenge if your collection management system or IT environment does not yet support them. If your terminology source does not yet meet these requirements, discuss this first with your supplier and/or IT department. For advice, you can always contact the provincial digital heritage coaches or the coordinator of the Term Network.</p>
    <p><strong>Technical Requirement 1: The terminology source makes terms discoverable via a SPARQL endpoint.</strong></p>
    <p>The Network of Terms is a federated search engine for terms. This means that the Network of Terms itself does not manage a database of terms, but retrieves terms from the source holder (i.e., the terminology source administrator). Therefore, in addition to sustainably managing the terms, the source holder must connect the terminology source to the Network of Terms. This is done via a SPARQL endpoint, as this is the 'language' that connects and makes searchable all sources within the Term Network.</p>
    <p>A source holder does not necessarily have to provide the SPARQL endpoint themselves but can also do so through collaborating organizations, a heritage institution, or another cooperative arrangement.</p>
    <p>It is also possible to use the online thesaurus management system PoolParty for this purpose, which includes a SPARQL endpoint. This is offered free of charge to heritage organizations and collaborative partnerships by the Cultural Heritage Agency of the Netherlands. If you want to know more about this, please contact <a href="mailto:thesauri@cultureelerfgoed.nl">thesauri@cultureelerfgoed.nl</a>.</p>
    <p><strong>Technical Requirement 2: The terminology source uses public URIs to record terms.</strong></p>
    <p>Terms can only be used to connect digital heritage if they are machine-readable. This is achieved by using URIs: unique web addresses that can be used by humans and computers to retrieve information about the term, such as definitions, labels, and related relationships. It is important that these URIs are publicly accessible without authentication, such as login credentials.</p>
    <p>An example of a URI is <a href="https://data.niod.nl/WO2_Thesaurus/events/9358">https://data.niod.nl/WO2_Thesaurus/events/9358</a> where all information about the term 'Evacuation of Breda' can be found. As described above in the 'Content related requirements' section, a URI preferably contains as much information about the term as possible, and at least enough information to make users understand what the term is about.</p>
    <h3 class="display-5">
      Additional Considerations and Preferences
    </h3>
    <p>The substantive and technical requirements described above can be further detailed in the <a href="https://netwerk-digitaal-erfgoed.github.io/requirements-terminologiebronnen/">Network of Terms requirements document</a>. In this document, you will also find more recommendations and 'nice-to-haves' to consider when offering a terminology source.</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FaqEn4',
});
</script>
