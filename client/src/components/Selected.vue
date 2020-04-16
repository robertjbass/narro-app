<template>
  <div>
    <!-- <h3>This is the Selected.vue component</h3> -->
    <!-- <div class="card-wrap card"> -->
    <!-- class="outer-wrap" -->
    <div>
      <svcCard>
        <div class="outer-wrap">
          <div class="services" v-for="service in services" :key="service.name">
            <!-- v-if="service.description" -->
            <div v-if="!service.hidden" :key="service.name">
              <div class="inner-wrap">
                <div class="banner-wrap top">
                  <img class="banner" :src="service.bannerUrl" />
                </div>
                <div class="bottom">
                  <div class="left">
                    <div class="svc-name">{{ service.name }}</div>
                    <img class="logo" :src="service.logoUrl" />
                  </div>
                  <div class="right">
                    <div class="description">{{ service.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </svcCard>

      <!-- <svcCard>
        <div class="outer-wrap">
          <div class="services" v-for="service in services" :key="service.name">
             v-if="service.description" 
            <div v-if="!hidden" :key="service.name">
              <div class="inner-wrap">
                <div class="left">
                  <div class="svc-name">{{ service.name }}</div>
                  <img class="logo" :src="service.logoUrl" />
                </div>
                <div class="right">
                  <div class="banner-wrap">
                    <img class="banner" :src="service.bannerUrl" />
                  </div>
                  <div class="description">{{ service.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </svcCard> -->
    </div>
  </div>
</template>
<script>
import SvcCard from "@/components/SvcCard.vue";
import serviceList from "@/assets/json/services.json";
export default {
  name: "Selected",
  props: {
    // headline: {
    //   type: String
    // },
    // subtext: {
    //   type: String
    // }
  },
  data: function() {
    return {
      activeService: "airtable"
    };
  },
  methods: {
    abc(def) {
      def = "ghi";
      return def;
    }
  },
  components: {
    SvcCard
  },
  computed: {
    services() {
      return serviceList.services.map(services => {
        return services;
      });
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* a {
  text-decoration: none;
  color: darkorange;
  font-size: 20px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 120px;
  margin: auto;
  text-align: right;
} */

/* .image-slot {
  justify-content: space-evenly;
} */

/* .service-box {
  border-radius: 1rem;
  border: 0px;
  margin: 0 1% 2% 1%;
  min-width: 350px;
  max-width: 30%;
  flex-grow: 1;
  display: flex;
  text-align: center;
  justify-content: space-between;
} */

/* .zapier-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}

.zapier-gradient:hover {
  background-color: #ffefce;
}

.airtable-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.airtable-gradient:hover {
  background-color: #fdc6dc;
}

.mysql-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.mysql-gradient:hover {
  background-color: #00618a35;
}

.slack-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.slack-gradient:hover {
  background-color: #e0156350;
}

.vue-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.vue-gradient:hover {
  background-color: #34495f50;
}

.copper-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.copper-gradient:hover {
  background-color: #4e2f6550;
}

.coda-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.coda-gradient:hover {
  background-color: #f5d0ba50;
}

.google-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.google-gradient:hover {
  background-color: #ea433550;
}

.outfunnel-gradient {
  background-color: #ffffff;
}
.outfunnel-gradient:hover {
  background-color: #00b8aa50;
}

.reply-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.reply-gradient:hover {
  background-color: #005aff50;
}

.typeform-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.typeform-gradient:hover {
  background-color: #89c6be50;
}

.mailparser-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.mailparser-gradient:hover {
  background-color: #fe470150;
}

.dropbox-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.dropbox-gradient:hover {
  background-color: #194ba050;
}

.docusign-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.docusign-gradient:hover {
  background-color: #007ee550;
}

.css-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.css-gradient:hover {
  background-color: #f1652950;
}

.node-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.node-gradient:hover {
  background-color: #83cd2950;
}

.csharp-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.csharp-gradient:hover {
  background-color: #9d72d950;
}

.javascript-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.javascript-gradient:hover {
  background-color: #f5de1950;
}

.slite-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.slite-gradient:hover {
  background-color: #08145250;
}

.qbo-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.qbo-gradient:hover {
  background-color: #28a11650;
}

.postgres-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.postgres-gradient:hover {
  background-color: #31619250;
}

.mongodb-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.mongodb-gradient:hover {
  background-color: #4da84b50;
}

.docparser-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.docparser-gradient:hover {
  background-color: #297ce550;
}

.webhooks-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.webhooks-gradient:hover {
  background-color: #c73a6350;
}

.ontask-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.ontask-gradient:hover {
  background-color: #9bc66950;
}

.integromat-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.integromat-gradient:hover {
  background-color: #2f8cbb50;
}

.calendly-gradient {
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
}
.calendly-gradient:hover {
  background-color: #676b7650;
} */

/* .body-white {
  background-color: #fafafa;
  border: 25px 25px 0 25px;
} */

/* .top {
  padding-top: 10px;
  background-image: linear-gradient(to bottom, #e5effd, #ffffff);
} */

/* .request {
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
} */

/* .integromat:hover,
.zapier:hover {
  box-shadow: 1px 1px 3px;
} */

/* h1 {
  font-size: 36px;
  color: #000000;
  text-align: center;
  margin-top: 0;
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
} */

/* p {
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 550;
} */

.outer-wrap {
  display: flex;
  flex-wrap: wrap;
  border-radius: 1rem;
  border: 0px;
  margin: 0 1% 2% 1%;
  min-width: 220px;
  max-width: 100%;
  /* max-width: 220px; */
  flex-grow: 1;
  text-align: center;
  justify-content: space-around;
}

.inner-wrap {
  border-style: solid;
  padding: 10px;
  display: flex;
  padding: 0px;
  width: 400px;
  margin: 0 0 10px 0;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}

.left {
  align-content: space-between;
  width: 30%;
  margin: auto;
}

.svc-name {
  font-weight: bold;
  margin: auto;
  padding-bottom: 10px;
}

.logo {
  width: 60%;
  height: auto;
  margin: auto;
}

.right {
  width: 70%;
  margin: auto;
}
.top {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
}

.banner-wrap {
  margin: auto;
  max-width: 100%;
  min-width: 50%;
  object-fit: contain;
  max-height: 100%;
  width: 400px;
}

.banner {
  max-height: auto;
  /* max-width: 50%; */
  max-width: 50%;
  width: auto;
  margin: auto;
  padding: 10px 0 5px 0;
  width: 400px;
}

.bottom {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
}

.description {
  text-align: left;
  /* padding: 0 20px 20px 20px; */
  padding-left: 15px;
}
</style>
