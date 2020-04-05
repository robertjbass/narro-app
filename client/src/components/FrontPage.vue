<template>
  <div class="front-page">
    <div class="body-white">
      <h1>{{ headline }}</h1>
      <h3>{{ subtext }}</h3>
    </div>
    <div class="blue-highlight">
      For a complete list of services we integrate with,
      <a href="https://zapier.com/apps" target="blank">
        Services that integrate with Zapier</a
      >
      <a href="https://www.integromat.com/en/integrations" target="blank">
        Services that integrate with Integromat</a
      >
      <h1>Things that we're quite fond of:</h1>
    </div>
    <div class="gradient-boxes">
      <div class="service-box zapier-gradient">
        <ServiceCard
          service="We 🧡 Zapier"
          description="A single salaried employee costs tens of thousands of dollars annually. Building proprietary software can cost even more. As certified Zapier experts, we help you to scale your business and reduce overhead by connecting and customizing software that already exists. We are certified to leverage automation for you."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/b99545e12d00d8351312f4b097ed7fb6/d06c9ebc/Zapier2.png"
              alt="Zapier"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box airtable-gradient">
        <ServiceCard
          service="We 💜 Airtable"
          description="Airtable works like a spreadsheet but gives you the power
          of a database to organize anything. Replace your current forms with
          'Airtable Forms' and automate tasks based on the results."
        >
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/0a94432340e97ee06e44bcdeff3eb9c1/919a5240/pngfind_com-ucla-logo-png-421089.png"
              alt="Airtable"
            />
          </div>
          <h1>(& Airtable Forms)</h1>
          <img
            class="small-logo-image"
            src="https://dl.airtable.com/.attachments/1ade001563f89d6151c85809f110c785/337c3d3d/AirtableFormsCropped.png"
            alt="Airtable Forms"
        /></ServiceCard>
      </div>

      <div class="service-box mysql-gradient">
        <ServiceCard
          service="We 💙 MySQL"
          description="You might love SQL Databases or hate them but one thing is for sure - they are battle tested, proven, and reliable. That is why your legacy software probably uses it. The good news is that if you work with software built on an SQL database, it may be more customizable than you had imagined. We can put that power in your hands or simply maintain your database for you."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/24d21be435e0c140d7fcc4369892c15e/e60b612e/MySQLBannerClear.png"
              alt="MySQL"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box integromat-gradient">
        <ServiceCard
          service="We 💙 Integromat"
          description="Integromat is called 'The glue of the internet'. It is a powerful tool for automating manual processes and connecting services. We wouldn't be an Integromat partner if we didn't love it."
        >
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/61a1a082ee33005a717c0567a2dee392/59da9922/integromat.png"
              alt="Integromat"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box slack-gradient">
        <ServiceCard
          service="We 💚 Slack"
          description="Once you use Slack, you never go back. Not only is Slack the favorite of businesses and individuals all around the world - you can use this tool to automate your processes and stay in contact with your team. There is a reason that Slack is held in such high regard."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/bc7ada5a73958df814a21060aa39b6b6/1f31f91e/SlackBanner.png"
              alt="Slack"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box google-gradient">
        <ServiceCard
          service="We 💖💛💚💙 GSuite"
          description="Gmail, Hangouts, Calendar, Docs, Sheets, Forms, Keep, Sites, Drive, Admin, Contacts. Everything you need to run a remote business or scale your traditional business. It all works well with automation and we support that!"
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/5e82630b4bfd03e62e1e9090f15bc8b9/0f58805f/GSuiteServices.png"
              alt="GSuite"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box dropbox-gradient">
        <ServiceCard
          service="We 💙 Dropbox"
          description="Dropbox was one of the first companies to productize storage. They made the cloud accessible so that you can securely backup, store, and collaborate on documents with your associates."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/d97e1645d03505eb774612be01804ab3/a3b60b00/dropbox.png"
              alt="Dropbox"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box calendly-gradient">
        <ServiceCard
          service="We 🖤 Calendly"
          description="Never has it been easier to schedule meetings, appointments and events. Calendly is a robust and custom scheduling app that will customize your availability based on your schedule, collaborate with your guests on your behalf, and update your records. Do you need it to sync with other system you have in place? Of course we can do that."
        >
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/8bb20e24ac5275e083941280e7d505f7/c156a58b/calendly-logo1.png"
              alt="Calendly"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box copper-gradient">
        <ServiceCard
          service="We 💜 Copper"
          description="The CRM that Google recommends to you when you sign up for GSuite earned that right by designing around services that you already use. If you know how to use Gmail, you can use Copper. This impressive CRM is customizable to fit the needs of any industry or business type. Most people will never use Copper to it's fullest potential - but when we help you integrate it into your processes, you won't be like most people."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/18fa778c0a3fe6441849a022311f75d6/30dd9538/CopperBanner1.png"
              alt="Copper"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box outfunnel-gradient">
        <ServiceCard
          service="Outfunnel"
          description="Outfunnel integrates seamlessly with Copper CRM and gets your emails to the right party at the correct stages within your pipelines. While other email campaign software is complex and difficult to work with, Outfunnel is easy and helps you to reach your customers and leads effectively."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/15a09bcdf75a2974f532926fe9eec4c1/bc5589a2/OutfunnelBanner.png"
              alt="Outfunnel"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box reply-gradient">
        <ServiceCard
          service="Reply.io"
          description="Reply.io is a leader in drip campaigns. If you need to send custom emails automatically based on criteria without the disconnection that marketing email software creates? That is what Reply.io does, and it does this very well."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/2e9ed0ff5e68c765cec98e00b458b90c/36bead68/reply-io.png"
              alt="Reply.io"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box coda-gradient">
        <ServiceCard
          service="We 🧡 Coda"
          description="Coda is the 'Jack of all trades' of the SaaS world. Interactive and collaborative documents, tables, logic, publishing and integrations with your favorite services - there is a reason teams are moving to Coda. With Coda you can create code-free web apps to use internally. All in one place."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/2fc0673bda9f5b009ace325c4929475d/3beaefd1/coda-logo.png"
              alt="Coda"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box typeform-gradient">
        <ServiceCard
          service="Typeform"
          description="The latest and greatest in the world of interactive web forms. Forms are quick, easy, and fun to fill out when you use Typeform. Once you try it, you'll understand why it's as popular as it is."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/382bcba414684e6d125d79144ef0c8c5/5b465c24/typeform.svg"
              alt="TypeForm"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box mailparser-gradient">
        <ServiceCard
          service="Mailparser.io"
          description="Do you need software to identify or extract information from important emails? Many professionals agree that reading emails can derail a productive work session. We can help you transfer data from emails into your database and trigger events when certain criteria is met."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/2e555ec8a27c1ff25aee28f5cc23d9b0/58ea928a/MailparserBanner2.png"
              alt="Mailparser.io"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box docparser-gradient">
        <ServiceCard
          service="Docparser"
          description="Docparser is the leading document parser. Extract data from PDF to Excel, JSON or update apps with webhooks via Docparser. Data-entry can be a thing of the past when you integrate Docparser into your workflow."
        >
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/8750dbf58d4b026025a1401ecd636e88/053a55c6/DocparserBanner.png"
              alt="Docparser"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box docusign-gradient">
        <ServiceCard
          service="DocuSign"
          description="DocuSign has become the gold standard in electronic signatures. Once you use it, you'll understand why."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/57a0d554cd3e9c89fce9f214b352259e/75af1014/docusign.png"
              alt="DocuSign"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box slite-gradient">
        <ServiceCard
          service="Slite"
          description="The golden standard of internal documentation. Wouldn't it be nice to have a knowledge base? If you have countless documents hidden in folders with little to no organization, it may be time to consider Slite."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/6ae3eea7cf917f98f65a66e17af346b3/0c5dfc5e/slitelogo.png"
              alt="Slite"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box qbo-gradient">
        <ServiceCard
          service="QuickBooks Online"
          description="Intuit QuickBooks is one of the most recognizable name in accounting. Whether you're keeping track of expenses for your small business or doing payroll internally, QBO has a suite of tools that your business needs. We can help you to automate your invoicing process with QuickBooks Online."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/bf7b3fd0c943dd553f7fe38668898455/865bc1ad/qbo-banner.png"
              alt="QBO"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box css-gradient">
        <ServiceCard
          service="CSS/HTML"
          description="CSS and HTML are not only used to make your website easy on the eyes, it's also used to create professional and beautiful emails. Do you send out automated emails? Let us help you to make them beautiful."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/c0421d9a83faac2d778058b594b253eb/ec0d739a/CSSandHTMLLogos.png"
              alt="CSS/HTML"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box node-gradient">
        <ServiceCard
          service="Node.JS"
          description="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is the runtime that Zapier uses in their scripting app. We've learned the ins and outs so that we can expand the functionality of your automations."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/812ad17e355312275f41e48672d6f59c/8dc9713d/node-banner.png"
              alt="Node.JS"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box javascript-gradient">
        <ServiceCard
          service="We 💛 JavaScript"
          description="JavaScript is the language of the web. Zapier uses JavaScript scripting blocks for custom automation and that's a specialty of ours."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/c8fa8668764fb5831c65770bb7c3b8d3/120aca07/javascript.png"
              alt="JavaScript"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box vue-gradient">
        <ServiceCard
          service="Vue.JS"
          description="'Single Page Applications', 'Reactive Pages', 'Components', 'Modular Development'. Those may sound like buzz words but there is a reason developers are crazy about them. 3 modern web frameworks are leading the race and we've placed our bets on Vue.JS. If you've used it, you understand."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/d90803371969873c31cb64ddf0181e0c/15c43c78/VueJSBanner.png"
              alt="VueJS"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box csharp-gradient">
        <ServiceCard
          service="C# .NET"
          description="Microsoft has been the leader in enterprise software for as long as the personal computer has existed and C# is the language that they've invested billions of dollars into creating. We can help with your .NET applications."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/83e6f705bd29c8e202ee9ee1a74abc19/be3fa076/Csharp.png"
              alt="C#"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box webhooks-gradient">
        <ServiceCard
          service="Webhooks"
          description="Do you need to interact with a public facing API for a service that Zapier hasn't integrated with yet? Bring in an expert to connect non-supported services and gain that competitive advantage you've been looking for."
        >
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/44cf41563c5e08c730eeaadb4220bf0b/0a02c875/webhooks.png"
              alt="API Webhooks"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box postgres-gradient">
        <ServiceCard
          service="PostgreSQL"
          description="A lot can be said about the different SQL database solutions. Do you need custom reporting or automation with your Postgres Database? Of course we can do that."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/b21a39073f412ccc9659e2d6232ff418/50cecf5e/PostgreSQL.png"
              alt="PostgreSQL"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box mongodb-gradient">
        <ServiceCard
          service="MongoDB"
          description="MongoDB paved the way for the modern 'Document Database' with 'NOSQL' JSON-like formatting. It's massively scalable and massively popular. Is your data stuffed away in a MongoDB database? We can unlock it for you."
          ><div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/79798127af31055601111b7de6338dd1/a4f7fd5c/MongoDBBanner.png"
              alt="MongoDB"
            /></div
        ></ServiceCard>
      </div>

      <div class="service-box ontask-gradient">
        <ServiceCard
          service="OnTask"
          description="Take control of your documents and forms with a easy-to-use, flexible, and affordable cloud-based platform. Modernize your business by going digital. Those manilla folders and boxes aren't searchable. Sorting through papers takes up valuable time. OnTask automates those very monotonous processes."
        >
          <div class="image-wrap">
            <img
              class="logo-image"
              src="https://dl.airtable.com/.attachments/d3efa4e991c7b03a6ede90abea35885d/e505e0bd/OnTask.png"
              alt="OnTask"
            /></div
        ></ServiceCard>
      </div>
    </div>

    <div class="light-blue-highlight">
      a Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nostrum
      molestiae vitae expedita. Voluptatibus, incidunt? Tenetur sunt delectus
      velit voluptatibus quas magni ab. Mollitia aliquam velit optio cum
      provident voluptatem!
    </div>
    <div class="salmon-highlight">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam
      accusantium rerum odio autem nobis illum dolor vel molestias? Veniam quo
      quis voluptatem facilis laudantium error ex delectus nihil deleniti!
    </div>
    <div class="body-white">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, omnis
      nostrum! Sed quae similique illo voluptatum excepturi ratione at deserunt
      quaerat dolor, aliquid culpa iste alias facilis quia temporibus
      exercitationem?
    </div>
  </div>
</template>

<script>
import ServiceCard from "@/components/ServiceCard.vue";
export default {
  name: "front-page",
  props: {
    headline: {
      type: String
    },
    subtext: {
      type: String
    }
  },
  components: {
    ServiceCard
  }
};
</script>

<style scoped>
* {
  /* font-family: "Open Sans", Helvetica, arial, sans-serif; */
  display: block;
  box-sizing: border-box;
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
  margin: 0%;
}

a {
  color: #9bd5ff;
}

h1 {
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

.logo {
  color: #fd7622;
}

.small-logo-image {
  width: 20%;
  padding-top: 20px;
  margin: auto;
}

.image-wrap {
  width: 50%;
  align-content: center;
  text-align: center;
  justify-content: space-evenly;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.image-slot {
  justify-content: space-evenly;
}

.service-box {
  background-image: linear-gradient(to top right, #ffefce, #ffa38c);
  border-radius: 1rem;
  padding: 10px;
  border: 10px;
  margin: 0 1% 2% 1%;
  box-shadow: 5px 5px;

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
  justify-content: space-around;
  padding-top: 30px;
}
.orange-gradient {
  background-image: linear-gradient(to top right, #ffefce, #ffa38c);
}

.airtable-gradient {
  background-image: linear-gradient(to top right, #d7d7f9, #fdc6dc);
}
.mysql-gradient {
  background-image: linear-gradient(to top right, #e48d0035, #00618a35);
}
.slack-gradient {
  background-image: linear-gradient(to top right, #e0156350, #6ecadc50);
}
.vue-gradient {
  background-image: linear-gradient(to top right, #34495f50, #3ab98250);
}
.copper-gradient {
  background-image: linear-gradient(to top right, #ffe9ee50, #4e2f6550);
}

.coda-gradient {
  background-image: linear-gradient(to top right, #f5d0ba50, #ed675250);
}

.google-gradient {
  background-image: linear-gradient(to top right, #ea433550, #4184f350);
}

.outfunnel-gradient {
  background-image: linear-gradient(to top right, #00b8aa50, #80808050);
}

.reply-gradient {
  background-image: linear-gradient(to top right, #1393e150, #005aff50);
}

.typeform-gradient {
  background-image: linear-gradient(to top right, #89c6be50, #33393f50);
}

.mailparser-gradient {
  background-image: linear-gradient(to top right, #fe470150, #27344050);
}

.dropbox-gradient {
  background-image: linear-gradient(to top right, #194ba050, #007ee550);
}

.docusign-gradient {
  background-image: linear-gradient(to top right, #007ee550, #194ba050);
}

.css-gradient {
  background-image: linear-gradient(to top right, #f1652950, #2965f150);
}

.node-gradient {
  background-image: linear-gradient(to top right, #83cd2950, #40413750);
}

.csharp-gradient {
  background-image: linear-gradient(to top right, #9d72d950, #68217a50);
}

.javascript-gradient {
  background-image: linear-gradient(to top right, #f5de1950, #9d72d950);
}

.slite-gradient {
  background-image: linear-gradient(to top right, #ffe697, #aae7ed);
}

.qbo-gradient {
  background-image: linear-gradient(to top right, #28a11650, #335ec050);
}

.postgres-gradient {
  background-image: linear-gradient(to top right, #31619250, #23212050);
}

.mongodb-gradient {
  background-image: linear-gradient(to top right, #c1bfbe50, #449945f0);
}

.docparser-gradient {
  background-image: linear-gradient(to top right, #297ce550, #27344050);
}

.webhooks-gradient {
  background-image: linear-gradient(to top right, #4b4b4b50, #c73a6350);
}

.ontask-gradient {
  background-image: linear-gradient(to top right, #9bc66950, #244c5950);
}

.integromat-gradient {
  background-image: linear-gradient(to top right, #2f8cbb50, #57575750);
}

.calendly-gradient {
  background-image: linear-gradient(to top right, #00a2ff50, #676b7650);
}

.design-gradient {
  background-image: linear-gradient(to top right, #edeafb, #fde3ef);
}

.body-white {
  background-color: #fafafa;
  padding: 25px;
}

/* .body-blue {
  background-color: #e4eefc;
  padding: 25px;
} */
.salmon-highlight {
  background-color: #ffe1d5;
}

/* .blue-highlight {
  background-color: #e5effd;
} */

.blue-highlight {
  background-image: linear-gradient(to bottom, #e5effd, #fafafa);
}

.light-blue-highlight {
  background-color: #f3f8ff;
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
