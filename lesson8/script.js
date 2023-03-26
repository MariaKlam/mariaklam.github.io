var counter = 0;

function CounterLogic(action) {let count = 0;
      function CounterLogicr(button) {
      var displayCout = document.getElementById("displayCounter");
      displayCout.innerHTML = 0;
  
      document.getElementById("increment").onclick = function () {
        displayCout.innerHTML = productCounter.incrementCounter();
      };
      document.getElementById("decrement").onclick = function () {
        displayCout.innerHTML = productCounter.decrementCounter();
      };
      document.getElementById("reset").onclick = function () {
        displayCout.innerHTML = productCounter.resetCounter();
      };
    }