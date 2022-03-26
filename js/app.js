// made 4 functions, one for onclick navigation to the selection page
//and one each for the companion selection

function goToSelection(){
    document.getElementsByTagName("button").onclick = window.location.href="selection.html"; 
}
function setDogmeat(){
    Cookies.set("Companion", "Dogmeat");
}

function setDeacon(){
    Cookies.set("Companion", "Deacon")
}

function setCait(){
    Cookies.set("Companion", "Cait")
}

var username = Cookies.get("Companion"); 

document.getElementById("companion").innerText = (username);
//made it so the h2 tag on selection page displayed the var username
//which was set to the cookie set by companion choice.
