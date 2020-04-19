<template>
  <div id="app">
    <!-- <div class="nav-spacer"></div> -->
    <!-- <a
      class="contact-us"
      href="https://airtable.com/shrCDJbvIga3NMRZS"
      target="blank"
      >Contact Us</a
    > -->
    <!-- <div class="logo" align="left">Ν▶</div> -->
    <div id="nav">
      <div class="logo">
        <a href="/">
          <img
            class="logo-img"
            src="./assets/Narro Logo Clear.png"
            alt="Ν▶"
            align="left"
          />
        </a>
        <div class="logo-box"></div>
        <span class="narro-automation">
          <div class="company-name-orange">Narro</div>
          <div class="company-name-white">Automation</div>
        </span>
      </div>
      <Navbar>
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/case">Case Study</router-link>
        <router-link to="/about">FAQ</router-link>
        <router-link to="/saas">Partners</router-link>
      </Navbar>
      <hr />
    </div>
    <router-view />
    <a
      class="request"
      href="https://airtable.com/shrCDJbvIga3NMRZS"
      target="blank"
      >Request a Consult</a
    >
    <div class="spacer"></div>
    <FooterBar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterBar from "@/components/FooterBar.vue";
// import FrontPage from "@/components/FrontPage.vue";
// import Selected from "@/components/Selected.vue";
import { EventBus } from "./main";

export default {
  name: "app",
  components: {
    Navbar,
    FooterBar
    // FrontPage,
    // Selected
  },

  created() {
    EventBus.$on("changeSvc", data => {
      this.selectedService = data;
    });
  },
  data() {
    return {
      selectedService: this.selectedService
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  width: 100%;
  background-color: #ffffff;
  position: relative;
  top: 0;
  left: 0;
}
#nav {
  border-bottom: thick;
  max-width: 100%;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #666666;
  font-size: 2em;
  text-decoration: none;
  /* background-color: #99999950; */
}

#nav a.router-link-exact-active {
  color: #30bfe0;
  /* background-color: #e5effd50; */
  background-color: #99999950;
}

hr {
  margin: 0px;
}

.logo {
  margin: auto;
  margin-left: 0;
  align-content: space-between;
  height: 90px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
}

.logo-img {
  height: 40px;
  color: #fd7622;
  font-weight: 900;
  font-size: 3rem;
  text-decoration-line: line-through;
  text-decoration-style: wavy;
  padding: 10px;
  margin-left: 30px;
}
.logo-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5%;
  background-color: black;
  /* height: 100px; */
  vertical-align: middle;
  display: flex;
  margin: auto;
  /* position: fixed; */
  top: 0;
  left: 0;
}
/* .company-name {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  color: #fd7622;
  width: 100px;
  font-weight: bold;
  padding-right: 5%;
} */
/* .company-name-white, */
.company-name-orange {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  color: #fd7622;
  width: 100px;
  font-weight: bold;
  padding-right: 5%;
  /* text-align: center; */
  justify-content: center;
  /* margin: auto; */
}

.company-name-white {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  color: #ffffff;
  width: 100px;
  font-weight: bold;
  padding-right: 5%;
  justify-content: center;
}

footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.spacer {
  height: 50px;
}

.contact-us {
  text-decoration: none;
  color: darkorange;
  font-size: 20px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 100%;
  margin: auto;
  background-color: inherit;
}

.request {
  text-decoration: none;
  color: darkorange;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 250px;
  margin: auto;
  text-align: center;
  font-size: 30px;
}

.logo {
  margin: auto;
  justify-content: space-between;
  align-content: space-between;
}

.narro-automation {
  padding: 10px;
  vertical-align: middle;
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  font-size: 18px;
  margin: auto;
  margin-right: 30px;
}

.nav-spacer {
  height: 85px;
}
</style>
