<template>
<div>
  <strong>
    <Url :url="talkUrl">{{ talkTitle }}</Url>
  </strong>
  <br>
  <i>
    <Url :url="speakerUrl">{{ speakerName }}</Url>
  </i>
</div>
</template>

<script>
import Url from './Url.vue';

export default {
  props: ['data'],

  data() {
    return {
      talkTitle: this.data.title,
      speakerName: this.data.speaker
    };
  },

  computed: {
    talkUrl() {
      return this.data.urlVideo || this.data.urlPresentation || '';
    },
    speakerUrl() {
      return this.data.urlSpeaker || '';
    }
  },

  components: { Url }
};
</script>
