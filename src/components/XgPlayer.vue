<template>
<div>
  <vue3VideoPlay 
      width="100%"
      height="520px"
      :src="url"
      :type="options.type"
      :autoPlay="false"
       />
         </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const {url} = defineProps<{
  url: string
}>();
const options = reactive({
  type: 'm3u8', //视频类型
})
</script>