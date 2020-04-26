<template>
    <div class="app">
        <van-nav-bar
        title="个人中心"
        left-text=""
        
        left-arrow
        
        />

        <div class="people">
            <img src="../assets/img/people.png" alt="" class="ren">
            <div class="name">
                <div class="top">
                    <span class="xm">YEARE</span>
                    <div class="lv">LV:1</div>
                </div>
                <span class="qianming">人生如梦一场~</span>
            </div>
        </div>

        <div class="team">
            <div class="myteam" @click="tomyteam()">
                <img src="../assets/img/team.png" alt="" class="tm">
                <span class="myt">我的团队</span>
            </div>
            <div class="myteam" @click="totransaction()">
                <img src="../assets/img/money.png" alt="" class="tm">
                <span class="myt">交易记录</span>
            </div>
            <div class="myteam" @click="toinformation()">
                <img src="../assets/img/xiaoxi.png" alt="" class="tm">
                <span class="myt">消息中心</span>
            </div>
        </div>

        <div class="dibu">
            <div class="one" @click="tomytoken()">
                <img src="../assets/img/lp.png" alt="" class="lp">
                <div class="mylp">
                    <span class="txt">我的令牌</span>
                    <img src="../assets/img/jian.png" alt="" class="jt">
                </div>
            </div>
            <div class="one" @click="topersonagecontract()">
                <img src="../assets/img/star.png" alt="" class="lp">
                <div class="mylp">
                    <span class="txt">合约</span>
                    <img src="../assets/img/jian.png" alt="" class="jt">
                </div>
            </div>
            <div class="one" @click="toteamearning()">
                <img src="../assets/img/bao.png" alt="" class="lp">
                <div class="mylp">
                    <span class="txt">团队收益</span>
                    <img src="../assets/img/jian.png" alt="" class="jt">
                </div>
            </div>
            <div class="one" @click="toinvitation()">
                <img src="../assets/img/rr.png" alt="" class="lp">
                <div class="mylp">
                    <span class="txt">邀请码</span>
                    <img src="../assets/img/jian.png" alt="" class="jt">
                </div>
            </div>
            <div class="one" @click="toservice()">
                <img src="../assets/img/kf.png" alt="" class="lp">
                <div class="mylp">
                    <span class="txt">联系客服</span>
                    <img src="../assets/img/jian.png" alt="" class="jt">
                </div>
            </div>
            <div class="one" @click="tosetting()">
                <img src="../assets/img/sz.png" alt="" class="lp">
                <div class="mylp">
                    <span class="txt">设置</span>
                    <img src="../assets/img/jian.png" alt="" class="jt">
                </div>
            </div>
        </div>

        <div class="anquan">安全退出</div>

        <van-tabbar v-model="active">
              <van-tabbar-item icon="pending-payment">资产</van-tabbar-item>
              <van-tabbar-item icon="after-sale" @click="tochange()">闪兑</van-tabbar-item>
              <van-tabbar-item icon="stop-circle-o" @click="tomanagemoney()">理财</van-tabbar-item>
              <van-tabbar-item icon="bar-chart-o" @click="tomarket()">行情</van-tabbar-item>
              <van-tabbar-item icon="user-circle-o" @click="topersonalcenter()">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:4,  //底部导航
        }
    },
    methods:{
        tosetting(){
            this.$router.push({
                path:'/Setting'
            })
        },
        toservice(){
            this.$router.push({
                path:'/Service'
            })
        },
        toinvitation(){
            this.$router.push({
                path:'/Invitation'
            })
        },
        toteamearning(){
            this.$router.push({
                path:'/Teamearning'
            })
        },
        topersonagecontract(){
            this.$router.push({
                path:'/Personagecontract'
            })
        },
        tomytoken(){
            this.$router.push({
                path:'/Mytoken'
            })
        },
        tomyteam(){
            this.$router.push({
                path:'/Myteam'
            })
        },
        totransaction(){
            this.$router.push({
                path:'/Transaction'
            })
        },
        toinformation(){
            this.$router.push({
                path:'/Information'
            })
        },
        //底部导航
        tochange(){
            this.$router.push({
                path:'/Change'
            })
        },
        tomanagemoney(){
            this.$router.push({
                path:'/Managemoney'
            })
        },
        tomarket(){
            this.$router.push({
                path:'/Market'
            })
        },
        topersonalcenter(){
            this.$router.push({
                path:'/Personalcenter'
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
/deep/.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}
/deep/.van-nav-bar__arrow {
    min-width: 1em;
    margin-right: 4px;
    font-size: 0;
}

.people{
    width: 95vw;
    margin: 2vh auto 0;
    height: 12vh;
    display: flex;
}
.ren{
        width: 20vw;
    height: 11.5vh;
}
.top{
    display: flex;
    height: 5vh;
    line-height: 5vh;
}
.xm{
    font-size: 4vw;
    color: #fff;
}
.lv{
    font-size: 3vw;
    color: #303030;
    width: 14.5vw;
    height: 2.9vh;
    line-height: 2.9vh;
    text-align: center;
    margin-top: 1vh;
    margin-left: 3vw;
    border-radius: 4vw;
    background: url(../assets/img/bj.png);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    text-indent: 2vw;
}
.qianming{
    font-size: 3vw;
    color: #fff;
}

.team{
    width: 95vw;
    background-color: #303030;
    margin: 0 auto;
    height: 13.5vh;
    border-radius: 1vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.tm{
        width: 11vw;
    height: 6vh;
        margin-bottom: 1vh;
}
.myteam{
    display: flex;
    flex-direction: column;
        align-items: center;
}
.myt{
    color: #FED31F;
    font-size: 3vw;
}

.dibu{
    width: 95vw;
    background-color: #303030;
    height: 42vh;
    border-radius: 1vw;
    margin: 3vh auto;
}
.txt{
    font-size: 3vw;
    color: #FFD41F;
}
.one{
    display: flex;
    width: 100%;
    height: 7vh;
    align-items: center;
}
.jt{
        width: 2vw;
    height: 1.7vh;
}
.mylp{
display: flex;
    flex: 1;
    height: 7vh;
    justify-content: space-between;
    align-items: center;
    padding-right: 3vw;
    border-bottom: 1px solid #505050;
}
.lp{
    width: 5.5vw;
    height: 3vh;
        margin: 0 1vw;
}

.anquan{
width: 80vw;
    height: 6vh;
    background-color: #303030;
    color: #CF5567;
    text-align: center;
    line-height: 6vh;
    font-size: 3vw;
    margin: 0 auto;
    border-radius: 1vw;
}

/deep/.van-tabbar {
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: content-box;
    width: 100%;
    height: 50px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #000;
    border-top: 1px solid #404040;
}
/deep/.van-tabbar-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    line-height: 1;
    cursor: pointer;
}
/deep/.van-tabbar-item--active {
    color: #FECF27;
}
</style>