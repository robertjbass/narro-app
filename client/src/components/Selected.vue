<template>
  <div class="card-wrap">
    <div class="image-slot">
      <slot class="card-information">
        <div class="outer-wrap">
          <div
            class="services "
            v-for="service in services"
            :key="service.idname"
          >
            <div v-if="service.idname == selectedService" :key="service.idname">
              <div class="inner-wrap innner">
                <div class="top-bar">
                  <div class="bar-space">
                    <div class="top-spacer"></div>
                    <div class="mid-spacer"></div>
                    <div class="close" v-on:click="selectedService = ''">
                      <div class="exit">x</div>
                    </div>
                  </div>
                </div>
                <div class="bottom">
                  <div class="left">
                    <div class="svc-name">{{ service.name }}</div>
                    <img class="logo-icon" :src="service.logoUrl" />
                  </div>
                  <div class="right">
                    <div class="banner-wrap top">
                      <img class="banner" :src="service.bannerUrl" />
                    </div>
                    <div class="description">{{ service.description }}</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div v-else=""></div> -->
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import serviceList from "@/assets/json/services.json";
import { EventBus } from "../main";

export default {
  name: "selected",
  created() {
    EventBus.$on("changeSvc", data => {
      return (this.selectedService = data);
    });
  },

  computed: {
    services() {
      return serviceList.services.map(services => {
        return services;
      });
    }
  },
  data: function() {
    return {
      selectedService: ""
      // selectedService: "airtable"
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
  justify-content: space-between;
  margin: auto;
  flex-grow: 1;
}

.inner-wrap {
  border-style: solid;

  padding: 0px;
  width: 75%;
  margin: 0 0 10px 0;
  height: auto;
  display: flex;
  flex-wrap: wrap;

  background-color: white;
  min-width: 270px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

.logo-icon {
  width: 60%;
  height: auto;
  margin: auto;
}

.right {
  width: 70%;
  margin: auto;
  vertical-align: middle;
  align-content: space-between;
}
.top {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.banner-wrap {
  margin: auto;
  max-width: 100%;
  min-width: 50%;
  max-height: 100%;
  padding-bottom: 10px;
  /* object-fit: contain; */
}

.banner {
  max-height: auto;
  max-width: 50%;
  width: auto;
  margin: auto;
  padding: 10px 0 5px 0;
  width: 400px;
}

/* .middle {
  height: 20px;
  align-content: space-between;
  padding: auto;
} */

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

.services {
  width: 100%;
}

/*


 */

.outer {
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}

/* .inner {
  margin-left: auto;
  margin-right: auto;
  width: 400px;
} */

.top-bar {
  width: 100%;
  margin: auto;
}

.bar-space {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #666666;
  padding: 5px 0;
  /* background-color: #ebebeb; */
}

.top-spacer {
  margin: auto;
  align-self: flex-end;
}

.mid-spacer {
  margin: auto;
}

.close {
  justify-content: right;
  text-align: right;
  padding-left: 0 90% 0 10%;
  font-size: 20px;
  font-weight: bolder;
  color: #333333;
  margin: auto;
  margin-left: 90%;
  cursor: pointer;
}

.exit {
  width: 30px;
  text-align: center;
  color: whitesmoke;
}
</style>
