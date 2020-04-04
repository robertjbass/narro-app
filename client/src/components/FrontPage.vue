<template>
  <div class="front-page">
    <div class="body-white">
      <h1>{{ headline }}</h1>
      <h3>{{ subtext }}</h3>
      <div class="gradient-boxes">
        <div class="service-box orange-gradient">
          <ServiceCard service="Zapier" description="We love Zapier"
            ><img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/b99545e12d00d8351312f4b097ed7fb6/d06c9ebc/Zapier2.png"
              alt="Zapier"
          /></ServiceCard>
        </div>

        <div class="service-box purple-gradient">
          <ServiceCard service="Airtable" description="Airtable is a"
            ><img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/0a94432340e97ee06e44bcdeff3eb9c1/919a5240/pngfind_com-ucla-logo-png-421089.png"
              alt="Airtable"
          /></ServiceCard>
        </div>

        <div class="service-box orange-gradient">
          <ServiceCard service="1234" description="qbc"
            ><img class="logo-image" src="" alt=""
          /></ServiceCard>
        </div>

        <div class="service-box purple-gradient">
          <ServiceCard service="456" description="def"
            ><img class="logo-image" src="" alt=""
          /></ServiceCard>
        </div>
        <div class="service-box orange-gradient">
          <ServiceCard service="1234" description="qbc"
            ><img class="logo-image" src="" alt=""
          /></ServiceCard>
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
      a Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nostrum
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
import ServiceCard from "@/components/ServiceCard.vue";
export default {
  name: "front-page",
  components: {
    ServiceCard
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
.logo-image {
  align-items: center;
}
.logo {
  color: #fd7622;
}

.service-box {
  background-image: linear-gradient(to top right, #ffefce, #ffa38c);
  border-radius: 1rem;
  padding: 10px;
  border: 10px;
  /* margin: 0 5px 10px 5px; */
  margin: 0 1% 2% 1%;
  box-shadow: 5px 5px;
  width: 300px;
  max-width: 30%;
  flex-grow: 1;
  display: flex;
  text-align: center;
  justify-content: space-between;
}

.gradient-boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  justify-content: space-around;
}
.orange-gradient {
  background-image: linear-gradient(to top right, #ffefce, #ffa38c);
}

.purple-gradient {
  background-image: linear-gradient(to top right, #d7d7f9, #fdc6dc);
}

.body-white {
  background-color: #fafafa;
  padding: 25px;
}

.body-blue {
  background-color: #e4eefc;
  padding: 25px;
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

footer {
  order: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f1f4f5;
  border-top: 1px solid #f1f4f5;
  align-items: center;
}
/* .design-gradient {
    background-image: linear-gradient(to top right, #edeafb, #fde3ef);
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
.h3-background {
  background-color: #f2f2f2;
}
.subtext-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 40px 20px;
  width: 100%;
  background-color: #ffffff;
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

fake screenshot
.dots {
  background-color: #c4c4c4;
  border-radius: 50%;
  max-height: 2px;
  max-width: 2px;
}

fake-browser-bar
.browser {
  background-color: #e6e9eb;
  border-radius: 2em;
  max-height: 40%;
  max-width: 40%;
}

switch-turned-off
.switch-outer {
  background-color: #666666;
  border-radius: 20%;
  max-height: 50px;
  max-width: 100px;
}

placeholder-text
.text-box {
  color: #8c8c8c;
  border-color: #e6e6e6;
}

salmon
.learn-more {
background-color: #ffe1d5;
  padding: 40px 20px 50px;
  overflow: hidden;
}  */
</style>
