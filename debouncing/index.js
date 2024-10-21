let count = 0;

function GetData() {
  console.log("Fetch Data", count++);
}

function keyPressFunction(call, d) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, d);
  };
}

const mainFunction = keyPressFunction(GetData, 3000);
