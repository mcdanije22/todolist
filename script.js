let check = document.getElementById("check");
let input = document.getElementById("userInput");
let itemList = document.getElementById("list");
let enter = document.getElementById("enter");
let add = document.getElementsByClassName("add");
let clearBtn = document.getElementById("clear");

const inputLength = () => {
	return input.value.length;
}
const addList = () => {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	itemList.appendChild(li);
	let buttonTwo = document.createElement("button");
	buttonTwo.appendChild(document.createTextNode(""));
	li.appendChild(buttonTwo);
	buttonTwo.setAttribute("class","del far fa-times-circle");
	input.value = "";
}
const afterClick = () => {
	if (inputLength() > 0) {
		addList();
	} else {
		alert("Please enter an item first");
	}
}
const keyPressadd = (event) => {
	if(inputLength() > 0 && event.keyCode === 13){
		addList();
	} else if (inputLength() <= 0 && event.keyCode === 13){
		alert("Please enter an item first");
	}
}
const removeItem = (e) => {
	if(e.target.classList.contains("del")){
		let li = e.target.parentElement;
		itemList.removeChild(li);
	}
}
enter.addEventListener("click",afterClick);
input.addEventListener("keypress",keyPressadd);
itemList.addEventListener("click",removeItem);
clearBtn.addEventListener("click",clearList);


	const clearList = () => {
		let li = document.getElementById("ul");
		itemList.removeChild(li);
	}