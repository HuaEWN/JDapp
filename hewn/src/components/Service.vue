<template>
    <div class="app">
        <van-nav-bar
        title="联系客服"
        left-text=""
       
        left-arrow
        @click-left="onClickLeft"
        
        />

        <p class="wx">客服微信号</p>

        <div class="weixin">
            <span class="number">{{weixin}}</span>
            <div class="fuzhi" v-clipboard:copy="weixin" v-clipboard:success="success" v-clipboard:error="error">复制</div>
        </div>
        <div id="qrcode"></div>
        <p class="txt">保存图片到相册扫一扫添加客服</p>

        <div class="baocun" @click="saveimg()">保存图片</div>
    </div>
</template>
<script>
import { Toast } from 'vant';
import QRCode  from "qrcodejs2"
export default {
    data(){
        return{
            weixin:'KF55465450',
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
        },

        saveimg:function(){
            Toast('正在下载图片');
            var imgs = document.getElementById("qrcode").getElementsByTagName("canvas");
            var a = document.createElement('a')
            a.href = imgs[0].toDataURL();
            a.download = "drcQrcode";
            a.click();
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
.wx{
    font-size: 3vw;
    color: #fff;
    text-align: center;
    margin-top: 5vh;
}
.number{
    color: #FECF27;
    font-size: 4vw;
    margin-left: 38vw;
}
.weixin{
    display: flex;
    margin-top: 2vh;
}
.fuzhi{
color: #FECF27;
    font-size: 3vw;
    width: 10vw;
    height: 3vh;
    border: 1px solid #FECF27;
    line-height: 2.8vh;
    text-align: center;
    margin-left: 6vw;
}
#qrcode{
    display: flex;
    justify-content: center;
}
.baocun{
    font-size: 4vw;
    color: #fff;
    background: -webkit-gradient(linear,0 0,100% 0,from(#FFD41F),to(#FBBA4A));
    width: 60vw;
    height: 6.6vh;
    text-align: center;
    line-height: 6.6vh;
    border-radius: 6vw;
    margin: 5vh auto 0;

}
.txt{
    font-size: 3vw;
    color: #909090;
    text-align: center;
    margin-top: 3vh;
}
</style>