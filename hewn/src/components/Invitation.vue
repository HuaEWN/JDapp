<template>
    <div class="app">
        <van-nav-bar
        title="邀请码"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />

        <div class="center">
            <div class="bian">
                <div id="qrcode"></div>
                <p class="yqm">邀请码:</p>
                <p class="number">{{txt}}</p>
                <div class="fuzhi" v-clipboard:copy="txt" v-clipboard:success="success" v-clipboard:error="error">复制邀请码</div>
            </div>
        </div>

    </div>
</template>
<script>
import { Toast } from 'vant';
import QRCode  from "qrcodejs2"
export default {
    data(){
        return{
            txt:'5546657',
            link:'https://www.baidu.com',
        }
    },
    created(){
        this.$nextTick (function () {
            this.qrcode();
        })
    },
    methods:{
        onClickLeft() {
            // Toast('返回');
            this.$router.go(-1);
        },
        success(e) {
        console.log(e);
        Toast('复制成功');
        },
        error(e) {
            console.log(e);
            Toast('复制失败');
        },
        qrcode(){ 
                let qrcode = new QRCode('qrcode', { // eslint-disable-line no-unused-vars
                    width: 124,
                    height: 124,        // 高度
                    text:  this.link,   // 二维码内容
                    // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    background: '#fff',   // 背景色
                    foreground: '#ff0'    // 前景色
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
.center{
    background-color: #FFD41F;
    width: 95vw;
    height: 50vh;
    margin: 2vh auto 0;
    border-radius: 1vw;
    overflow: hidden;
}
.bian{
    width: 90vw;
    height: 47vh;
    margin: 1.5vh auto 0;
    border: 1px dashed #98801B;
}
#qrcode{
        display: flex;
    justify-content: center;
    margin-top: 6vh;
}
.yqm{
    font-size: 4vw;
    color: #fff;
    text-align: center;
    margin-top: 1vh;
    letter-spacing: 1vw;
}
.number{
    font-size: 4vw;
    color: #fff;
    text-align: center;
    margin-top: 1vh;
    letter-spacing: 1vw;
}
.fuzhi{
    width: 21.5vw;
    height: 4vh;
    background-color: #fff;
    border-radius: 1vw;
    text-align: center;
    font-size: 3vw;
    color: #FFD41F;
    line-height: 4vh;
    margin: 3vh auto 0;
}
</style>