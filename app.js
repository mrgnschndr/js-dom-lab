// Task 1
const mainTitle = document.getElementById('main-title');
const paragraph = document.querySelector('#content p');

console.log(mainTitle);
console.log(paragraph);


// Task 2
mainTitle.textContent = 'DOM Manipulation with JavaScript';
paragraph.textContent = 'Hello, I am Morgan and I am learning DOM manipulation!';


// Task 3
const newItem = document.createElement('li');
newItem.textContent = 'Newly added item';
const itemList = document.getElementById('item-list');
itemList.appendChild(newItem);


// Task 4
const addItemBtn = document.getElementById('add-item-btn');
addItemBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = 'Another new item';
    itemList.appendChild(newItem);
    newItem.style.color = '#008000';
});

const highlightBtn = document.getElementById('highlight-title-btn');
highlightBtn.addEventListener('click', function() {
    mainTitle.classList.toggle('highlight');
});


// Task 5
function updateFooter() {
    const footer = document.getElementById('footer-text');
    const today = new Date().toLocaleDateString();
    footer.textContent = `DOM Manipulation Lab © ${today}`;
}

updateFooter();


// Part 2

// Change the color of the new items added to the list
    // Added to line 27 above



// Create a new button that removes the last item from the list
const removeItemBtn = document.createElement('button');
removeItemBtn.textContent = 'Remove Last Item';
const buttonSection = document.getElementById('button-section');
buttonSection.appendChild(removeItemBtn);

removeItemBtn.addEventListener('click', function() {
    const findElement = document.getElementById("item-list");
    const byeElement = findElement.lastElementChild;
    byeElement.remove();
})


// Add an input field to allow the user to add a custom item to the list

const breakLine = document.createElement('br');
/* buttonSection.appendChild(breakLine); */

const customItemField = document.createElement('input');
customItemField.setAttribute = ('id', 'customInput');
buttonSection.appendChild(customItemField);

let submitButton = document.createElement('button');
submitButton.textContent = 'Add Custom Item';
buttonSection.appendChild(submitButton);
submitButton.addEventListener('click', function() {
    let customItem = document.createElement('li');
    customItem.textContent = customItemField.value;
    itemList.appendChild(customItem);
    customItemField.value = '';
});


// Stretch Goal: Create three empty div elements. Create a button that, when clicked, will change the background color of the div to a random hex code

// create divs
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
div1.style.height = '50px';
div1.style.background = 'red';
div2.style.height = '50px';
div2.style.background = 'blue';
div3.style.height = '50px';
div3.style.background = 'green';

// place divs on page
itemList.appendChild(div1);
itemList.appendChild(div2);
itemList.appendChild(div3);

// create buttons for divs
buttonSection.appendChild(breakLine);

let colordiv1 = document.createElement('button');
colordiv1.textContent = 'Change Color of div1!';
buttonSection.appendChild(colordiv1);
colordiv1.setAttribute('class', 'changeColor');

let colordiv2 = document.createElement('button');
colordiv2.textContent = 'Change Color of div2!';
buttonSection.appendChild(colordiv2);
colordiv2.setAttribute('class', 'changeColor');

let colordiv3 = document.createElement('button');
colordiv3.textContent = 'Change Color of div3!';
buttonSection.appendChild(colordiv3);
colordiv3.setAttribute('class', 'changeColor');

// create button action
colordiv1.addEventListener('click', function() {
    div1.style.background = randomColor();
})

colordiv2.addEventListener('click', function() {
    div2.style.background = randomColor();
})

colordiv3.addEventListener('click', function() {
    div3.style.background = randomColor();
})


function randomColor() {
    let chars = '0123456789ABCDEF';
    chars = chars.split("");
    let newCode = '#';

    for (i = 1; i < 7; i++) {
        index = Math.floor(Math.random() * chars.length);
        newCode += chars[index];
    }
    return newCode;
}


