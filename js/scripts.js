// constants for query selector
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imagesElement = document.getElementById("images");
const myStudentIdElement = document.getElementById("myStudentId");

// function to change bg color from user input and add student id
function changeCustomColor() {
    const inputValue = customNumberInput.value;
    const colors = ["red", "green", "blue", "orange", "purple", "yellow"];
    
    if (inputValue >= 1 && inputValue <= 100) {
        const colorIndex = Math.floor(inputValue / 20);
        document.body.style.backgroundColor = colors[colorIndex];
        myStudentIdElement.textContent = "Student ID: 200503845";
    } else {
        alert("Please enter a number between 1 and 100.");
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomInputValue = Math.floor(Math.random() * 100) + 1;
    const colorIndex = Math.floor(randomInputValue / 20);
    document.body.style.backgroundColor = colors[colorIndex];
    myStudentIdElement.textContent = "Student ID: 200503845";
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    const imageOptions = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg","img5.jpg"];
    for (const imageOption of imageOptions) {
        const option = document.createElement("option");
        option.value = imageOption;
        option.textContent = imageOption;
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    if (selectedImage) {
        imagesElement.src = "img/" + selectedImage;
    }
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);

addList();