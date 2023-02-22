<template>
  <div class="custom_tabs">
    <ul :class="defineClass">
      <li  v-for="title in tabTitles" :key="title" @click="selectedTitle = title" :class="{active: selectedTitle == title}">
        <span>
          {{ title }}
        </span>
      </li>
    </ul>
    <slot />
  </div>
</template>
<script>
  import { ref, provide } from "vue";
  export default {
    props:['tabPosition'],
    setup(props, {slots}){
    const defineClass = ref("tabs__header-right")
    if(props.tabPosition === 'left'){
      defineClass.value = "tabs__header-left" 
    }
    const tabTitles = ref(slots.default()[0].children.map((tab)=> tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])
    provide('selectedTitle', selectedTitle)
      return {
        tabTitles,
        selectedTitle,
        defineClass,
      }
    }
  }

</script>

<style lang="scss" scoped>
   .custom_tabs{
     width: 100%;
     .tabs__header-right{
       display: flex;
       justify-content: flex-end;
       flex-direction: row;
       list-style-type:none;
       padding-bottom: 10px;
      //  margin-bottom: 10px;
       li{
        padding-left: 10px;
        padding-right: 10px;
        color: black;
        font-size: 15px;
        display: block;
       }
       li:hover{
        color: #fff;
        background-color: #ec2d7a;
        cursor: pointer;
       }
       margin: 0 0;
     }
     .tabs__header-left{
       display: flex;
       justify-content: flex;
       flex-direction: row;
       list-style-type:none;
       padding-bottom: 10px;
      //  margin-bottom: 10px;
       li{
        padding-left: 10px;
        padding-right: 10px;
        color: black;
        font-size: 15px;
        display: block;
       }
       li:hover{
        color: #fff;
        background-color: #ec2d7a;
        cursor: pointer;
       }
       margin: 0 0;
     }
     .active{
        background-color: #ec2d7a;
        cursor: pointer;
        span{
          color: #fff;
        }
     }
   }
</style>