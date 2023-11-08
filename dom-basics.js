const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

// you can add the different elements and append each of them one by one to the section
const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "Welcome to Javascript Language";
newSection.appendChild(newP);

document.body.appendChild(newSection);

// you can write the html code right into the innerHTML. Both of these give the same output.
const newAndImprovedSection = document.createElement("section");
newAndImprovedSection.innerHTML = "<h2>CSE 121b</h2> <p>Welcome to Javascript Language</p>";
document.body.appendChild(newAndImprovedSection);
