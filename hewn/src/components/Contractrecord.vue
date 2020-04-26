<template>
    <div class="app">
        <van-nav-bar
        title="理财记录"
        left-text=""
       
        left-arrow
        @click-left="onClickLeft"
        
        />

        <div class="record" v-for="(index,item) in lists" :key="item">
            <div class="tops">
                <span class="tleft">{{index.type}}</span>
                <span :class="index.isup>0? 'tdown':'tup'">{{index.isup}}</span>
            </div>
            <div class="bots">
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
                {type:"合约-USDT",isup:-16,time:"3-28 11:19",success:"升级成功"},
                {type:"合约-USDT",isup:16,time:"3-28 11:19",success:"升级成功"},
                {type:"合约-USDT",isup:-16,time:"3-28 11:19",success:"升级成功"}
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
/deep/.van-nav-bar .van-icon {
    color: #fff;
}
.record{
display: flex;
    width: 100vw;
    flex-direction: column;
    border-bottom: 1px solid #505050;
    height: 9vh;
    padding: 0 4vw;
        box-sizing: border-box;
            justify-content: space-evenly;
}
.tops{
        display: flex;
    justify-content: space-between;
}
.bots{
        display: flex;
    justify-content: space-between;
}
.tleft{
    color: #fff;
    font-size: 3.5vw;
}
.tup{
    color: #fff;
    font-size: 4.5vw;
}
.tdown{
    color: #FFD41F;
    font-size: 4.5vw;
}
.time{
    color: #909090;
    font-size: 3vw;
}
.success{
    color: #fff;
    font-size: 3vw;
}
</style>