<template>
  <Footer class="footer">
    <!-- <span class="design-gradient"> -->
    <span>
      <div class="resource-buffer">Resources</div>
      <ul>
        <li v-for="resource in resources" :key="resource.id">
          <a
            :href="'//' + `${resource.url}`"
            target="_blank"
            style="margin: 35px;"
          >
            {{ resource.platform }}
          </a>
        </li>
      </ul>
    </span>
  </Footer>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      resources: [
        {
          id: 1,
          platform: "YouTube",
          url: "www.youtube.com/channel/UCXlYY0fWGR2GIqWNcIZrytg"
        },
        {
          id: 2,
          platform: "GitHub",
          url: "www.github.com/716green"
        },
        {
          id: 3,
          platform: "Coda",
          url: "www.coda.io/@bob"
        }
      ]
    };
  }
};
</script>

<style scoped>
li {
  display: inline-block;
  list-style-type: none;
  justify-content: space-evenly;
}

.resource-buffer {
  padding-top: 5px;
  /* padding-right: 1000px; */
  width: 100%;
}

a {
  color: darkorange;
  text-decoration: none;
  font-weight: 700;
}

h1 {
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: rgb(0, 0, 0);
  text-align: center;
  max-width: 100%;
}

.logo {
  color: #fd7622;
}

.purple-gradient {
  background-image: linear-gradient(to top right, #d7d7f9, #fdc6dc);
  border-radius: 1rem;
  padding: 10px;
  border: 10px;
  margin-right: 10px;
  box-shadow: 5px 5px;
}

/* .design-gradient, */
footer {
  background-image: linear-gradient(to top right, #edeafb, #fde3ef);
  text-align: start;
  font-weight: bold;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem 0.5rem 0 0;
  text-align: left;
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
</style>
