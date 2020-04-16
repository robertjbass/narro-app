<template>
  <div class="front-page">
    <div class="body-white">
      <div class="top">
        <h1>{{ headline }} - {{ selectedService }}</h1>
        <h2>{{ subtext }}</h2>
        <div class="blue-highlight">
          <!-- <h2 class="things">Technologies we love</h2> -->
        </div>
      </div>
    </div>
    <div class="gradient-boxes">
      <div
        v-on:click="selectedService = 'zapier'"
        class="service-box zapier-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/b99545e12d00d8351312f4b097ed7fb6/d06c9ebc/Zapier2.png"
              alt="Zapier"
            />
          </div>
        </ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'airtable'"
        class="service-box airtable-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/0a94432340e97ee06e44bcdeff3eb9c1/919a5240/pngfind_com-ucla-logo-png-421089.png"
              alt="Airtable"
            />
          </div>
        </ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'mysql'"
        class="service-box mysql-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/24d21be435e0c140d7fcc4369892c15e/e60b612e/MySQLBannerClear.png"
              alt="MySQL"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'integromat'"
        class="service-box integromat-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <span class="integromat-partner">
              <img
                class="integromat-partner-logo"
                src="https://dl.airtable.com/.attachments/27c6f6528acaffec0fb9e37688a82f4d/7af237e7/integromat-logo.png"
                alt="Integromat"
              />
              <img
                class="medium-logo-image"
                src="https://dl.airtable.com/.attachments/a5e7a675f76da5d99cdc6b7e9e184335/ed155325/IntegromatPartner.PNG"
                alt="Integromat Partner"
              />
            </span>
          </div>
        </ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'slack'"
        class="service-box slack-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/bc7ada5a73958df814a21060aa39b6b6/1f31f91e/SlackBanner.png"
              alt="Slack"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'gsuite'"
        class="service-box google-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/5e82630b4bfd03e62e1e9090f15bc8b9/0f58805f/GSuiteServices.png"
              alt="GSuite"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'dropbox'"
        class="service-box dropbox-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/d97e1645d03505eb774612be01804ab3/a3b60b00/dropbox.png"
              alt="Dropbox"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'calendly'"
        class="service-box calendly-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/8bb20e24ac5275e083941280e7d505f7/c156a58b/calendly-logo1.png"
              alt="Calendly"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'copper'"
        class="service-box copper-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/18fa778c0a3fe6441849a022311f75d6/30dd9538/CopperBanner1.png"
              alt="Copper"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'outfunnel'"
        class="service-box outfunnel-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/15a09bcdf75a2974f532926fe9eec4c1/bc5589a2/OutfunnelBanner.png"
              alt="Outfunnel"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'reply'"
        class="service-box reply-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/2e9ed0ff5e68c765cec98e00b458b90c/36bead68/reply-io.png"
              alt="Reply.io"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'coda'"
        class="service-box coda-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/2fc0673bda9f5b009ace325c4929475d/3beaefd1/coda-logo.png"
              alt="Coda"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'typeform'"
        class="service-box typeform-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/382bcba414684e6d125d79144ef0c8c5/5b465c24/typeform.svg"
              alt="TypeForm"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'mailparser'"
        class="service-box mailparser-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/2e555ec8a27c1ff25aee28f5cc23d9b0/58ea928a/MailparserBanner2.png"
              alt="Mailparser.io"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'docparser'"
        class="service-box docparser-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/8750dbf58d4b026025a1401ecd636e88/053a55c6/DocparserBanner.png"
              alt="Docparser"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'docusign'"
        class="service-box docusign-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/57a0d554cd3e9c89fce9f214b352259e/75af1014/docusign.png"
              alt="DocuSign"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'slite'"
        class="service-box slite-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/6ae3eea7cf917f98f65a66e17af346b3/0c5dfc5e/slitelogo.png"
              alt="Slite"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'qbo'"
        class="service-box qbo-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/bf7b3fd0c943dd553f7fe38668898455/865bc1ad/qbo-banner.png"
              alt="QBO"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'css'"
        class="service-box css-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/c0421d9a83faac2d778058b594b253eb/ec0d739a/CSSandHTMLLogos.png"
              alt="CSS/HTML"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'node'"
        class="service-box node-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/812ad17e355312275f41e48672d6f59c/8dc9713d/node-banner.png"
              alt="Node.JS"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'javascript'"
        class="service-box javascript-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/c8fa8668764fb5831c65770bb7c3b8d3/120aca07/javascript.png"
              alt="JavaScript"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'vue'"
        class="service-box vue-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/d90803371969873c31cb64ddf0181e0c/15c43c78/VueJSBanner.png"
              alt="VueJS"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'csharp'"
        class="service-box csharp-gradient"
      >
        <ServiceCard
          service="C# .NET"
          description="Microsoft has been the leader in enterprise software for as long as the personal computer has existed and C# is the language that they've invested billions of dollars into creating. We can help with your .NET applications."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/83e6f705bd29c8e202ee9ee1a74abc19/be3fa076/Csharp.png"
              alt="C#"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'webhooks'"
        class="service-box webhooks-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/44cf41563c5e08c730eeaadb4220bf0b/0a02c875/webhooks.png"
              alt="API Webhooks"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'postgres'"
        class="service-box postgres-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/b21a39073f412ccc9659e2d6232ff418/50cecf5e/PostgreSQL.png"
              alt="PostgreSQL"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'mongodb'"
        class="service-box mongodb-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/79798127af31055601111b7de6338dd1/a4f7fd5c/MongoDBBanner.png"
              alt="MongoDB"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="selectedService = 'ontask'"
        class="service-box ontask-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/d3efa4e991c7b03a6ede90abea35885d/e505e0bd/OnTask.png"
              alt="OnTask"
            /></div
        ></ServiceCard>
      </div>
    </div>
    <br /><br />
    <hr />
  </div>
</template>

<script>
import ServiceCard from "@/components/ServiceCard.vue";
export default {
  name: "front-page",
  props: {
    headline: {
      type: String
    },
    subtext: {
      type: String
    }
  },
  components: {
    ServiceCard
  },
  data: function() {
    return {
      selectedService: "airtable"
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

* {
  /* font-family: monospace; */
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
  /* justify-content: space-around; */
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

.zapier-gradient {
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

.qbo-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.qbo-gradient:hover {
  background-color: #28a11650;
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

.design-gradient {
  transition: all 0.2s ease-in-out;
  background-image: linear-gradient(to top right, #edeafb, #fde3ef);
}

.body-white {
  background-color: #fafafa;
  border: 25px 25px 0 25px;
}

.top {
  padding-top: 10px;
  background-image: linear-gradient(to bottom, #e5effd, #ffffff);
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
