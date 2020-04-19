<template>
  <div class="front-page">
    <div class="headline">
      <!-- <div class="top"> -->
      <h1>{{ headline }}</h1>
      <h2>{{ subtext }}</h2>
      <div class="blue-highlight"></div>
      <div class="filler">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        esse, deleniti culpa dolores sed id soluta voluptate. Optio amet est
        blanditiis architecto debitis quidem ad eaque molestiae quam, quo
        explicabo delectus perspiciatis tenetur minima fugit aperiam praesentium
        porro, neque excepturi magnam. Exercitationem quae laborum velit
        delectus at alias atque iste quam nostrum impedit. Enim architecto fuga
        est esse nisi iure quia sed expedita ab eaque fugit, tempora facere,
        odio vel facilis ex neque? Alias dignissimos vitae deleniti cumque, sit
        odio tempore unde, quam minima rerum in accusantium voluptas commodi
        itaque consequuntur harum quisquam iusto enim. Cum, optio voluptatibus.
        Saepe, non quos ab quibusdam quisquam dicta, unde ea iusto quis ut est
        molestiae recusandae repellendus voluptatum magni eaque illo
        consequuntur inventore suscipit labore dolorum! Recusandae perspiciatis,
        in nulla corporis odio aliquid obcaecati aut voluptas eum dolor quasi
        officiis? Tempore, quis repellendus sed deserunt a tempora temporibus
        doloribus id molestias nisi. Aperiam nesciunt sint ex ea recusandae
        natus cum eius. Doloribus inventore recusandae fuga sunt vero rerum
        necessitatibus veniam eius facere laborum dolores beatae voluptate animi
        molestias, ducimus officia quaerat, ipsa nobis accusantium accusamus
        maiores tempore nesciunt laudantium. Pariatur doloribus, eius aspernatur
        unde, sit enim hic architecto mollitia assumenda, voluptatibus facilis
        quis labore accusantium soluta. Incidunt totam natus nisi suscipit saepe
        consequatur aliquid mollitia debitis sequi quo, nostrum tenetur ut sunt
        corrupti corporis perferendis provident nemo velit! Non, officiis enim
        porro similique animi sequi error nesciunt, adipisci iusto libero
        voluptates suscipit perferendis natus aperiam consequuntur excepturi ad
        facere! Numquam neque eaque sequi totam adipisci? Recusandae suscipit
        quae sed sit doloremque unde rerum, totam non doloribus odio a sint
        assumenda ullam amet laudantium excepturi quibusdam voluptatum
        distinctio accusantium nostrum harum. Voluptatibus nihil odit possimus
        consectetur aliquid eos quaerat exercitationem aliquam voluptates error
        sapiente adipisci, officia voluptas fugit iusto obcaecati quos accusamus
        maxime voluptatem delectus dolor quam iste suscipit. Delectus sint saepe
        nobis, dolore incidunt, officiis inventore accusamus dignissimos qui
        natus tempore quasi non a nesciunt voluptatibus excepturi numquam vel
        quaerat recusandae autem deleniti. Reiciendis optio accusamus aliquid
        sint alias incidunt et tempora rem ut excepturi, asperiores molestias
        voluptates nesciunt a nulla quisquam sequi. Optio modi praesentium id
        officia corporis earum voluptatum temporibus eveniet. Assumenda
        quibusdam recusandae, quas nam id in ipsa sed ab, ad, tenetur fuga
        sapiente asperiores? Magnam, id? Ea quasi veritatis quos voluptates
        aspernatur! Est fuga, quidem obcaecati repudiandae aut blanditiis
        sapiente dolores. Vel facere beatae minus libero consequuntur illo sit
        harum, quo magni unde! Asperiores perspiciatis optio voluptates nobis
        dolor non minima consectetur deserunt nostrum cum, facilis ut minus
        temporibus alias repellendus. Ducimus, architecto dolores sed enim sit
        molestiae facere cupiditate qui fugiat. Dolorum, incidunt maxime. Nemo
        dolorem animi dolores quam dignissimos tenetur aliquid, enim odit saepe
        laudantium? Sapiente expedita harum incidunt error. Repellendus velit et
        adipisci necessitatibus delectus repellat, sit enim molestiae explicabo.
        Minus consequuntur molestias similique quod quas dolorem architecto
        alias non, voluptates error, vitae animi reiciendis et veniam tenetur
        dicta dolorum, cupiditate inventore minima impedit nesciunt esse. Saepe,
        cum quis, quisquam, asperiores explicabo nisi dolorum eaque consequuntur
        temporibus quasi amet eligendi fugit dignissimos rem quae exercitationem
        ea? Numquam tempora natus quidem! Dignissimos asperiores consequuntur
        non harum repudiandae id laborum sunt rerum ratione veritatis iste,
        delectus error repellat! Quisquam recusandae dolor deserunt quam soluta
        ratione? Fugit eum delectus corporis sint optio architecto, corrupti
        omnis provident, eveniet in quo veritatis accusamus sed soluta molestias
        nulla! Corrupti nam nulla minima atque hic veritatis vel reprehenderit
        error nemo? Rerum a laudantium, facilis enim fugiat voluptatem, tenetur
        quia quos error incidunt fugit sed amet voluptatibus rem blanditiis nisi
        facere perferendis maxime assumenda eum? Placeat nostrum quia quas
        molestiae commodi numquam totam!
      </div>
      <!-- </div> -->
    </div>
    <!-- <hr /> --><br /><br />
  </div>
</template>

<script>
// import ServiceCard from "@/components/ServiceCard.vue";
// import Selected from "@/components/Selected.vue";

import { EventBus } from "../main";

export default {
  name: "front-page",
  props: {
    headline: {
      type: String
    },
    subtext: {
      type: String
    },
    selectedService: {
      type: String
    }
  },
  components: {
    // ServiceCard,
    // Selected
  },

  methods: {
    changeService(svc) {
      this.selectedService = svc;
      EventBus.$emit("changeSvc", this.selectedService);
      return this.selectedService;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: block;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: darkorange;
  font-size: 20px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 120px;
  margin: auto;
  text-align: right;
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
  width: 15%;
  margin: auto;
  align-content: center;
}

a.h3 {
  color: #136bf5;
}

h1 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-top: 10px;
  line-height: 50px;
  font-weight: 525;
}

h2 {
  line-height: 32px;
  color: #333333;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  font-weight: 525;
}

h3 {
  line-height: 24px;
  color: #666666;
  padding-left: 20px;
  padding-right: 20px;
}

h4 {
  line-height: 24px;
  color: #66666690;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
}

.things {
  text-decoration: none;
  color: #666666;
  font-size: 30px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  margin: auto;
  text-align: center;
  padding-top: 15px;
}

.logo {
  color: #fd7622;
}

.small-logo-image {
  width: 20%;
  margin: auto;
}

.medium-logo-image {
  width: 60%;
  padding: 0px;
  margin: auto;
}

.image-wrap {
  width: 80%;
  align-content: center;
  text-align: center;
  justify-content: space-evenly;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.integromat-partner-logo {
  width: 40%;
  padding: 0px;
  margin: auto;
}
.integromat-partner {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.image-slot {
  justify-content: space-evenly;
}

.service-box {
  border-radius: 1rem;
  border: 0px;
  margin: 0 1% 2% 1%;
  min-width: 350px;
  max-width: 30%;
  flex-grow: 1;
  display: flex;
  text-align: center;
  justify-content: space-between;
}

.service-box:hover {
  border-radius: 1rem;
  border: 0px;
  margin: 0 1% 2% 1%;
  min-width: 350px;
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
  padding: 30px 30px 0 30px;
  color: white;
}

.gradient-boxes:hover {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  padding: 30px 30px 0 30px;
  color: black;
}

.design-gradient {
  transition: all 0.2s ease-in-out;
  background-image: linear-gradient(to top right, #edeafb, #fde3ef);
}

.headline {
  /* background-color: #fafafa; */
  border: 25px 25px 0 25px;
}

.top {
  padding-top: 10px;
  /* background-image: linear-gradient(to bottom, #e5effd, #ffffff); */
}

.light-blue-highlight {
  background-color: #f3f8ff;
}

.request {
  text-decoration: none;
  color: darkorange;
  font-size: 20px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 250px;
  margin: auto;
  text-align: center;
  font-size: 30px;
}

.filler {
  font-size: 1.2em;
  text-align: left;
  margin: auto;
  padding: 0 30px;
  padding: 10px 8% 0 8%;
  text-align: left;
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
</style>
