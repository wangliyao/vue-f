<template>
  <div class="tab-content" v-show="title == selectedTitle">
    <slot />
  </div>
</template>
<script lang="ts">
import {inject} from 'vue'
export default{
  props: ['title', 'content'],
  setup(props){
    const selectedTitle = inject('selectedTitle')
    return {
      selectedTitle
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-content{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

</style>