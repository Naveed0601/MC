let num = "naveed";
let left = 0;
let right = num.length - 1;

const arr = num.split("");

while (left <= right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  left++;
  right--;
}

num = arr.join("");

console.log(num);
