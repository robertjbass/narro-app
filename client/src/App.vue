<template>
  <div id="app">
    <!-- <ModalBackground v-onclick="(modalOn = false)" /> -->
    <!-- <div class="nav-spacer"></div> -->
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
    <h2 class="call-to-action">
      Ready to streamline your business?
    </h2>
    <br />
    <a href="https://airtable.com/shrCDJbvIga3NMRZS" target="blank">
      <div class="contact-us">
        Contact Us
      </div>
    </a>
    <br />
    <a href="https://airtable.com/shrCDJbvIga3NMRZS" target="blank">
      <img
        class="request"
        src="https://dl.airtable.com/.attachments/30ca4e36abbae0daca2f01097d4e95cb/288d03f7/envelope.svg"
        alt="Contact us"
      />
    </a>
    <div class="spacer" />
    <FooterBar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterBar from "@/components/FooterBar.vue";
// import ModalBackground from "@/components/ModalBackground.vue";
import { EventBus } from "./main";

export default {
  name: "app",
  components: {
    Navbar,
    FooterBar
    // ModalBackground
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
}

#nav a.router-link-exact-active {
  color: #30bfe0;
  background-color: #99999950;
}

hr {
  margin: 0px;
}

a {
  text-decoration: none;
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
  vertical-align: middle;
  display: flex;
  margin: auto;
  top: 0;
  left: 0;
}
.company-name-orange {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  color: #fd7622;
  width: 100px;
  font-weight: bold;
  padding-right: 5%;
  justify-content: center;
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
  height: 60px;
  width: 100%;
  margin: auto;
}

.spacer-small {
  height: 30px;
}

.spacer {
  height: 60px;
}

.request {
  text-decoration: none;
  border-radius: 1rem;
  background-color: #d8e9f2;
  width: 30px;
  height: 20px;
  padding: 5px;
  justify-content: center;
  color: #ffffff;
  position: fixed;
  bottom: 65px;
  right: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #666666;
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

.contact-us {
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
</style>
