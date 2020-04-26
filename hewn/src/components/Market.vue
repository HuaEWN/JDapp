<template>
    <div class="app">
        <van-nav-bar
        title="行情"
        left-text=""
        left-arrow
        
        />
        <div class="top">
            <span class="name">名称</span>
            <span class="name">当前价格</span>
            <div class="upd">
                <span class="name">涨跌幅</span>
                <div class="imgall">
                    <img src="../assets/img/green.png" alt="" class="up">
                    <img src="../assets/img/red.png" alt="" class="up">
                </div>
            </div>
        </div>

        <div class="types" v-for="(index,item) in lists" :key="item">
            <div class="lefts">
                <img :src="index.img" class="btb">
                <span class="btc">{{index.name}}</span>
                
            </div>
            <div class="center">
                <span class="money">{{index.topmoney}}</span>
                <span class="qian">{{index.botmoney}}</span>
            </div>
            <div class="idup">{{index.up}}</div>
        </div>

        <van-tabbar v-model="active">
              <van-tabbar-item icon="pending-payment">资产</van-tabbar-item>
              <van-tabbar-item icon="after-sale" @click="tochange()">闪兑</van-tabbar-item>
              <van-tabbar-item icon="stop-circle-o" @click="tomanagemoney()">理财</van-tabbar-item>
              <van-tabbar-item icon="bar-chart-o" @click="tomarket()">行情</van-tabbar-item>
              <van-tabbar-item icon="user-circle-o" @click="topersonalcenter()">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:3,  //底部导航
            lists:[
                {img:require("../assets/img/btb.png"),name:"BTC",topmoney:"￥1.1314",botmoney:"$0.35978",up:"+4.56%"},
                {img:require("../assets/img/btb.png"),name:"BTC",topmoney:"￥1.1314",botmoney:"$0.35978",up:"+4.56%"},
                {img:require("../assets/img/btb.png"),name:"BTC",topmoney:"￥1.1314",botmoney:"$0.35978",up:"+4.56%"}
            ]
        }
    },
    methods:{
        //底部导航
        tochange(){
            this.$router.push({
                path:'/Change'
            })
        },
        tomanagemoney(){
            this.$router.push({
                path:'/Managemoney'
            })
        },
        tomarket(){
            this.$router.push({
                path:'/Market'
            })
        },
        topersonalcenter(){
            this.$router.push({
                path:'/Personalcenter'
            })
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
/deep/.van-nav-bar {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #000;
    -webkit-user-select: none;
    user-select: none;
}
/deep/[class*=van-hairline]::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: none;
    -webkit-transform: scale(.5);
    transform: scale(.5);
}
/deep/.van-nav-bar__arrow {
    min-width: 1em;
    margin-right: 4px;
    font-size: 0;
}

/deep/.van-tabbar {
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: content-box;
    width: 100%;
    height: 50px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #000;
    border-top: 1px solid #404040;
}
/deep/.van-tabbar-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    line-height: 1;
    cursor: pointer;
}
/deep/.van-tabbar-item--active {
    color: #FECF27;
}
.name{
    font-size: 3vw;
    color: #fff;
}
.top{
    display: flex;
    width: 100vw;
    background-color: #303030;
    height: 4.5vh;
    justify-content: space-around;
    align-items: center;
}
.upd{
    display: flex;
}
.imgall{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: .5vw;
}
.up{
    width: 1.5vw;
    height: .6vh;
}

.types{
    width: 95vw;
    border-bottom: 1px solid #505050;
    margin: 0 auto;
    display: flex;
    
    align-items: center;
    height: 8vh;
}
.btb{
        width: 5.5vw;
    height: 3vh;
    vertical-align: middle;
}
.btc{
    font-size: 4vw;
    color: #fff;
    margin: 0 2vw;
}
.names{
    font-size: 3vw;
    color: #fff;
}
.money{
    color: #32D560;
    font-size: 3vw;
}
.moneyother{
    color: #D5323E;
    font-size: 3vw;
}
.qian{
    font-size: 3vw;
    color: #fff;
}
.idup{
    font-size: 4vw;
    color: #fff;
    background-color: #32D560;
    width: 19vw;
    text-align: center;
    height: 4.2vh;
    line-height: 4.2vh;
    border-radius: 1vw;
}
.idupother{
    font-size: 4vw;
    color: #fff;
    background-color: #D5323E;
    width: 19vw;
    text-align: center;
    height: 4.2vh;
    line-height: 4.2vh;
    border-radius: 1vw;
}
.center{
    display: flex;
    flex-direction: column;
        margin-left: 21vw;
    margin-right: 21vw;
}
</style>