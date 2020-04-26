<template>
    <div class="app">
        <van-nav-bar
        title="手机号码"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />

        <div class="phone">
            <p class="nowphone">当前手机号</p>
            <p class="phonenumber">158****8045</p>
            <div class="change" @click="changes()">更换手机号</div>
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
        changes:function(){
            this.$router.push({
                path:'/Bindphone'
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
/deep/.van-nav-bar .van-icon {
    color: #fff;
}
.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
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
.phone{
    width: 95vw;
    height: 36vh;
    border-radius: 1vw;
    margin: 0 auto;
    background-color: #303030;
    overflow: hidden;
}
.nowphone{
    font-size: 3.6vw;
    color: #fff;
    text-align: center;
    margin-top: 5vh;
}
.phonenumber{
    font-size: 5vw;
    color: #FFD41F;
    text-align: center;
    margin-top: 3vh;
}
.change{
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
</style>