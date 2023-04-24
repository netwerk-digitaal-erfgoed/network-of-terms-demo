<template>
  <div class="content">
    <p>In this FAQ we provide answers to frequently asked questions about the Terme network.</p>
    <p>We have divided the questions by target audience:</p>
    <ul>
      <li>
        <router-link
          :to="{name: 'faq1'}"
          href="/faq1"
        >
          or collection managers
        </router-link>
      </li>
      <li>
        <router-link
          :to="{name: 'faq2'}"
          href="/faq2"
        >
          for managers of terminology resources
        </router-link>
      </li>
      <li>
        <router-link
          :to="{name: 'faq3'}"
          href="/faq3"
        >
          for heritage software developers
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FaqEn',
});
</script>