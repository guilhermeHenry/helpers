const insertAfter = require('../../src/insertAfter.js');

let ul = document.createElement('ul');
let li = null;

for (var i = 0; i < 10; i++) {
	li = document.createElement('li');
	li.innerHTML = 'Item ' + i;
	ul.appendChild(li);
}

button.addEventListener('click', function () {
	insertAfter(ul, elementParent);
});



























