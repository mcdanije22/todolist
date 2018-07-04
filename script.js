var check = document.getElementById("check");
var input = document.getElementById("userInput");
var ul = document.getElementById("list");
var enter = document.getElementById("enter");
var add = document.getElementsByClassName("add");

function inputLength () {
	return input.value.length;
}
function addList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var button = document.createElement("button");
	button.appendChild(document.createTextNode(" "));
	li.appendChild(button);
	button.setAttribute("class","add");
	var buttonTwo = document.createElement("button");
	buttonTwo.appendChild(document.createTextNode(""));
	li.appendChild(buttonTwo);
	buttonTwo.setAttribute("class","del far fa-times-circle");
	input.value = "";

	var deleteBtn = document.createElement("del");
}
function afterClick (){
	if (inputLength() > 0) {
		addList();
	} else {
		alert("Please enter item first");
	}
}
function keyPressadd(event) {
	if(inputLength() > 0 && event.keyCode === 13){
		addList();
	} else if (inputLength() <= 0 && event.keyCode === 13){
		alert("Please enter item first");
	}
}
enter.addEventListener("click",afterClick);
input.addEventListener("keypress",keyPressadd);

function done (){
	document.getElementByClassNames("btn").style.backgroundColor = "#4CAF50"
}
//btn.addEventListener("click",done);
