const questions = {
  dsa: [
    {
      question: "What is DSA?",
      options: [
        "Data structure and algorithms",
        "Data service agent",
        "Data sender agent",
        "none of these",
      ],
      answer: "Data structure and algorithms",
    },
    {
      question: "Which Data structure follows LIFO Manner",
      options: ["Linked list", "Tree", "Graph", "Stack"],
      answer: "Stack",
    },
    {
      question: "Which Data structure follows FIFO Manner",
      options: ["Linked list", "Queue", "Graph", "Stack"],
      answer: "Queue",
    },
    {
      question: "A Tree is a type of__",
      options: [
        "Linear data structure",
        "Non-Linear data structure",
        "All of above",
        "None of These",
      ],
      answer: "Non-Linear data structure",
    },
    {
      question: "A stack is a type of__",
      options: [
        "Linear data structure",
        "Non-Linear data structure",
        "All of above",
        "None of These",
      ],
      answer: "Linear data structure",
    },
    {
      question: "A push and pop is a operation of___",
      options: ["stack", "queue", "circular queue", "priority Queue"],
      answer: "stack",
    },
    {
      question:
        "What is the time complexity of searching for an element in a binary search tree (BST) with n nodes in the worst case?",
      options: ["O(1)", "O(log n)", "o(n)", "o(n^2)"],
      answer: "o(log n)",
    },
    {
      question: "What is the purpose of the heapify operation in a heap data structure?",
      options: [
        "To add a new element to the heap",
        "To remove the root element from the heap",
        "To convert an array into a heap",
        "To sort the elements in the heap",
      ],
      answer: "To convert an array into a heap",
    },
    {
      question: "What is the space complexity of an algorithm?",
      options: [
        "The amount of memory required by the algorithm",
        "The time taken by the algorithm to run",
        "The number of operations performed by the algorithm",
        "The number of comparisons made by the algorithm",
      ],
      answer: "The amount of memory required by the algorithm",
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", " Quick Sort", " Merge Sort", "Insertion Sort"],
      answer: "Quick Sort",
    },
  ],
  "c++": [
    {
      question: " What is the correct way to declare a variable in C++?",
      options: ["variable x;", "var x;", "x = variable;", "int x;"],
      answer: "int x;",
    },
    {
      question: "How is memory allocated for an array in C++?",
      options: ["allocate array[10];", "array[10];", "int array[10];", "new array[10];"],
      answer: "int array[10];",
    },
    {
      question: " What is the purpose of the cout statement in C++?",
      options: [
        " Input from the console",
        " Output to the console",
        "Conditional statement",
        " Loop control",
      ],
      answer: "Output to the console",
    },
    {
      question: " Which operator is used for the logical AND operation in C++?",
      options: ["&", "&&", "and", "||"],
      answer: "&&",
    },
    {
      question: "What is the purpose of the cin statement in C++?",
      options: [
        "Output to the console",
        "Input from the console",
        "Conditional statement",
        "Loop control",
      ],
      answer: "Input from the console",
    },
    {
      question: " What is the correct syntax for a single-line comment in C++?",
      options: ["/* Comment */", "# Comment", "// Comment", "-- Comment"],
      answer: "// Comment",
    },
    {
      question: " What does the sizeof operator in C++ return?",
      options: [
        "Size of a variable",
        "Address of a variable",
        "Type of a variable",
        "Value of a variable",
      ],
      answer: "Size of a variable",
    },
    {
      question: "Which loop in C++ is used for definite iteration?",
      options: ["while", "do-while", "for", "if"],
      answer: "for",
    },
    {
      question: "What is the purpose of the return statement in a C++ function?",
      options: [
        "Exits the function",
        " Declares the function",
        " Calls another function",
        "Jumps to a labeled statement",
      ],
      answer: "Exits the function",
    },
    {
      question: "Which header file is used for input and output operations in C++?",
      options: ["stdio.h", "iostream", "stdlib.h", "stdlib.h"],
      answer: "<iostream>",
    },
  ],
  dbms: [
    {
      question: "What does ACID stand for in the context of database transactions?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Association, Concurrency, Integrity, Durability",
        " Authorization, Concurrency, Inheritance, Dependency",
        "Atomicity, Concurrency, Indexing, Dependency",
      ],
      answer: " Atomicity, Consistency, Isolation, Durability",
    },
    {
      question: "Which of the following is not a type of database model?",
      options: [
        "Relational Database Model",
        " NoSQL Database Model",
        "Object-Oriented Database Model",
        "Structured Query Language Database Model",
      ],
      answer: "Structured Query Language Database Model",
    },
    {
      question: "What is a primary key in a relational database?",
      options: [
        "A key used for encryption",
        " A unique identifier for a record in a table",
        "A key used for sorting records",
        "A foreign key in another table",
      ],
      answer: "A unique identifier for a record in a table",
    },
    {
      question: "Which normal form ensures that there are no partial dependencies in a relation?",
      options: [
        " First Normal Form (1NF)",
        "Second Normal Form (2NF)",
        "Third Normal Form (3NF)",
        "Boyce-Codd Normal Form (BCNF)",
      ],
      answer: "Third Normal Form (3NF)",
    },
    {
      question: " What is the purpose of the SQL SELECT statement?",
      options: [
        "Insert data into a table",
        "Update existing records",
        "Retrieve data from one or more tables",
        "Delete records from a table",
      ],
      answer: "Retrieve data from one or more tables",
    },
    {
      question:
        "Which SQL clause is used to filter the results of a SELECT statement based on a specified condition?",
      options: ["GROUP BY", " HAVING", "WHERE", "ORDER BY"],
      answer: "WHERE",
    },
    {
      question: "What is a foreign key in a relational database?",
      options: [
        "A key used for accessing remote databases",
        "A key used for encryption",
        "A key that references the primary key in another table",
        "A key that uniquely identifies a record in a table",
      ],
      answer: "A key that references the primary key in another table",
    },
    {
      question: "Which SQL command is used to add new rows to a table?",
      options: [" INSERT", "UPDATE", "ADD", "CREATE"],
      answer: " INSERT",
    },
    {
      question: " What does the acronym SQL stand for?",
      options: [
        "Simple Query Language",
        "Structured Question Language",
        " Standard Query Language",
        "Sequential Query Language",
      ],
      answer: "Standard Query Language",
    },
    {
      question: "In the context of database transactions, what does isolation refer to?",
      options: [
        "Ensuring that transactions are executed in the correct order",
        "Protecting the database from unauthorized access",
        "The ability of transactions to be executed concurrently without interference",
        "Ensuring that transactions are permanently saved in the database",
      ],
      answer: "The ability of transactions to be executed concurrently without interference",
    },
  ],
  wd: [
    {
      name: "wd",
      question: "What does HTML stand for in web development?",
      options: [
        "Hyper Text Makeup Language",
        " Hyperlink and Text Markup Language",
        "Hyper Transfer Markup Language",
        "Hyper Text Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question:
        "Which CSS property is used to control the space between the elements' content and its border?",
      options: ["margin", " padding", "border-spacing", "space-around"],
      answer: " padding",
    },
    {
      question: "What is the purpose of JavaScript in web development?",
      options: [
        "Styling web pages",
        "Creating dynamic content and interactivity",
        "Defining webpage structure",
        "Specifying webpage layout",
      ],
      answer: "Creating dynamic content and interactivity",
    },
    {
      question: "Which file type is commonly used for web graphics with support for transparency?",
      options: ["JPG", "PNG", "GIF", "BMP"],
      answer: "PNG",
    },
    {
      question: " What does the term responsive design refer to in web development?",
      options: [
        "Creating visually appealing designs",
        "Designing for a specific browser",
        "Designing websites that adapt to different screen sizes",
        "Designing with a focus on graphics",
      ],
      answer: "Designing websites that adapt to different screen sizes",
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["a", "link", "href", "hyperlink"],
      answer: "<a>",
    },
    {
      question: " In CSS, what does the box model consist of?",
      options: [
        "Margin, Border, Padding, Content",
        "Header, Body, Footer",
        "Width, Height, Depth",
        "Background, Font, Color",
      ],
      answer: "Margin, Border, Padding, Content",
    },
    {
      question: "What is the purpose of the jQuery library in web development?",
      options: [
        "Styling web pages",
        " Server-side scripting",
        "DOM manipulation and event handling",
        "Database management",
      ],
      answer: " DOM manipulation and event handling",
    },
    {
      question: "Which attribute is used to include external JavaScript files in an HTML document?",
      options: ["<src>", "<script>", "<link>", "<js>"],
      answer: "<script>",
    },
    {
      question: "What is the purpose of the CSS property z-index?",
      options: [
        "Controls the order of elements in the HTML",
        "Specifies the font size",
        "Determines the stacking order of positioned elements",
        "Defines the color of text",
      ],
      answer: "Determines the stacking order of positioned elements",
    },
  ],
};

let currentQuestion = 0;
let noOfQuestions = 0;
let subject = "";
let time = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", startQuiz);

function startQuiz() {
  displayQuestion();
}

function displayQuestion() {
  // find out which questions to display from local storage
  const dataString = localStorage.getItem("data");
  const data = JSON.parse(dataString); // the data was string and we need json data in javscript

  console.log(data);

  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");

  // setting values
  subject = data.subject;
  noOfQuestions = data.noOfQuestions;
  time = data.time;

  const currentQ = questions[subject][currentQuestion];

  questionContainer.innerHTML = `<h2>${currentQ.question}</h2>`;

  optionsContainer.innerHTML = "";
  currentQ.options.forEach((option, index) => {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "option";
    input.value = option;

    const label = document.createElement("label");
    label.appendChild(input);
    label.innerHTML += option;

    optionsContainer.appendChild(label);
  });
  // Call the startTimer function when your quiz starts
  startTimer();
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (selectedOption) {
    const currentQ = questions[subject][currentQuestion];
    const userAnswer = selectedOption.value;

    if (userAnswer === currentQ.answer) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < noOfQuestions) {
      displayQuestion();
    } else {
      endQuiz();
    }
  } else {
    alert("Please select an option before submitting.");
  }
}
function endQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `<h2>Quiz ended! Your score is ${score} out of ${questions[subject].length}</h2>`;
}

const countdownElement = document.getElementById("countdown");

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

let timeLeft = 0;
function startTimer() {
  timeLeft = time;

  updateTimer(); // Initial display

  const timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      if (currentQuestion < noOfQuestions) alert("Time is up!"); // You can customize this action
    } else {
      updateTimer();
    }
  }, 1000); // Update every 1 second
}
