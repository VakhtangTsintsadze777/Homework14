let box = document.querySelector(".box");


let h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "ვენეცია";
h1.style.color = ("red");
box.appendChild(h1);

let description = document.createElement("p");
description.textContent = "ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.";
description.style.color = "#ffff00";
description.style.fontSize = "20px"; 
description.style.textAlign = "center";
box.appendChild(description);

let circle = document.createElement("div");
circle.classList.add("circle");

circle.onmouseover = function() {mouseOver()};
circle.onmouseout = function() {mouseOut()};

function mouseOver() {
  circle.style.backgroundColor = "red";
}

function mouseOut() {
    circle.style.backgroundColor = "yellow";
  }

box.appendChild(circle);

let button = document.createElement("button");
button.classList.add("button");
button.textContent = "DELETE CIRCLE";
button.addEventListener("click", ()=>{
    if (button.textContent == "DELETE CIRCLE") {
        button.textContent = "RETURN CIRCLE";
        button.style.backgroundColor = "green";
        circle.style.display = "none";
    } else {
        button.textContent = "DELETE CIRCLE";
        button.style.backgroundColor = "red";
        circle.style.display = "block";

    }
})
box.appendChild(button);







