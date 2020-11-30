<template>
    <div class="app">
        <van-nav-bar
        title="手机绑定"
        left-text=""
     
        left-arrow
        @click-left="onClickLeft"
        
        />

         <van-field v-model="phone" label="手机号" placeholder="请输入手机号" />
        <van-cell-group class="posr">
            <van-field v-model="value" label="验证码" placeholder="请输入验证码" />
            <div class="posa" @click="giveyzm()">获取验证码</div>
        </van-cell-group>

        <div class="sure" @click="took()">确定</div>
    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            phone:'',  //手机号注释
            value:'',  //验证码 ++++11
        }
    },
    methods:{
        onClickLeft() {
            // Toast('返回');
            this.$router.go(-1)
        },
        giveyzm:function(){
            console.log("验证码")
        },
        took:function(){
            console.log("确定")
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
.posr{
    position: relative;
}
.posa{
    position: absolute;
    color: #FFD41F;
    top: 1.5vh;
    right: 3vw;
    font-size: 4vw;
    border: 1px solid #FFD41F;
    width: 22vw;
    height: 3.5vh;
    line-height: 3.5vh;
    text-align: center;
}
.sure{
    width: 60vw;
    height: 6.6vh;
    line-height: 6.6vh;
    text-align: center;
    border-radius: 7vw;
    margin: 8vh auto 0;
    background: -webkit-gradient(linear,0 0,100% 0,from(#FFD41F),to(#FBBA4A));
    font-size: 4vw;
    color: #fff;
}
/deep/.van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #fff;
    font-size: 14px;
    line-height: 24px;
    background-color: transparent;
}
/deep/.van-cell-group {
    background-color: transparent;
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
/deep/.van-nav-bar[data-v-73e01ed1] {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-bottom: 1px solid #505050;
}
</style>