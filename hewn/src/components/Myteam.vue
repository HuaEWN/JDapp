<template>
    <div class="app">
        <van-nav-bar
        title="我的团队"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />

        <div class="person">
            <div class="posr">
                <img src="../assets/img/people.png" class="tou">
                <div class="posa">LV:1</div>
            </div>
            <span class="name">YEARE</span>
        </div>

        <div class="teamcenter">
            <div class="tops">
                <span class="toptxt">邀请人数</span>
                <span class="toptxt">邀请人数</span>
                <span class="toptxt">邀请人数</span>
            </div>
            <div class="bots">
                <span class="number">3</span>
                <span class="number">5</span>
                <span class="number">$152</span>
            </div>
            <div class="tops">
                <span class="toptxt">直推收益</span>
                <span class="toptxt">团队收益</span>
                
            </div>
            <div class="bots">
                <span class="number">$3</span>
                <span class="number">$50</span>
                
            </div>
        </div>

        <p class="teampeople">团队成员</p>

        <div class="zhanghao">
            <span class="yeji">账号</span>
            <span class="yeji">团队业绩</span>
            <span class="yeji">直播收益</span>
            <span class="yeji">团队收益</span>
        </div>
        <div class="scroll">
            <div class="neirong" v-for="(index,item) in lists" :key="item">
                <span class="phone">{{index.phone}}</span>
                <span class="xinxi">{{index.yj}}</span>
                <span class="moneys">{{index.sy}}</span>
                <span class="moneys">{{index.team}}</span>
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
                {phone:'16542357845',yj:'$30',sy:'$30',team:'$305'},
                {phone:'16542357845',yj:'$30',sy:'$30',team:'$305'},
                {phone:'16542357845',yj:'$30',sy:'$30',team:'$305'}
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
    background: url(../assets/img/teambj.png);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
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
.person{
        display: flex;
    flex-direction: column;
    align-items: center;
}
.tou{
    width: 17vw;
    height: 9.5vh;
}
.name{
    font-size: 4vw;
    color: #fff;
}
.posr{
    position: relative;
}
.posa{
position: absolute;
    font-size: 3vw;
    color: #fff;
    width: 14vw;
    height: 2.7vh;
    line-height: 2.7vh;
    text-align: center;
    bottom: 2vh;
    left: 8vw;
    border-radius: 5vw;
    background: url(../assets/img/lvbj.png);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    text-indent: 2vw;
}
.teamcenter{
width: 95vw;
    height: 24vh;
    background-color: #303030;
    border-radius: 1vw;
    margin: 5vh auto 0;
    overflow: hidden;
}
.tops{
    display: flex;
    margin-top: 3vh;
}
.toptxt{
    width: 33.333%;
    font-size: 4vw;
    color: #fff;
    text-align: center;
}
.number{
    color: #FFD41F;
    font-size: 4vw;
    width: 33.33%;
    text-align: center;
}
.bots{
    display: flex;
    margin-top: 1vh;
}
.teampeople{
    font-size: 4vw;
    color: #fff;
    text-indent: 3vw;
    margin-top: 4vh;
}
.zhanghao{
width: 100vw;
    height: 6vh;
    background-color: #404040;
    margin-top: 2vh;
    font-size: 3.5vw;
    color: #909090;
    display: flex;
    justify-content: space-between;
    padding: 0 3vw;
    box-sizing: border-box;
    align-items: center;
}
.phone{
    font-size: 3vw;
    color: #fff;
        margin-right: 4vw;
}
.xinxi{
    color: #FFD41F;
    font-size: 4vw;
}
.neirong{
        display: flex;
    width: 100vw;
    border-bottom: 1px solid #505050;
    height: 7vh;
    align-items: center;
    padding: 0 3vw;
}
.moneys{
    color: #FFD41F;
    font-size: 4vw;
    margin-left: 22vw;
}
.scroll{
    width: 100vw;
    height: 30vh;
    overflow: hidden;
    overflow-y: auto;
}
</style>