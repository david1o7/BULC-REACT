export const programming_Terms = {
    programming_terms: [
      {
        term: "Algorithm",
        definition:
          "A step-by-step procedure or formula for solving a problem, especially by a computer.",
        examples: [
          {
            language: "General",
            code: `// Example: Algorithm for calculating factorial (n!)
  1. If n is 0 or 1, factorial is 1.
  2. Otherwise, factorial is n multiplied by factorial of (n-1).
  `,
            explanation: "This describes a recursive algorithm to compute factorials."
          }
        ]
      },
      {
        term: "Variable",
        definition:
          "A named storage location in memory that holds a value, which can be changed during program execution.",
        examples: [
          {
            language: "JavaScript",
            code: `let userName = "Alice";
  const PI = 3.14159;
  var counter = 0; // 'var' has function scope, less common now
  `,
            explanation: "Declaring variables using `let` (reassignable, block-scoped), `const` (constant, block-scoped), and `var` (reassignable, function-scoped)."
          },
          {
            language: "Python",
            code: `my_age = 30
  city = "New York"
  is_admin = True
  `,
            explanation: "Variables are declared by assigning a value. Type is inferred."
          }
        ]
      },
      {
        term: "Function",
        definition:
          "A block of organized, reusable code that performs a single, related action. Functions provide better modularity for your application and a high degree of code reusing.",
        examples: [
          {
            language: "JavaScript",
            code: `function add(a, b) {
    return a + b;
  }
  const multiply = (x, y) => x * y; // Arrow function
  `,
            explanation: "Examples of a traditional function declaration and an arrow function."
          },
          {
            language: "Python",
            code: `def greet(name):
    return f"Hello, {name}!"
  
  class Calculator:
    def add(self, a, b):
      return a + b
  `,
            explanation: "Defining a standalone function and a method within a class."
          }
        ]
      },
      {
        term: "Loop",
        definition:
          "A control flow statement that allows code to be executed repeatedly based on a given Boolean condition.",
        examples: [
          {
            language: "JavaScript",
            code: `for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }
  
  let count = 0;
  while (count < 3) {
    console.log("Count: " + count);
    count++;
  }
  `,
            explanation: "A `for` loop for a fixed number of iterations and a `while` loop for conditional repetition."
          },
          {
            language: "Python",
            code: `for item in ['apple', 'banana', 'cherry']:
    print(item)
  
  i = 0
  while i < 4:
    print(i)
    i += 1
  `,
            explanation: "A `for` loop iterating over a list and a `while` loop."
          }
        ]
      },
      {
        term: "Conditional Statement",
        definition:
          "A statement that performs different actions depending on whether a specified condition evaluates to true or false (e.g., if-else statements).",
        examples: [
          {
            language: "JavaScript",
            code: `let score = 85;
  if (score >= 90) {
    console.log("Grade A");
  } else if (score >= 80) {
    console.log("Grade B");
  } else {
    console.log("Grade C");
  }
  `,
            explanation: "An `if-else if-else` structure for handling multiple conditions."
          },
          {
            language: "Python",
            code: `age = 18
  if age >= 18:
    print("Adult")
  else:
    print("Minor")
  `,
            explanation: "A basic `if-else` statement."
          }
        ]
      },
      {
        term: "Data Type",
        definition:
          "A classification that specifies which type of value a variable has and what type of mathematical, relational or logical operations can be applied to it (e.g., integer, string, boolean).",
        examples: [
          {
            language: "JavaScript",
            code: `let num = 10;          // Number
  let name = "John";     // String
  let isActive = true;   // Boolean
  let data = null;       // Null
  let undef;             // Undefined
  let obj = { key: "value" }; // Object
  let arr = [1, 2, 3];   // Array (is an object)
  `,
            explanation: "Common primitive and object data types in JavaScript."
          },
          {
            language: "Python",
            code: `num = 10         # int
  name = "Jane"    # str
  is_valid = False # bool
  data = None      # NoneType
  my_list = [1, 2] # list
  my_dict = {'a': 1} # dict
  `,
            explanation: "Common built-in data types in Python."
          }
        ]
      },
      {
        term: "Syntax",
        definition:
          "The set of rules that defines the combinations of symbols that are considered to be correctly structured programs in a particular programming language.",
        examples: [
          {
            language: "General",
            code: `// Correct Syntax (JavaScript)
  console.log("Hello World");
  
  /* Incorrect Syntax (Missing semicolon, though JS often tolerates)
  console.log("Hello World")
  */
  
  /* Incorrect Syntax (Missing closing parenthesis)
  console.log("Hello World";
  */
  `,
            explanation: "Illustrates correct versus incorrect syntax, which would cause a parsing error."
          }
        ]
      },
      {
        term: "Bug",
        definition:
          "An error, flaw, failure, or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.",
        examples: [
          {
            language: "JavaScript (Logical Bug)",
            code: `function calculateAverage(a, b) {
    return a + b / 2; // Bug: Incorrect order of operations (b/2 before a+)
  }
  console.log(calculateAverage(10, 20)); // Expected 15, but outputs 20 (10 + 10)
  `,
            explanation: "A common logical bug where operator precedence leads to an incorrect calculation."
          }
        ]
      },
      {
        term: "Debugging",
        definition:
          "The process of finding and resolving defects or problems within a computer program that prevent correct operation of computer software or a system.",
        examples: [
          {
            language: "JavaScript (Console Debugging)",
            code: `function processData(data) {
    console.log("Data received:", data); // Use console.log to inspect variables
    // ... rest of the code
    debugger; // Pauses execution in browser developer tools
    return data.map(item => item * 2);
  }
  `,
            explanation: "Using `console.log` to output variable values and `debugger` to pause execution for step-by-step analysis in browser developer tools."
          }
        ]
      },
      {
        term: "Compiler",
        definition:
          "A special program that processes statements written in a particular programming language and turns them into machine language or 'code' that a computer's processor uses.",
        examples: [
          {
            language: "C++ (Concept)",
            code: `// main.cpp
  #include <iostream>
  
  int main() {
      std::cout << "Hello, Compiler!" << std::endl;
      return 0;
  }
  // Command to compile (e.g., using g++):
  // g++ main.cpp -o myprogram
  // This command uses the g++ compiler to convert main.cpp into an executable 'myprogram'.
  `,
            explanation: "Demonstrates a simple C++ program that would be compiled into an executable binary."
          }
        ]
      },
      {
        term: "Interpreter",
        definition:
          "A computer program that directly executes instructions written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program.",
        examples: [
          {
            language: "Python (Concept)",
            code: `print("Hello, Interpreter!")
  x = 10 + 5
  print(x)
  # To run this: python your_script.py
  # The Python interpreter reads and executes each line directly.
  `,
            explanation: "A simple Python script, typically executed directly by the Python interpreter without a separate compilation step."
          }
        ]
      },
      {
        term: "Framework",
        definition:
          "A reusable, 'semi-complete' application that can be specialized to produce custom applications. Frameworks are often specific to a programming language (e.g., React for JavaScript, Django for Python).",
        examples: [
          {
            language: "React (JavaScript)",
            code: `// App.js (simplified React component)
  import React from 'react';
  
  function App() {
    return (
      <div>
        <h1>Hello from React!</h1>
      </div>
    );
  }
  export default App;
  `,
            explanation: "A basic React functional component, demonstrating the structure provided by the React framework for building UIs."
          }
        ]
      },
      {
        term: "Library",
        definition:
          "A collection of pre-written code that can be used to perform common tasks, making programming faster and more efficient.",
        examples: [
          {
            language: "JavaScript (Lodash)",
            code: `// Using Lodash library for utility functions
  import _ from 'lodash';
  
  const numbers = [1, 2, 3, 4, 5];
  const sum = _.sum(numbers); // Sums array elements
  console.log(sum); // Output: 15
  
  const unique = _.uniq([1, 2, 2, 3, 1]); // Removes duplicates
  console.log(unique); // Output: [1, 2, 3]
  `,
            explanation: "Demonstrates using `lodash`, a popular JavaScript utility library, to perform common array operations."
          }
        ]
      },
      {
        term: "API (Application Programming Interface)",
        definition:
          "A set of defined rules that enable different applications to communicate with each other.",
        examples: [
          {
            language: "JavaScript (Fetch API)",
            code: `fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  `,
            explanation: "Using the browser's built-in Fetch API to make an HTTP request to an external service."
          }
        ]
      },
      {
        term: "Version Control",
        definition:
          "A system that records changes to a file or set of files over time so that you can recall specific versions later (e.g., Git).",
        examples: [
          {
            language: "Git (Command Line)",
            code: `git init                # Initialize a new Git repository
  git add .               # Stage all changes
  git commit -m "Initial commit" # Save changes with a message
  git push origin main    # Upload changes to a remote repository
  `,
            explanation: "Common Git commands used for initializing a repository, staging, committing, and pushing code."
          }
        ]
      },
      {
        term: "Repository",
        definition:
          "A central location where all the files, folders, and history of a project are stored, typically used with version control systems.",
        examples: [
          {
            language: "Git (Concept)",
            code: `// A local Git repository typically looks like:
  // my_project/
  //   .git/         <-- This hidden folder contains all history
  //   src/
  //   public/
  //   README.md
  //   ... other project files
  `,
            explanation: "A Git repository (often called 'repo') contains all project files and the `.git` directory which stores the version history."
          }
        ]
      },
      {
        term: "IDE (Integrated Development Environment)",
        definition:
          "A software application that provides comprehensive facilities to computer programmers for software development. An IDE normally consists of at least a source code editor, build automation tools, and a debugger.",
        examples: [
          {
            language: "General (Concept)",
            code: `// Common IDEs:
  // Visual Studio Code (VS Code)
  // IntelliJ IDEA (for Java)
  // PyCharm (for Python)
  // Xcode (for Apple platforms)
  // Visual Studio (for .NET/C++)
  `,
            explanation: "Examples of popular IDEs used across different programming ecosystems."
          }
        ]
      },
      {
        term: "Object-Oriented Programming (OOP)",
        definition:
          "A programming paradigm based on the concept of 'objects', which can contain data and code: data in the form of fields (attributes or properties), and code in the form of procedures (methods).",
        examples: [
          {
            language: "Python (Concept)",
            code: `class Dog:
      def __init__(self, name, breed):
          self.name = name
          self.breed = breed
  
      def bark(self):
          return f"{self.name} says Woof!"
  
  # Create an object (instance) of the Dog class
  my_dog = Dog("Buddy", "Golden Retriever")
  print(my_dog.bark()) # Buddy says Woof!
  `,
            explanation: "Illustrates a simple class `Dog` with attributes (`name`, `breed`) and a method (`bark`), and how to create an object from it."
          }
        ]
      },
      {
        term: "Class",
        definition:
          "A blueprint or a template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).",
        examples: [
          {
            language: "JavaScript (ES6)",
            code: `class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    getDescription() {
      return \`This is a \${this.make} \${this.model}.\`;
    }
  }
  `,
            explanation: "Defining a `Car` class with a constructor and a method in JavaScript (ES6 syntax)."
          }
        ]
      },
      {
        term: "Object",
        definition:
          "An instance of a class. It can be a combination of variables, functions, and data structures.",
        examples: [
          {
            language: "JavaScript (ES6)",
            code: `class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    // ... other methods
  }
  
  const myCar = new Car("Toyota", "Camry"); // 'myCar' is an object
  const anotherCar = new Car("Honda", "Civic"); // 'anotherCar' is another object
  `,
            explanation: "Creating `myCar` and `anotherCar` as distinct objects (instances) of the `Car` class."
          }
        ]
      },
      {
        term: "Inheritance",
        definition:
          "A mechanism in object-oriented programming where a new class (derived class) is created from an existing class (base class), inheriting its properties and behaviors.",
        examples: [
          {
            language: "Python",
            code: `class Animal:
      def speak(self):
          pass # Placeholder
  
  class Dog(Animal): # Dog inherits from Animal
      def speak(self):
          return "Woof!"
  
  class Cat(Animal): # Cat inherits from Animal
      def speak(self):
          return "Meow!"
  
  my_dog = Dog()
  print(my_dog.speak()) # Woof!
  `,
            explanation: "The `Dog` and `Cat` classes inherit the `speak` method from the `Animal` base class and override it."
          }
        ]
      },
      {
        term: "Polymorphism",
        definition:
          "The ability of an object to take on many forms. In programming, it allows a single interface to be used for different data types.",
        examples: [
          {
            language: "JavaScript",
            code: `class Animal {
    makeSound() { return "Some sound"; }
  }
  class Dog extends Animal {
    makeSound() { return "Woof!"; }
  }
  class Cat extends Animal {
    makeSound() { return "Meow!"; }
  }
  
  const animals = [new Dog(), new Cat(), new Animal()];
  animals.forEach(animal => {
    console.log(animal.makeSound()); // Calls the specific makeSound of each object
  });
  // Output: Woof!, Meow!, Some sound
  `,
            explanation: "Different animal objects respond to the same `makeSound()` method in their own specific ways."
          }
        ]
      },
      {
        term: "Encapsulation",
        definition:
          "The bundling of data (attributes) and methods (functions) that operate on the data into a single unit, or class, and restricting direct access to some of the object's components.",
        examples: [
          {
            language: "JavaScript (Private fields - ES2022)",
            code: `class Counter {
    #count = 0; // Private field (ES2022 syntax)
  
    increment() {
      this.#count++;
    }
  
    getCount() {
      return this.#count;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  // console.log(counter.#count); // Error: Private field cannot be accessed from outside
  console.log(counter.getCount()); // 1
  `,
            explanation: "The `#count` field is encapsulated; it can only be modified or accessed via the `increment` and `getCount` methods, demonstrating data hiding."
          }
        ]
      },
      {
        term: "Abstraction",
        definition:
          "The process of hiding the complex implementation details and showing only the essential features of the object.",
        examples: [
          {
            language: "General (Concept)",
            code: `// When you use a car, you use its steering wheel, pedals, etc.
  // You don't need to know the intricate details of the engine
  // or transmission to drive it. This is abstraction.
  
  // In programming, a function like sort() hides the complex
  // sorting algorithm details from the user.
  `,
            explanation: "Illustrates abstraction using a real-world car example and a common programming function."
          }
        ]
      },
      {
        term: "Recursion",
        definition:
          "A programming technique where a function calls itself directly or indirectly to solve a problem.",
        examples: [
          {
            language: "JavaScript",
            code: `function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1); // Function calls itself
    }
  }
  console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
  `,
            explanation: "A recursive function to calculate the factorial of a number."
          }
        ]
      },
      {
        term: "API Endpoint",
        definition:
          "A specific URL that represents a particular resource or function within an API.",
        examples: [
          {
            language: "HTTP/REST",
            code: `GET /users                  // Get all users
  GET /users/123              // Get user with ID 123
  POST /users                 // Create a new user
  PUT /users/123              // Update user with ID 123
  DELETE /users/123           // Delete user with ID 123
  `,
            explanation: "Examples of common RESTful API endpoints and their associated HTTP methods."
          }
        ]
      },
      {
        term: "Database",
        definition:
          "An organized collection of data, generally stored and accessed electronically from a computer system.",
        examples: [
          {
            language: "SQL (Concept)",
            code: `// Common Database Types:
  // Relational (SQL): MySQL, PostgreSQL, SQLite, Oracle, SQL Server
  // NoSQL: MongoDB (Document), Cassandra (Column-family), Redis (Key-Value)
  `,
            explanation: "Lists common types of databases and examples of each."
          }
        ]
      },
      {
        term: "Query",
        definition:
          "A request for data or information from a database table or combination of tables.",
        examples: [
          {
            language: "SQL",
            code: `SELECT name, email FROM Users WHERE age > 25 ORDER BY name ASC;
  INSERT INTO Products (name, price) VALUES ('Laptop', 1200.00);
  UPDATE Orders SET status = 'shipped' WHERE order_id = 101;
  DELETE FROM Customers WHERE last_name = 'Smith';
  `,
            explanation: "Common SQL (Structured Query Language) queries for selecting, inserting, updating, and deleting data."
          }
        ]
      },
      {
        term: "Frontend",
        definition:
          "The part of a website or application that users interact with directly, including the user interface and user experience.",
        examples: [
          {
            language: "Web Technologies",
            code: `HTML: Structure of web content.
  CSS: Styling and layout.
  JavaScript: Interactivity and dynamic content.
  Frameworks/Libraries: React, Angular, Vue, Svelte.
  `,
            explanation: "Key technologies used in frontend web development."
          }
        ]
      },
      {
        term: "Backend",
        definition:
          "The 'server-side' of a website or application, responsible for data storage, server logic, and database interactions.",
        examples: [
          {
            language: "Common Technologies",
            code: `Programming Languages: Python (Django, Flask), Node.js (Express), Java (Spring Boot), PHP (Laravel), Ruby (Rails), Go.
  Databases: PostgreSQL, MongoDB, MySQL.
  Servers: Apache, Nginx.
  `,
            explanation: "Examples of languages, frameworks, and databases commonly used in backend development."
          }
        ]
      },
      {
        term: "Middleware",
        definition:
          "Software that provides services to applications beyond those available from the operating system, often used in web development to process requests before they reach the main application logic.",
        examples: [
          {
            language: "Node.js (Express)",
            code: `const express = require('express');
  const app = express();
  
  // A simple logging middleware
  app.use((req, res, next) => {
    console.log(\`[LOG] \${req.method} \${req.url}\`);
    next(); // Pass control to the next middleware/route handler
  });
  
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  `,
            explanation: "An Express.js middleware function that logs incoming requests before passing them to the route handler."
          }
        ]
      },
      {
        term: "Asynchronous Programming",
        definition:
          "A programming technique that allows a program to start a potentially long-running task and then resume its execution without waiting for that task to complete. The program is notified when the task finishes.",
        examples: [
          {
            language: "JavaScript (Async/Await)",
            code: `async function fetchData() {
    console.log("Starting data fetch...");
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log("Data fetched:", data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
    console.log("Fetch operation complete (async).");
  }
  fetchData();
  console.log("This line runs immediately after fetchData is called.");
  `,
            explanation: "Using `async/await` to handle asynchronous operations (like fetching data) in a way that looks like synchronous code, improving readability."
          }
        ]
      },
      {
        term: "Synchronous Programming",
        definition:
          "A programming model where tasks are executed one after another in sequence. Each task must complete before the next one can start, potentially blocking the program's execution.",
        examples: [
          {
            language: "JavaScript (Blocking Example)",
            code: `function heavyComputation() {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }
  
  console.log("Starting synchronous task...");
  const data = heavyComputation(); // This will block execution until it finishes
  console.log("Task finished, result:", data);
  console.log("This line runs ONLY after heavyComputation completes.");
  `,
            explanation: "A simulated CPU-intensive task that demonstrates synchronous, blocking execution. The second `console.log` waits for the first function to finish."
          }
        ]
      },
      {
        term: "Callback Function",
        definition:
          "A function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action.",
        examples: [
          {
            language: "JavaScript",
            code: `function doSomething(callback) {
    console.log("Doing something...");
    // Simulate an async operation
    setTimeout(() => {
      callback("Data processed!");
    }, 1000);
  }
  
  function myCallback(message) {
    console.log("Callback received:", message);
  }
  
  doSomething(myCallback); // Pass myCallback as an argument
  `,
            explanation: "The `myCallback` function is passed to `doSomething` and executed after a delay, showing how callbacks are used for asynchronous results."
          }
        ]
      },
      {
        term: "Promise",
        definition:
          "An object representing the eventual completion or failure of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations more cleanly than with traditional callbacks.",
        examples: [
          {
            language: "JavaScript",
            code: `function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
          resolve("Data successfully retrieved!");
        } else {
          reject("Failed to retrieve data.");
        }
      }, 1500);
    });
  }
  
  fetchData()
    .then(message => console.log(message)) // Handles success
    .catch(error => console.error(error)); // Handles failure
  `,
            explanation: "Creating and consuming a Promise. `.then()` handles successful resolution, and `.catch()` handles rejections."
          }
        ]
      },
      {
        term: "State (in programming)",
        definition:
          "The collection of all current values of variables and data structures in a program or component at a particular point in time. It defines the current condition of the system.",
        examples: [
          {
            language: "React (JavaScript)",
            code: `import React, { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0); // 'count' is the state variable
  
    const increment = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
  `,
            explanation: "In React, `useState` creates a 'state' variable (`count`) whose value persists and triggers re-renders when updated."
          }
        ]
      },
      {
        term: "DOM (Document Object Model)",
        definition:
          "A programming interface for web documents. It represents the page structure as a tree of objects, allowing programs (like JavaScript) to change the document structure, style, and content.",
        examples: [
          {
            language: "JavaScript (Browser)",
            code: `// HTML: <p id="myParagraph">Hello</p>
  const paragraph = document.getElementById('myParagraph');
  paragraph.textContent = 'Hello, DOM!'; // Change text content
  paragraph.style.color = 'blue';       // Change style
  const newDiv = document.createElement('div');
  newDiv.textContent = "New element!";
  document.body.appendChild(newDiv);    // Add new element to body
  `,
            explanation: "Manipulating HTML elements (nodes) using JavaScript, demonstrating how the DOM is accessed and modified."
          }
        ]
      },
      {
        term: "RESTful API",
        definition:
          "An architectural style for designing networked applications. It relies on a stateless, client-server communication model and uses standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources.",
        examples: [
          {
            language: "General (Concept)",
            code: `// Resource: /users
  // GET /users           -> Retrieve a list of users
  // POST /users          -> Create a new user
  // GET /users/{id}      -> Retrieve a specific user by ID
  // PUT /users/{id}      -> Update a specific user by ID
  // DELETE /users/{id}   -> Delete a specific user by ID
  `,
            explanation: "Illustrates how HTTP methods are mapped to CRUD (Create, Read, Update, Delete) operations on resources in a RESTful API."
          }
        ]
      },
      {
        term: "Debugging Tool",
        definition:
          "Software used by programmers to test and debug target programs. They allow for stepping through code, setting breakpoints, inspecting variables, and analyzing memory.",
        examples: [
          {
            language: "General",
            code: `// Common Debugging Tools:
  // Browser Developer Tools (e.g., Chrome DevTools, Firefox Developer Tools)
  // IDE Debuggers (e.g., VS Code Debugger, IntelliJ Debugger)
  // GDB (GNU Debugger for C/C++)
  // pdb (Python Debugger)
  `,
            explanation: "Examples of various debugging tools available for different programming environments."
          }
        ]
      },
      {
        term: "Command Line Interface (CLI)",
        definition:
          "A text-based interface used to operate software and operating systems by typing commands instead of using a graphical user interface (GUI).",
        examples: [
          {
            language: "Terminal Commands (Linux/macOS/Windows PowerShell)",
            code: `ls           # List directory contents (Linux/macOS)
  dir          # List directory contents (Windows cmd)
  cd my_project # Change directory
  git status   # Check Git repository status
  npm install  # Install Node.js packages
  `,
            explanation: "Basic commands used in a command line interface for file system navigation and common development tasks."
          }
        ]
      },
      {
        term: "Data Structure",
        definition:
          "A specialized format for organizing and storing data in a computer so that it can be accessed and modified efficiently.",
        examples: [
          {
            language: "JavaScript (Array)",
            code: `const numbers = [10, 20, 30, 40]; // An array
  const person = { name: "John", age: 30 }; // An object (like a hash map/dictionary)
  `,
            explanation: "Illustrates an Array (ordered collection) and an Object (key-value pairs), two fundamental data structures."
          },
          {
            language: "Python (List & Dictionary)",
            code: `my_list = [1, 2, 3]          # A list (dynamic array)
  my_dict = {"name": "Jane", "id": 123} # A dictionary (hash map)
  `,
            explanation: "Examples of Python's built-in list and dictionary data structures."
          }
        ]
      },
      {
        term: "Array",
        definition:
          "A collection of items stored at contiguous memory locations. Elements can be accessed using an index.",
        examples: [
          {
            language: "JavaScript",
            code: `const colors = ["red", "green", "blue"];
  console.log(colors[0]); // "red"
  colors.push("yellow"); // Add an element
  `,
            explanation: "Declaring an array and accessing elements by index, plus adding an element."
          },
          {
            language: "Python",
            code: `my_numbers = [10, 20, 30]
  print(my_numbers[1]) # 20
  my_numbers.append(40)
  `,
            explanation: "Creating a list (Python's equivalent of an array) and performing basic operations."
          }
        ]
      },
      {
        term: "Object Literal",
        definition:
          "A way to define objects in JavaScript directly, using curly braces `{}`, without needing to define a class first.",
        examples: [
          {
            language: "JavaScript",
            code: `const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    displayInfo: function() {
      console.log(\`\${this.title} by \${this.author}\`);
    }
  };
  console.log(book.title); // Accessing a property
  book.displayInfo();      // Calling a method
  `,
            explanation: "Defining an object with properties and a method using object literal syntax."
          }
        ]
      },
      {
        term: "Boolean",
        definition:
          "A data type that can only have one of two possible values: true or false, used for logical operations and conditions.",
        examples: [
          {
            language: "JavaScript",
            code: `let isValid = true;
  let hasPermission = (age >= 18);
  if (isValid && hasPermission) {
    console.log("Access granted.");
  }
  `,
            explanation: "Declaring boolean variables and using them in a conditional expression."
          },
          {
            language: "Python",
            code: `is_active = False
  if not is_active:
    print("User is inactive.")
  `,
            explanation: "Using a boolean variable in an `if` statement with the `not` operator."
          }
        ]
      },
      {
        term: "String",
        definition:
          "A sequence of characters, such as letters, numbers, symbols, or spaces, used to represent text.",
        examples: [
          {
            language: "JavaScript",
            code: `let greeting = "Hello";
  let name = "World";
  let message = \`\${greeting}, \${name}!\`; // Template literal
  console.log(message); // "Hello, World!"
  `,
            explanation: "Concatenating strings using template literals for easy interpolation."
          },
          {
            language: "Python",
            code: `first_name = "Jane"
  last_name = "Doe"
  full_name = first_name + " " + last_name
  print(full_name) # "Jane Doe"
  `,
            explanation: "Concatenating strings using the `+` operator."
          }
        ]
      },
      {
        term: "Integer",
        definition:
          "A whole number (positive, negative, or zero) that does not have a fractional part.",
        examples: [
          {
            language: "JavaScript",
            code: `let age = 25;
  let count = -10;
  let total = age + count; // Arithmetic operations
  `,
            explanation: "Examples of integer values and a simple arithmetic operation."
          },
          {
            language: "Python",
            code: `num_items = 100
  negative_num = -5
  result = num_items * negative_num
  `,
            explanation: "Declaring integer variables and performing multiplication."
          }
        ]
      },
      {
        term: "Float (Floating-Point Number)",
        definition:
          "A number that has a fractional or decimal part.",
        examples: [
          {
            language: "JavaScript",
            code: `let price = 19.99;
  let pi = 3.14159;
  let average = (price + 20.50) / 2;
  `,
            explanation: "Examples of floating-point numbers and basic arithmetic."
          },
          {
            language: "Python",
            code: `temperature = 98.6
  gravity = 9.81
  product = temperature * gravity
  `,
            explanation: "Declaring float variables and performing multiplication."
          }
        ]
      },
      {
        term: "Comments",
        definition:
          "Non-executable lines of text within source code used to explain the code, document its purpose, or temporarily disable parts of it. They are ignored by the compiler/interpreter.",
        examples: [
          {
            language: "JavaScript",
            code: `// This is a single-line comment
  
  /*
    This is a
    multi-line comment
  */
  let x = 10; // This comment explains variable x
  `,
            explanation: "Demonstrates single-line (`//`) and multi-line (`/* ... */`) comment syntax."
          },
          {
            language: "Python",
            code: `# This is a single-line comment in Python
  
  """
  This is also a
  multi-line comment
  or a docstring.
  """
  name = "Python" # Initialize name
  `,
            explanation: "Demonstrates single-line (`#`) and multi-line (`'''...'''`) comment/docstring syntax."
          }
        ]
      },
      {
        term: "Operator",
        definition:
          "Symbols that tell the compiler or interpreter to perform specific mathematical, relational, or logical operations.",
        examples: [
          {
            language: "JavaScript",
            code: `let sum = 5 + 3;      // Arithmetic (+)
  let isEqual = (5 == '5'); // Comparison (==)
  let isTrue = (true && false); // Logical (&&)
  let x = 10; x += 5;    // Assignment (+=)
  `,
            explanation: "Examples of arithmetic, comparison, logical, and assignment operators."
          },
          {
            language: "Python",
            code: `total = 10 - 4      # Arithmetic (-)
  is_greater = (7 > 5)  # Comparison (>)
  can_vote = (age >= 18 and citizenship == "US") # Logical (and)
  my_var = 20; my_var /= 2 # Assignment (/=)
  `,
            explanation: "Examples of various operators in Python."
          }
        ]
      },
      {
        term: "Argument",
        definition:
          "A value or expression passed into a function or method when it is called.",
        examples: [
          {
            language: "JavaScript",
            code: `function greet(name, greeting = "Hello") { // 'name' and 'greeting' are parameters
    console.log(\`\${greeting}, \${name}!\`);
  }
  
  greet("Alice");           // "Alice" is an argument
  greet("Bob", "Hi");       // "Bob" and "Hi" are arguments
  `,
            explanation: "Demonstrates how arguments are passed to a function, matching its parameters."
          }
        ]
      },
      {
        term: "Parameter",
        definition:
          "A named variable listed in the function definition. It acts as a placeholder for the values that will be passed into the function when it's called.",
        examples: [
          {
            language: "Python",
            code: `def calculate_area(length, width): # 'length' and 'width' are parameters
    return length * width
  
  area_of_room = calculate_area(10, 5) # 10 and 5 are arguments
  `,
            explanation: "The variables `length` and `width` in the function definition are its parameters."
          }
        ]
      },
      {
        term: "Return Value",
        definition:
          "The value that a function sends back to the part of the code that called it after it has finished executing.",
        examples: [
          {
            language: "JavaScript",
            code: `function calculateSum(a, b) {
    return a + b; // The sum is the return value
  }
  
  let result = calculateSum(7, 3); // result will be 10
  `,
            explanation: "The `return` keyword is used to specify the value sent back by the function."
          },
          {
            language: "Python",
            code: `def get_square(number):
    return number * number # The square of 'number' is returned
  
  squared_num = get_square(4) # squared_num will be 16
  `,
            explanation: "A function calculating a square and returning the result."
          }
        ]
      },
      {
        term: "Scope",
        definition:
          "The context within which variables and functions are accessible. It determines where a variable can be referenced and used.",
        examples: [
          {
            language: "JavaScript (Lexical Scope)",
            code: `let globalVar = "I'm global"; // Global scope
  
  function outerFunction() {
    let outerVar = "I'm in outer"; // Outer function scope
  
    function innerFunction() {
      let innerVar = "I'm in inner"; // Inner function scope
      console.log(globalVar); // Accessible
      console.log(outerVar);  // Accessible (closure)
      console.log(innerVar);  // Accessible
    }
    innerFunction();
    // console.log(innerVar); // Error: innerVar is not defined here
  }
  outerFunction();
  `,
            explanation: "Demonstrates global, outer (closure), and inner function scopes and variable accessibility."
          }
        ]
      },
      {
        term: "Module",
        definition:
          "A self-contained unit of code designed to encapsulate related functionality. Modules allow for better organization, reusability, and maintainability of code.",
        examples: [
          {
            language: "JavaScript (ES Modules)",
            code: `// mathUtils.js
  export function add(a, b) {
    return a + b;
  }
  export const PI = 3.14159;
  
  // main.js
  import { add, PI } from './mathUtils.js';
  console.log(add(2, 3)); // 5
  console.log(PI);        // 3.14159
  `,
            explanation: "Exporting functions and variables from one module and importing them into another."
          },
          {
            language: "Python",
            code: `# my_module.py
  def multiply(a, b):
      return a * b
  
  GREETING = "Hello from module"
  
  # main.py
  import my_module
  print(my_module.multiply(4, 5)) # 20
  print(my_module.GREETING)
  `,
            explanation: "Defining functions and variables in a Python module and importing/using them in another script."
          }
        ]
      },
      {
        term: "Package Manager",
        definition:
          "A collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer's operating system in a consistent manner.",
        examples: [
          {
            language: "Node.js (npm)",
            code: `npm init             # Initialize a new Node.js project
  npm install express  # Install the 'express' package
  npm update           # Update installed packages
  npm uninstall lodash # Remove the 'lodash' package
  `,
            explanation: "Common commands for Node Package Manager (`npm`), used to manage JavaScript libraries and frameworks."
          },
          {
            language: "Python (pip)",
            code: `pip install requests   # Install the 'requests' library
  pip freeze > requirements.txt # Save installed packages to a file
  pip uninstall numpy    # Uninstall the 'numpy' library
  `,
            explanation: "Common commands for `pip`, Python's package installer."
          }
        ]
      },
      {
        term: "Framework (Web)",
        definition:
          "A software framework that provides a standard way to build and deploy web applications. It offers pre-built components, tools, and a structure to streamline development.",
        examples: [
          {
            language: "React (Frontend JS)",
            code: `// Simplified React component structure
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  
  const App = () => {
    return (
      <h1>My React App</h1>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  `,
            explanation: "Basic structure of a React application, showing how components are rendered."
          },
          {
            language: "Django (Backend Python)",
            code: `# views.py (simplified Django view)
  from django.http import HttpResponse
  
  def hello_world(request):
      return HttpResponse("Hello, Django World!")
  
  # urls.py (simplified Django URL routing)
  from django.urls import path
  from . import views
  
  urlpatterns = [
      path('hello/', views.hello_world, name='hello'),
  ]
  `,
            explanation: "A simple Django view and URL configuration, demonstrating its structured approach to web development."
          }
        ]
      },
      {
        term: "HTTP (Hypertext Transfer Protocol)",
        definition:
          "The underlying protocol used by the World Wide Web. It defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.",
        examples: [
          {
            language: "HTTP Request Methods",
            code: `GET /index.html       // Request to retrieve data
  POST /submit-form     // Request to send data to the server
  PUT /users/123        // Request to update data
  DELETE /items/abc     // Request to delete data
  `,
            explanation: "Common HTTP methods used for interacting with web resources."
          }
        ]
      },
      {
        term: "JSON (JavaScript Object Notation)",
        definition:
          "A lightweight data-interchange format. It's easy for humans to read and write, and easy for machines to parse and generate. It's based on a subset of the JavaScript Programming Language.",
        examples: [
          {
            language: "JSON Structure",
            code: `{
    "name": "Alice",
    "age": 28,
    "isStudent": false,
    "courses": ["Math", "Science"],
    "address": {
      "street": "123 Main St",
      "city": "Anytown"
    }
  }`,
            explanation: "A typical JSON structure showing objects, arrays, strings, numbers, and booleans."
          },
          {
            language: "JavaScript (Parsing/Stringifying)",
            code: `const jsonString = '{"product":"Laptop", "price":1200}';
  const obj = JSON.parse(jsonString); // Convert JSON string to JavaScript object
  console.log(obj.product); // "Laptop"
  
  const newObj = { city: "London", country: "UK" };
  const newJsonString = JSON.stringify(newObj); // Convert JavaScript object to JSON string
  console.log(newJsonString); // '{"city":"London","country":"UK"}'
  `,
            explanation: "Using `JSON.parse()` to convert a JSON string into a JavaScript object and `JSON.stringify()` to do the reverse."
          }
        ]
      },
      {
        term: "Array Method",
        definition:
          "Built-in functions available on array objects that perform common operations like iteration, transformation, filtering, and searching.",
        examples: [
          {
            language: "JavaScript",
            code: `const numbers = [1, 2, 3, 4, 5];
  
  // map: creates a new array with the results of calling a provided function on every element
  const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
  
  // filter: creates a new array with all elements that pass the test implemented by the provided function
  const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
  
  // forEach: executes a provided function once for each array element
  numbers.forEach(num => console.log(num)); // Logs each number
  `,
            explanation: "Demonstrates popular array methods: `map` for transformation, `filter` for selection, and `forEach` for iteration."
          }
        ]
      },
      {
        term: "HTTP Status Code",
        definition:
          "A three-digit number returned by a server in response to an HTTP request, indicating whether a particular HTTP request has been successfully completed.",
        examples: [
          {
            language: "General (Common Codes)",
            code: `200 OK: The request has succeeded.
  201 Created: The request has succeeded and a new resource has been created.
  400 Bad Request: The server cannot or will not process the request due to an apparent client error.
  401 Unauthorized: Authentication is required and has failed or has not yet been provided.
  403 Forbidden: The client does not have access rights to the content.
  404 Not Found: The server cannot find the requested resource.
  500 Internal Server Error: The server encountered an unexpected condition.
  `,
            explanation: "A list of common HTTP status codes and their meanings."
          }
        ]
      },
      {
        term: "Recursion (Base Case)",
        definition:
          "The condition within a recursive function that stops the recursion from continuing infinitely. It's the simplest possible version of the problem that can be solved directly.",
        examples: [
          {
            language: "Python",
            code: `def countdown(n):
      if n <= 0:  # Base case: Stop when n is 0 or less
          print("Blastoff!")
          return
      else:
          print(n)
          countdown(n - 1) # Recursive call
  
  countdown(3)
  # Output:
  # 3
  # 2
  # 1
  # Blastoff!
  `,
            explanation: "The `if n <= 0:` condition acts as the base case, preventing infinite recursion."
          }
        ]
      },
      {
        term: "Higher-Order Function",
        definition:
          "A function that either takes one or more functions as arguments or returns a function as its result.",
        examples: [
          {
            language: "JavaScript",
            code: `// Function that takes another function as an argument
  function operateOnNumbers(num1, num2, operation) {
    return operation(num1, num2);
  }
  
  const sum = (a, b) => a + b;
  const product = (a, b) => a * b;
  
  console.log(operateOnNumbers(5, 3, sum));    // Output: 8
  console.log(operateOnNumbers(5, 3, product)); // Output: 15
  
  // Function that returns another function
  function createMultiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const multiplyBy5 = createMultiplier(5);
  console.log(multiplyBy5(10)); // Output: 50
  `,
            explanation: "Demonstrates functions accepting other functions as arguments (`operateOnNumbers`) and functions returning other functions (`createMultiplier`)."
          }
        ]
      },
      {
        term: "Immutability",
        definition:
          "The principle that once data is created, it cannot be changed. Instead of modifying existing data, new data is created based on the old data with the desired changes.",
        examples: [
          {
            language: "JavaScript",
            code: `const originalArray = [1, 2, 3];
  // Bad (Mutates original array):
  // originalArray.push(4);
  
  // Good (Creates a new array, leaving original immutable):
  const newArray = [...originalArray, 4]; // [1, 2, 3, 4]
  console.log(originalArray); // [1, 2, 3] (original remains unchanged)
  
  const originalObject = { name: "Bob", age: 25 };
  // Bad (Mutates original object):
  // originalObject.age = 26;
  
  // Good (Creates a new object):
  const newObject = { ...originalObject, age: 26, city: "London" };
  console.log(originalObject); // { name: "Bob", age: 25 }
  `,
            explanation: "Illustrates how to add elements to an array or change properties of an object without mutating the original, promoting immutability."
          }
        ]
      },
      {
        term: "Pure Function",
        definition:
          "A function that, given the same inputs, will always return the same output, and has no side effects (it does not modify any external state or perform I/O operations).",
        examples: [
          {
            language: "JavaScript",
            code: `// Pure Function
  function addPure(a, b) {
    return a + b;
  }
  console.log(addPure(2, 3)); // Always 5
  
  // Impure Function (side effect: modifies a global variable)
  let total = 0;
  function addImpure(a, b) {
    total = a + b; // Modifies external state
    return total;
  }
  addImpure(2, 3);
  console.log(total); // 5 (global 'total' is changed)
  `,
            explanation: "Compares a pure function (predictable, no side effects) with an impure one that modifies an external variable."
          }
        ]
      },
      {
        term: "Unit Testing",
        definition:
          "A software testing method where individual units or components of a software are tested. The purpose is to validate that each unit of the software performs as designed.",
        examples: [
          {
            language: "JavaScript (Jest)",
            code: `// function.js
  function sum(a, b) {
    return a + b;
  }
  // export default sum; (if using modules)
  
  // function.test.js
  // import sum from './function.js'; (if using modules)
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('adds negative numbers correctly', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
  `,
            explanation: "A simple unit test using the Jest framework, verifying the `sum` function's behavior for different inputs."
          }
        ]
      },
      {
        term: "Integration Testing",
        definition:
          "A phase in software testing in which individual software modules are combined and tested as a group. It checks the interfaces between components.",
        examples: [
          {
            language: "General (Concept)",
            code: `// Scenario: Testing User Authentication Flow
  // 1. User Interface (UI) sends login credentials to Backend API.
  // 2. Backend API processes credentials, interacts with Database.
  // 3. Database returns user data or error.
  // 4. Backend API sends response to UI.
  
  // An integration test would simulate the UI sending data,
  // and verify the complete chain of interaction through
  // the backend to the database and back.
  `,
            explanation: "Describes how an integration test would cover the flow of data across different parts of a system, like a user logging in."
          }
        ]
      },
      {
        term: "Dependency Injection",
        definition:
          "An architectural pattern where components receive their dependencies from an external source rather than creating them internally. This improves modularity and testability.",
        examples: [
          {
            language: "JavaScript (Concept)",
            code: `// Without Dependency Injection
  class UserService {
    constructor() {
      this.userRepository = new UserRepository(); // Creates dependency internally
    }
    getUser(id) {
      return this.userRepository.findById(id);
    }
  }
  
  // With Dependency Injection
  class UserServiceDI {
    constructor(userRepository) { // Dependency is injected
      this.userRepository = userRepository;
    }
    getUser(id) {
      return this.userRepository.findById(id);
    }
  }
  
  // Usage:
  const repo = new UserRepository();
  const service = new UserServiceDI(repo); // Inject dependency
  `,
            explanation: "Contrasts direct dependency creation with injecting the dependency via the constructor, making `UserServiceDI` easier to test and reuse."
          }
        ]
      }
    ]
  };