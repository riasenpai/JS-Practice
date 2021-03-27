
function handleClick(){
    alert("I got clicked!")
}

for(let element of document.getElementById("butClass").getElementsByTagName("button")){
    console.log(element)
    element.addEventListener("click",handleClick)
}
