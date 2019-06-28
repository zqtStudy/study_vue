<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeData" :key="item.img">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
      
    </ul>
  </div>
</template>

 <style scoped>
.mint-swipe {
  height: 200px;
  background-color: antiquewhite;
}
.mint-swipe img {
  width: 100%;
  /* height: 100%; */
}

.mui-grid-view.mui-grid-9 {
    background-color: #fff;   
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 14px;
    line-height: 14px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img{
    border: none;
    width: 60px;
}

</style>



<script>
export default {
  data() {
    return {
      swipeData: null
    };
  },
  mounted() {
    this.getSwipeData();
  },
  methods: {
    getSwipeData() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(response => {
          console.log(response.body);
          this.swipeData = response.body.message;
        });
    }
  }
};
</script>