<template>
  <div>
    <div class="saas">
      <div class="heading">
        <h1>Partner Services</h1>
        <div class="certifications">
          <img
            class="zapier-expert partner-item"
            src="@/assets/images/zapier-expert.png"
            alt="Zapier Expert"
          />
          <img
            class="airtable-expert partner-item"
            src="@/assets/images/airtable-expert.png"
            alt="Airtable Expert"
          />
          <img
            class="integromat-partner partner-item"
            src="@/assets/images/integromat-partner.png"
            alt="Integromat Partner"
          />
        </div>
      </div>
    </div>
    <SvcCard />
  </div>
</template>

<script>
// import Selected from "@/components/Selected.vue";
import SvcCard from "@/components/SvcCard.vue";
export default {
  name: "SaaS",
  components: {
    SvcCard
  }
};
</script>

<style scoped>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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

hr {
  color: #e6e6e6;
  width: 15%;
  margin: auto;
  align-content: center;
}

p {
  padding: 10px 8% 0 8%;
  text-align: left;
}

/* .top {
  padding-top: 10px;
} */

.list {
  text-align: left;
  max-width: 100%;
  padding: 0 40px;
}

.top {
  padding-top: 10px;
  /* background-image: linear-gradient(to bottom, #e5effd, #ffffff); */
}

.body-white {
  background-color: #fafafa;
  border: 25px 25px 0 25px;
}

a {
  text-decoration: none;
}

.services {
  color: #000000;
  padding: 15px;
  font-weight: 500;
  padding: 20px;
  width: 30%;
  margin: auto;
  /* box-shadow: 2px 2px 5px; */
}

.zapier {
  background-color: #fc470070;
  box-shadow: 1px 1px 5px;
}

.integromat {
  background-color: #2f8cbb70;
  box-shadow: 1px 1px 5px;
}
/* .services:hover, */
.integromat:hover,
.zapier:hover {
  box-shadow: 1px 1px 3px;
}

.search-more {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.search-links {
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 75%;
}
.contact {
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

p {
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 550;
}

.logo-padding {
  width: 115px;
  height: 115px;
  margin-top: 5px;
}

.svc-logo {
  width: 100px;
  height: 100px;
}

.name-logo {
  width: 120px;
  height: 120px;
  text-align: center;
  margin: auto;
}

.service-info {
  display: flex;
  flex: wrap;
  margin-top: 15px 0 15px 0;
  min-height: 140px;
}

.description {
  padding: 20px;
  width: 100%;
  margin: auto;
  font-size: 1.1rem;
}

.link-spacer {
  width: 10%;
}
.svc-name {
  font-size: 20px;
  max-height: 24px;
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
hr {
  color: #e6e6e6;
  width: 10%;
  margin: auto;
  align-content: center;
}

.list-item {
  border-width: 0 0 1px 0;
  border-style: inset;
}

.certifications {
  display: flex;
  margin: auto;
}
.integromat-partner {
  width: 15%;
  margin: auto;
}

.airtable-expert {
  width: 15%;
  margin: auto;
}

.zapier-expert {
  width: 15%;
  margin: auto;
}

.partner-item {
  border-style: none;
}
</style>
