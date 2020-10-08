<template>
  <div class="toolbar">
    <!-- <slot> </slot> -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
* {
  font-size: 10px;
  font-family: sans-serif;
  font-family: "Open Sans", Helvetica, arial, sans-serif;
  color: -internal-root-color;
  box-sizing: border-box;
}

a {
  color: #30bfe0;
}

.toolbar {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: unset;
}

hr {
  color: #e6e6e6;
}

h1 {
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: rgb(0, 0, 0);
  text-align: center;
}

h2 {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  color: rgb(102, 102, 102);
  text-align: center;
}

h3 {
  color: #666666;
}

a,
h3 {
  color: #333333;
}

.logo {
  color: #fd7622;
}

.btn-blue {
  background-color: #3b5999;
  color: #ffffff;
}
.btn-black {
  background-color: #000000;
  color: #ffffff;
}

.btn-orange {
  background-color: #fc4700;
  color: #ffffff;
}

.body-section-white {
  background-color: #fde3ef;
}

.body-section-blue {
  background-color: #f3f8ff;
}

.text-box {
  color: #8c8c8c;
  border-color: #e6e6e6;
}

.h3-background {
  background-color: #f2f2f2;
}

.orange-gradient {
  background-image: linear-gradient(to top right, #ffefce, #ffa38c);
}

.purple-gradient {
  background-image: linear-gradient(to top right, #d7d7f9, #fdc6dc);
}

.design-gradient {
  background-image: linear-gradient(to top right, #edeafb, #fde3ef);
}

.subtext-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 40px 20px;
  width: 100%;
  background-color: #ffffff;
}

.salmon-highlight {
  background-color: #ffe1d5;
}

.blue-highlight {
  background-color: #f6f6f6;
}

.light-blue-highlight {
  background-color: #f3f8ff;
}

.orange-app {
  background-color: #e53000;
}

.blue-app {
  background-color: #2755c1;
}

.gray-app {
  background-color: white;
  color: #cccccc;
}

.green-app {
  background-color: #62d497;
}

.fake-app {
  height: 60px;
  width: 60px;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  border-color: #666666;
}

/* fake screenshot */
.dots {
  background-color: #c4c4c4;
  border-radius: 50%;
  max-height: 2px;
  max-width: 2px;
}

/* fake-browser-bar */
.browser {
  background-color: #e6e9eb;
  border-radius: 2em;
  max-height: 40%;
  max-width: 40%;
}

/* switch-turned-off */
.switch-outer {
  background-color: #666666;
  border-radius: 20%;
  max-height: 50px;
  max-width: 100px;
}

/* section header */
.learn-more {
  /* salmon */
  background-color: #ffe1d5;
  padding: 40px 20px 50px;
  overflow: hidden;
}
</style>
