<template>
  <div class="contact">
    <div class="body-white">
      <!-- <a href="https://airtable.com/shrfNLJSFZcoWlMdY" target="blank"
        >Contact Us</a
      > -->
      <div class="top">
        <h1>Request Information</h1>
      </div>
      <div class="blue-highlight">
        <iframe
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrfNLJSFZcoWlMdY?backgroundColor=purple"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="1550"
          style="background: transparent; border: 1px solid #ccc;"
        ></iframe>
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
  /* font-family: "Open Sans", Helvetica, arial, sans-serif; */
  display: block;
  box-sizing: border-box;
}
.top {
  background-image: linear-gradient(to bottom, #e5effd, #ffffff);
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
  margin: 0%;
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

h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: rgb(0, 0, 0);
  text-align: center;
}

h2 {
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  color: rgb(102, 102, 102);
  text-align: center;
}

h3 {
  color: #666666;
  margin-bottom: 0;
}

a h3 {
  color: #136bf5;
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
  padding: 25px 25px 0 25px;
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
