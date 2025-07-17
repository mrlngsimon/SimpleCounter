const number = document.getElementById('counter');

document.addEventListener("keydown", function(event) { 
    if (event.repeat) return;
    if(event.key == "ArrowUp") {
        number.textContent = parseInt(number.textContent) + 1;
        console.log(number.textContent);
    } else if(event.key == "ArrowDown") {
        if(parseInt(number.textContent) > 0)
            number.textContent = parseInt(number.textContent) - 1;
    }
})

let darkMode = false;

const lightModeBg = "#ffffff";
const darkModeBg = "#000000";

document.addEventListener('keydown', function(event) { 
    if(event.repeat) return;
    if(event.key === "t") {
        if(darkMode) {
            console.log("Turning dark mode off");
            document.body.style.backgroundColor = lightModeBg;
            document.body.style.color = "black";
            darkMode = false;
        } else {
            console.log("Turning dark mode on");
            document.body.style.backgroundColor = darkModeBg;
            document.body.style.color = "white";
            darkMode = true;
        }
    }
})

let numberTyped = "";

document.addEventListener('keydown', function(event){
    if(event.repeat) return;
    if(/^\d$/.test(event.key)) {
        numberTyped += event.key;
        console.log(numberTyped);
    } else if(event.key === "Enter") {
        if(numberTyped === "")
            return;
        number.textContent = parseInt(numberTyped);
        numberTyped = "";
    } else {
        numberTyped = "";
        console.log(numberTyped);
    }

})