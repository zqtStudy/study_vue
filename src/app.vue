<template>
  <div>

    <mt-header fixed title="固定在顶部"></mt-header>

    <main>
      <transition>
            <router-view></router-view>
      </transition>
    </main>

  
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
    .v-enter {
        transform: translateX(100%)
    }
    .v-leave-to {
        transform: translateX(-100%);
        position: absolute;
    }
    
    .v-enter-active,
    .v-leave-active {
        transition: all .4s ease;
    }
</style>
