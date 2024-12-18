const containerSize = 720;
const borderSize = 2; // Length of the border
let userHeight = 16;
let userWidth = 16;
let boxSize = [0, 0] // [height, width]
let opacityToggle = 0

const container = document.querySelector(".container");
const letters = ["A","B","C","D","E","F"];
let number = 0;

randomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let random = Math.random();
        if (random < .5) {
            color += `${Math.floor(Math.random()*10)}`;
        } else {
            color += letters[Math.floor(Math.random()*6)];
        }
    }
    return color;
}


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
            etchBox.style.backgroundColor = randomColor();
            if (opacityToggle == 1) {
                let boxOpacity = Number(etchBox.style.opacity);
                if (boxOpacity == 1){
                    etchBox.style.opacity = 0;
                } else {
                    boxOpacity += .1;
                    etchBox.style.opacity = boxOpacity.toString();
                }
            } else {
                etchBox.style.opacity = 1;
            }
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
    userWidth = userHeight;
    while (userHeight > 100 || userHeight > 100 || userHeight < 1 || userWidth < 1) {
        if (userHeight > 100 || userHeight < 1) {
            userHeight = prompt("Height Error, enter a new value");
            userWidth = userHeight;
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

// Allows user to enable or disable the opacity feature for the boxes.
const opacityButton = document.querySelector(".opacityToggle");
opacityButton.addEventListener("click", () => {
    if (opacityToggle == 0) {
        opacityToggle = 1
    } else {
        opacityToggle = 0
    }
})

// Initial grid
grid(userHeight, userWidth)
console.log(randomColor())