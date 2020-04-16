<template>
  <div class="card-wrap">
    <div
      class="image-slot"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <slot class="card-information"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "scv-card",
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

.logo-image {
  min-width: 100%;
  max-width: 100%;
}

.card-wrap {
  flex-grow: 1;
}
</style>
