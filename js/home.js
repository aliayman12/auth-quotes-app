let welcomeMessage = document.getElementById('userName')
let logoutButton = document.getElementById("logoutBtn")

if(localStorage.getItem('userName') != null){
  welcomeMessage.innerHTML = localStorage.getItem('userName')

}else{

  location.href = 'register.html';
}

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("userName");
  location.href = 'login.html';

});

let quotes = [
  '"A room without books is like a body without a soul." ― Marcus Tullius Cicero',
  '"Be the change that you wish to see in the world." ― Mahatma Gandhi',
  '"If you tell the truth, you don\'t have to remember anything." ― Mark Twain',
  '"You only live once, but if you do it right, once is enough." ― Mae West',
  '"In order to write about life first you must live it." ― Ernest Hemingway',
  '"So many books, so little time." ― Frank Zappa',
  "\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\" ― Dr. Seuss",
  '"Live as if you were to die tomorrow. Learn as if you were to live forever." ― Mahatma Gandhi',
  '"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." ― Maya Angelou',
  '"A friend is someone who knows all about you and still loves you." ― Elbert Hubbard',
  '"To live is the rarest thing in the world. Most people exist, that is all." ― Oscar Wilde',
];

let lastRandom = 0;

function changeQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);

  if (randomNum == lastRandom) {
    randomNum = randomNum + 1;
  }

  let randomQuote = quotes[randomNum];

  let demoElement = document.getElementById("demo");

  demoElement.innerHTML = randomQuote;

  lastRandom = randomNum
}
