import Vue from "vue";
import VueRouter from "vue-router";
import Managemoney from "../components/Managemoney.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Managemoney",
    component: Managemoney
  },
  {
    path: "/Change",
    name: "Change",
    
    component: () =>
      import( "../views/Change.vue")
  },
  {
    path: "/Changerecord",
    name: "Changerecord",
    
    component: () =>
      import( "../components/Changerecord.vue")
  },
  {
    path: "/Contractrecord",
    name: "Contractrecord",
    component: () =>
      import( "../components/Contractrecord.vue")
  },
  {
    path: "/Managemoney",
    name: "Managemoney",
    component: () =>
      import( "../components/Managemoney.vue")
  },
  {
    path: "/Contract",
    name: "Contract",
    component: () =>
      import( "../components/Contract.vue")
  },
  {
    path: "/Market",
    name: "Market",
    component: () =>
      import( "../components/Market.vue")
  },
  {
    path: "/Personalcenter",
    name: "Personalcenter",
    component: () =>
      import( "../components/Personalcenter.vue")
  },
  {
    path: "/Changepersonage",
    name: "Changepersonage",
    component: () =>
      import( "../components/Changepersonage.vue")
  },
  {
    path: "/Myteam",
    name: "Myteam",
    component: () =>
      import( "../components/Myteam.vue")
  },
  {
    path: "/Transaction",
    name: "Transaction",
    component: () =>
      import( "../components/Transaction.vue")
  },
  {
    path: "/Information",
    name: "Information",
    component: () =>
      import( "../components/Information.vue")
  },
  {
    path: "/Details",
    name: "Details",
    component: () =>
      import( "../components/Details.vue")
  },
  {
    path: "/Mytoken",
    name: "Mytoken",
    component: () =>
      import( "../components/Mytoken.vue")
  },
  {
    path: "/Personagecontract",
    name: "Personagecontract",
    component: () =>
      import( "../components/Personagecontract.vue")
  },
  {
    path: "/Setting",
    name: "Setting",
    component: () =>
      import( "../components/Setting.vue")
  },
  {
    path: "/Setpersonage",
    name: "Setpersonage",
    component: () =>
      import( "../components/Setpersonage.vue")
  },
  {
    path: "/Setregister",
    name: "Setregister",
    component: () =>
      import( "../components/Setregister.vue")
  },
  {
    path: "/Setpay",
    name: "Setpay",
    component: () =>
      import( "../components/Setpay.vue")
  },
  {
    path: "/Setphone",
    name: "Setphone",
    component: () =>
      import( "../components/Setphone.vue")
  },
  {
    path: "/Bindphone",
    name: "Bindphone",
    component: () =>
      import( "../components/Bindphone.vue")
  },
  {
    path: "/Teamearning",
    name: "Teamearning",
    component: () =>
      import( "../components/Teamearning.vue")
  },
  {
    path: "/Service",
    name: "Service",
    component: () =>
      import( "../components/Service.vue")
  },
  {
    path: "/Invitation",
    name: "Invitation",
    component: () =>
      import( "../components/Invitation.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
