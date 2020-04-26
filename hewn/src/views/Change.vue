<template>
  <div class="app">
    <van-nav-bar title="闪兑" left-text="" left-arrow>
      <template #right>
        <van-icon name="notes-o" size="30"  @click="tochangerecord()" />
      </template>
    </van-nav-bar>

    <div class="rgba">
        <div class="centers">
                <div class="select">
                    <div class="texts">
                        <div class="toptype" @click="xiala()">
                            <img :src="`https://dapp.quxiangyuntui.com`+this.btcimg" alt="" class="btcimg">
                            <input type="text" placeholder="请选择" v-model="choise" class="bizhongchange">
                            <img src="../assets/img/downxia.png" alt="" class="downxia">
                        </div>
                        
                    </div>
                    <div class="bottypefa" v-if="this.isla">
                        <div class="bottypetxt">
                            <span class="txt">选择币种</span>
                            <img src="../assets/img/deletes.png" alt="" class="cuowuhao" @click="guanbitan()">
                        </div>
                        <div class="bottype" >
                                <div class="xialacenter" v-for="(index,item) in list" :key="item" @click.stop="thisone(index)">
                                    <img :src="index.imgs" class="addnewimg" >
                                    <span class="dabing">{{index.currency}}</span>
                                </div>
                        </div>
                    </div>  

                    <div class="texts">
                        <div class="toptype" @click="xialatwo()">
                            <img :src="`https://dapp.quxiangyuntui.com`+this.btcimgtwo" alt="" class="btcimg">
                            <input type="text" placeholder="请选择" v-model="choisetwo" class="bizhongchange">
                            <img src="../assets/img/downxia.png" alt="" class="downxia">
                        </div>
                        
                    </div>
                    <div class="bottypefa" v-if="this.islatwo">
                        <div class="bottypetxt">
                            <span class="txt">选择币种</span>
                            <img src="../assets/img/deletes.png" alt="" class="cuowuhao" @click="guanbitantwo()">
                        </div>
                        <div class="bottype" >
                                <div class="xialacenter" v-for="(a,b) in listtwo" :key="b"  @click.stop="thisonetwo(a)">
                                    <img :src="a.imgs" class="addnewimg" >
                                    <span class="dabing">{{a.currency}}</span>
                                </div>
                        </div>
                    </div>
                    
                </div>

                <div class="number">
                    <input type="text" placeholder="输入数量" v-model="first">
                    <img src="../assets/img/changeb.png" alt="" class="asd">
                    <input type="text" placeholder="输入数量" v-model="second">
                </div>

                <div class="shouxu">手续费:<span class="shoumoney">{{this.shouxumoney}}</span></div>
                <div class="huilv">汇率:<span class="shoumoney">1 BTC ≈ 374 ETH</span></div>
                <div class="kyye">可用余额： <span class="ye">10 BTC</span></div>
                
                <div class="duih" @click="changes()">兑换</div>
                

            </div>

            <van-tabbar v-model="active">
              <van-tabbar-item icon="pending-payment">资产</van-tabbar-item>
              <van-tabbar-item icon="after-sale" @click="tochange()">闪兑</van-tabbar-item>
              <van-tabbar-item icon="stop-circle-o" @click="tomanagemoney()">理财</van-tabbar-item>
              <van-tabbar-item icon="bar-chart-o" @click="tomarket()">行情</van-tabbar-item>
              <van-tabbar-item icon="user-circle-o" @click="topersonalcenter()">个人中心</van-tabbar-item>
            </van-tabbar>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data(){
    return{
      active: 1,  //底部导航
      token:'6ea020fe400e41ed30660d61b88c85d2',  //token
          
           
            istrue:false,    //遮挡层是否显示
            
            first:"", //第一个数量
            second:"",  //第二个数量
            shouxumoney:"2 USDT",   //手续费

            list:[
                {currency:'BTC1',imgs:require("../assets/img/btb.png")},
                {currency:'BTC2',imgs:require("../assets/img/btb.png")},
                {currency:'BTC3',imgs:require("../assets/img/btb.png")}
            ],
            // list:null,   //币种
            choise:"",    //当前选择的币种
            isla:false,   //下拉列表显示
            onids:"",   //当前选中的id
            btcimg:"",  //select左边图片

            listtwo:[
                {currency:'BTC4',imgs:require("../assets/img/btb.png")},
                {currency:'BTC5',imgs:require("../assets/img/btb.png")},
                {currency:'BTC6',imgs:require("../assets/img/btb.png")}
            ],
            // listtwo:null,   //币种
            choisetwo:"",    //当前选择的币种
            islatwo:false,   //下拉列表显示
            onidstwo:"",   //当前选中的id
            btcimgtwo:"",  //select左边图片
    }
  },
  created(){
    //币种列表
        // this.$get("transfer/currency",{token:this.token}).then((res)=>{
        //     console.log(res);
        //     this.list=res.data;
        //     this.listtwo=res.data;
        // }).catch((err)=>{
        //     console.log(err);
        //     Toast('网络出现错误，请重试');
        // })
  },
  methods:{
      //点击兑换
    // changes(){
    //         this.$post("transfer/conversion",{token:this.token,coin_money:this.first,coin_passivity_money:this.second,coin:this.onids,coin_passivity:this.onidstwo}).then((res)=>{
    //                 console.log(res);
    //                 Toast(res.msg);
    //             }).catch((err)=>{
    //                 console.log(err);
    //                 Toast("网络出现错误");
    //             })
    //     },
    changes(){
        if(this.first.length==0||this.second.length==0){
            Toast("请输入兑换数量");
        }
    },
        xiala(){
            this.isla=!this.isla;
        },
        xialatwo(){
            this.islatwo=!this.islatwo;
        },
        thisone(index){
            console.log(index)
            this.choise=index.currency;
            this.onids=index.id;
            this.btcimg=index.logo;
            this.isla=false;
        },
        thisonetwo(a){
            console.log(a)
            this.choisetwo=a.currency;
            this.onidstwo=a.id;
            this.btcimgtwo=a.logo;
            this.islatwo=false;
        },
        //闪兑记录
        tochangerecord(){
            this.$router.push({
                path:'/Changerecord'
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
        },
        guanbitan(){
           
            this.isla=false;
        },
        guanbitantwo(){
            this.islatwo=false;
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
/deep/.van-nav-bar .van-icon {
    color: #fff;
}
/deep/.van-icon-arrow-left::before {
    content: "\F008";
    color: #000;
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

.rgba{
  width: 95vw;
    height: 74vw;
    background: rgba(255, 255, 255, .2);
    margin: 0 auto;
    border-radius: 1vw;
}
.select{
    display: flex;
    justify-content: space-around;
    margin-top: 4vh;
}
.texts{
    display: flex;
    flex-direction: column;
    width: 30vw;
    position: relative;
    height: 6vh;
    
}
.toptype{
    display: flex;
    width: 30vw;
    height: 5vh;
    position: absolute;
    top: 3.5vh;
    background-color: #505050;
    box-sizing: border-box;
    border-radius: 1vw;
    align-items: center;
}
.btcimg{
    width: 4vw;
    height: 2vh;
}
.bizhongchange{
    width: 20vw;
    height: 4vh;
    background-color: transparent;
    border: navajowhite;
    font-size: 3vw;
    margin-top: .5vh;
    text-indent: 6vw;
}
.downxia{
    width: 3vw;
    height: 1.5vh;
}
.bottypefa{
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 35vh;
    background-color: #606060;
    z-index: 99;
    border-top-left-radius: 6vw;
    border-top-right-radius: 6vw;
}
/* 顶部文字叉号 */
.bottypetxt{
    display: flex;
    width: 100vw;
    height: 6vh;
}
/*每条数据*/
.xialacenter{
    width: 100vw;
    height: 7vh;
    box-sizing: border-box;
    border-bottom: 1px solid #505050;
        padding-left: 3vw;
}
.addnewimg{
    width: 5.5vw;
    height: 3vh;
    margin-top: 2vh;
    vertical-align: bottom;
}
.dabing{
    font-size: 4vw;
    color: #fff;
    margin-left: 2vw;
}
.txt{
    line-height: 6vh;
    color: #fff;
    font-size: 4vw;
    margin-left: 44vw;
}
.cuowuhao{
    width: 4vw;
    height: 2.3vh;
    position: absolute;
    top: 2vh;
    right: 3vw;
    z-index: 1000;
}
.bottype{
    display: flex;
    flex-direction: column;
    /* position: absolute;
    top: 8.5vh; */
    /* width: 30vw; */
    height: 29vh;
    overflow: hidden;
    overflow-y: auto;
    z-index: 99;
    /* background-color: #fff; */
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
}
.onety{
    font-size: 3vw;
    display: block;
    height: 5vh;
    line-height: 5vh;
    text-align: center;
}
.number{
    display: flex;
    justify-content: center;
    margin-top: 5vh;
    align-items: center;
}
.number input{
        width: 32vw;
    height: 5vh;
    font-size: 3vw;
    border: none;
    background: transparent;
    border-bottom: 1px solid #FECF27;
    
}

.number input::placeholder{
    font-size: 2vh;
    color: #909090;
}
.asd{
    width: 5vw;
    height: 3vh;
    margin: 0 5vw;
}
.shouxu{
    font-size: 3vw;
    color: #C5C5C5;
    text-indent: 7vw;
    margin-top: 2vh;
}
.huilv{
  font-size: 3vw;
    color: #C5C5C5;
    text-indent: 7vw;
    margin: 1vh 0;
}
.duih{
       font-size: 4vw;
    color: #fff;
    width: 69vw;
    margin: 3vh auto;
    border-radius: 6vw;
    background: -webkit-gradient(linear,0 0,100% 0,from(#FFD41F),to(#FBBA4A));
    text-align: center;
    height: 6vh;
    line-height: 6vh;
}
.kyye{
  font-size: 3vw;
  color: #fff;
  text-indent: 7vw;
}
.ye{
  color: #FECF27;
  font-size: 3vw;
}
</style>
