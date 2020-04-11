<template>
  <div class="home">
    <FrontPage
      headline="Time is your most valuable asset"
      subtext="Get back the time you spend on repetitive tasks and grow your business larger than you had ever imagined."
    />
    <Footer />
  </div>
</template>

<script>
import FrontPage from "@/components/FrontPage.vue";

export default {
  name: "home",
  components: {
    FrontPage
  }
};
</script>

<style scoped>
* {
  font-family: monospace;
}
footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 60px;
  width: 100%;
}
</style>
