<template>
  <div class="servicesList">
    <div class="body">
      <h1>{{ headline }}</h1>
      <h2>{{ subtext }}</h2>
      <div class="blue-highlight"></div>
    </div>
    <Selected />
    <div class="gradient-boxes">
      <div
        v-on:click="changeService('zapier')"
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
        v-on:click="changeService('airtable')"
        class="service-box airtable-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/e15f4feec060f8f125eab7d48112539e/3a922897/airtablebannerlogo.png"
              alt="Airtable"
            />
          </div>
        </ServiceCard>
      </div>

      <div
        v-on:click="changeService('mysql')"
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
        v-on:click="changeService('integromat')"
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
        v-on:click="changeService('slack')"
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
        v-on:click="changeService('gsuite')"
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
        v-on:click="changeService('dropbox')"
        class="service-box dropbox-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/6da415d9fe4eeb97a722cef53c9f297e/5ffe61b1/DropboxBanner.png"
              alt="Dropbox"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('calendly')"
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
        v-on:click="changeService('copper')"
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
        v-on:click="changeService('contactsplus')"
        class="service-box contactsplus-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/9d51e90027f416797d31d6dd35212242/a41ffa0f/contactsplusbanner.png"
              alt="Contacts Plus"
            />
          </div>
        </ServiceCard>
      </div>

      <div
        v-on:click="changeService('outfunnel')"
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
        v-on:click="changeService('replyio')"
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

      <div v-on:click="changeService('coda')" class="service-box coda-gradient">
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/88682f018b2950b7dc0cd4c18d95678e/99d35a36/codabanner.png"
              alt="Coda"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('typeform')"
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
        v-on:click="changeService('dialpad')"
        class="service-box dialpad-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/73d62d31e5196a427fea9a522382fa8c/d09ea741/DialpadBanner.png"
              alt="DialPad"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('mailparser')"
        class="service-box mailparser-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/9023e0fc6e6739b96ab1e0577c999abe/047cb21d/MailParserBanner.png"
              alt="Mailparser.io"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('docparser')"
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
        v-on:click="changeService('docusign')"
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
        v-on:click="changeService('slite')"
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
        v-on:click="changeService('stripe')"
        class="service-box stripe-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/652b8fef8517c606d5908a7ab501575a/9f5450e7/stripebanner.png"
              alt="Stripe"
            /></div
        ></ServiceCard>
      </div>

      <div v-on:click="changeService('qbo')" class="service-box qbo-gradient">
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/bf7b3fd0c943dd553f7fe38668898455/865bc1ad/qbo-banner.png"
              alt="QBO"
            /></div
        ></ServiceCard>
      </div>

      <div v-on:click="changeService('xero')" class="service-box xero-gradient">
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/8ec7d015ca528255c8b1ce34eb8bdca3/2434069a/xerobanner.png"
              alt="Xero"
            /></div
        ></ServiceCard>
      </div>

      <div v-on:click="changeService('css')" class="service-box css-gradient">
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/8f682e64a41f90e4aaf5b6d9b6f133db/d5154f1d/css.png"
              alt="CSS/HTML"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('nodejs')"
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
        v-on:click="changeService('javascript')"
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

      <div v-on:click="changeService('vuejs')" class="service-box vue-gradient">
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
        v-on:click="changeService('csharp')"
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
        v-on:click="changeService('webhooks')"
        class="service-box webhooks-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/f3ee8aa6daae5f932e3b35b7dff40f3b/c12b0342/WebhooksBanner.png"
              alt="API Webhooks"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('mariadb')"
        class="service-box mariadb-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/c748cdddfe2d60f73c5e1e2a04605461/c4aeeb3f/MariaDBBanner.png"
              alt="MariaDB"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('postgres')"
        class="service-box postgres-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/cf246d9d920b688eae9f14410bc144f6/3e00c6eb/PostgresBanner.png"
              alt="PostgreSQL"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('mongodb')"
        class="service-box mongodb-gradient"
      >
        <ServiceCard
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/de797bcdb65233f42691043cb90a83a6/bd4a0d79/MongoDBBanner.png"
              alt="MongoDB"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('ontask')"
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

      <div
        v-on:click="changeService('pandadoc')"
        class="service-box pandadoc-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/ccb0fccb2602a765cd28d4e23e67a2d2/3b178a75/pandadocbanner.png"
              alt="PandaDoc"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('workona')"
        class="service-box workona-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/9f39ccf4c604ca5d1e85ad8bf9e8f817/2283a9d4/workona-logo.png"
              alt="Workona"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('gmail')"
        class="service-box gmail-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/43296f18cabb3772a0bd59467a241709/526b0ef6/GmailBanner.png"
              alt="Gmail"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('googlecalendar')"
        class="service-box googlecalendar-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/b15f3fd4184c692ea313556047accb36/cb152ef3/googlecalendar.png"
              alt="Google Calendar"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('googlecontacts')"
        class="service-box googlecontacts-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/a50d178c1ea1ed22dd77eef66325c37f/9f36f0f7/Contacts.png"
              alt="Google Contacts"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('googledocs')"
        class="service-box googledocs-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/c774b9ac06725083cb9d43195998b47e/d8f4ac44/integrations-google-docs-logo.png"
              alt="Google Docs"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('googledrive')"
        class="service-box googledrive-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/a463e5b9cb31383b9981934ba69142bb/59780a4d/googledrivebanner.png"
              alt="Google Drive"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('googleforms')"
        class="service-box googleforms-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/e430aa8aa857708ee0949200a1f8e279/ecbe315f/GoogleFormsBanner.png"
              alt="Google Forms"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('googlesheets')"
        class="service-box googlesheets-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/24a475f8a4ad405294fffb8a504cec47/90b6fe99/GoogleSheetsBanner.png"
              alt="Google Sheets"
            /></div
        ></ServiceCard>
      </div>

      <div
        v-on:click="changeService('googlekeep')"
        class="service-box googlekeep-gradient"
      >
        <ServiceCard>
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/53926906495387a2042e70485c931ba3/80024d8d/keepbanner.png"
              alt="Google Keep"
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
import Selected from "@/components/Selected.vue";

import { EventBus } from "../main";

export default {
  name: "ServiceList",
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
    ServiceCard,
    Selected
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
  /* ADJUST THIS TO PLAY WITH SIZE
  DON'T FORGET TO FIX THE HOVER ALSO */
  padding: 30px 25px 0 25px;
  color: white;
}

.gradient-boxes:hover {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  /* HERE */
  padding: 30px 25px 0 25px;
  color: black;
}

/* .zapier-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.zapier-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #ffefce;
}

/* .airtable-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.airtable-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #9c80f050;
}

/* .mysql-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.mysql-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #00618a35;
}

/* .slack-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.slack-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #e1bac750;
}

/* .vue-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.vue-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #34495f50;
}

/* .copper-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.copper-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #4e2f6550;
}

/* .contactsplus-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.contactsplus-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #0fb8f550;
}

/* .coda-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.coda-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #f5d0ba50;
}

/* .google-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.google-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #ea433550;
}

/* .outfunnel-gradient {
  background-color: #ffffff;
} */

.outfunnel-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #00b8aa50;
}

/* .reply-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.reply-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #005aff50;
}

/* .typeform-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.typeform-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #89c6be50;
}

/* .dialpad-gradient {
  
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.dialpad-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #304df850;
}

/* .pandadoc-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.pandadoc-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #45b46f50;
}

/* .mariadb-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.mariadb-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #1d2f5c50;
}

/* .mailparser-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.mailparser-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #fe470150;
}

/* .dropbox-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.dropbox-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #194ba050;
}

/* .docusign-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.docusign-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #007ee550;
}

/* .css-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.css-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #f1652950;
}

/* .node-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.node-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #83cd2950;
}

/* .csharp-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.csharp-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #9d72d950;
}

/* .javascript-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.javascript-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #f5de1950;
}

/* .slite-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.slite-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #08145250;
}

/* .stripe-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.stripe-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #6772e530;
}

/* .qbo-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.qbo-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #28a11650;
}

/* .xero-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.xero-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #1ab4d750;
}

/* .postgres-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.postgres-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #31619250;
}

/* .mongodb-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.mongodb-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #4da84b50;
}

/* .docparser-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.docparser-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #297ce550;
}

/* .webhooks-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.webhooks-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #c73a6350;
}

/* .ontask-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.ontask-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #9bc66950;
}

/* .integromat-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.integromat-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #2f8cbb50;
}

/* .calendly-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.calendly-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #676b7650;
}

/* .workona-gradient {
  
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
} */

.workona-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #0141df50;
}

.gmail-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #ea433550;
}

.googlecalendar-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #4184f350;
}

.googlecontacts-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #4184f350;
}

.googledocs-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #4184f350;
}

.googledrive-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #f5ba1650;
}

.googleforms-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #54078750;
}

.googlekeep-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #f5ba1650;
}

.googlesheets-gradient:hover {
  transition: all 0.2s ease-in-out;
  background-color: #439d4650;
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
