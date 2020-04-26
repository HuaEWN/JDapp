<template>
    <div class="app">
        <van-nav-bar
        title="消息中心"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />

        <div class="news">
            <div class="top">
                <span class="hq">行情|早间数字货币行情</span>
                <span class="dian"></span>
            </div>
            <div class="bot">
                <div class="left">
                    <img src="../assets/img/laba.png" class="laba">
                    <span class="xx">系统消息</span>
                </div>
                <span class="time">2020-4-4 11:23</span>
            </div>
        </div>
    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{

        }
    },
    methods:{
        onClickLeft() {
            // Toast('返回');
            this.$router.go(-1);
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
.news{
        width: 95vw;
    height: 7vh;
    background-color: #303030;
    margin: 2vh auto 0;
    border-radius: 1vw;
    padding: .5vh 3vw;
    box-sizing: border-box;
}
.hq{
    font-size: 4vw;
    color: #fff;
}
.time{
    font-size: 3vw;
    color: #fff;
}
.top{
        display: flex;
    justify-content: space-between;
    align-items: center;
}
.bot{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.laba{
    width: 2.5vw;
    height: 1.3vh;
    vertical-align: middle;
}
.xx{
    font-size: 3vw;
    color: #fff;
}
.dian{
    display: inline-block;
    background-color: #FFD41F;
    width: 2vw;
    height: 1vh;
    border-radius: 3vw;
}
</style>