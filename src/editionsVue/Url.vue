<template>
<a :href="url" v-if="url.length > 0"><slot></slot></a>
<span v-else><slot></slot></span>
</template>

<script>
export default {
  props: ['url']
};
</script>
