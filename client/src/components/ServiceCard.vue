<template>
  <div
    class="card-wrapper service-banner image-slot"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <slot class="logo-image"></slot>
  </div>
</template>

<script>
export default {
  name: "service-component",
  props: {
    service: String,
    description: String
  },
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
* {
  font-family: "Open Sans", Helvetica, arial, sans-serif;
  display: block;
  box-sizing: border-box;
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
  margin: 0%;
}
a {
  color: #9bd5ff;
}
h1 {
  font-family: "Indie Flower", cursive;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: rgb(0, 0, 0);
  text-align: center;
}
h2 {
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  color: rgb(102, 102, 102);
  text-align: center;
}
h3 {
  color: #666666;
}
a h3 {
  color: #136bf5;
}

/* dark-orange-logo */
.logo {
  color: #fd7622;
}
.h3-background {
  background-color: #f2f2f2;
}
.design-gradient {
  background-image: linear-gradient(to top right, #edeafb, #fde3ef);
}
.logo-image {
  min-width: 100%;
  max-width: 100%;
  /* max-height: 140px; */
}
.image-slot {
  width: 100%;
  height: auto;

  /* margin-bottom: 5px; */
}

.service-banner {
  justify-content: center;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  padding: 20px;
  vertical-align: middle;
}

.description {
  /* font-family: "Indie Flower", cursive; */
  position: relative;
  bottom: 0px;
  text-align: left;
  font-size: 14px;
  color: inherit;
  font-family: monospace;
}
</style>
