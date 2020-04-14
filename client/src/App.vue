<template>
  <div id="app">
    <a
      class="contact-us"
      href="https://airtable.com/shrCDJbvIga3NMRZS"
      target="blank"
      >Contact Us</a
    >
    <div id="nav">
      <div class="logo-box">
        <!-- <div class="logo" align="left">Ν▶</div> -->
        <div class="logo" align="left">
          <a href="/">
            <img
              class="logo-img"
              src="./assets/Narro Logo Clear.png"
              alt="Ν▶"
              align="left"
            />
          </a>
        </div>
        <div class="company-name">Narro Automation</div>
      </div>
      <Navbar>
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/case">Case Study</router-link>
        <router-link to="/about">About</router-link>
      </Navbar>
      <hr />
    </div>
    <router-view />
    <div class="spacer"></div>
    <FooterBar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  name: "app",
  components: {
    Navbar,
    FooterBar
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
}
#nav {
  border-bottom: thick;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 2em;
  text-decoration: none;
  background-color: #f3f8ff;
}

#nav a.router-link-exact-active {
  color: #136bf5;
  background-color: #fde3ef;
}

hr {
  margin: 0px;
}

.logo-img {
  height: 40px;
  color: #fd7622;
  font-weight: 900;
  font-size: 3rem;
  text-decoration-line: line-through;
  text-decoration-style: wavy;
  padding: 10px;
}
.logo-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 5%;
}
.company-name {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  color: #fd7622;
  width: 100px;
  font-weight: bold;
  padding-right: 5%;
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
</style>
