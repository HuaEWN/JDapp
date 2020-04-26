<template>
    <div class="app">
        <van-nav-bar title="理财" left-arrow>
            <template #right>
                <van-icon name="notes-o" size="30" @click="tocontractrecord()" />
            </template>
        </van-nav-bar>

        <div class="tops">
            <div class="topnumber">
                <span class="reds">88</span>
                <span class="reds">100.00</span>
                <span class="reds">0.00</span>
            </div>
            <div class="toptext">
                <span class="txt">已消耗令牌</span>
                <span class="txt">预产生收益</span>
                <span class="txt">已产释放</span>
            </div>
        </div>

        <div class="btn">
            <span class="heyue">我的令牌</span>
            <span class="heyue" @click="tocontract()">合约</span>
        </div>

        <p class="you">理财优选</p>

        <div class="scroll">
            <div class="jindun" v-for="(index,item) in lists" :key="item">
                <div class="jdleft">
                    <span class="jdtop">{{index.name}}</span>
                    <span class="times">{{index.money}}</span>
                </div>
                <div class="jinduncenter">
                    <span class="sy">{{index.shou}}</span>
                    <span class="wen">{{index.wen}}</span>
                </div>
                <div class="ups" @click="uped()">升级</div>
            </div>
        </div>

        <!-- 升级 -->
        <div class="zhe" v-show="this.zhe"></div>
        <div class="white" v-show="this.isup">
            <p class="sj">升级</p>
            <p class="zuidi">升级金额最低$200</p>
            <p class="keyong">可用合约：<span class="kymoney">{{this.ok}}</span></p>
            <div class="queding">
                <span class="qdone" @click="quxiao()">取消</span>
                <span class="qdtwo" @click="sure()">确定</span>
            </div>
        </div>

        <!-- 密码框 -->
        <div class="passwords" v-show="this.ispassword">
            <img src="../assets/img/deletes.png" alt="" class="cuowu" @click="guanbi()">
            <p class="shu">输入支付密码</p>
            <span class="moneys">${{this.money}}</span>
            <van-password-input
            :value="values"
            
            :focused="show"
            @focus="show = true"
            />
            
        </div>

        <!-- 键盘 -->
        <van-number-keyboard
        :show="show"
        extra-key="."
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
        />

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
            active:2,  //底部导航
            zhe:false,   //遮挡曾
            isup:false,   //升级框
            ok:"$300",   //可用合约

            ispassword:false,   //输入支付密码框是否显示
            money:200,    //用户输入的金额
            show:false,   //键盘是否显示
            values:'',    //用户输入的密码

            lists:[
                {name:"金盾1号",money:"$54/周",shou:"预计收益2.8倍",wen:"$300收益稳健"},
                {name:"金盾1号",money:"$54/周",shou:"预计收益2.8倍",wen:"$300收益稳健"},
                {name:"金盾1号",money:"$54/周",shou:"预计收益2.8倍",wen:"$300收益稳健"},
                {name:"金盾1号",money:"$54/周",shou:"预计收益2.8倍",wen:"$300收益稳健"}
            ]
        }
    },
    methods:{
        // 叉号
        guanbi:function(){
            this.ispassword=false;
            this.zhe=false;
        },
        uped:function(){
            this.zhe=true;
            this.isup=true; 
        },
        quxiao:function(){
            this.zhe=false;
            this.isup=false;
        },
        sure:function(){
            this.isup=false;
            this.show=true;
            this.ispassword=true;
        },

        onInput(key) {
            this.values = (this.values + key).slice(0, 6);
        },
        onDelete() {
            this.values = this.values.slice(0, this.values.length - 1);
        },
        tocontractrecord(){
            this.$router.push({
                path:'/Contractrecord'
            })
        },
        //跳转合约
        tocontract(){
            this.$router.push({
                path:'/Contract'
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
/deep/.van-nav-bar__arrow {
    min-width: 1em;
    margin-right: 4px;
    font-size: 0px;
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

/* 底部导航栏样式 */
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

.tops{
    width: 95vw;
    height: 13.5vh;
    margin: 0 auto;
    border-radius: 1vw;
    background: -webkit-gradient(linear,0 0,100% 0,from(#FFD41F),to(#FBBA4A));
    display: flex;
    flex-direction: column;
        justify-content: space-evenly;
}
.reds{
    font-size: 4vw;
    color: #D01423;
}
.txt{
    font-size: 3vw;
    color: #fff;
}
.topnumber{
        display: flex;
    justify-content: space-around;
}
.toptext{
        display: flex;
    justify-content: space-around;
}
.btn{
    display: flex;
    margin-top: 3.5vh;
    justify-content: space-around;
}
.heyue{
font-size: 3vw;
    color: #fff;
    display: inline-block;
    width: 27vw;
    height: 4.5vh;
    line-height: 4.5vh;
    text-align: center;
    border-radius: 1vw;
    background-color: #2AD832;
}
.you{
font-size: 4vw;
    color: #fff;
    width: 100vw;
    text-indent: 3vw;
    margin-top: 6vh;
    margin-bottom: 3vh;
}
.jindun{
    display: flex;
    width: 95vw;
    height: 9vh;
    margin: 0 auto;
    justify-content: space-between;
    border-bottom: 1px solid #505050;
}
.jdleft{
        display: flex;
    flex-direction: column;
        justify-content: space-evenly;
}
.jinduncenter{
        display: flex;
    flex-direction: column;
        justify-content: space-evenly;
}
.jdtop{
    color: #fff;
    font-size: 3vw;
}
.times{
    color: #FFD41F;
    font-size: 3vw;
}
.sy{
    color: #fff;
    font-size: 3vw;
}
.wen{
    color: #FFD41F;
    font-size: 3vw;
}
.ups{
color: #fff;
    width: 19vw;
    font-size: 3vw;
    height: 5vh;
    background-color: #2AD832;
    border-radius: 6vw;
    line-height: 5vh;
    text-align: center;
    margin-top: 2vh;
}
.scroll{
    width: 100vw;
    height: 45vh;
    overflow: hidden;
    overflow-y: auto;
}
.zhe{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .4);
    position: absolute;
    top: 0vw;
}

/* 升级 */
.white{
    background-color: #fff;
    width: 67vw;
    height: 29vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9;
    border-radius: 2vw;
}


.sj{
    font-size: 4vw;
    color: #000;
    text-align: center;
        font-weight: 600;
    margin: 2vh 0;
}
.zuidi{
    color: #909090;
    font-size: 4vw;
    text-align: center;
    margin: 3vh 0;
}
.keyong{
        color: #909090;
    font-size: 4vw;
    text-align: center;
}
.kymoney{
    color: #FFD41F;
    font-size: 4vw;
}
.qdone{
    display: inline-block;
    background-color: #F0F0F0;
    width: 22vw;
    text-align: center;
    height: 6vh;
    line-height: 6vh;
    border-radius: 6vw;
    font-size: 3vw;
    color: #909090;
}
.qdtwo{
    display: inline-block;
    width: 22vw;
    text-align: center;
    height: 6vh;
    line-height: 6vh;
    border-radius: 6vw;
    font-size: 3vw;
    color: #fff;
    background: -webkit-gradient(linear,0 0,100% 0,from(#FFD41F),to(#FBBA4A));
}
.queding{
        margin-top: 4vh;
    display: flex;
    justify-content: space-evenly;
}

/* 密码框 */
.passwords{
    width: 60vw;
    background-color: #fff;
    display: flex;
    height: 30vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    flex-direction: column;
    border-radius: 1vh;
    z-index: 99;
}
/* 叉号 */
.cuowu{
    width: 4vw;
    height: 4vw;
    margin-top: 2vh;
    margin-left: 30vh;
}
.shu{
    font-size: 4vw;
    text-align: center;
    height: 4vh;
    line-height: 4vh;
}
.moneys{
font-size: 7vw;
    text-align: center;
    height: 11vh;
    line-height: 11vh;
}
</style>