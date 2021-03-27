/************************ ALL NECCESSARY VARIBALES *********************************/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var dels = document.querySelectorAll('button')
var li = document.querySelectorAll("li")
var list_items = Array.from(li)
var delete_buttons = Array.from(dels)

/**********************************************************************************/

/*************************** ALL NECESSARY FUNCTIONS ******************************/

function inputLength() {
	return input.value.length;
}

function listen(){
	list_items.forEach((item) => {
		item.addEventListener('click', function(){item.classList.toggle('done')});
	})
}

function del(){
	delete_buttons.forEach((button) => {
		button.addEventListener('click', function(){
			var del = button.parentElement
			del.remove();
		})
	})
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button")
	li.classList.add('list-it')
	button.appendChild(document.createTextNode("delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
	list_items.push(li)
	delete_buttons.push(button)
	listen();
	del();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	} else {
		return;
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	} else {
		return;
	}
}

/****************************************************************/

listen();
del();


/******************* ALL EVENT LISTENERS **********************/
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
