import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/case",
      name: "case",
      component: () => import("./views/Case.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/saas",
      name: "saas",
      component: () => import("./views/SaaS.vue")
    },

    /*
    TODO: Add routing for services
    */
    {
      path: "/zapier",
      name: "zapier",
      component: () => import("./components/Selected.vue")
    },
    {
      path: "/airtable",
      name: "airtable",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/mysql",
      name: "mysql",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/integromat",
      name: "integromat",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/slack",
      name: "slack",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/gsuite",
      name: "gsuite",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/dropbox",
      name: "dropbox",
      component: () => import("./views/Services.vue")
    },

    {
      path: "/calendly",
      name: "calendly",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/copper",
      name: "copper",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/outfunnel",
      name: "outfunnel",
      component: () => import("./views/Services.vue")
    },

    {
      path: "/reply",
      name: "reply",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/coda",
      name: "coda",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/typeform",
      name: "typeform",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/mailparser",
      name: "mailparser",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/docparser",
      name: "docparser",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/docusign",
      name: "docusign",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/slite",
      name: "slite",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/qbo",
      name: "qbo",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/css",
      name: "css",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/node",
      name: "node",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/javascript",
      name: "javascript",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/vuejs",
      name: "vuejs",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/csharp",
      name: "csharp",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/webhooks",
      name: "webhooks",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/postgresql",
      name: "postgresql",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/mongodb",
      name: "mongodb",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/ontask",
      name: "ontask",
      component: () => import("./views/Services.vue")
    }
  ]
});
