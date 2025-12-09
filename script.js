let input = document.querySelectorAll(".input");
let display = document.getElementById("result");
let result;
input.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.textContent === "C") {
            display.textContent = "";
            return;
        }
        if (btn.textContent === "=") {
            if(display.textContent.startsWith("√")){
            try{
                let number = Number(display.textContent.slice(1));
                result = Math.sqrt(number);
                display.textContent = result;
            } catch {
                display.textContent = "Error"
            }
            return;
        }
            try {
                result = eval(display.textContent);
                display.textContent = result;
            } catch {
                display.textContent = "Error"
            }
            return;
        }
        display.textContent += btn.textContent;
    })
});

