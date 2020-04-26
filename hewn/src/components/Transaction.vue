<template>
    <div class="app">
        <van-nav-bar
        title="交易记录"
        left-text=""
       
        left-arrow
        @click-left="onClickLeft"
      
        />

        <div class="record" v-for="(index,item) in lists" :key="item">
            <div class="top">
                <span class="left">{{index.type}}</span>
                <span :class="index.money>0?'moneyother':'money'">{{index.money}}</span>
            </div>
            <div class="bot">
                <span class="time">{{index.time}}</span>
                <span class="success">{{index.success}}</span>
            </div>
        </div>
    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            lists:[
                {type:'USDT-付款',money:-17,time:'3-24 10:30',success:'付款成功'},
                {type:'USDT-付款',money:7,time:'3-24 10:30',success:'付款成功'},
                {type:'USDT-付款',money:-17,time:'3-24 10:30',success:'付款成功'}
            ]
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
/deep/.van-nav-bar .van-icon {
    color: #fff;
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
    background-color: transparent;
    -webkit-user-select: none;
    user-select: none;
}
.record{
    width: 100vw;
    border-bottom: 1px solid #505050;
    height: 9vh;
    box-sizing: border-box;
    padding: 0 3vw;
}
.left{
    font-size: 4vw;
    color: #fff;
}
.money{
    font-size: 5vw;
    color: #fff;
}
.moneyother{
    font-size: 5vw;
    color: #FFD41F;
}
.top{
display: flex;
    justify-content: space-between;
    height: 5vh;
    line-height: 5vh;
}
.bot{
    display: flex;
    justify-content: space-between;
}
.time{
    font-size: 3vw;
    color: #909090;
}
.success{
    font-size: 3vw;
    color: #fff;
}
</style>