myitem = document.getElementById("clickable");

myitem.addEventListener("click", onClick);

function onClick() {  

    myitem.style.color = "red";

    myitem.style.fontFamily = "Courier", "Times", "Times New Roman";  
}
myitem.addEventListener("mouseout", onMouseOut);

function onMouseOut() { 

    myitem.style.color = "blue";
    myitem.style.fontFamily = "";
}