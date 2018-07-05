var check = document.getElementById("check");
var input = document.getElementById("userInput");
var itemList = document.getElementById("list");
var enter = document.getElementById("enter");
var add = document.getElementsByClassName("add");

function inputLength () {
	return input.value.length;
}
function addList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	itemList.appendChild(li);
	var button = document.createElement("button");
	button.appendChild(document.createTextNode(" "));
	li.appendChild(button);
	button.setAttribute("class","add");
	var buttonTwo = document.createElement("button");
	buttonTwo.appendChild(document.createTextNode(""));
	li.appendChild(buttonTwo);
	buttonTwo.setAttribute("class","del far fa-times-circle");
	input.value = "";
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
itemList.addEventListener("click",removeItem);

function done (){
	document.getElementByClassNames("btn").style.backgroundColor = "#4CAF50"
}
	/*function removeItem (e) {
		var li = e.target.parentElement;
		itemList.removeChild(li);
	}*/

	function removeItem(e){
		if(e.target.classList.contains("del")){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}else if (e.target.classList.contains("add")){			
	itemList.style.backgroundColor = "#4CAF50"

		}
	}
	