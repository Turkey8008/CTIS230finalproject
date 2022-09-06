myitem2 = document.getElementById("clickmain");

myitem2.addEventListener("click", MainClick);

function MainClick() {  

    myitem2.style.color = "red";

    myitem2.style.fontFamily = "Courier", "Times", "Times New Roman";  
}

myitem2.addEventListener("mouseout", MainMouseOut);

function MainMouseOut() { 

    myitem2.style.color = "gold";
    myitem2.style.fontFamily = "";
}