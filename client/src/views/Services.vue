<template>
  <div class="about">
    <div class="body-white">
      <!-- <a
        class="contact"
        href="https://airtable.com/shrfNLJSFZcoWlMdY"
        target="blank"
        >Contact Us</a
      > -->
      <div class="top">
        <h1>Search for more services</h1>
        <br /><br />
        <div>
          <a
            class="zapier services"
            href="https://zapier.com/apps"
            target="blank"
          >
            Services that integrate with Zapier</a
          >

          <a
            class="integromat services"
            href="https://www.integromat.com/en/integrations"
            target="blank"
          >
            Services that integrate with Integromat</a
          >
        </div>
      </div>

      <h4>
        The interactive document below was made with Coda. Feel free to play
        with it, your changes won't be saved.
      </h4>
      <p>
        Could your business use interactive documents like this?
      </p>
      <iframe
        src="https://coda.io/embed/L8aGJl1soq/_su-bC?viewMode=embedplay&hideSections=true"
        width="100%"
        height="2000"
        allow="fullscreen"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.top {
  background-image: linear-gradient(to bottom, #e5effd, #ffffff);
}
.body-white {
  background-color: #fafafa;
  padding: 25px 25px 0 25px;
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
}

h2,
h3,
h4 {
  line-height: 25px;
  color: #666666;
  text-align: left;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
}

p {
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 550;
}
</style>
