<template>
  <div class="content">
    <p>In deze FAQ geven we antwoorden op veelgestelde vragen over het Termenetwerk.</p>
    <p>We hebben de vragen opgedeeld per doelgroep:</p>
    <ul>
      <li>
        <router-link
          :to="{name: 'faq1'}"
          href="/faq1"
        >
          voor beheerders van erfgoedcollecties
        </router-link>
      </li>
      <li>
        <router-link
          :to="{name: 'faq2'}"
          href="/faq2"
        >
          voor beheerders van terminologiebronnen
        </router-link>
      </li>
      <li>
        <router-link
          :to="{name: 'faq4'}"
          href="/faq4"
        >
          voor aanbieders van terminologiebronnen
        </router-link>
      </li>
      <li>
        <router-link
          :to="{name: 'faq3'}"
          href="/faq3"
        >
          voor ontwikkelaars van erfgoedsoftware
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FaqNl',
});
</script>
