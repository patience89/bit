"use strict"; 

function bit(value) {
	var element = null;
	if (value instanceof Element){
		element = value;
	} else	if (value.charAt(0) == '#') { // 아이디일 경우,
	  elment = document.getElementById(value.substring(1));
	} else if (value.charAt(0) == '<') { // 태그일 경우,
	  elment = document.createElement(value.replace(/<|>/g, ''));	
	}
}
element.text = function(value){
	this.textContent = value;
};
element.html = function(value){
	this.innerHTML = value;
};
element.append = function(value){
	this.appendChild(child);
};
element.appendTo = function(parent){
	parent.appendChild(this)
};

element.attr = function(name, value){
	this.setAttribute(name,value);
	return this;
};
element.click = function(listener){
	if (listener) {
		this.onclick = listener;
	} else {
		var event = new MouseEvent('click', {
			'view': window,
			'bubbles': true,
			'cancelable': true
		});

		//2) reset  버튼에게 이벤트 전달
		$('#btnCancel').dispatchEvent(event);
	}
	}
	return this;
};
element.value = function( value){
	this.value = value;
	return this;
};
element.css=function(name, value){
	this.style[name] = value;
	return this;
};

return element;//뭘까?


/*td.html(boardList[i].writer);
text = document.createTextNode(boardList[i].writer);
	td.appendChild(text);*/

var $ = bit;

// 함수도 객체다! 저장소로 사용될 수 있다.
bit.toYYYYMMDD = function(date) {
	return date.getFullYear() + '-' +
	  (date.getMonth() + 1) + '-' +
	  date.getDate();
};
