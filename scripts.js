grid = (height, width) => {
    let container = document.querySelector(".container")
    for (let i = 0; i < height * width; i++) {
        const etchBox = document.createElement("div");
        etchBox.classList.add("boxes");
        etchBox.addEventListener("mouseover", () => {
            etchBox.style.backgroundColor = "black";
        });
        container.appendChild(etchBox);
    }
}

const resizeButton = document.querySelector(".resizeButton");
resizeButton.addEventListener("click", () => {
    let userHeight = prompt("Enter the new height you want (up to 100).");
    let userWidth = prompt("Enter the width you want to go with that (up to 100)");
    while (userHeight > 100 || userHeight > 100 || userHeight < 1 || userWidth < 1) {
        if (userHeight > 100 || userHeight < 1) {
            userHeight = prompt("Height Error, enter a new value");
        } 
        
        if (userWidth > 100 || userWidth < 1) {
            userWidth = prompt("Width Error, enter a new width");
        }
    }
});

grid(16, 16)