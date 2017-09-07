var bubble = document.getElementById('bubble');
bubble.style.cssText = 'float:left;padding: 10px 10px 0px 10px;';
var select = document.getElementById('select');
select.style.cssText = 'float:left;padding: 10px 10px 0px 10px;';
var insert = document.getElementById('insert');
insert.style.cssText = 'float:left;padding: 10px 10px 0px 10px;';
var transitionValue = 1;
var max = 100;

var count = 0;
for(var i = 0;i<max;i++){
	var c = document.createElement('div');
	c.id = 'bchild' + (count++);
	c.style.cssText = 'width : ' + parseInt(Math.random()* (100 - 10) + 10) + 'px; height:'+ 1 +'px; border: 1px solid;transition: '+transitionValue+'s;';
	bubble.appendChild(c);
}

var count = 0;
for(var i = 0;i<max;i++){
	var c = document.createElement('div');
	c.id = 'schild' + (count++);
	c.style.cssText = 'width : ' + parseInt(Math.random()* (100 - 10) + 10) + 'px; height:'+ 1 +'px; border: 1px solid;transition: '+transitionValue+'s;';
	select.appendChild(c);
}

var count = 0;
for(var i = 0;i<max;i++){
	var c = document.createElement('div');
	c.id = 'ichild' + (count++);
	c.style.cssText = 'width : ' + parseInt(Math.random()* (100 - 10) + 10) + 'px; height:'+ 1 +'px; border: 1px solid;transition: '+transitionValue+'s;';
	insert.appendChild(c);
}


function getChildWidth(child){
	var childWidth = child.style.width.length;
	return child.style.width.substring(0,childWidth-2);
}

var bubbleSort = function (){
	for(var i=max-1;i>=0;i--){
		for(var j=0;j<=i;j++){
			var child0 = document.getElementById('bchild'+i);
			var child1 = document.getElementById('bchild'+j);
			
			var a = getChildWidth(child0);
			var b = getChildWidth(child1);
				if(b > a){
						child0.style.width = b+'px';
						child1.style.width = a+'px';
				}
		}
	}

}

var selectionSort = function (){
	for(var i=0;i<max;i++){
		var child0 = document.getElementById('schild'+i);
		var a = getChildWidth(child0);
		var min = i;
		for(var j=i;j<max;j++){
			var child1 = document.getElementById('schild'+j);
			var b = getChildWidth(child1);
			
			var childMin = document.getElementById('schild'+min);
			var c = getChildWidth(childMin);			

			if(b < c){
					min = j;
				}
		}
		child0.style.width = c+'px';
		childMin.style.width = a+'px';
	}

}

var insertionSort = function (){
  for(var i = 1; i < max; i++) {
	var childi = document.getElementById('ichild'+i);
	var a = getChildWidth(childi);
	
	var j = i - 1;
	var childj = document.getElementById('ichild'+j);
	var b = getChildWidth(childj);
	
	var k = j + 1;
	var childk = document.getElementById('ichild'+k);
	var c = getChildWidth(childk);
	
    for(; j >= 0 && b > a; j--) {
		childk.style.width = b+'px';
    }
		childk.style.width = a+'px';
  }
}

var allSort = function (){
	bubbleSort();
	insertionSort();
	selectionSort();
}