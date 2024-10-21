let increment = document.getElementById("increment");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let reset = document.getElementById("reset");

let number_reset = 1;

increment.addEventListener("change", function (e) {
  number_reset = parseInt(e.target.value);
});

add.addEventListener("click", function (e) {
  let curr = document.getElementById("number");
  let total = parseInt(curr.innerHTML) + number_reset;

  curr.innerHTML = total;
});

sub.addEventListener("click", function (e) {
  let curr = document.getElementById("number");
  let total = parseInt(curr.innerHTML) - number_reset;
  if (total < 0) total = 0;
  curr.innerHTML = total;
});

reset.addEventListener("click", function (e) {
  let curr = document.getElementById("number");
  curr.innerHTML = 0;
});
