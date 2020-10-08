<template>
  <div class="card-wrap">
    <div class="image-slot">
      <slot class="card-information">
        <div class="outer-wrap">
          <div
            class="services"
            v-for="service in services"
            :key="service.idname"
          >
            <div v-if="!service.hidden" :key="service.idname">
              <div class="inner-wrap">
                <div class="banner-wrap top">
                  <img class="banner" :src="service.bannerUrl" />
                </div>
                <div class="middle"></div>
                <div class="bottom">
                  <div class="left">
                    <div class="svc-name">{{ service.name }}</div>
                    <img class="logo-img" :src="service.logoUrl" />
                  </div>
                  <div class="right">
                    <div class="description">{{ service.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import partners from "@/assets/json/partners.json";
import { EventBus } from "../main";

export default {
  name: "scv-card",
  created() {
    EventBus.$on("changeSvc", data => {
      return (this.selectedService = data);
    });
  },

  computed: {
    services() {
      return partners.services.map(services => {
        return services;
      });
    }
  },
  data: function() {
    return {
      selectedService: ""
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

.outer-wrap {
  display: flex;
  flex-wrap: wrap;
  border: 0px;
  text-align: center;
  justify-content: center;
  margin: 0;
}

.inner-wrap {
  border-style: dotted;
  width: 400px;
  margin: 10px;
  justify-content: space-evenly;
  border-color: black;
  border-width: 1px 1px 0 0;
  border-top-right-radius: 1rem;
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

.logo-img {
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
  max-width: 50%;
  width: auto;
  margin: auto;
  padding: 10px 0 5px 0;
  width: 400px;
}

.middle {
  height: 1px;
}

.bottom {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
}

.description {
  text-align: left;
  padding-left: 15px;
}
</style>
