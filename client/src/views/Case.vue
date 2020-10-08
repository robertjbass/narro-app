<template>
  <div class="case-study">
    <div class="body-white">
      <div class="top-md">
        <CaseStudy />
        <!-- <h1>Automation Information</h1>
        <h2>Your automation partner</h2> -->
      </div>
    </div>
    <!-- <h3>Case Study: Ashland Development<br /></h3> -->
    <!-- <div class="certifications">
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
    </div> -->

    <div class="content">
      <br />

      <div class="blue-highlight">
        <!-- <hr /> -->

        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
import CaseStudy from "@/components/CaseStudy.vue";
export default {
  name: "case",
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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

/* .top {
  background-image: linear-gradient(to bottom, #e5effd, #ffffff);
} */

.content {
  color: #666666;
  font-size: 20px;
  font-weight: 900;
  margin: auto;
  text-align: left;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
  font-weight: 400;
  display: flex;
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

.request {
  font-size: 30px;
}

.contact {
  padding-left: 40px;
}

.contact-title {
  width: 150px;
}

.contact-info {
  display: inline-block;
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
