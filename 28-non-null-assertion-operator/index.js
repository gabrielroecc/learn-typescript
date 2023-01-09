//Non-null Assertion Operator
var p = document.getElementById("some-p");
console.log(p.innerText);
p.addEventListener("click", changeTextWithClick);
function changeTextWithClick() {
    p.innerText = "Hello, Dude";
}
