// de ce 'vue/dist/vue' ?!
// https://forum-archive.vuejs.org/topic/4399/vue-2-0-vue-warn-failed-to-mount-component-template-or-render-function-not-defined-found-in-root-instance
import Vue from 'vue/dist/vue';
import EditionsContainer from './EditionsContainer.vue';

new Vue({
  el: '#past-editions',
  template: `<EditionsContainer></EditionsContainer>`,
  components: { EditionsContainer }
});
