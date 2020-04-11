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
      <iframe
        src="https://coda.io/embed/nxSSfSiV6R/_su0cw?hideSections=true"
        width="100%"
        height="3600"
        style="max-width: 100%;"
      >
        ></iframe
      >
      <!-- Ashland Development<br /><br />
      Call centers buy cheap computers in bulk. Accounts Receivable Management
      (ARM) software is highly specialized and it needs to work on 'Windows XP'
      era computers. Innovation has been slow because it is rooted in some very
      difficult and high risk areas. Payment Processing, Inventory Management,
      and Reporting.
      <br /><br />
      "We always hit a ceiling at a certain size. As the owner, I couldn't focus
      on growth. For every employee I hired, I had another several hours per
      week in administrative and management work."
      <br /><br />
      Areas of Focus and Challenges:<br /><br />
      * Database Administration - Meticulous records must be kept at all times
      for hundreds of thousands of records. Every interaction must be tracked. *
      Inventory Management Platform - Records are transferred between parties
      regularly and have a direct impact on financial and legal matters. *
      Specialized CRM - The information that the agents need don't match the
      structure of traditional CRMs, and the specialized CRMs created for this
      purpose don't integrate with modern services. * Reporting - Reporting
      takes place daily, weekly, semi-monthly and monthly. No standardized
      formatting is used. The same report needs to be generated multiple times
      with different layouts. * VoIP & Call Recording - When compliance is
      involved, call recording and consent for recording can't be overlooked. *
      Email Campaigns - Custom emails need to reach every consumer at several
      points in the process.<br /><br />
      The first step was to take inventory of the current systems in place
      <br /><br />When evaluating the workflows of the agency, it became clear
      that their struggle to grow was the result of the owner doing
      administrative tasks which could be automated with different software.
      <br /><br />Service Type Original Solution Old Annual Cost
      <br /><br />Database Administration MariaDB $0.00 <br /><br />Server
      Hosting Azure Windows VM $1,800.00 <br /><br />Inventory Management
      CollectionsMax Administrator $0.00 <br /><br />CRM CollectionsMax
      Professional $180.00 <br /><br />Reporting CollectionsMax Administrator
      $0.00 <br /><br />VoIP - (1 Line) FreePBX (White-label) $600.00
      <br /><br />Email - (1 User) GSuite $144.00 <br /><br />Website Wix
      $300.00 <br /><br />
      We examined more modern alternatives which had automation potential<br /><br />
      Service Type New Solution New Annual Cost<br /><br />
      Database MySQL $0.00<br /><br />
      Server Hosting RouterHosting Windows VM $360.00<br /><br />
      Inventory Management Airtable $0.00<br /><br />
      CRM Copper CRM $288.00<br /><br />
      Reporting Airtable $0.00<br /><br />
      VoIP - (1 Line) DialPad $180.00<br /><br />
      Email - (1 User) GSuite $144.00<br /><br />
      Website VueJS & Firebase $0.00<br /><br />

      We made a plan to automate the entire 'Administrative Assistant' position
      as well as some of the more repetitive tasks the owner was responsible
      for.
      <br /><br />Service Type Original Solution Old Annual Cost New Solution
      New Annual Cost <br /><br />Administrative Work Administrative Assistant
      $33,280.00 Automation $3,000.00 <br /><br />
      A tangible savings of $32,332.00 annually, the intangible cost is the
      countless hours of and repetitive tasks
      <br /><br />
      "An administrative assistant was nice, but I realized that it was a
      completely redundant position once we had the correct tools. I was working
      70+ hours a week and taking business home with me. I woke up at 3 AM
      several nights a week to manually run payments. Those 70 hour weeks turned
      into 15 hour weeks once we started automating."
      <br /><br />
      An extra $32k per year and at least 55 hours per week were saved
      <br /><br />
      "We had accepted that the industry was behind the times. We weren't
      industry leaders, we never considered that we had an opportunity to
      innovate."

      <br /><br />
      When support staff was out, the owner played the role of a secretary and
      'big-picture' work took the back burner
      <br /><br />
      "I didn't need a new debt collection platform, I needed to completely
      re-think the processes and goals. The world has changed over the past 20
      years but the software has stayed the same."
      <br /><br />
      Once new software was in place and the key integrations were handled, we
      tackled the 'quality of life matters'
      <br /><br />
      "My job became more hands off than I thought it could be. Everything is
      getting done on time and human error has largely been removed from the
      equation." -->

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
export default {
  name: "about"
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
  padding-top: 20px;
  margin: auto;
  text-align: left;
  font-family: monospace;
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
