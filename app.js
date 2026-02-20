let todoInputEl = document.querySelector(".todo-input");
let btnAddEl = document.querySelector(".btn-add");
let ulDisplayEl = document.querySelector(".ul-display");

let htmlText = "<li>first todo</li>";

btnAddEl.addEventListener("click", () => {
  const inputValue = todoInputEl.value;
  if (inputValue.trim().length < 1) {
    alert("Iltimos oldin todo kiriting!!!");
    return;
  }
  htmlText += `<li> ${inputValue} </li>`;
  ulDisplayEl.innerHTML = htmlText;
  console.log(htmlText);
  todoInputEl.value = "";
});
