//esversion: 6

/*
  1. Store correct answers
  - When quiz begins, no answers are correct
  - Let the user know the parameters of the quiz.
*/
alert("Test your coding knowledge by answering 5 questions. 5 out of 5 answers = A gold crown! 4 out of 5 answers = A bronze crown! 3 out of 5 answers = A bronze crown! 2 out of 5 answers = No crown for you! Better luck next time!")

let correct = 0;

// 2. Store the rank of the player

let rank;

// 3. Select the <main> HTML element

let main = document.querySelector('main');

/*
  4. Ask at least 5 questions
  - Store each answer in a variable
  - Keep track of the number of correct answers
*/

const answer1 = prompt("Name the programming language that's also a snake.");
if ( answer1.toUpperCase() === 'PYTHON') {
  correct += 1;
}

const answer2 = prompt("What language do you use to style a webpage?");
if ( answer2.toUpperCase() === 'CSS') {
  correct += 1;
}

const answer3 = prompt("What language do you use to write the structure of a webpage?");
if ( answer3.toUpperCase() === 'HTML') {
  correct += 1;
}

const answer4 = prompt("What programming language has a name synonymous to a cup of coffee?");
if ( answer4.toUpperCase() === 'JAVA') {
  correct += 1;
}

const answer5 = prompt("Is it Ruby on Train Tracks? Or Ruby on Rails?");
if ( answer5.toUpperCase() === 'RUBY ON RAILS') {
  correct += 1;
}

/*
5. Rank player based on number of correct answers
- 5 correct = Gold
- 4 correct = Silver
- 3 correct = Bronze
- 2 correct = No crown
*/

if ( correct === 5 ) {
  rank = "Gold";
} else if (correct >= 3) {
  rank = "Silver";
} else if (correct >= 2) {
  rank = "Bronze";
} else {
  rank = "None :(";
}

// 6. Output results to the <main> element
main.innerHTML = `
<h2>You got ${correct} out of 5 questions correct.</h2>
<p>Crown earned: <strong>${rank}</strong></p>
<iframe src="https://giphy.com/embed/gf6iP1NIcDk7S" width="480" height="431" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ign-boards-ivemadeahugemistake-gf6iP1NIcDk7S">via GIPHY</a></p>
`
