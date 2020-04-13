<template>
  <div class="case-study">
    <!-- TODO: Add Unsplash API -https://unsplash.com/developers -->
    <section class="banner">
      <img
        class="header-img"
        src="https://images.unsplash.com/photo-1555958493-1380d49ac1ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="Unsplash"
      />
    </section>

    <section class="text-assets">
      <div class="markup">
        <!-- TODO: TITLE CENTER -->
        <div class="title-center">
          title center lorem met
        </div>
        <br />

        <!-- TODO: SUBTITLE CENTER -->
        <div class="subtitle-center">
          subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius, non.
        </div>
        <br />

        <!-- TODO: TITLE CENTER -->
        <div class="heading-center">
          heading Lorem ipsum dolor sit amet
        </div>
        <br />

        <!-- TODO: TITLE -->
        <div class="title">
          title Lorem ipsum dolor
        </div>
        <br />

        <!-- TODO: SUBTITLE -->
        <div class="subtitle">
          subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius, non.
        </div>
        <br />

        <!-- TODO: HEADING -->
        <div class="heading">
          heading Lorem ipsum dolor sit amet consectetur
        </div>
        <br />
        <!-- TODO: PREFACE -->
        <div class="preface">
          preface Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quas, ea?
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

        <!-- TODO: UNORDERED-LIST -->
        <div class="list">
          <ul class="ulitem">
            <li>
              ulist Lorem ipsum Lorem, ipsum dolor sit amet consectetur
              adipisicing elit.
            </li>
            <li>dolor sit amet consectetur Lorem, ipsum.</li>
            <li>adipisicing elit</li>
            <li>Molestias, illo Lorem ipsum dolor sit.</li>
          </ul>
        </div>
        <br />

        <!-- TODO: ORDERED-LIST -->
        <div class="list">
          <ol class="olitem">
            <li>
              ulist Lorem ipsum Lorem, ipsum dolor sit amet consectetur
              adipisicing elit.
            </li>
            <li>dolor sit amet consectetur Lorem, ipsum.</li>
            <li>adipisicing elit</li>
            <li>Molestias, illo Lorem ipsum dolor sit.</li>
          </ol>
        </div>
        <br />

        <div class="summary">
          summary Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
          vero.
        </div>
        <br />

        <div class="table">
          <table>
            <tr>
              <th>table Lorem 1</th>
              <th>table Lorem 2</th>
              <th>table Lorem 3</th>
            </tr>
            <tr>
              <td>dolor sit amet</td>
              <td>dolor sit amet</td>
              <td>dolor sit amet</td>
            </tr>
            <tr>
              <td>elit. rem!</td>
              <td>elit. rem!</td>
              <td>elit. rem!</td>
            </tr>
          </table>
        </div>
        <br />

        <div class="conclusion">
          conclusion Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatem, repellat!
        </div>
        <br />
      </div>
    </section>
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

section {
  max-width: 100%;
  /* margin: auto; */
}

.text-assets {
  margin: 0 20px;
  max-width: 100%;
}

.banner {
  margin: auto;
  width: 100%;
  min-height: 400px;
  max-height: 400px;
  object-fit: none;
  height: auto;
}
.header-img {
  width: 100%;
  margin: auto;
  object-fit: none;
}

.case-study {
  align-content: left;
  /* margin: 0 15%; */
}
.title-center {
  font-size: 48px;
  color: #333333;
  text-align: center;
}
.subtitle-center {
  font-size: 24px;
  color: #666666;
}
.heading-center {
  font-size: 36px;
  color: #333333;
}
.title {
  font-size: 48px;
  color: #333333;
  text-align: left;
}
.subtitle {
  font-size: 24px;
  color: #666666;
  text-align: left;
}
.heading {
  font-size: 36px;
  color: #333333;
  text-align: left;
}
.preface {
  font-size: 20px;
  color: #666666;
  font-weight: 600;
  text-align: left;
}

.paragraph {
  font-size: 18px;
  color: #333333;
  font-weight: 400;
  text-align: left;
}

.paragraph-bold {
  font-size: 18px;
  color: #333333;
  font-weight: bold;
  text-align: left;
}
/* TODO: BLOCKQUOTES (with or without quotes) */
.blockquote {
  font-size: 24px;
  border-style: solid;
  border-width: 0 0 0 3px;
  padding-left: 30px;
  color: #00000050;
  text-align: left;
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
  text-align: left;
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

/* TODO: UNORDERED LIST */
.list {
  font-size: 18px;
  color: #333333;
  padding-left: 5px;
  text-align: left;
}
.ulitem {
  list-style-type: none;
  line-height: 1.5rem;
  border-radius: 2rem;
  padding: 5px;
}
li {
  padding: 5px 10px;
  background: #dddddd60;
  border-radius: 1rem;
  margin: 10px 0;
}

/* TODO: ORDERED LIST */
.list {
  font-size: 18px;
  color: #333333;
  padding-left: 5px;
}

ul.olitem {
  list-style: circled-alpha;
}

ol {
  list-style: decimal;
}

li {
  padding: 5px 10px;
  background: #dddddd60;
  border-radius: 1rem;
  margin: 10px 0;
}

/* TODO: FIX SUMMARY */
/* TODO: SUMMARY */
.summary {
  font-size: 20px;
  color: #666666;
  text-align: left;
}

/* TODO: TABLE */
.table {
  width: 100%;
  color: #666666;
  border-spacing: 5px;
}

table,
th,
td {
  border: 1px solid #666666;
  border-collapse: collapse;
  padding: 15px;
}

th {
  font-weight: 900;
  text-align: left;
}
table,
th {
  border: 2px solid #666666;
}

.conclusion {
  padding-top: 20px;
  font-size: 20px;
  color: #666666;
  font-weight: 400;
  border-top-style: solid;
  border-top-color: #66666620;
  text-align: left;
}
</style>
