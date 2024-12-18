const containerSize = 720;
const borderSize = 1.829; // Length of the border
let userHeight = 16;
let userWidth = 16;
let boxSize = [0, 0] // [height, width]

const container = document.querySelector(".container");


findBoxSize = (height, width) => {
    let boxHeight = ((containerSize - (userHeight * borderSize)) / height);
    let boxWidth = (containerSize - (userWidth * borderSize)) / width;
    boxSize = [boxHeight, boxWidth];
}

makeGrid = (userHeight, userWidth) => {
    findBoxSize(userHeight, userWidth);
    for (let i = 0; i < userHeight * userWidth; i++) {
        const etchBox = document.createElement("div");
        etchBox.classList.add("boxes");
        etchBox.style.height = boxSize[0].toString() + "px";
        etchBox.style.width = boxSize[1].toString() + "px";
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
    userWidth = userHeight
    while (userHeight > 100 || userHeight > 100 || userHeight < 1 || userWidth < 1) {
        if (userHeight > 100 || userHeight < 1) {
            userHeight = prompt("Height Error, enter a new value");
        } 
        
        if (userWidth > 100 || userWidth < 1) {
            userWidth = prompt("Width Error, enter a new width");
        }
    }

    let numberOfBoxes = container.childElementCount;
    for (let i = 0; i < numberOfBoxes; i++) {
        const box = document.querySelector(".container>div");
        console.log(box);
        container.removeChild(box);
    }

    makeGrid(userHeight, userWidth);
});

// Initial grid
grid(userHeight, userWidth)