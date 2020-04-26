<template>
    <div class="app">
        <van-nav-bar
        title="合约"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />

        <div class="top">
            <p class="name">合约等级</p>
            <div class="center">
                <div class="ctop">
                    <span class="num">0</span>
                    <span class="num">0倍</span>
                    <span class="num">0倍</span>
                    <span class="num">0</span>
                </div>
                <div class="cbot">
                    <span class="shouyi">预产生收益</span>
                    <span class="shouyi">收益倍数</span>
                    <span class="shouyi">可用合约</span>
                    <span class="shouyi">已消耗令牌</span>
                </div>
            </div>
            <div class="bottom">
                <div class="one">
                    <span class="onenum">$0.00</span>
                    <span class="onesy">已收益</span>
                </div>
                <div class="one">
                    <span class="onenum">$0.00</span>
                    <span class="onesy">已收益</span>
                </div>
                <div class="one">
                    <span class="onenum">1:100</span>
                    <span class="onesy">已收益</span>
                </div>
                <div class="fetch" v-if="this.isfetch">提取收益</div>
                <div class="otherfetch" v-else  @click="tiqu()">提取收益</div>
            </div>
        </div>

        <div class="type">
            <div class="toptype">
                <img src="../assets/img/btb.png" class="btc">
                <span class="nametype">USDT</span>
                <span class="money">泰达币</span>
            </div>
            <div class="toptype">
                <span class="number">合约数量:</span>
                <input type="text" placeholder="请输入合约数量" class="numtxt">
            </div>

            <div class="queding" @click="tozhifu()">确定</div>
        </div>

        <p class="jyjl">交易记录</p>
        <div class="jilu">
            <span class="jilutxt">类型</span>
            <span class="jilutxt">数量</span>
            <span class="jilutxt">时间</span>
        </div>

        <div class="neirong">
            <span class="nrtxt">合约</span>
            <span class="nrtxt">25</span>
            <span class="nrtxt">2020-04-12</span>
        </div>

        <!-- 遮挡层 -->
        <div class="zhe" v-show="this.iszhe"></div>
        <!-- 提取收益框 -->
        <div class="white" v-show="this.iswhite">
            <p class="sj">提取收益</p>
            <p class="zuidi">提取收益需消耗1枚令牌</p>
            <p class="keyong">可用令牌：<span class="kymoney">10</span></p>
            <div class="quedings">
                <span class="qdone" @click="ends()">取消</span>
                <span class="qdtwo" @click="oks()">确定</span>
            </div>
        </div>

        <!-- 密码框 -->
        <div class="passwords" v-show="this.ispassword">
            <img src="../assets/img/deletes.png" alt="" class="cuowu" @click="close()">
            <p class="shu">输入支付密码</p>
            <span class="moneys">$25</span>
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

        <div class="passwords" v-show="istwo">
            <img src="../assets/img/deletes.png" alt="" class="cuowu" @click="guanbi()">
            <p class="shu">输入支付密码</p>
            <span class="moneys">$25</span>
            <van-password-input
            :value="valueone"
            
            :focused="showone"
            @focus="showone = true"
            />
            
        </div>
        <!-- 键盘 -->
        <van-number-keyboard
        :show="showone"
        extra-key="."
        @blur="showone = false"
        @input="onInputone"
        @delete="onDeleteone"
        />

    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            isfetch:false,   //合约是否为空
            iszhe:false,    //遮挡曾是否显示
            iswhite:false,   //提取收益框是否显示

            ispassword:false,   //输入支付密码框是否显示
            show:false,   //键盘是否显示
            values:'',    //用户输入的密码
            valueone:'',  //合约密码
            showone:false,  //键盘是否显示
           istwo:false,   //输入支付密码框是否显示
        }
    },
    methods:{
        onClickLeft() {
            // Toast('返回');
            this.$router.go(-1);
        },
        tiqu:function(){
            this.iszhe=true;
            this.iswhite=true;
        },
        ends:function(){
            this.iswhite=false;
            this.iszhe=false;
        },
        oks:function(){
            this.iswhite=false;
            this.ispassword=true;
            this.show=true;
        },
        onInput(key) {
            this.values = (this.values + key).slice(0, 6);
        },
        onDelete() {
            this.values = this.values.slice(0, this.values.length - 1);
        },

        onInputone(key) {
            this.valueone = (this.valueone + key).slice(0, 6);
        },
        onDeleteone() {
            this.valueone = this.valueone.slice(0, this.valueone.length - 1);
        },
        close:function(){
            this.ispassword=false;
            this.show=false;
            this.iszhe=false;
        },
        tozhifu:function(){
            this.iszhe=true;
            this.istwo=true;
            this.showone=true;
        },
        guanbi:function(){
            this.iszhe=false;
            this.istwo=false;
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
    -webkit-user-select: none;
    user-select: none;
    background: transparent;
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
.top{
    width: 95vw;
    height: 30vh;
    background: -webkit-gradient(linear,0 0,100% 0,from(#FFD41F),to(#FBBA4A));
    margin: 0 auto;
    border-radius: 1vw;
    overflow: hidden;
}
.name{
    font-size: 4.5vw;
    color: #fff;
    text-indent: 4vw;
    margin: 3vh auto;
}
.num{
    font-size: 4vw;
    color: #D01423;
}
.shouyi{
    font-size: 3vw;
    color: #fff;
}
.ctop{
    display: flex;
    justify-content: space-around;
    margin-bottom: 1vh;
}
.cbot{
    display: flex;
    justify-content: space-around;
}
.center{
    height: 9vh;
    border-bottom: 1px solid #fff;
}
.onenum{
    font-size: 4vw;
    color: #D01423;
}
.onesy{
    font-size: 3vw;
    color: #fff;
}
.bottom{
    display: flex;
    justify-content: space-around;
    height: 10vh;
}
.one{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.fetch{
    width: 19vw;
    height: 5vh;
    font-size: 3.5vw;
    border-radius: 6vw;
    background-color: #909090;
    text-align: center;
    line-height: 5vh;
    color: #C5C5C5;
    margin-top: 3vh;
}
.otherfetch{
    width: 19vw;
    height: 5vh;
    font-size: 3.5vw;
    border-radius: 6vw;
    background-color: #2AD832;
    text-align: center;
    line-height: 5vh;
    color: #FFF;
    margin-top: 3vh;
}
.type{
    width: 95vw;
    height: 29vh;
    background: rgba(48, 48, 48, .8);
    margin: 2vh auto 0;
    border-radius: 1vw;
}
.toptype{
    height: 7vh;
    line-height: 7vh;
    border-bottom: 1px solid #505050;
}
.btc{
        width: 5.5vw;
    height: 3vh;
        margin-left: 2vw;
        vertical-align: middle;
}
.nametype{
     color: #FFD41F;
    font-size: 4vw;
    margin-left: 2vw;
    margin-right: 2vw;
}
.money{
    font-size: 3vw;
    color: #fff;
}
.number{
    font-size: 4vw;
    color: #fff;
    margin-left: 2vw;
}
.numtxt{
    width: 41vw;
    height: 5vh;
    border: none;
    background: transparent;
    font-size: 4vw;
    margin-left: 3vw;
}
.queding{
    background: -webkit-gradient(linear,0 0,100% 0,from(#FFD41F),to(#FBBA4A));
    width: 67vw;
    line-height: 6vh;
    height: 6vh;
    border-radius: 6vw;
    text-align: center;
    color: #fff;
    font-size: 4vw;
    margin-top: 5vh;
    margin-left: 14vw;
}
.jyjl{
    font-size: 4vw;
    color: #fff;
    height: 6vh;
    line-height: 6vh;
    text-indent: 3vw;
    margin-top: 2vh;
}
.jilu{
    width: 100vw;
    background-color: #404040;
    height: 6vh;
    line-height: 6vh;
    display: flex;
    justify-content: space-between;
    padding: 0 2vw;
    box-sizing: border-box;
}
.jilutxt{
    font-size: 3vw;
    color: #909090;
}
.neirong{
    width: 100vw;
    
    height: 6vh;
    line-height: 6vh;
    display: flex;
    justify-content: space-between;
    padding: 0 2vw;
    box-sizing: border-box;
    border-bottom: 1px solid #505050;
}
.nrtxt{
    font-size: 3vw;
    color: #fff;
}

.zhe{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .4);
    position: absolute;
    top: 0vw;
}
/* 提取收益 */
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
        text-indent: 12vw;
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
.quedings{
        margin-top: 4vh;
    display: flex;
    justify-content: space-evenly;
}

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