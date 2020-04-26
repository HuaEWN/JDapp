<template>
    <div class="app">
        <van-nav-bar
        title="兑换记录"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />
        <div class="tops">
            <div class="record" v-for="(index,item) in lists" :key="item">
                <div class="recordtop">
                    <div class="left">
                        <img :src="index.oneimg" class="bet">
                        <span class="names">{{index.onename}}</span>
                    </div>
                    <img src="../assets/img/duihuan.png" class="chang">
                    <div class="left">
                        <img :src="index.twoimg" class="bet">
                        <span class="names">{{index.twoname}}</span>
                    </div>
                </div>
                <div class="recordbot">
                    <span class="lefts">兑换数量：</span>
                    <span class="rights">{{index.changes}}</span>
                </div>
                <div class="recordbot">
                    <span class="lefts">得到数量：</span>
                    <span class="rights">{{index.number}}</span>
                </div>
                <div class="recordbot">
                    <span class="lefts">手续费：</span>
                    <span class="rights">{{index.money}}</span>
                </div>
                <div class="recordbot">
                    <span class="lefts">兑换时间：</span>
                    <span class="rights">{{index.time}}</span>
                </div>
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
                {oneimg:require("../assets/img/btb.png"),onename:"BTC",twoimg:require("../assets/img/btb.png"),twoname:"ETH",changes:"1BTC",number:"345 ETH",money:"1 USTD",time:"2020-04-16  10：14"},
                {oneimg:require("../assets/img/btb.png"),onename:"BTC",twoimg:require("../assets/img/btb.png"),twoname:"ETH",changes:"1BTC",number:"345 ETH",money:"1 USTD",time:"2020-04-16  10：14"},
             
                {oneimg:require("../assets/img/btb.png"),onename:"BTC",twoimg:require("../assets/img/btb.png"),twoname:"ETH",changes:"1BTC",number:"345 ETH",money:"1 USTD",time:"2020-04-16  10：14"}
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
    background-color: #000;
    width: 100vw;
    height: 100vh;
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
.record{
    width: 95vw;
    background-color: #404040;
    height: 26vh;
    margin: 1.5vh auto 0;
    display: flex;
    flex-direction: column;
    border-radius: 1vw;
}
.recordtop{
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    width: 100%;
    height: 6vh;
        border-bottom: 1px solid #505050;
}
.left{
    width: 20vw;
}
.bet{
        width: 6vw;
    height: 3vh;
}
.names{
font-size: 4vw;
    color: #fff;
    display: inline-block;
    vertical-align: top;
    margin-left: 4vw;
}
.chang{
        width: 6vw;
    height: 2.5vh;
}
.lefts{
    font-size: 3vw;
    color: #909090;
}
.rights{
    font-size: 3vw;
    color: #fff;
}
.recordbot{
    display: flex;
    justify-content: space-between;
    padding: 0 4vw;
    height: 4.7vh;
    line-height: 4.7vh;
}
.tops{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
}
</style>