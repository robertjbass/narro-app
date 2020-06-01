<template>
  <div class="front-page">
    <div class="headline">
      <h1>{{ headline }}</h1>
      <h2>{{ subtext }}</h2>
      <div class="blue-highlight"></div>
      <div class="spacer" />
      <div class="certifications">
        <div class="certification  partner-item">
          <div class="zapier-badge">
            <a
              href="https://zapier.com/experts/?utm_source=Expert%20Program%20Referral&utm_medium=Referral&utm_campaign=Experts%20Badge"
              ><img
                src="https://cl.ly/2H1B2a3s0A26/3a315ef0851771fa6ed346823cabb7110ec74369.png"
                alt="Zapier Certified Expert"
                height="150"
                width="150"
            /></a>
          </div>
        </div>
        <div class="certification partner-item">
          <img
            class="airtable-expert"
            src="@/assets/images/airtable-expert.png"
            alt="Airtable Expert"
          />
        </div>
        <div class="certification partner-item">
          <a href="https://www.integromat.com/?pc=narro">
            <img
              class="integromat-partner"
              src="@/assets/images/integromat-partner.png"
              alt="Integromat Partner"
          /></a>
        </div>
      </div>
      <div class="spacer" />
      <div class="what-we-do">
        <h2 class="bold-heading">What we do</h2>
        <div class="top-paragraph">
          Every business is unique, software that you use isn't. We create
          custom solutions to make your business more effective. We leverage
          automation to make you more efficient, productive, streamlined and
          organized.
        </div>
        <br />
        <a href="/services">
          <span class="see-more">See more technologies we love ‣</span></a
        >
      </div>
      <!-- <div class="spacer" /> -->
      <div class="service-type">
        <!-- <h2 class="">Automation</h2> -->
        <div class="svc-logos">
          <div class="automation">
            <h2 class="">Automation</h2>
            <div class="automation-tools">
              <img
                class="svc-logo zapier"
                src="https://dl.airtable.com/.attachments/b99545e12d00d8351312f4b097ed7fb6/d06c9ebc/Zapier2.png"
                alt="Zapier"
              />
              <img
                class="svc-logo integromat"
                src="https://dl.airtable.com/.attachments/61a1a082ee33005a717c0567a2dee392/59da9922/integromat.png"
                alt="Integromat"
              />
            </div>
          </div>
        </div>
        <div class="mid-paragraph">
          Automation platforms are a great way to connect services. We have
          built custom workflows to connect numerous popular services. We
          monitor the automations for errors and downtime and create custom
          connectors. Never waste your time debugging or learning custom API
          integrations. We build secure, reliable, market-ready solutions.
        </div>
      </div>
      <div class="service-type-2">
        <div class="svc-logos">
          <div class="database">
            <h2 class="">Database</h2>
            <div class="database-tools">
              <img
                class="svc-logo airtable"
                src="https://dl.airtable.com/.attachments/e15f4feec060f8f125eab7d48112539e/3a922897/airtablebannerlogo.png"
                alt="Airtable"
              />
              <img
                class="svc-logo mysql"
                src="https://dl.airtable.com/.attachments/cb6c848d568cf411ca022315e187f09d/3b1d1612/pngwave.png"
                alt="MySQL"
              />
            </div>
          </div>
        </div>
        <div class="mid-paragraph">
          Any company needs a database. A database is the back-end of an
          application where the information is stored. Data helps drive
          decisions and it’s important to keep it accurate and clean. We are
          database experts. If you need custom reporting, data-based automation,
          a custom CRM, or clean customer records we can create a long-term
          database solution for your business.
        </div>
      </div>
      <div class="spacer" />
      <div class="service-type">
        <div class="svc-logos">
          <div class="communication">
            <h2 class="">Communication</h2>
            <div class="communication-tools">
              <img
                class="svc-logo gsuite"
                src="https://dl.airtable.com/.attachments/5e82630b4bfd03e62e1e9090f15bc8b9/0f58805f/GSuiteServices.png"
                alt="GSuite"
              />
              <img
                class="svc-logo slack"
                src="https://dl.airtable.com/.attachments/bc7ada5a73958df814a21060aa39b6b6/1f31f91e/SlackBanner.png"
                alt="Slack"
              />
            </div>
          </div>
          <div class="productivity">
            <h2 class="">Productivity</h2>
            <div class="productivity-tools">
              <img
                class="svc-logo copper"
                src="https://dl.airtable.com/.attachments/18fa778c0a3fe6441849a022311f75d6/30dd9538/CopperBanner1.png"
                alt="Copper"
              />
              <img
                class="svc-logo calendly"
                src="https://dl.airtable.com/.attachments/8bb20e24ac5275e083941280e7d505f7/c156a58b/calendly-logo1.png"
                alt="Calendly"
              />
            </div>
          </div>
        </div>
        <div class="mid-paragraph">
          Too much time is wasted due to poor communication. By leveraging
          communication and productivity tools, you can keep your entire team
          informed and active. We can help you build or implement a CRM, create
          communication channels and reminders, scheduling solutions and
          workflows to make management efficient and effective. Many services
          are robust and powerful, but only when they’re being used correctly.
          We can audit your workflows to improve communication and productivity
          across your entire company.
        </div>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
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

/* a {
  text-decoration: none;
  color: darkorange;
  font-size: 20px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 120px;
  margin: auto;
  text-align: right;
} */

a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
  margin-top: 10px;
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
  /* padding: 0px; */
  margin: auto;
  padding-top: 20px;
}
.integromat-partner {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  padding-top: 35px;
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

/* .request {
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
} */

/* .request {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 250px;
  margin: auto;
  text-align: center;
  font-size: 30px;
} */

.top-paragraph {
  font-size: 1.3em;
  margin: auto;
  padding: 20px 15% 0 15%;
  padding: 0 25%;
  text-align: center;
}

.mid-paragraph {
  font-size: 1.3em;
  text-align: center;
  margin: auto;
  padding: 0 25%;
  padding: 20px 200px 0 200px;
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
.svc-logos {
  display: flex;
  margin: auto;
  padding: 0 30px 30px 30px;
  justify-content: space-evenly;
  /* max-height: 200px; */
}
.svc-logo {
  height: auto;
  /* width: 30%; */
  margin: auto;
}

.zapier {
  width: 20%;
}

.airtable {
  width: 20%;
}

.integromat {
  width: 20%;
}

.mysql {
  width: 15%;
}

.copper {
  width: 40%;
}

.calendly {
  width: 40%;
}

.slack {
  width: 25%;
}

.gsuite {
  width: 20%;
}

.automation {
  justify-content: space-around;
  margin: auto;
}

.database {
  justify-content: space-around;
  margin: auto;
}

.communication {
  justify-content: space-around;
  margin: auto;
}

.productivity {
  justify-content: space-around;
  margin: auto;
}

.automation-tools {
  display: flex;
  height: auto;
}

.database-tools {
  display: flex;
  height: auto;
}

.communication-tools {
  display: flex;
  height: auto;
}

.productivity-tools {
  display: flex;
  height: auto;
}

.spacer {
  height: 40px;
}

.bold-heading {
  /* font-weight: bold; */
  color: #ffffff;
}

.rethink {
  margin-bottom: 0;
}

.what-we-do {
  background-color: #33333390;
  color: whitesmoke;
  padding: 20px 0 15px 0;
}

.service-type {
  background-color: #f2f6fc;
  color: #999999;
  padding: 20px 0 40px 0;
}

.service-type-2 {
  background-color: #ffffff;
  color: #999999;
  padding: 20px 0 40px 0;
}

.certifications {
  display: flex;
  margin: auto;
  justify-content: space-around;
}

.integromat-partner {
  width: 70%;
  margin: auto;
  align-content: space-around;
  max-height: 100px;
}

.airtable-expert {
  width: 60%;
  margin: auto;
  align-content: space-around;
  max-height: 100px;
}

.zapier-expert {
  width: 55%;
  margin: auto;
  align-content: space-around;
  max-height: 100px;
}

.partner-item {
  border-style: solid;
  display: flex;
  height: auto;
  width: 250px;
  max-width: 50%;
  border-radius: 1rem;
  background-color: #f2f6fc;
  border-width: 1px;
}
.see-more {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  margin: auto;
  justify-content: center;
  align-content: center;
  color: white;
  width: fit-content;
  border-radius: 2rem;
  padding: 5px 10px;
  background-color: #06548c;
  box-shadow: 1px 1px 5px #666666;
  text-decoration: none;
}
.certification {
  height: 150px;
  margin: auto;
}

.zapier-badge {
  margin: auto;
}
</style>
