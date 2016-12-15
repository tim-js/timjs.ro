<template>
<div>
  <FilterButton :filter="filter" :currentType="filter" type="">All</FilterButton>
  <FilterButton :filter="filter" :currentType="filter" type="meetup">Meetups</FilterButton>
  <FilterButton :filter="filter" :currentType="filter" type="workshop">Workshops</FilterButton>

  <EditionsList :filter="filter" :list="editions"></EditionsList>
</div>
</template>

<script>
import Events from './Events.vue';

import FilterButton from './FilterButton.vue';
import EditionsList from './EditionsList.vue';

export default {
  data () {
    return {
      filter: '',
      editions: []
    }
  },

  mounted() {
    Events.$on('filterChange', newFilterType => this.filter = newFilterType);

    fetch('./src/editionsReact/editions.json')
      .then(res => res.json())
      .then(resData => {
        this.editions = resData;
      })
      .catch(err => {
        console.warn('Error fetching editions data, from JSON file', err);
      });
  },

  components: { FilterButton, EditionsList }
}
</script>
