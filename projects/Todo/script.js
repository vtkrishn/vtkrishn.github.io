var buttonClick = function(event){
    var value = document.getElementById('item').value;
    if(value){
        addItemTodo(value);
    }
}

var checkClick = function(){
    var item = this.parentNode;
    document.getElementById('completed').prepend(item);
}

var deleteClick = function(){
    var item = this.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

var addItemTodo = function(value){
    var list = document.createElement("li");
        list.innerHTML = value;
        addButtons(list);
        
        document.getElementById('list').prepend(list);
        document.getElementById('item').value = null;
}

var addButtons = function(list){
    var del = document.createElement('button');
    var complete = document.createElement('button');
    del.classList.add('remove')
    del.setAttribute("id","delete");
    
    complete.classList.add('complete')
    complete.setAttribute("id","check");
    
    del.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path class="fill" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"/></svg>';
    
    complete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path class="fill" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>';
    
    complete.addEventListener('click',checkClick);
    del.addEventListener('click',deleteClick);
    
    list.appendChild(complete);
    list.appendChild(del);
}


document.getElementById('add').addEventListener('click',buttonClick);

//(function(exports){
//    'use strict';
//    
//    var $ = (function(tagName){
//      
//      return function(tagName){
//        console.log(tagName);
//      }
//    }()); 
//  
//    console.clear()
//    //console.log('vinod');
//    
//  exports.$ = $;
//  
//})(typeof window === 'undefined' ? module.exports : window)