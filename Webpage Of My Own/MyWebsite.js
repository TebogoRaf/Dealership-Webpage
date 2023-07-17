// Fibonacci Series
function fibonacci(n) {
  let fibSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  return fibSeries;
}

// Factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Mouse events
function createImage(event) {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const x = event.offsetX;
  const y = event.offsetY;
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "red";
  context.beginPath();
  context.arc(x, y, 20, 0, 2 * Math.PI);
  context.fill();
}

// Fibonacci Series
const fibInput = document.getElementById("fib-input");
const fibButton = document.getElementById("fib-button");
const fibResult = document.getElementById("fib-result");

fibButton.addEventListener("click", () => {
  const n = parseInt(fibInput.value);
  if (isNaN(n)) {
    fibResult.textContent = "Invalid input";
  } else {
    const result = fibonacci(n);
    fibResult.textContent = result.join(", ");
  }
});

// Factorial
const factInput = document.getElementById("fact-input");
const factButton = document.getElementById("fact-button");
const factResult = document.getElementById("fact-result");

factButton.addEventListener("click", () => {
  const n = parseInt(factInput.value);
  if (isNaN(n)) {
    factResult.textContent = "Invalid input";
  } else {
    const result = factorial(n);
    factResult.textContent = result;
  }
});

// Mouse events
const canvas = document.getElementById("canvas");
canvas.addEventListener("click", createImage);

 document.getElementById("submit-btn").addEventListener("click", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
        var country = document.getElementById("country").value;

        if (password !== confirmPassword) {
          alert("Passwords do not match!");
        } else {
          var userData = "<tr><td>" + name + "</td><td>" + email + "</td><td>" + password + "</td><td>" + country + "</td></tr>";
          document.getElementById("user-data").innerHTML += userData;
          document.getElementById("registration-form").reset();
        }
      });
	   document.getElementById("reset-btn").addEventListener("click", function () {
        document.getElementById("registration-form").reset();
      });

      document.getElementById("insert-btn").addEventListener("click", function () {
        alert("Data inserted successfully!");
      });