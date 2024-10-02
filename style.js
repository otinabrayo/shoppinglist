let input = document.getElementById("input");
let heading = document.getElementById("first");
let button = document.getElementById("enter");
let ul  = document.querySelector("ul");
let listitems = document.getElementsByTagName("li");
let body = document.querySelector("div")

const inputlength=()=>{
    return input.value.length;
}
const createListElement=()=>{
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    
    let deletebutton = document.createElement("button");
    deletebutton.appendChild(document.createTextNode("X"));
    li.appendChild(deletebutton);
    deletebutton.onclick = removeParent;
}
const addListAfterClick=()=>{
    if(inputlength() > 0){
        createListElement(); 
      } 
}
const addListAfterKeypress=(event)=>{
        if(inputlength() > 0 && event.keyCode=== 13){
            createListElement();
        }
}
ul.onclick = (event)=>{
    var target = event.target;
    target.classList.toggle("done");
}
const listlength=()=> listitems.length;

const delbutton=()=>{
    let deletebutton = document.createElement("button");
    deletebutton.appendChild(document.createTextNode("X"));
    listitems[i].appendChild(deletebutton)
    deletebutton.onclick = removeParent;
}
for(i=0; i<listlength();i++){
    delbutton();
}
function removeParent(evt){
    evt.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)

button.style = "margin-left:4em; padding:.4em 3em;border-radius:.5em;font-size:18px"
input.style = "margin-left:4em; padding:.4em 3em;border-radius:.5em;text-align:center;font-size:18px"
heading.style = "font-size:20px;"
