<template>
  <Footer class="footer">
    <div class="footer-icons">
      <div class="icon-box">
        <a href="https://www.github.com/716green/" target="blank">
          <img
            class="icon"
            v-bind:src="
              'https://dl.airtable.com/.attachments/049a1e17e8647dce1b889edec4de09a0/c105eaa5/github.svg'
            "
            alt="github"
          />
          <div class="logo-font">
            Github
          </div>
        </a>
      </div>
      <div class="icon-box">
        <a href="https://www.youtube.com/" target="blank">
          <img
            class="icon"
            v-bind:src="
              'https://dl.airtable.com/.attachments/30059d60b72e1395e7f749f46fb3fa12/a5dad7db/youtube.svg'
            "
            alt="youtube"
          />
          <div class="logo-font">
            YouTube
          </div>
        </a>
      </div>
      <div class="icon-box">
        <a href="https://www.coda.io/@narro/" target="blank">
          <img
            class="icon"
            v-bind:src="
              'https://dl.airtable.com/.attachments/edcab0d671d326f32ae4cea32c9da947/06cb8f4b/codebracket.svg'
            "
            alt="coda"
          />
          <div class="logo-font">
            Coda
          </div>
        </a>
      </div>
    </div>
  </Footer>
</template>

<script>
export default {
  name: "FooterBar",
  data() {
    return {};
  }
};
</script>

<style scoped>
* {
  font-weight: 100;
  font-size: 1em;
}

a {
  color: #ffffff;
  text-decoration: none;
}

h1 {
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: rgb(0, 0, 0);
  text-align: center;
  max-width: 100%;
}

.logo {
  color: #fd7622;
}

.footer {
  background-color: #333333;
}

.footer-icons {
  display: flex;
  justify-content: space-around;
  padding: 8px;
  margin: auto;
  vertical-align: middle;
}

.icon {
  height: 20px;
  filter: invert(90%) sepia(0%) saturate(550%) hue-rotate(20deg) brightness(95%)
    contrast(100%);
}

.icon-box {
  display: flex;
  max-width: 50px;
  max-height: 50px;
  padding-bottom: 5px 0;
  font-weight: 300;
}

.logo-font {
  color: whitesmoke;
}
</style>
