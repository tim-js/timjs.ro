<template>
<div>
  <h2>
    <a :href="edition.url">{{ edition.name }}</a>
  </h2>
  <small>{{ edition.date }} at {{ edition.location }}</small>
  <br>
  <br>

  <input type="checkbox" value="on" v-model="displayTalks" @change="toggleTalks" v-if="hasTalks">

  <transition appear name="bounce">
    <div class="talks-list" v-show="displayTalks">
      <div v-for="talk in edition.talks">
        <Talk :data="talk"></Talk>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import Talk from './Talk.vue';
import './edition.css';

export default {
  props: ['edition'],

  data() {
    return {
      displayTalks: true
    };
  },

  methods: {
    toggleTalks(event) {
      this.displayTalks = event.target.checked;
    }
  },

  computed: {
    hasTalks() {
      return !!this.edition.talks;
    }
  },

  components: { Talk }
}
</script>
