(function(exports){

console.clear();
sessionStorage.setItem('index', 1);

  var container = document.createElement("div");
  var textStack = document.createElement("div");
  var addElement = document.createElement("input");
  //var removeElement = document.createElement("input");
  var brk = document.createElement("br");

  addElement.setAttribute("type","button");
  addElement.setAttribute("id","add");
//   removeElement.setAttribute("type","button");
//   removeElement.setAttribute("id","remove");
//   removeElement.disabled=true;
//   removeElement.style="opacity:0.2;";

  container.style = "display:block;margin-left:"+parseInt(window.innerWidth/2)+"px;";
  container.appendChild(addElement);
  //container.appendChild(removeElement);
  document.body.appendChild(container);
  document.body.appendChild(brk);
  document.body.appendChild(textStack);
  document.body.appendChild(brk);

var add = document.getElementById("add");
//var remove = document.getElementById("remove");

add.addEventListener('click',function(){
  var index = parseInt(sessionStorage.getItem('index'));
  var textElem = document.getElementById("txt"+index);

  if(textElem === null || textElem.value !== ""){
      var newText = document.createElement("input");
      var textDel = document.createElement("div");
      var textContainer = document.createElement("div");

    newText.setAttribute("type","text");
    var id = parseInt(sessionStorage.getItem('index')) + 1;
    sessionStorage.setItem('index', id);

    newText.setAttribute("id","txt"+id);
    textDel.setAttribute("id","textDel"+id);
    var marker = document.createElement("input");
     marker.setAttribute("type","button");
    marker.setAttribute("id","marker"+id);
    marker.style = "margin-left : 2px;background: url('http://www.iconsfind.com/wp-content/uploads/2017/02/20170214_58a28e215138d.png') no-repeat left;border :none;background-size: 10px;background: width: 10px;display:none;";
    marker.addEventListener('click',function(){
      var val = newText.id;
     var delId = val.substring(val.length-1);
      var storageId = sessionStorage.getItem('index');
      sessionStorage.setItem('index', storageId-1);
      textStack.removeChild(document.getElementById("textContainer"+delId));
    });

    textDel.appendChild(marker);
    textContainer.setAttribute("id","textContainer"+id);

  newText.addEventListener('blur',function(){
       if(newText.value !== ""){
        newText.style = "border: none;background-color: #d8d9d9;color : #898a8b;border: solid 1px #898a8b;text-align: right;font-style: italic;";
        textContainer.style = "";
         marker.style = "margin-left : 2px;background: url('http://www.iconsfind.com/wp-content/uploads/2017/02/20170214_58a28e215138d.png') no-repeat left;border :none;background-size: 10px;background: width: 10px;display:none;"
       }
    });
  newText.addEventListener('focus',function(){
    newText.style = "background-color: white;";
    textContainer.style = "border: solid 1px #f2917a;background-color:#efd0c8;";
    marker.style = "margin-left : 2px;background: url('http://www.iconsfind.com/wp-content/uploads/2017/02/20170214_58a28e215138d.png') no-repeat left;border :none;background-size: 10px;background: width: 10px;display:visible;"
    //marker.style ="background-color: #f43c10;position: absolute;height:5px;width : 5px;";
    });

  textDel.appendChild(newText);
  textContainer.appendChild(textDel);
  textStack.appendChild(textContainer);
  //removeElement.disabled=false;
  //removeElement.style="opacity:1;";
  }
});



// remove.addEventListener('click',function(){
//   var id = parseInt(sessionStorage.getItem('index'));
//   var textContainer = document.getElementById("textContainer"+id);
//   if(id > 1){
//     sessionStorage.setItem('index', id-1);
//     textStack.removeChild(textContainer);

//     removeElement.disabled=false;
//     removeElement.style="opacity:1;";
//   }

//   if(id === 2){
//     removeElement.disabled=true;
//     removeElement.style="opacity:0.2;";
//     sessionStorage.setItem('index', 1);
//   }
// });
})(this);
