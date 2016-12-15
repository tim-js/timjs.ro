<template>
<ul>
  <li class="edition" v-for="edition in filteredList" :key="edition.name">
    <Edition :edition="edition"/>
  </li>
</ul>
</template>

<script>
import Edition from './Edition.vue';

export default {

  props: {
    list: {type: Array, default: []},
    filter: {type: String, default: ''}
  },

  computed: {
    filteredList() {
      if (!this.filter.length) {
        return this.list;
      }
      return this.list.filter(edition => edition.type === this.filter);
    }
  },

  components: { Edition }
}
</script>
