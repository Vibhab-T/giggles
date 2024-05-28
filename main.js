let op = document.querySelector(".output-section");
let meme = document.querySelector(".meme-button");
let joke = document.querySelector(".joke-button");
let quote = document.querySelector(".quote-button");
let riddle = document.querySelector(".riddle-button");

function empty(element) {
  while (element.firstElementChild) {
    element.firstElementChild.remove();
  }
}

meme.addEventListener("click", () => {
  empty(op);

  let randomIndex = Math.floor(Math.random() * memes.length);

  let newImgElement = document.createElement("img");

  let imgSrcAttr = document.createAttribute("src");
  imgSrcAttr.value = memes[randomIndex];

  let imgClassAttr = document.createAttribute("class");
  imgClassAttr.value = "new-meme";

  newImgElement.setAttributeNode(imgSrcAttr);
  newImgElement.setAttributeNode(imgClassAttr);

  op.appendChild(newImgElement);
});

joke.addEventListener("click", () => {
  empty(op);

  let randomIndex = Math.floor(Math.random() * jokes.length);

  let newJoke = document.createElement("div");

  let jokeClass = document.createAttribute("class");
  jokeClass.value = "new-joke";
  newJoke.setAttributeNode(jokeClass);

  newJoke.textContent = jokes[randomIndex];

  op.appendChild(newJoke);
});

quote.addEventListener("click", () => {
  empty(op);

  let randomIndex = Math.floor(Math.random() * quotes.length);

  let newQuote = document.createElement("div");
  let quoteClass = document.createAttribute("class");
  quoteClass.value = "new-quote";
  newQuote.setAttributeNode(quoteClass);
  newQuote.textContent = quotes[randomIndex].quote;

  let quoteAuthor = document.createElement("div");
  let authorClass = document.createAttribute("class");
  authorClass.value = "author";
  quoteAuthor.setAttributeNode(authorClass);
  quoteAuthor.textContent = quotes[randomIndex].author;

  op.appendChild(newQuote);
  op.appendChild(quoteAuthor);
});

riddle.addEventListener("click", () => {
  empty(op);

  let randomIndex = Math.floor(Math.random() * riddles.length);

  let newRiddle = document.createElement("div");
  let riddleClass = document.createAttribute("class");
  riddleClass.value = "new-riddle";
  newRiddle.setAttributeNode(riddleClass);
  newRiddle.textContent = riddles[randomIndex].question;

  let answerButton = document.createElement("button");
  answerButton.textContent = "REVEAL ANSWER";
  let buttonClass = document.createAttribute("class");
  buttonClass.value = "reveal-button";
  answerButton.setAttributeNode(buttonClass);

  let newDiv = document.createElement("div");

  op.appendChild(newRiddle);
  op.appendChild(newDiv);
  newDiv.appendChild(answerButton);

  let revealAnswer = document.querySelector(".reveal-button");
  revealAnswer.addEventListener("click", () => {
    empty(newDiv);
    let riddleAnswer = document.createElement("div");

    let answerClass = document.createAttribute("class");
    answerClass.value = "answer";

    riddleAnswer.setAttributeNode(answerClass);
    riddleAnswer.textContent = riddles[randomIndex].answer;

    newDiv.appendChild(riddleAnswer);
  });
});

const memes = [
  "https://i.redd.it/a0v87gwzoge61.jpg",
  "https://i.redd.it/q29egav34ee61.jpg",
  "https://i.redd.it/iij16swxjie61.jpg",
  "https://i.redd.it/vek7dm2hrge61.jpg",
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
  "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
  "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
  "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
];

const jokes = [
  "This statement",
  "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "All programmers are playwrights, and all computers are lousy actors.",
  "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
  "The generation of random numbers is too important to be left to chance.",
  "Debugging: Removing the needles from the haystack.",
  "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
  "There are two ways to write error-free programs; only the third one works.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
];

const quotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "John Woods",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    quote:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven",
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote:
      "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    author: "Joseph Weizenbaum",
  },
  {
    quote:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian Kernighan",
  },
  {
    quote:
      "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray",
  },
];

const riddles = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle",
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
  },
  {
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married",
  },
  {
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
    answer: "Heroine",
  },
];
