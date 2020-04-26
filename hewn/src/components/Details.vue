<template>
    <div class="app">
        <van-nav-bar
        title="详情"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />
        <p class="add">对于平台新增功能说明</p>
        <p class="time">25分钟前</p>
        <div class="txt">数字加密货币，比特币等行业新闻资讯数字加密货币，比特币等行业新闻资讯数字加密货币，比特币等行业新闻资讯</div>
        <div class="img"><img src="../assets/img/big.png" class="big"></div>
        <div class="txt">数字加密货币，比特币等行业新闻资讯数字加密货币，比特币等行业新闻资讯数字加密货币，比特币等行业新闻资讯</div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{

        }
    },
    methods:{
        onClickLeft() {
        Toast('返回');
        }
    }
}
</script>
<style scoped>
.app{
    width: 100vw;
    height: 100vh;
    background-color: #000;
}
/deep/.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}
/deep/.van-nav-bar .van-icon {
    color: #fff;
}
/deep/.van-nav-bar {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: transparent;
    -webkit-user-select: none;
    user-select: none;
}
.add{
    font-size: 4vw;
    color: #fff;
    text-indent: 3vw;
    width: 100vw;
    height: 6vh;
    line-height: 6vh;
}
.time{
    color: #FFD41F;
    font-size: 3vw;
    text-indent: 3vw;
    margin-bottom: 3vh;
}
.txt{
    font-size: 3vw;
    color: #fff;
    width: 95vw;
    margin: 0 auto;
}
.img{
    width: 95vw;
    height: 30vh;
    margin: 1vh auto;
}
.big{
    width: 95vw;
    height: 30vh;
}
</style>