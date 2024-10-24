```javascript
function rockPaperScissors(input) {
  const random = Math.floor(Math.random() * 100);
  let opponentChoice;
  let outcome;

  for (let i = 0; i <= random; i++) {
    if (i % 3 == 0) {
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }
  }

  if (opponentChoice == "rock") {
    if (input == 1) {
      outcome = "win";
    } else if (input == 2) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else if (opponentChoice == "paper") {
    if (input == 2) {
      outcome = "win";
    } else if (input == 0) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else {
    if (input == 0) {
      outcome = "win";
    } else if (input == 1) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  }
  history.push(outcome);

  DOMSelectors.history.innerHTML = "";
  DOMSelectors.content.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="${outcome}">
    <p>Your choice: ${returnInput(input).toUpperCase()}</p>
    <p>Opponent choice: ${opponentChoice.toUpperCase()}</p>
    <h4>${outcome.toUpperCase()}</h4>
    </div>
    `
  );
}
```

This is the algorithm

```javascript
 for (let i = 0; i <= random; i++)
```

This is the iteration

```javascript
if (opponentChoice == "rock") {
  if (input == 1) {
    outcome = "win";
  } else if (input == 2) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
} else if (opponentChoice == "paper") {
  if (input == 2) {
    outcome = "win";
  } else if (input == 0) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
} else {
  if (input == 0) {
    outcome = "win";
  } else if (input == 1) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
}
```

Binary to Decimal

1. n = length of binary
2. split binary into individual numbers
3. for each value check if value = 1
4. if value = 1 add 2^n power to decimal
5. after each do n-=1
6. return decimal

Decimal to Binary
for i = 8; i>0; i-=1; decimal < 0{
if 2^i < decimal{
decimal -= 2^i
}
}
