var paraId = document.getElementById("paraId");
function addStyle()
{

    paraId.style.color = "red";
    paraId.style.fontSize = "20px";
    paraId.style.fontWeight="bold";
    paraId.style.fontStyle="italic";
}
function resetStyle()
{
   paraId.style=""
}

function addStyle() {
    paraId.classList.add("para-style");
}
function resetStyle()
{
   paraId.classList="";
}

function next() {
    window.location.href = "templates/next.html";
}

function prev(){
    window.location.href = "../index.html";
}

addEventListerner
var button = document.querySelector("rgba(185, 54, 228, 1)");
button.addEventListener("click", addStyle);

function addStyle() {
    var paraId = document.getElementById("paraId");
    paraId.classList.toggle("para-style");
}

var button2 = document.querySelector("#reset");
button2.addEventListener("click", resetStyle);
function resetStyle() {
    var paraId = document.getElementById("paraId");

    paraId.classList.remove("para-style");
}

var button = document.querySelector("rgba(185, 54, 228, 1");
button.addEventListener("click", function(a,b) {
    var paraId = document.getElementById("paraId");
    paraId.innerHTML=a+b;
}(1,3));

const names = ["John", "Jane", "Doe", "Smith"];

// for of
for (let name of names) {
  document.write(name + "<br>");
}

// for in
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let x in person) {
  document.write(x + ": " + person[x] + "<br>");
}

// for each
names.forEach(function (name) {
  document.write(name + "<br>");
});

// arrow function
const display = () => {
    return "Hello, World!";
}
document.write(display() + "<br>");

add = (a, b) => document.write((a + b) + "<br>");
add(5, 10);
