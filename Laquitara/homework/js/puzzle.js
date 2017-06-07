function allowDrop(ev) { //function to allow the user to drop the pictures
    ev.preventDefault();
}

function drag(ev) { //function to allow the user to drag the pictures 
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) { 
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function display() { //assigning a variable to each div 
    var x = document.getElementById("div1").querySelectorAll("img")[0].id;
    var y = document.getElementById("div2").querySelectorAll("img")[0].id;
    var z = document.getElementById("div3").querySelectorAll("img")[0].id;
    var t = document.getElementById("div4").querySelectorAll("img")[0].id;
    //if statement to alert the user if they have completed the puzzle correctly 
    if (x == "drag3" && y == "drag1" && z == "drag4" && t == "drag2")
        alert("Great! You completed the puzzle!");
    else
        alert("Try again!");
}



