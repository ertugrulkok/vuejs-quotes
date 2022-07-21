const app = Vue.createApp({
  data() {
    return {
      quotes: [
        {
          name: "Albert Einstein",
          quote:
            "Ich habe keine besondere Begabung, sondern bin nur leidenschaftlich neugierig.",
        },
        {
          name: "Rabindranath Thakur",
          quote: "Dumme rennen, Kluge warten, Weise gehen in den Garten.",
        },
        {
          name: "Augustinus Aurelius",
          quote:
            "Der Gütige ist frei, auch wenn er ein Sklave ist. Der Böse ist ein Sklave, auch wenn er ein König ist.",
        },
        {
          name: "Pythagora von Samos",
          quote:
            "Die kürzesten Wörter, nämlich 'ja' und 'nein' erfordern das meiste Nachdenken",
        },
        {
          name: "Oscar Wilde",
          quote:
            "Am Ende wird alles gut. Wenn es nicht gut ist, ist es noch nicht das Ende.",
        },
        {
          name: "Mark Twain",
          quote:
            "Wenn wir bedenken, dass wir alle verrückt sind, ist das Leben erklärt",
        },
        { name: "unbekannt", quote: "Irgendwann ist irgendwann zu spät." },
        {
          name: "Dalai Lama",
          quote:
            "Jede schwierige Situation, die du meisterst, bleibt dir in Zukunft erspart",
        },
        {
          name: "Henry Ford",
          quote:
            "Wer immer tut, was er schon kann, bleibt immer das, was er schon war",
        },
      ],
      userQuote: "",
      username: "",
      displayAuthor: "",
      displayQuote: "",
      lastRandom: null,
      showQuotes: false,
    };
  },
  methods: {
    addQuote() {
      const newArray = new Quote(this.username, this.userQuote);
      this.quotes.push(newArray);
      this.userQuote= "";
      this.username= "";
    },
    getQuote() {
      var range = this.quotes.length; // 9
      var randomIndex = Math.floor(Math.random() * range); // 0-8
    
     // this.lastRandom = randomIndex;
      while (randomIndex == this.lastRandom) {
        var randomIndex = Math.floor(Math.random() * range);
        console.log(
          "Falls this.lastRandom = randomIndex vor der While Schleife steht, wird diese console.log ausgeführt ODER falls randomindex = lastRandom ist"
        );
      }
      this.lastRandom = randomIndex;

      console.log("RandomIndex: " + randomIndex);
      console.log("LastRandom: " + this.lastRandom);
      console.log("--------------------");

      this.displayAuthor = this.quotes[randomIndex].name;
      this.displayQuote = this.quotes[randomIndex].quote;
    },
  },
  computed: {},
});

function Quote(name, quote) {
  this.name = name;
  this.quote = quote;
}

app.mount("#qoutes");
