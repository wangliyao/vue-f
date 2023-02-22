<template>
   <div class="header">
    <div class="navTop">
     <div class="navTopLeft">
        <img src="https://www.nunuyy5.org/js/logo.png" alt="">
     </div>
     <div class="navTopRight">
        <div class="navRightSpan">
          <a  v-for="(item, index) in topbar" :key="index" :href="item.url" @click="store.hoverTopBar(index)">
            <span  :class="topBarIndex == index ? 'is-active': '' ">{{ item.name }}</span>
          </a>
        </div>
        <el-input placeholder="搜索" class="SearchInput" v-model="searchInput" v-on:keyup.enter="search">
          <template #append>
            <el-button @click="search">
              <el-icon>
                <Search />
              </el-icon>
            </el-button>
          </template>
        </el-input>
    </div>
   </div>
   </div>
</template>

<script lang="ts" setup>
  import {useGlobalStore} from "@/store/global"
  import { storeToRefs } from "pinia";
  import {ref} from 'vue'
  import { useRouter } from "vue-router";
  const { topBarIndex } = storeToRefs(useGlobalStore())
  const store = useGlobalStore()
  const router = useRouter()

  interface TopListBar {
    name: string,
    url: string
  }

  let topbar:TopListBar[] = [
    {
      name: '首页',
      url: '/'
    },
    {
      name: '电影',
      url: '/movie'
    },
    {
      name: '电视剧',
      url: '/tvshow'
    },
    {
      name: '综艺',
      url: '/show'
    },
    {
      name: '动漫',
      url: '/animation'
    },
    {
      name: '导航',
      url: '/other' 
    }
  ]

  const searchInput = ref('')
  const search = () => {
    router.push({
      name: 'search',
      query: {
        'q': searchInput.value
      },
    })
  }
</script>
<style lang="scss" scoped>
  .header{
    background-color: #fff;
    height: 70px;
    width: 100%;
    border-bottom: 1px solid rgb(215, 214, 214);
    box-shadow: 0px 1px 2px #ccc;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .navTop{
    max-width: 1720px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .navTopLeft{
      align-items: center;
      display: flex;
      margin: 0 10px;
      img{
        width: 80%;
        height: 80%;
      }
    }
    .navTopRight{
      display: flex;
      align-items: center;
      margin: 0 20px;
 
      .navRightSpan{
        width: 100%;
        a{
          padding: 0 15px;
          font-weight: 500;
          width: 100%;
          color: #555;
          text-decoration: none;
        }
        .is-active{
          color: #ec2d7a;
          border-bottom: 2px solid #ec2d7a;
        }
        a:hover{
          span{
            color: #ec2d7a;
            // border-bottom: 2px solid #ec2d7a;
          }
        }
      }
      .SearchInput{
        padding: 0 20px;
        width: 60%;
      }
    }
  }
  }

</style>