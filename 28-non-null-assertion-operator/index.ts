//Non-null Assertion Operator

const p = document.getElementById("some-p")
console.log(p!.innerText)


p!.addEventListener("click",changeTextWithClick)
function changeTextWithClick(){
  p!.innerText="Hello, Dude"
}