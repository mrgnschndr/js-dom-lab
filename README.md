# Lab Activity: Manipulating the DOM with JavaScript
## Objective:
By the end of this lab, students will be able to retrieve, create, and insert elements into the DOM using JavaScript.


# Part 1: Creating the app.js File
1. Once you have the repo cloned down locally, create and move to a branch called `dom/task-1`. You will create a branch as you begin and end every task. Merge to your main after every completed task. Follow the branch naming patterns.
2. Link your repo to a GitHub page.
3. Pin your GitHub page and your repo to your 1-1 DM channel with me.


### Task 1: Retrieve Elements
In this task, you'll learn how to retrieve and manipulate existing elements on the page.

Create an app.js file to write your JavaScript code.

Open the app.js file.
Use document.getElementById to retrieve the main title (`<h1>`) and store it in a variable.
Use document.querySelector to retrieve the paragraph inside the `<section>` with the id content and store it in another variable.
Steps:

``` javascript

// Step 1: Retrieve the main title
const mainTitle = document.getElementById('main-title');

// Step 2: Retrieve the paragraph inside the content section
const paragraph = document.querySelector('#content p');

console.log(mainTitle);  // Check the output in the console
console.log(paragraph);  // Check the output in the console
```

### Task 2: Modify Content
Now that you've retrieved the elements, let's modify their content.

Change the text inside the `<h1>` element to: "DOM Manipulation with JavaScript".
Change the text in the paragraph to include your name (e.g., "Hello, I am [Your Name] and I am learning DOM manipulation!").
Steps:

``` javascript

// Change the text of the main title
mainTitle.textContent = 'DOM Manipulation with JavaScript';

// Change the text of the paragraph
paragraph.textContent = 'Hello, I am [Your Name] and I am learning DOM manipulation!';
```

### Task 3: Create and Insert New Elements
In this task, you'll learn how to create new elements and insert them into the DOM.

Create a new `<li>` element.
Set the text of the `<li>` element to: "Newly added item".
Append this new `<li>` element to the existing list (#item-list).
Steps:

``` javascript

// Step 1: Create a new list item
const newItem = document.createElement('li');

// Step 2: Set the text content of the new list item
newItem.textContent = 'Newly added item';

// Step 3: Append the new list item to the list
const itemList = document.getElementById('item-list');
itemList.appendChild(newItem);
```

### Task 4: Add Event Listeners
Let's add some interactivity to the buttons.

Add an event listener to the "Add New Item" button (#add-item-btn) that calls a function to add a new item to the list when clicked.
Add an event listener to the "Highlight Title" button (#highlight-title-btn) that toggles a highlight class on the title when clicked.
Steps:

``` javascript

// Function to add a new item to the list when the button is clicked
const addItemBtn = document.getElementById('add-item-btn');
addItemBtn.addEventListener('click', function() {
  const newItem = document.createElement('li');
  newItem.textContent = 'Another new item';
  itemList.appendChild(newItem);
});

// Function to toggle highlight class on the main title
const highlightBtn = document.getElementById('highlight-title-btn');
highlightBtn.addEventListener('click', function() {
  mainTitle.classList.toggle('highlight');
});
```

### Task 5: Modify Existing Footer Content
Lastly, let’s dynamically modify the footer’s text.

Create a function that updates the footer text to include today’s date.
Call this function at the end of your script to automatically update the footer when the page loads.
Steps:

``` javascript

// Function to update the footer with today's date
function updateFooter() {
  const footer = document.getElementById('footer-text');
  const today = new Date().toLocaleDateString();
  footer.textContent = `DOM Manipulation Lab © ${today}`;
}

// Call the function to update the footer when the page loads
updateFooter();
```

# Part 2: Experiment and Customize
Now that you've completed the main tasks, try experimenting with the following:

- Change the color of the new items added to the list.
- Create a new button that removes the last item from the list.
- Add an input field to allow the user to add a custom item to the list.
- Stretch Goal: Create three empty div elements. Create a button that, when clicked, will change the background color of the div to a random hex code.

## Conclusion:
In this lab, you learned how to:

1. Retrieve and modify DOM elements.
2. Create new elements and insert them into the DOM.
3. Use event listeners to add interactivity.
4. Practice these concepts further by building small projects that involve DOM manipulation!