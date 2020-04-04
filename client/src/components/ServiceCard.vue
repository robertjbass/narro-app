<template>
  <div class="card-wrapper">
    <div class="service-banner">
      <h1>
        {{ service }}
      </h1>
      <div class="image-slot">
        <slot class="logo-image"></slot>
      </div>
    </div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "service-component",
  props: {
    service: String,
    description: String
  }
};
</script>

<style scoped>
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
}
.image-slot {
  height: auto;
  margin-bottom: 10%;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 
.description {
  position: relative;
  bottom: 0px;
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
.text-box {
  placeholder-text 
  color: #8c8c8c;
  border-color: #e6e6e6;
}
*/
</style>
