<template>
  <div class="about-us">
    <div class="body-white">
      <div class="top">
        <h1>Automation Information</h1>
        <h2>Your automation partner</h2>
      </div>
    </div>
    <!-- <h3>Case Study: Ashland Development<br /></h3> -->
    <div class="certifications">
      <img
        class="zapier-expert"
        src="@/assets/images/zapier-expert.png"
        alt="Zapier Expert"
      />
      <img
        class="integromat-partner"
        src="https://dl.airtable.com/.attachments/a5e7a675f76da5d99cdc6b7e9e184335/ed155325/IntegromatPartner.PNG"
        alt="Integromat Partner"
      />
    </div>

    <div class="content">
      <CaseStudy />
      <br />

      <div class="blue-highlight">
        <!-- <hr /> -->
        <div class="address">
          <h3>
            Address
          </h3>
          <h4>
            Narro, LLC<br />244 Highland Pkwy #112 <br />Buffalo, NY 14223
          </h4>
        </div>

        <div class="email">
          <h3>Email</h3>
          <h4>‪info@narro.app</h4>
        </div>

        <div class="phone">
          <h3>Phone</h3>
          <h4>‪716.256.3060‬</h4>
        </div>
        <br /><br />
        <hr />
        <a
          class="request"
          href="https://airtable.com/shrCDJbvIga3NMRZS"
          target="blank"
          >Request a Review</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import CaseStudy from "@/components/CaseStudy.vue";
export default {
  name: "about",
  components: {
    CaseStudy
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

* {
  display: block;
  box-sizing: border-box;
  font-family: monospace;
}
.certifications {
  display: flex;
  margin: auto;
}
.integromat-partner {
  width: 15%;
  margin: auto;
}

.zapier-expert {
  width: 15%;
  margin: auto;
}

.top {
  background-image: linear-gradient(to bottom, #e5effd, #ffffff);
}
.content {
  color: #666666;
  font-size: 20px;
  font-weight: 900;
  margin: auto;
  text-align: left;
  font-family: monospace;
  width: 100%;
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

a {
  text-decoration: none;
  color: darkorange;
  font-size: 20px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 250px;
  margin: auto;
  text-align: center;
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
}

h2 {
  line-height: 32px;
  color: #333333;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}

h3 {
  line-height: 24px;
  color: #666666;
  padding-left: 20px;
  padding-right: 20px;
}

h4 {
  line-height: 24px;
  color: #999999;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  margin: auto;
  margin-left: 30px;
}
u {
  text-align: left;
}
.address,
.email,
.phone {
  font-family: monospace;
  text-align: left;
}

.logo {
  color: #fd7622;
}

.small-logo-image {
  width: 20%;
  padding-top: 20px;
  margin: auto;
}

.image-wrap {
  width: 50%;
  align-content: center;
  text-align: center;
  justify-content: space-evenly;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.image-slot {
  justify-content: space-evenly;
}

.service-box {
  background-image: linear-gradient(to top right, #ffefce, #ffa38c);
  border-radius: 1rem;
  padding: 10px;
  border: 10px;
  margin: 0 1% 2% 1%;
  box-shadow: 5px 5px;

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
  justify-content: space-around;
  padding-top: 30px;
}
.orange-gradient {
  background-image: linear-gradient(to top right, #ffefce, #ffa38c);
}

.airtable-gradient {
  background-image: linear-gradient(to top right, #d7d7f9, #fdc6dc);
}
.mysql-gradient {
  background-image: linear-gradient(to top right, #e48d0035, #00618a35);
}
.slack-gradient {
  background-image: linear-gradient(to top right, #e0156350, #6ecadc50);
}
.vue-gradient {
  background-image: linear-gradient(to top right, #34495f50, #3ab98250);
}
.copper-gradient {
  background-image: linear-gradient(to top right, #ffe9ee50, #4e2f6550);
}

.coda-gradient {
  background-image: linear-gradient(to top right, #f5d0ba50, #ed675250);
}

.google-gradient {
  background-image: linear-gradient(to top right, #ea433550, #4184f350);
}

.outfunnel-gradient {
  background-image: linear-gradient(to top right, #00b8aa50, #80808050);
}

.reply-gradient {
  background-image: linear-gradient(to top right, #1393e150, #005aff50);
}

.typeform-gradient {
  background-image: linear-gradient(to top right, #89c6be50, #33393f50);
}

.mailparser-gradient {
  background-image: linear-gradient(to top right, #fe470150, #27344050);
}

.dropbox-gradient {
  background-image: linear-gradient(to top right, #194ba050, #007ee550);
}

.docusign-gradient {
  background-image: linear-gradient(to top right, #007ee550, #194ba050);
}

.css-gradient {
  background-image: linear-gradient(to top right, #f1652950, #2965f150);
}

.node-gradient {
  background-image: linear-gradient(to top right, #83cd2950, #40413750);
}

.csharp-gradient {
  background-image: linear-gradient(to top right, #9d72d950, #68217a50);
}

.javascript-gradient {
  background-image: linear-gradient(to top right, #f5de1950, #9d72d950);
}

.slite-gradient {
  background-image: linear-gradient(to top right, #ffe697, #aae7ed);
}

.qbo-gradient {
  background-image: linear-gradient(to top right, #28a11650, #335ec050);
}

.postgres-gradient {
  background-image: linear-gradient(to top right, #31619250, #23212050);
}

.mongodb-gradient {
  background-image: linear-gradient(to top right, #c1bfbe50, #449945f0);
}

.docparser-gradient {
  background-image: linear-gradient(to top right, #297ce550, #27344050);
}

.webhooks-gradient {
  background-image: linear-gradient(to top right, #4b4b4b50, #c73a6350);
}

.ontask-gradient {
  background-image: linear-gradient(to top right, #9bc66950, #244c5950);
}

.integromat-gradient {
  background-image: linear-gradient(to top right, #2f8cbb50, #57575750);
}

.calendly-gradient {
  background-image: linear-gradient(to top right, #00a2ff50, #676b7650);
}

.design-gradient {
  background-image: linear-gradient(to top right, #edeafb, #fde3ef);
}

.body-white {
  background-color: #fafafa;
  border: 25px 25px 0 25px;
}

.salmon-highlight {
  background-color: #ffe1d5;
}

.top {
  background-image: linear-gradient(to bottom, #e5effd, #ffffff);
}

.light-blue-highlight {
  background-image: linear-gradient(to bottom, #e5effd, #ffffff);
}

.request {
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
