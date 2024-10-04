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



// Stretch Goal: Create three empty div elements. Create a button that, when clicked, will change the background color of the div to a random hex code