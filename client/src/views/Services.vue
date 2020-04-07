<template>
  <div class="about">
    <div class="body-white">
      <div class="top">
        <h1>Search for additional services</h1>
        <h3>
          Don't see the technology you're looking to integrate with? No
          problem!<br />
        </h3>
        <h4>
          A good point of reference is whether or not you can find the services
          listed here:
        </h4>

        <div class="search-links">
          <a
            class="zapier services"
            href="https://zapier.com/apps"
            target="blank"
            ><div class="search-more">
              Services that integrate with Zapier
            </div></a
          >

          <a
            class="integromat services"
            href="https://www.integromat.com/en/integrations"
            target="blank"
            ><div class="search-more">
              Services that integrate with Integromat
            </div></a
          >
        </div>
        <div class="blue-highlight">
          <h2 class="things">
            These just happen to be some of our favorite technologies to work
            with...
          </h2>
        </div>
      </div>
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shr3oLSTYd0scmLer?backgroundColor=cyan&viewControls=on"
      >
      </iframe>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.things {
  text-decoration: none;
  color: #666666;
  font-size: 40px;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  margin: auto;
  text-align: center;
  padding: 25px;
}
.airtable-embed {
  height: 2800px;
  border: 0px;
  width: 100%;
  background: transparent;
  border-width: 1px;
  border-style: solid;
  background-color: #ccc;
  margin-top: 20px;
}
.top {
  background-image: linear-gradient(to bottom, #e5effd, #ffffff);
}
.body-white {
  background-color: #fafafa;
  border: 25px 25px 0 25px;
}
a {
  text-decoration: none;
}

.services {
  color: #ffffff;
  border-color: #000000;
  border-width: 2px;
  border-style: solid;
  padding: 10px;
  border-radius: 0 1.5rem 1.5rem 0;
  margin: 0px;
  color: 000000;
  font-weight: 200;
}
.zapier {
  background-color: #fc4700;
  border-radius: 1.5rem 0 0 1.5rem;
}

.integromat {
  background-color: #2f8cbb;
}
.contact {
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
h1 {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  text-align: center;
  margin-top: 0;
  line-height: 70px;
}

h2,
h3,
h4 {
  line-height: 25px;
  color: #666666;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
}

p {
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 550;
}
.search-more {
  display: flex;
  flex-wrap: wrap;
}
.search-links {
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 75%;
}
</style>
