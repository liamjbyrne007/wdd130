const newParagraph = document.createElement('p');
newParagraph.innerText = "Added with Javascripte!";
document.body.appendChild(newParagraph);
const randomImage = document.createElement('img');
randomImage.setAttribute('src', 'https://picsum.photos/200');
randomImage.setAttribute('alt', 'A random, 200 pixel, image.');
document.body.appendChild(randomImage);
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);
const newHeader = document.createElement('h2')
newHeader.innerText = 'Welcome to JavaScript Language';
document.body.appendChild(newHeader);