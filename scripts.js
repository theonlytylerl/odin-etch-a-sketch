grid = (height, width) => {
    let container = document.querySelector(".container")
    for (let i = 0; i < height * width; i++) {
        const etchBox = document.createElement("div");
        etchBox.classList.add("boxes");
        container.appendChild(etchBox);
    }
}

grid(16, 16)