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
