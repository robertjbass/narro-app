<template>
  <div class="home">
    <!-- headline="Time is your most valuable asset" -->
    <!-- subtext="Get back the time you spend on repetitive tasks. Grow your business larger than you had ever imagined." -->
    <FrontPage
      headline="Time is your most valuable asset"
      subtext="Dramatically increase your productivity with automation"
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
  /* font-family: monospace; */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 60px;
  width: 100%;
}
</style>
