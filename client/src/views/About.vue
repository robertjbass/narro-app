<template>
  <div class="contact">
    <div class="about">
      <div class="remove-padding">
        <!-- <h1>Contact us today</h1> -->
        <h1 class="remove-padding">Contact us today</h1>
        <h3>AUTOMATION - PRODUCTIVITY - INTEGRATION - STRATEGY</h3>
        <!-- <br /><br /> -->
      </div>

      <TypeForm />

      <!-- <div class="contact-info">
        <div class="address">
          <h3 class="contact-title">
            Address
          </h3>
          <p class="contact">
            Narro, LLC<br />244 Highland Pkwy #112 <br />Buffalo, NY 14223
          </p>
        </div>

        <div class="email">
          <h3 class="contact-title">Email</h3>
          <p class="contact">‪info@narro.app</p>
        </div>

        <div class="phone">
          <h3 class="contact-title">Phone</h3>
          <p class="contact">‪716.256.3060‬</p>
        </div>
      </div> -->
      <br />
      <div class="body">
        <h4>Can Narro Automation help my company?</h4>
        <p>
          We modernize your business so that you can focus on growth. If you
          perform repetitive tasks, we can help. We will review your processes
          and find ways to start scaling your business with automation.
        </p>
        <br />
        <h4>Can Narro help me debug my pre-built automations?</h4>
        <p>
          We work on a case by case basis but have found that automation can be
          unpredictable. By nature, SaaS platforms have downtime and automations
          break over time. We host the automated processes for our clients so
          that we can monitor and debug as issues arise.
        </p>
        <br />
        <h4>
          Does Narro work work with the services which aren't listed on this
          website?
        </h4>
        <p>
          As a small company, we can only take on a small handful of clients at
          any given time. We will allow clients using our partner and preferred
          platforms listed on our
          <a class="inline-link" href="/services">services</a> page to take
          priority. <br /><br />
          We can automate most services that have an public facing API. We
          recommend checking the
          <a class="inline-link" href="https://zapier.com/apps">
            Zapier app database</a
          >
          to see if your service is listed. Although not completely
          representative, it will provide a list of services which can be
          automated in a predictable manner.
        </p>
        <br />
        <h4>What happens if I discontinue service?</h4>
        <p>
          We use proprietary code, automation, and internal tools on a number of
          processes. You are welcome to leave at any time and we'll help you
          transition away from Narro while replacing any proprietary code with a
          similar alternative. We would never want to keep a client signed to
          our services if the relationship isn't mutually beneficial.
        </p>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
import TypeForm from "@/components/TypeForm.vue";
export default {
  name: "about",
  components: {
    TypeForm,
  },
  components: {
    TypeForm,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px 10%;
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
  font-family: "Raleway", sans-serif;
  line-height: 32px;
  color: #333333;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  font-weight: bolder;
  padding: 0;
  margin-top: 0;
}

h4 {
  text-align: left;
  /* margin-left: 115px; */
  font-size: 24px;
}
hr {
  color: #e6e6e6;
  width: 15%;
  margin: auto;
  align-content: center;
}

p {
  font-size: 1.2em;
  text-align: left;
  margin: auto;
  padding: 0 30px;
  padding: 10px 8% 0 8%;
  text-align: left;
}

.remove-padding {
  padding: 0;
  margin-top: 0;
}

.contact {
  padding-top: 0;
  margin-top: 0;
}

.request {
  text-decoration: none;
  color: darkorange;
  font-weight: 900;
  font-family: "Indie Flower", cursive;
  padding-top: 5px;
  width: 250px;
  margin: auto;
  text-align: center;
  font-size: 30px;
}

.contact-title {
  width: 150px;
  margin-top: 0;
}

.contact-info {
  align-content: left;
  margin: auto;
}

.address,
.email,
.phone {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
  font-weight: 400;
  display: flex;
  max-width: 50%;
}

.contact-info {
  display: inline-block;
  align-content: left;
  padding-left: 100px;
  width: 80%;
}

.contact-block {
  max-width: 50%;
}

.contact {
  padding: 0px;
  margin: 0 auto 20px 0;
}

.spacer {
  height: 40px;
}

.body {
  padding: 0 40px;
  margin: auto;
}

.inline-link {
  text-decoration: none;
  color: darkorange;
  padding: 0;
}
</style>
