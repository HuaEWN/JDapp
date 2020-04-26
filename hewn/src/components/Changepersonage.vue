<template>
    <div class="app">
        <van-nav-bar
        title="个人信息"
        left-text=""
     
        left-arrow
        @click-left="onClickLeft"
       
        />

        <div class="person">
            <img src="../assets/img/people.png" class="tou">
            <span class="name">YEARE</span>
        </div>

        <div class="line"></div>

        <van-field v-model="text" label="昵称" />
        <van-cell-group class="posr">
            <van-field v-model="tel" type="tel" label="手机" placeholder="还未绑定手机" />
            <div class="posa" @click="tobind()" v-if="this.isbind">去绑定</div>
            <div class="posa" @click="tochange()" v-else>更换</div>
        </van-cell-group>
        <van-field name="radio" label="性别">
        <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
            </van-radio-group>
        </template>
        </van-field>
        <van-field v-model="qianming" label="个性签名" placeholder="输入个性签名" />

        <div class="save">保存</div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            text:'YEARD',
            tel:'',
            radio:'1',
            qianming:"给梦想插上飞翔的翅膀~",
            isbind:null,
        }
    },
    created(){
        
        if(this.tel.length==0){
            this.isbind=true;
        }
    },
    methods:{
        onClickLeft() {
        Toast('返回');
        },
        tobind:function(){
            this.isbind=false;
        },
        tochange:function(){
            console.log("更换")
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

.name{
    font-size: 4vw;
    color: #fff;
}
.person{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3vh 0;
}
.tou{
    width: 20vw;
    height: 11.5vh;
}
.line{
    width: 100vw;
    height: .6vh;
    background-color: #303030;
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
    color: #FFD41F;
    font-size: 14px;
    line-height: 24px;
    background-color: transparent;
    
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

/deep/.van-cell::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
/deep/.van-radio__icon--checked .van-icon {
    color: #fff;
    background-color: #FFD41F;
    border-color: #FFD41F;
}
/deep/.van-radio__label {
    margin-left: 8px;
    color: #fff;
    line-height: 20px;
}
.save{
    width: 67vw;
    height: 7.5vh;
    text-align: center;
    color: #fff;
    background: -webkit-gradient(linear,0 0,100% 0,from(#FFD41F),to(#FBBA4A));
    line-height: 7.5vh;
    border-radius: 9vw;
    font-size: 4vw;
    margin: 13vh auto 0;
}
/deep/.van-cell-group {
    background-color: transparent;
}
.posr{
    position: relative;
}
.posa{
    position: absolute;
    color: #FFD41F;
    top: 1.5vh;
    right: 17vw;
    font-size: 4vw;
    border: 1px solid #FFD41F;
    width: 16vw;
    height: 3.5vh;
    line-height: 3.5vh;
    text-align: center;
}
</style>