<template>
    <div class="app">
        <van-nav-bar
        title="我的令牌"
        left-text=""
      
        left-arrow
        @click-left="onClickLeft"
       
        />

        <div class="tokennum">
            <div class="num">
                <span class="number">88</span>
                <span class="number">100</span>
            </div>
            <div class="txt">
                <span class="lingpai">已消耗令牌</span>
                <span class="lingpai">可用令牌</span>
            </div>
        </div>

        <div class="center">
            <van-field v-model="text" label="数量:" placeholder="请输入数量" />
            <van-field v-model="number" label="编号:" placeholder="请输入编号" />

            <div class="btn">
                <span class="button" @click="togive()">赠送</span>
                <span class="button" @click="askfor()">索取</span>
            </div>
        </div>

        <div class="record">令牌记录</div>

        <div class="scroll">
            <div class="caozuo" v-for="(index,item) in lists" :key="item">
                <div class="lefts">
                    <img :src="index.imgs" class="imgs">
                    <div class="retxt">
                        <span class="phone">{{index.phone}}</span>
                        <span class="time">{{index.time}}</span>
                    </div>
                </div>
                <div class="rights">{{index.success}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            text:'',
            number:'',
            lists:[
                {imgs:require("../assets/img/record.png"),phone:"1234567894",time:"2020-4-23 18:52",success:"赠送20枚"},
                {imgs:require("../assets/img/record.png"),phone:"1234567894",time:"2020-4-23 18:52",success:"赠送20枚"},
                {imgs:require("../assets/img/record.png"),phone:"1234567894",time:"2020-4-23 18:52",success:"赠送20枚"}
            ]
        }
    },
    methods:{
        onClickLeft() {
        // Toast('返回');
            this.$router.go(-1);
        },
        togive:function(){
            if(this.text.length==0||this.number.length==0){
                Toast('输入框不能为空');
            }else if(this.text<=0){
                Toast('数量应为正整数');
            }else{
                Toast('赠送成功');
            }
            
        },
        askfor:function(){
            if(this.text.length==0||this.number.length==0){
                Toast('输入框不能为空');
            }else if(this.text<=0){
                Toast('数量应为正整数');
            }else{
                Toast('索取成功');
            }
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
.tokennum{
    background-color: #FFD41F;
    width: 95vw;
    height: 7vh;
    margin: 2vh auto;
    border-radius: 1vw;
    
}
.num{
    display: flex;
    justify-content: space-between;
}
.number{
    font-size: 4vw;
    color: #D01423;
    width: 50%;
    text-align: center;
    height: 4vh;
    line-height: 4vh;
}
.txt{
    display: flex;
   
}
.lingpai{
    font-size: 3vw;
    color: #fff;
    width: 50%;
    text-align: center;
}
.center{
    width: 95vw;
    height: 29vh;
    background-color: #303030;
    margin: 0 auto 3vh;
    border-radius: 1vw;
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
    background-color: #fff;
}
/deep/.van-field__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #fff;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
}
/deep/[data-v-7a62db4d] .van-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #fff;
    font-size: 14px;
    line-height: 24px;
    background-color: transparent;
    border-bottom: 1px solid #505050;
}
/deep/.van-cell:not(:last-child)::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: none;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
.btn{
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: space-around;
    margin-top: 5vh;
}
.button{
    width: 30vw;
    height: 6vh;
    background-color: #2AD832;
    font-size: 4vw;
    color: #fff;
    text-align: center;
    line-height: 6vh;
    border-radius: 8vw;
}
.record{
    font-size: 4vw;
    color: #fff;
    text-indent: 3vw;
    background-color: #303030;
    width: 100vw;
    height: 5vh;
    line-height: 5vh;
}
.caozuo{
    display: flex;
    box-sizing: border-box;
    padding: 0 3vw;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 8vh;
    border-bottom: 1px solid #505050;
}
.phone{
    font-size: 3vw;
    color: #fff;
}
.time{
    color: #909090;
    font-size: 3vw;
}
.retxt{
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
}
.rights{
    color: #FFD41F;
    font-size: 4vw;
}
.imgs{
    width: 7vw;
    height: 4vh;
}
.lefts{
    display: flex;
}
.scroll{
    width: 100vw;
    height: 40vh;
    overflow: hidden;
    overflow-y: auto;
}
</style>