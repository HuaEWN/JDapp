<template>
    <div class="app">
        <van-nav-bar
        title="设置"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />

        <div class="people" @click="tosetpersonage()">
            <span class="grxx">个人信息</span>
            <img src="../assets/img/right.png" class="imgs">
        </div>
        <div class="people" @click="tosetregister()">
            <span class="grxx">登录密码</span>
            <img src="../assets/img/right.png" class="imgs">
        </div>
        <div class="people" @click="tosetpay()">
            <span class="grxx">支付密码</span>
            <img src="../assets/img/right.png" class="imgs">
        </div>
        <div class="people" @click="tosetphone()">
            <span class="grxx">手机号码</span>
            <div class="rigt">
                <span class="numphe">123****4567</span>
                <img src="../assets/img/right.png" class="imgs">
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
        },
        tosetpersonage(){
            this.$router.push({
                path:'/Setpersonage'
            })
        },
        tosetregister(){
            this.$router.push({
                path:'/Setregister'
            })
        },
        tosetpay(){
            this.$router.push({
                path:'/Setpay'
            })
        },
        tosetphone(){
            this.$router.push({
                path:'/Setphone'
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
.people{
    width: 100vw;
    box-sizing: border-box;
    height: 8vh;
    border-bottom: 1px solid #505050;
    padding: 0 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.grxx{
    font-size: 4vw;
    color: #fff;
}
.imgs{
    width: 2vw;
    height: 1.7vh;
}
.numphe{
    font-size: 3vw;
    color: #909090;
    margin-right: 2vw;
    vertical-align: middle;
    display: inline-block;
    height: 3vh;
}
</style>