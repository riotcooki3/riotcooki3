const myImage = document.querySelector("img");

myImage.onclick = () => 
{
    const mySource = myImage.getAttribute("src");
    if (mySource === "images/business-man-thinking-clipart-md.png") 
    {
        myImage.setAttribute("src", "images/raph.jpeg");
    }
    else
    {
        myImage.setAttribute("src", "images/duck.jpg");
    }
};

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}