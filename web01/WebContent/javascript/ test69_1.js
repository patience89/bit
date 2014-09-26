"use strict"; 
//태그 모둠 = > class 속성

var elements = document.querySelectorAll('.detail');
for (var i = 0; i < elements.length; i++) {
	elements[i].style.display = 'none';
}
 var toYYYYMMDD= new Date();
 
function changeState(state){
	var stateMap={
	create:'none',
	detail:'none'
	};
	
	stateMap[state]='';	
	
	var createState = 'none';
	var detailState = 'none';
	
	if(state =='craete'){
		createState='';
	}else if(state=='detail'){
		detailState='';
	}
	var detailClass = document.querySelectorAll('.detail');
	var createClass = document.querySelectorAll('.create');

	for(var i=0; i<detailClass.length;i++){
		detailClass[i].style.display=stateMap.detail;
	}
	for(var j=0; j<createClass.lenght;j++){
		createClass[j].style.dispay=stateMap.create;

}
}


var boardList =[];
function Board(title,content,writer,password){
	this.title=title;
	this.content=content;
	this.writer=writer;
	this.password=password;
	this.date=new Date();
	this.count = 0;
	
}
function resetForm(){
	//reset 버튼에게 click이벤트 전달
	//1)MouseEvent객체 생성
	var event = new MouseEvent('click',{});
	document.getElementById('btnCancel').dispatchEvent(event);
}


document.getElementById('btnCancel').onclick=function(event){
var detailClass = document.querySelectorAll('.detail');
var createClass = document.querySelectorAll('.create');

for(var i=0; i<detailClass.length;i++){
	detailClass[i].style.display='none';
}
for(var j=0; j<createClass.lenght;j++){
	createClass[j].style.dispay='';
}
}
document.getElementById('btnAdd').onclick=function(event){
	var board =new Board(
	
			document.getElementById('title').value,
			document.getElementById('content').value,
			document.getElementById('writer').value,
			document.getElementById('password').value
			);
	
	boardList.push(board);		
	resetForm();	
	refreshBoardList();
}
function refreshBoardList(){
	var boardTable = document.getElementById('boardTable');
	//var tbody = boardTable.children[0];
	var tbody = boardTable.firstElementChild;
	for(var i =tbody.children.length-1; i>0;i--){
		//console.log(tbody.children[i]);
		tbody.removeChild(tbody.children[i]);
	}
	var tr=null;
	var td=null;
	var a=null;
	var text=null;
	
	for(var i in boardList){
		tr = document.createElement('tr');
		
		td = document.createElement('td');
		text=document.createTextNode(i);
		td.appendChild(text);
		tr.appendChild(td);
		
		td = document.createElement('td');
		a = document.createElement('a');//a태그 생성
		text=document.createTextNode(boardList[i].title);
		//일반 객체가 아니라 엘리먼트에 없던 속성을 추가할 때는
		// setAttribute()를 사용함
		
		a.setAttribute('bno', new String(i));
		a.href = '#';
		a.onclick = loadBoardDetail;
		text=document.createTextNode(i);//
		a.appendChild(text);
		td.appendChild(a);
		tr.appendChild(td);
		
		td = document.createElement('td');
		text=document.createTextNode(boardList[i].writer);
		td.appendChild(text);
		tr.appendChild(td);
		
		td = document.createElement('td');
		text=document.createTextNode($.toYYYYMMDD(boardList[i].date));
		td.appendChild(text);
		tr.appendChild(td);
		
		td = document.createElement('td');
		text=document.createTextNode(boardList[i].count);
		td.appendChild(text);
		tr.appendChild(td);
		
		tbody.appendChild(tr);
		} 
}
function loadBoardDetail(event){		
	var detailClass = document.querySelectorAll('.detail');
	var createClass = document.querySelectorAll('.create');
	
	for(var i=0; i<detailClass.length;i++){
		detailClass[i].style.display='';
	}
	for(var j=0; j<createClass.lenght;j++){
		createClass[j].style.dispay='none';
	}//대신에 changeState()로 대챠
	event.preventDefault();
	changeState('detail');
	var board = boardList[this.getAttribute('bno')];
	document.getElementById('no').value = this.getAttribute('bno');
	document.getElementById('title').value = board.title;
	document.getElementById('content').value = board.content;
	document.getElementById('writer').value = board.writer;
	document.getElementById('date').value = $.toYYYYMMDD(board.date);
}



