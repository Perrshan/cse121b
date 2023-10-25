/*const PI = 3.14;
console.log(PI);
let radius = 3;
console.log(radius);
let area = 0;
console.log(area);
area = radius * radius * PI;
console.log(area);
radius = 4;
console.log(radius);
area = radius * radius * PI;
console.log(area);*/

const PI = 3.14;
let area = 0;
function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}
area = circleArea(3);
console.log("Area 1:", area);

area = circleArea(5);
console.log("Area 2:", area);