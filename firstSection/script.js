//1. Select the section with an id of container without using querySelector.
var mySection = document.getElementById('container');

//2. Select the section with an id of container using querySelector.
document.querySelector('#container');

//3. Select all of the list items with a class of "second".
document.getElementsByClassName('second');

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third');

//5. Give the section with an id of container the text "Hello!".
// mySection.innerText = 'Hello!';

//6. Add the class main to the div with a class of footer.
var footerDiv = document.querySelector('.footer');
footerDiv.classList.add('main');

//7. Remove the class main on the div with a class of footer.
footerDiv.classList.remove('main');

//8. Create a new li element.
var newLi = document.createElement('li');

//9. Give the li the text "four".
newLi.innerText = 'four';

//10. Append the li to the ul element.
var myUl = document.querySelector('ul');
myUl.appendChild(newLi);

//11. Loop over all of the lis inside the ol tag and give them a background color of "green".
var olLis = document.querySelectorAll('ol li');
for(i = 0; i < olLis.length; i++){
    olLis[i].style['backgroundColor'] = 'green';
}

//12. Remove the div with a class of footer.
var theBody = document.querySelector('body');
var theFooter = document.querySelector('.footer');

theBody.removeChild(theFooter);