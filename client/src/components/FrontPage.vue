<template>
  <div class="front-page">
    <div class="headline">
      <div class="top">
        <h1>{{ headline }}</h1>
        <h2>{{ subtext }}</h2>
        <div class="blue-highlight"></div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
// import ServiceCard from "@/components/ServiceCard.vue";
// import Selected from "@/components/Selected.vue";

import { EventBus } from "../main";

export default {
  name: "front-page",
  props: {
    headline: {
      type: String
    },
    subtext: {
      type: String
    },
    selectedService: {
      type: String
    }
  },
  components: {
    // ServiceCard,
    // Selected
  },

  methods: {
    changeService(svc) {
      this.selectedService = svc;
      EventBus.$emit("changeSvc", this.selectedService);
      return this.selectedService;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: block;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: darkorange;
  font-size: 20px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 120px;
  margin: auto;
  text-align: right;
}

header {
  align-items: stretch;
  display: grid;
  grid-template-columns: max-content auto max-content;
  position: relative;
  z-index: 950;
  background-color: #ffffff;
  border-bottom: 1px solid rgb(230, 230, 230);
}

hr {
  color: #e6e6e6;
  width: 15%;
  margin: auto;
  align-content: center;
}

a.h3 {
  color: #136bf5;
}

h1 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-top: 0;
  line-height: 50px;
  font-weight: 525;
}

h2 {
  line-height: 32px;
  color: #333333;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  font-weight: 525;
}

h3 {
  line-height: 24px;
  color: #666666;
  padding-left: 20px;
  padding-right: 20px;
}

h4 {
  line-height: 24px;
  color: #66666690;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
}

.things {
  text-decoration: none;
  color: #666666;
  font-size: 30px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  margin: auto;
  text-align: center;
  padding-top: 15px;
}

.logo {
  color: #fd7622;
}

.small-logo-image {
  width: 20%;
  margin: auto;
}

.medium-logo-image {
  width: 60%;
  padding: 0px;
  margin: auto;
}

.image-wrap {
  width: 80%;
  align-content: center;
  text-align: center;
  justify-content: space-evenly;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.integromat-partner-logo {
  width: 40%;
  padding: 0px;
  margin: auto;
}
.integromat-partner {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.image-slot {
  justify-content: space-evenly;
}

.service-box {
  border-radius: 1rem;
  border: 0px;
  margin: 0 1% 2% 1%;
  min-width: 350px;
  max-width: 30%;
  flex-grow: 1;
  display: flex;
  text-align: center;
  justify-content: space-between;
}

.service-box:hover {
  border-radius: 1rem;
  border: 0px;
  margin: 0 1% 2% 1%;
  min-width: 350px;
  max-width: 30%;
  flex-grow: 1;
  display: flex;
  text-align: center;
  justify-content: space-between;
}

.gradient-boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  padding: 30px 30px 0 30px;
  color: white;
}

.gradient-boxes:hover {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  padding: 30px 30px 0 30px;
  color: black;
}

/* .zapier-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}

.zapier-gradient:hover {
  background-color: #ffefce;
}

.airtable-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.airtable-gradient:hover {
  background-color: #fdc6dc;
}

.mysql-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.mysql-gradient:hover {
  background-color: #00618a35;
}

.slack-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.slack-gradient:hover {
  background-color: #e0156350;
}

.vue-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.vue-gradient:hover {
  background-color: #34495f50;
}

.copper-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.copper-gradient:hover {
  background-color: #4e2f6550;
}

.contactsplus-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}

.contactsplus-gradient:hover {
  background-color: #0fb8f550;
}

.coda-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.coda-gradient:hover {
  background-color: #f5d0ba50;
}

.google-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.google-gradient:hover {
  background-color: #ea433550;
}

.outfunnel-gradient {
  background-color: #ffffff;
}
.outfunnel-gradient:hover {
  background-color: #00b8aa50;
}

.reply-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.reply-gradient:hover {
  background-color: #005aff50;
}

.typeform-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.typeform-gradient:hover {
  background-color: #89c6be50;
}

.dialpad-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.dialpad-gradient:hover {
  background-color: #304df850;
}

.pandadoc-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.pandadoc-gradient:hover {
  background-color: #45b46f50;
}

.mariadb-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.mariadb-gradient:hover {
  background-color: #1d2f5c50;
}

.mailparser-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.mailparser-gradient:hover {
  background-color: #fe470150;
}

.dropbox-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.dropbox-gradient:hover {
  background-color: #194ba050;
}

.docusign-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.docusign-gradient:hover {
  background-color: #007ee550;
}

.css-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.css-gradient:hover {
  background-color: #f1652950;
}

.node-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.node-gradient:hover {
  background-color: #83cd2950;
}

.csharp-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.csharp-gradient:hover {
  background-color: #9d72d950;
}

.javascript-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.javascript-gradient:hover {
  background-color: #f5de1950;
}

.slite-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.slite-gradient:hover {
  background-color: #08145250;
}

.stripe-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.stripe-gradient:hover {
  background-color: #6772e530;
}

.qbo-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.qbo-gradient:hover {
  background-color: #28a11650;
}

.xero-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.xero-gradient:hover {
  background-color: #1ab4d750;
}

.postgres-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.postgres-gradient:hover {
  background-color: #31619250;
}

.mongodb-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.mongodb-gradient:hover {
  background-color: #4da84b50;
}

.docparser-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.docparser-gradient:hover {
  background-color: #297ce550;
}

.webhooks-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.webhooks-gradient:hover {
  background-color: #c73a6350;
}

.ontask-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.ontask-gradient:hover {
  background-color: #9bc66950;
}

.integromat-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.integromat-gradient:hover {
  background-color: #2f8cbb50;
}

.calendly-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.calendly-gradient:hover {
  background-color: #676b7650;
}

.workona-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.workona-gradient:hover {
  background-color: #0141df50;
}

.gmail-gradient:hover {
  background-color: #ea433550;
}

.googlecalendar-gradient:hover {
  background-color: #4184f350;
}

.googlecontacts-gradient:hover {
  background-color: #4184f350;
}

.googledocs-gradient:hover {
  background-color: #4184f350;
}

.googledrive-gradient:hover {
  background-color: #f5ba1650;
}

.googleforms-gradient:hover {
  background-color: #54078750;
}

.googlekeep-gradient:hover {
  background-color: #f5ba1650;
}

.googlesheets-gradient:hover {
  background-color: #439d4650;
} */

.design-gradient {
  transition: all 0.2s ease-in-out;
  background-image: linear-gradient(to top right, #edeafb, #fde3ef);
}

.headline {
  /* background-color: #fafafa; */
  border: 25px 25px 0 25px;
}

.top {
  padding-top: 10px;
  /* background-image: linear-gradient(to bottom, #e5effd, #ffffff); */
}

.light-blue-highlight {
  background-color: #f3f8ff;
}

.request {
  text-decoration: none;
  color: darkorange;
  font-size: 20px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 250px;
  margin: auto;
  text-align: center;
  font-size: 30px;
}

footer {
  order: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f1f4f5;
  border-top: 1px solid #f1f4f5;
  align-items: center;
}
</style>
