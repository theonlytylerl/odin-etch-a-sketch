makeGrid = (userHeight, userWidth) => {
    let container = document.querySelector(".container");
    for (let i = 0; i < userHeight * userWidth; i++) {
        const etchBox = document.createElement("div");
        etchBox.classList.add("boxes");
        etchBox.addEventListener("mouseover", () => {
            etchBox.style.backgroundColor = "black";
        });
        container.appendChild(etchBox);
    }
} 

grid = (height, width) => {
    makeGrid(height, width);
}


const resizeButton = document.querySelector(".resizeButton");
resizeButton.addEventListener("click", () => {
    userHeight = prompt("Enter the new height you want (up to 100).");
    userWidth = prompt("Enter the width you want to go with that (up to 100)");
    while (userHeight > 100 || userHeight > 100 || userHeight < 1 || userWidth < 1) {
        if (userHeight > 100 || userHeight < 1) {
            userHeight = prompt("Height Error, enter a new value");
        } 
        
        if (userWidth > 100 || userWidth < 1) {
            userWidth = prompt("Width Error, enter a new width");
        }
    }

    const container = document.querySelector(".container");
    container.style.width = 15.81 * userWidth + "px";
    container.style.height = 15.81 * userHeight + "px";

    let numberOfBoxes = container.childElementCount;
    for (let i = 0; i < numberOfBoxes; i++) {
        const box = document.querySelector(".container>div");
        console.log(box);
        container.removeChild(box);
    }

    makeGrid(userHeight, userWidth);
});

grid(16, 16)