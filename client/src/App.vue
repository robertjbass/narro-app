<template>
  <div id="app">
    <div id="nav">
      <div class="logo-box">
        <!-- <div class="logo" align="left">Ν▶</div> -->
        <div class="logo" align="left">
          <img
            class="logo-img"
            src="./assets/Narro Logo Clear.png"
            alt="Ν▶"
            align="left"
          />
        </div>
        <div class="company-name">Narro Automation</div>
      </div>
      <Navbar>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/tbd">Other</router-link>
      </Navbar>
      <hr />
    </div>
    <router-view />
    <div class="spacer"></div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
}
#nav {
  /* padding: 30px 0px 0px 0px; */
  border-bottom: thick;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 2em;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #136bf5;
  background-color: #f2f2f2;
}

hr {
  margin: 0px;
}
/* .logo {
  color: #fd7622;
  font-weight: 900;
  font-size: 3rem;
  text-decoration-line: line-through;
  text-decoration-style: wavy;
} */
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
</style>
