<template>
  <div class="front-page">
    <div class="body-white">
      <h1>{{ headline }}</h1>
      <h3>{{ subtext }}</h3>
      <div class="gradient-box">
        <div class="purple-gradient">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ex
          quas alias cum repellat nobis, nemo modi suscipit molestiae? Quidem
          cupiditate atque dolores obcaecati harum dolorum laborum, inventore
          nobis voluptatibus!
        </div>
        <div class="orange-gradient">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          tempora quae saepe expedita, ut ipsum totam possimus dicta consectetur
          reiciendis ab quia, a labore, repellendus repellat aliquam officia
          maiores aliquid.
        </div>
      </div>
    </div>
    <div class="blue-highlight">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nostrum
      molestiae vitae expedita. Voluptatibus, incidunt? Tenetur sunt delectus
      velit voluptatibus quas magni ab. Mollitia aliquam velit optio cum
      provident voluptatem!
    </div>
    <div class="light-blue-highlight">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nostrum
      molestiae vitae expedita. Voluptatibus, incidunt? Tenetur sunt delectus
      velit voluptatibus quas magni ab. Mollitia aliquam velit optio cum
      provident voluptatem!
    </div>
    <div class="salmon-highlight">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam
      accusantium rerum odio autem nobis illum dolor vel molestias? Veniam quo
      quis voluptatem facilis laudantium error ex delectus nihil deleniti!
    </div>
    <div class="body-white">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, omnis
      nostrum! Sed quae similique illo voluptatum excepturi ratione at deserunt
      quaerat dolor, aliquid culpa iste alias facilis quia temporibus
      exercitationem?
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontPage",
  props: {
    headline: String,
    subtext: String
  }
};
</script>

<style scoped>
* {
  font-family: sans-serif;
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

.gradient-box {
  display: flex;
  margin: 10px;
}

footer {
  order: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f1f4f5;
  border-top: 1px solid #f1f4f5;
  align-items: center;
}

.body-white {
  background-color: #fafafa;
  padding: 25px;
}

.body-blue {
  background-color: #e4eefc;
  padding: 25px;
}

hr {
  color: #e6e6e6;
  margin: 0%;
}

a {
  color: #9bd5ff;
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

a h3 {
  color: #136bf5;
}

/* dark-orange-logo */
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

.text-box {
  /* placeholder-text */
  color: #8c8c8c;
  border-color: #e6e6e6;
}

.h3-background {
  background-color: #f2f2f2;
}

.orange-gradient {
  background-image: linear-gradient(to top right, #ffefce, #ffa38c);
  border-radius: 1rem;
  padding: 10px;
  border: 10px;
  margin-left: 10px;
  box-shadow: 5px 5px;
}

.purple-gradient {
  background-image: linear-gradient(to top right, #d7d7f9, #fdc6dc);
  border-radius: 1rem;
  padding: 10px;
  border: 10px;
  margin-right: 10px;
  box-shadow: 5px 5px;
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
  background-color: #e5effd;
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
