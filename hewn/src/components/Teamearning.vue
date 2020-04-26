<template>
    <div class="app">
        <van-nav-bar
        title="团队收益"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
     
        />

        <div class="lingqu">
            <p class="lq">可领取</p>
            <div class="money"><span class="fu">$</span> 300</div>
            <div class="btn">领取</div>
        </div>
        <p class="details">奖励详情</p>

        <div class="shouyi" v-for="(index,item) in list" :key="item">
            <span class="name">{{index.name}}</span>
            <div class="right">
                <span class="moneys">{{index.money}}</span>
                <span class="time">{{index.time}}</span>
            </div>
        </div>

    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            list:[
                {name:"直推收益",money:"+$10",time:"2020-4-24 10:35"},
                {name:"直推收益",money:"+$10",time:"2020-4-24 10:35"},
                {name:"直推收益",money:"+$10",time:"2020-4-24 10:35"}
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
.van-nav-bar {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: transparent;
    -webkit-user-select: none;
    user-select: none;
}
.lingqu{
    width: 95vw;
    height: 33vh;
    background-color: #303030;
    margin: 2vh auto 4vh;
    border-radius: 1vw;
    overflow: hidden;
}
.lq{
    font-size: 3.5vw;
    color: #fff;
    text-align: center;
    margin-top: 4vh;
}
.details{
    font-size: 4vw;
    color: #fff;
    width: 100vw;
    height: 4.5vh;
    line-height: 4.5vh;
    background-color: #303030;
    text-indent: 3vw;
}
.money{
    color: #FFD41F;
    font-size: 8vw;
    text-align: center;
    margin-top: 4vh;
}
.fu{
    color: #FFD41F;
    font-size: 3vw;
}
.btn{
    width: 30vw;
    height: 6vh;
    line-height: 6vh;
    background: -webkit-gradient(linear,0 0,100% 0,from(#FFD41F),to(#FBBA4A));
    text-align: center;
    font-size: 3vw;
    color: #fff;
    border-radius: 7vw;
    margin: 4vh auto 0;
}
.shouyi{
    display: flex;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 3vw;
    border-bottom: 1px solid #505050;
    height: 8vh;
    justify-content: space-between;
    align-items: center;
}
.name{
    font-size: 3vw;
    color: #fff;
}
.moneys{
    color: #FFD41F;
    font-size: 3vw;
}
.time{
    font-size: 3vw;
    color: #909090;
}
.right{
        display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>