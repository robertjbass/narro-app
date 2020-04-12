<template>
  <div class="markup">
    <!-- TODO: Add Unsplash API -https://unsplash.com/developers -->
    <img
      class="header-img"
      src="https://images.unsplash.com/photo-1555958493-1380d49ac1ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      alt="Unsplash"
    />
    <div class="case-study">
      <!-- TODO: TITLE CENTER -->
      <div class="title-center">
        title center lorem met
      </div>
      <br />

      <!-- TODO: TITLE -->
      <div class="title">
        title Lorem ipsum dolor
      </div>
      <br />

      <!-- TODO: SUBTITLE -->
      <div class="subtitle">
        subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
        non.
      </div>
      <br />

      <!-- TODO: HEADING -->
      <div class="heading">
        heading Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
        praesentium.
      </div>
      <br />
      <!-- TODO: PREFACE -->
      <div class="preface">
        preface Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
        ea?
      </div>
      <br />

      <!-- TODO: PARAGRAPH -->
      <div class="paragraph">
        <p>
          paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis, nesciunt!
        </p>
      </div>

      <br />

      <!-- TODO: PARAGRAPH BOLD -->
      <div class="paragraph-bold">
        <p>
          paragraph bold Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Facilis, nesciunt!
        </p>
      </div>
      <br />

      <!-- TODO: L/R BLOCK QUOTE -->
      <div class="blockquote">
        <q>
          blockquote Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum, illum?</q
        >
      </div>
      <br />

      <!-- TODO: BLOCK QUOTE -->
      <div class="blockquote">
        blockquote Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum, illum?
      </div>
      <br />

      <!-- TODO: L/R QUOTE -->
      <div class="quote-side">
        <q>
          quote side Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum, illum?
        </q>
      </div>
      <br />

      <!-- TODO: SIDE-QUOTE -->
      <div class="side-quote">
        <div class="l-quote">
          <ql></ql>
        </div>
        <div class="quote-body">
          side quote Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Earum, illo!
        </div>
        <div class="r-quote">
          <qr></qr>
        </div>
      </div>
      <br />

      <!-- TODO: QUOTE-IMAGE -->
      <!-- <div class="quote-image">
      quote-image Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Earum, illo!
    </div>
    <br /> -->

      <!-- TODO: UNORDERED-LIST -->
      <div class="ulist">
        <ul>
          <li>ulist Lorem ipsum</li>
          <li>dolor sit amet consectetur</li>
          <li>adipisicing elit</li>
          <li>Molestias, illo</li>
        </ul>
      </div>
      <br />

      <div class="summary">
        summary Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
        vero.
      </div>
      <br />

      <div class="table">
        table Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        rem!
      </div>
      <br />

      <div class="conclusion">
        conclusion Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatem, repellat!
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "case-study"
};
</script>

<style scoped>
* {
  font-family: monospace;
}
.header-img {
  padding: unset;
  max-width: 100%;
  margin: auto;
}
.case-study {
  align-content: left;
  margin: 0 15%;
}
.title-center {
  font-size: 48px;
  color: #333333;
  text-align: center;
}
.title {
  font-size: 48px;
  color: #333333;
  text-align: left;
}
.subtitle {
  font-size: 24px;
  color: #666666;
}
.heading {
  font-size: 36px;
  color: #333333;
}
.preface {
  font-size: 20px;
  color: #666666;
  font-weight: 400;
}
.paragraph {
  font-size: 18px;
  color: #333333;
  font-weight: 400;
}

.paragraph-bold {
  font-size: 18px;
  color: #333333;
}

.blockquote {
  font-size: 24px;
  border-style: solid;
  border-width: 0 0 0 3px;
  padding-left: 30px;
  color: #00000050;
}
q {
  quotes: "“" "”" "‘" "’";
  font-size: 24px;
}
q::before {
  content: open-quote;
  font-size: 30px;
}
q::after {
  content: close-quote;
  font-size: 30px;
}

ql {
  quotes: "“" "" "‘" "";
  font-size: 24px;
}

ql::before {
  content: open-quote;
  font-size: 30px;
}

ql::after {
  content: close-quote;
  font-size: 30px;
}

qr {
  quotes: "" "”" "" "’";
  font-size: 24px;
}

qr::before {
  content: open-quote;
  font-size: 30px;
}

qr::after {
  content: close-quote;
  font-size: 30px;
}

.side-quote {
  display: flex;
}

.quote-body {
  padding: 0 5%;
}

.l-quote {
  width: 90px;
}

.r-quote {
  width: 90px;
}

.l-quote,
.r-quote {
  margin: auto;
  vertical-align: middle;
  justify-content: center;
  text-align: center;
}

.ulist {
}
.summary {
}
.table {
}
.conclusion {
}
</style>
