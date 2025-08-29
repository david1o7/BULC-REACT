

export const quizData = {
  FRONTEND:[
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High-level Text Manipulation Language",
        "Hyperlink and Text Management Language",
        "Home Tool Markup Language",
      ],
      correct: 0,
    },
    {
      question: "Which of the following is the root element of an HTML page?",
      options: ["<head>", "<body>", "<html>", "<title>"],
      correct: 2,
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      correct: 1,
    },
    {
      question: "Which HTML tag is used to define an ordered list?",
      options: ["<ul>", "<ol>", "<li>", "<dd>"],
      correct: 1,
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<hyperlink>", "<a>", "<href>"],
      correct: 2,
    },
    {
      question: "What attribute is used to specify the URL of a hyperlink?",
      options: ["src", "href", "url", "link"],
      correct: 1,
    },
    {
      question: "Which HTML tag is used to display an image?",
      options: ["<image>", "<src>", "<img>", "<picture>"],
      correct: 2,
    },
    {
      question: "What attribute is used to specify the source of an image?",
      options: ["href", "url", "src", "link"],
      correct: 2,
    },
    {
      question: "Which HTML tag defines a table?",
      options: ["<grid>", "<table>", "<row>", "<data>"],
      correct: 1,
    },
    {
      question: "Which HTML tag defines a row in a table?",
      options: ["<row>", "<td>", "<th>", "<tr>"],
      correct: 3,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style System",
      ],
      correct: 2,
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["font-color", "text-color", "color", "foreground-color"],
      correct: 2,
    },
    {
      question:
        "Which CSS property is used to change the background color of an element?",
      options: [
        "background-color",
        "color-background",
        "bg-color",
        "element-background",
      ],
      correct: 0,
    },
    {
      question:
        "How do you insert an external CSS file into your HTML document?",
      options: [
        '<style src="styles.css">',
        '<link rel="stylesheet" type="text/css" href="styles.css">',
        '<css file="styles.css">',
        '@import url("styles.css"); (within `<style>` tags)',
      ],
      correct: 1,
    },
    {
      question: "Which CSS selector targets all `<p>` elements on a page?",
      options: [".p", "#p", "p", "* p"],
      correct: 2,
    },
    {
      question:
        'Which CSS selector targets an element with the ID "myElement"?',
      options: [".myElement", "#myElement", "element.myElement", "myElement"],

      correct: 1,
    },
    {
      question:
        'Which CSS selector targets all elements with the class "container"?',
      options: ["#container", ".container", "container", "* container"],
      correct: 1,
    },
    {
      question: "Which CSS property controls the size of the text?",
      options: ["text-size", "font-size", "size", "text-style"],
      correct: 1,
    },
    {
      question: "Which CSS property is used to make text bold?",
      options: [
        "font-weight: bold;",
        "text-style: bold;",
        "bold-text: yes;",
        "text-weight: bold;",
      ],
      correct: 0,
    },
    {
      question:
        "Which CSS property is used to add space inside an element's border?",
      options: ["margin", "border", "padding", "spacing"],
      correct: 2,
    },
    {
      question: "What does JS stand for?",
      options: [
        "Java Style",
        "JavaScript",
        "Joint Scripting",
        "Just Scripting",
      ],
      correct: 1,
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["variable", "var", "let", "const"],
      correct: 2,
    },
    {
      question:
        "Which of the following is a primitive data type in JavaScript?",
      options: ["Array", "Object", "Boolean", "Function"],
      correct: 2,
    },
    {
      question: "How do you write a single-line comment in JavaScript?",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "-- This is a comment",
        "#This is a comment",
      ],
      correct: 0,
    },
    {
      question:
        "Which operator is used for strict equality in JavaScript (checks both value and type)?",
      options: ["==", "=", "===", "!="],
      correct: 2,
    },
    {
      question: "What is the output of `2 + '2'` in JavaScript?",
      options: ["4 (number)", "22 (string)", "error", "NaN"],
      correct: 1,
    },
    {
      question:
        "Which built-in JavaScript function is used to display output in the console?",
      options: ["alert()", "prompt()", "console.log()", "document.write()"],
      correct: 2,
    },
    {
      question: "What is an array in JavaScript?",
      options: [
        "A single variable that can store multiple data types.",
        "An ordered collection of elements, which can be of different data types.",
        "A data structure that stores key-value pairs.",
        "A function that returns multiple values.",
      ],
      correct: 1,
    },
    {
      question:
        "How do you access the first element of an array named `myArray`?",
      options: ["myArray[1]", "myArray.first()", "myArray(0)", "myArray[0]"],
      correct: 2,
    },
    {
      question: "Which of the following is a loop structure in JavaScript?",
      options: [
        "if statement",
        "switch statement",
        "for loop",
        "function declaration",
      ],
      correct: 2,
    },
    {
      question: "What is the purpose of a web browser?",
      options: [
        "To create web pages.",
        "To store website files.",
        "To display web pages to users.",
        "To manage website databases.",
      ],
      correct: 2,
    },
    {
      question: "What is a URL (Uniform Resource Locator)?",
      options: [
        "The language used to write web pages.",
        "The design and layout of a website.",
        "The address of a resource on the internet.",
        "A program that runs on a web server.",
      ],
      correct: 2,
    },
    {
      question: "What is the role of a web server?",
      options: [
        "To design the user interface of a website.",
        "To store, process, and deliver website files to browsers.",
        "To handle client-side scripting.",
        "To manage the website's domain name.",
      ],
      correct: 1,
    },
    {
      question:
        "What is the difference between the front-end and the back-end of a website?",
      options: [
        "Front-end is what the user sees, back-end is the server-side logic.",
        "Front-end handles data storage, back-end handles user interaction.",
        "Front-end is written in JavaScript, back-end is written in HTML/CSS.",
        "There is no difference.",
      ],
      correct: 0,
    },
    {
      question: "Which of the following is primarily a front-end technology?",
      options: ["Python", "Node.js", "HTML", "MySQL"],
      correct: 2,
    },
    {
      question:
        "Which of the following is often used for back-end development?",
      options: ["CSS", "JavaScript", "HTML", "React"],
      correct: 1,
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "Hyper Text Transfer Protocol",
        "High-level Text Transmission Process",
        "Hyperlink Transferring Protocol",
        "Home Text Processing Protocol",
      ],
      correct: 0,
    },
    {
      question: "What is a DNS (Domain Name System)?",
      options: [
        "A system for designing website layouts.",
        "A system that translates domain names into IP addresses.",
        "A language for styling web pages.",
        "A type of web server software.",
      ],
      correct: 1,
    },
    {
      question: "What is a web API (Application Programming Interface)?",
      options: [
        "A graphical user interface for web development tools.",
        "A set of rules and protocols that allow different software applications to communicate with each other over the web.",
        "A specific programming language used for web development.",
        "A method for securing web pages with passwords.",
      ],
      correct: 1,
    },
    {
      question: "What is responsive web design?",
      options: [
        "Designing websites that load very quickly.",
        "Designing websites that adapt their layout to different screen sizes and devices.",
        "Designing websites with a lot of animations and interactive elements.",
        "Designing websites that use only text and no images.",
      ],
      correct: 1,
    },
    {
      question: "What is a function in JavaScript?",
      options: [
        "A type of variable that can store multiple values.",
        "A block of code designed to perform a specific task.",
        "A way to style HTML elements.",
        "A method for handling user input.",
      ],
      correct: 1,
    },
    {
      question:
        "How do you call (execute) a function named `myFunction` in JavaScript?",
      options: [
        "call myFunction;",
        "execute myFunction();",
        "myFunction();",
        "run myFunction;",
      ],
      correct: 2,
    },
    {
      question: "What is the purpose of the `document` object in JavaScript?",
      options: [
        "To represent the browser window.",
        "To represent the HTML DOM (Document Object Model) of the page.",
        "To handle user events like clicks and mouse movements.",
        "To store website cookies.",
      ],
      correct: 1,
    },
    {
      question:
        "Which method is commonly used to find an HTML element by its ID in JavaScript?",
      options: [
        "document.getElementByName()",
        "document.getElementByClass()",
        "document.getElementById()",
        'document.querySelector("#myId")',
      ],
      correct: 2,
    },
    {
      question: "What is an event listener in JavaScript?",
      options: [
        "A function that is called when a specific HTML element is created.",
        "A mechanism that waits for a specific event (like a click) to occur and then executes a function.",
        "A variable that stores information about user interactions.",
        "A way to style elements based on user actions.",
      ],
      correct: 1,
    },
    {
      question: "What is a framework in web development?",
      options: [
        "A reusable set of pre-written code and rules that provides a structure for building software applications.",
        "A collection of pre-written code and tools that provides a structure for building web applications.",
        "A specific programming language used for complex websites.",
        "A type of web server.",
      ],
      correct: 0,
    },
    {
      question:
        "Which of the following is a popular JavaScript framework/library for front-end development?",
      options: ["Django", "Ruby on Rails", "React", "Spring"],
      correct: 2,
    },
    {
      question: "What is version control (e.g., using Git)?",
      options: [
        "A way to optimize website loading speed.",
        "A system for tracking changes to code over time.",
        "A method for deploying websites to a server.",
        "A tool for designing user interfaces.",
      ],
      correct: 1,
    },
    {
      question: "What is a database used for in web development?",
      options: [
        "To store and manage website files (HTML, CSS, JavaScript).",
        "To handle user authentication and security.",
        "To store and retrieve structured data, such as user information or product details.",
        "To define the visual appearance of a website.",
      ],
      correct: 2,
    },
    {
      question: "What is the purpose of testing in web development?",
      options: [
        "To make the website look more appealing.",
        "To ensure the website functions correctly and is free of errors.",
        "To optimize website performance for search engines.",
        "To gather user feedback on the website's design.",
      ],
      correct: 1,
    },
    {
      "question": "A network within a home or small office is typically a:",
      "options": ["WAN", "LAN", "MAN", "PAN"],
      "correct": 1
    },
    {
      "question": "Connecting devices using Bluetooth creates a:",
      "options": ["LAN", "WAN", "MAN", "PAN"],
      "correct": 3
    },
    {
      "question": "A network that connects multiple cities is classified as a:",
      "options": ["LAN", "MAN", "WAN", "VPN"],
      "correct": 2
    },
    {
      "question": "Which network type uses a secure, encrypted connection over a public network?",
      "options": ["LAN", "WAN", "MAN", "VPN"],
      "correct": 3
    },
    {
      "question": "In a bus topology, what happens if the main cable breaks?",
      "options": ["Only one workstation is affected", "The entire network can fail", "Data is rerouted automatically", "A new connection is established"],
      "correct": 1
    },
    {
      "question": "What is a primary disadvantage of a star topology?",
      "options": ["High cost of cabling", "Difficult to add new nodes", "Reliance on the central hub/switch", "Low fault tolerance"],
      "correct": 2
    },
    {
      "question": "In a ring topology, how is data typically transmitted?",
      "options": ["Bidirectionally", "Randomly", "Unidirectionally", "Simultaneously to all nodes"],
      "correct": 2
    },
    {
      "question": "Which topology offers multiple paths for data transmission between nodes?",
      "options": ["Star", "Bus", "Ring", "Mesh"],
      "correct": 3
    },
    {
      "question": "A hierarchical network structure is characteristic of which topology?",
      "options": ["Mesh", "Ring", "Tree", "Bus"],
      "correct": 2
    },
    {
      "question": "The physical layer of the OSI model is concerned with:",
      "options": ["Logical addressing", "Data framing", "Signal encoding", "Application protocols"],
      "correct": 2
    },
    {
      "question": "MAC addressing is handled at which OSI layer?",
      "options": ["Network", "Transport", "Data Link", "Physical"],
      "correct": 2
    },
    {
      "question": "Which OSI layer is responsible for end-to-end reliable data transfer?",
      "options": ["Network", "Session", "Transport", "Application"],
      "correct": 2
    },
    {
      "question": "Establishing, maintaining, and terminating sessions occurs at the:",
      "options": ["Transport Layer", "Network Layer", "Session Layer", "Presentation Layer"],
      "correct": 2
    },
    {
      "question": "Data encryption and decryption are typically handled at the:",
      "options": ["Session Layer", "Presentation Layer", "Application Layer", "Transport Layer"],
      "correct": 1
    },
    {
      "question": "Which OSI layer provides services directly to the end-user?",
      "options": ["Transport", "Network", "Presentation", "Application"],
      "correct": 3
    },
    {
      "question": "The 'client-side' of web development is also known as:",
      "options": ["Backend", "Server-side", "Frontend", "Database management"],
      "correct": 2
    },
    {
      "question": "Which of these is NOT primarily a backend technology?",
      "options": ["Python", "Node.js", "PHP", "HTML"],
      "correct": 3
    },
    {
      "question": "What is the purpose of an IP address?",
      "options": ["To identify a physical network cable", "To uniquely identify a device on a network", "To define the style of a web page", "To translate domain names"],
      "correct": 1
    },
    {
      "question": "What does API stand for in the context of web development?",
      "options": ["Advanced Programming Interface", "Application Protocol Interface", "Application Programming Interface", "Automated Program Interaction"],
      "correct": 2
    },
    {
      "question": "React and Angular are examples of:",
      "options": ["Backend databases", "Server-side languages", "Frontend frameworks/libraries", "Network protocols"],
      "correct": 2
    },
    {
      "question": "A collection of pre-written code that helps simplify development is called a:",
      "options": ["Framework", "Protocol", "Library", "Compiler"],
      "correct": 2
    },
    {
      "question": "Making a website work well on desktops, tablets, and phones is the goal of:",
      "options": ["Server-side rendering", "Progressive enhancement", "Responsive design", "Mobile-first development"],
      "correct": 2
    },
    {
      "question": "WordPress and Drupal are examples of:",
      "options": ["JavaScript frameworks", "CSS preprocessors", "Content Management Systems", "Backend languages"],
      "correct": 2
    },
    {
      "question": "What is the primary function of Git?",
      "options": ["Package management", "Task automation", "Version control", "Code compilation"],
      "correct": 2
    },
    {
      "question": "Which of the following is used to store and manage structured data for a website?",
      "options": ["Web server", "Browser cache", "Database", "Text editor"],
      "correct": 2
    }
  ],
  JAVASCRIPT: [
    {
      "question": "What is JavaScript primarily used for?",
      "options": [
        "Styling web pages",
        "Creating interactive web experiences",
        "Structuring web content",
        "Managing databases"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which keyword is used to declare a variable that cannot be reassigned?",
      "options": [
        "var",
        "let",
        "const",
        "static"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```javascript\nconsole.log(typeof null);\n```",
      "options": [
        "\"null\"",
        "\"object\"",
        "\"undefined\"",
        "\"number\""
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "How do you correctly log 'Hello' to the console?",
      "options": [
        "print('Hello');",
        "log.console('Hello');",
        "console.log('Hello');",
        "System.out.println('Hello');"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which operator is used for strict equality (checks both value and type)?",
      "options": [
        "==",
        "===",
        "=",
        "!="
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the result of `\"5\" + 2` in JavaScript?",
      "options": [
        "\"7\"",
        "7",
        "\"52\"",
        "Error"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "How do you access the first element of an array named `myArray`?",
      "options": [
        "myArray[1]",
        "myArray.first()",
        "myArray[0]",
        "myArray.get(0)"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of the `return` statement in a function?",
      "options": [
        "To stop the function execution and return a value.",
        "To print a value to the console.",
        "To declare a new variable.",
        "To loop through an array."
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which of these is NOT a valid way to define a function in JavaScript?",
      "options": [
        "function myFunction() {}",
        "const myFunction = () => {}",
        "myFunction = function() {}",
        "def myFunction():"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```javascript\nlet a = 10;\nif (a > 5) {\n  a = 20;\n}\nconsole.log(a);\n```",
      "options": [
        "10",
        "20",
        "Error",
        "undefined"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "How can you convert a string to an integer in JavaScript?",
      "options": [
        "parseInt()",
        "toString()",
        "parseFloat()",
        "toFixed()"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the correct syntax for a `for` loop that iterates from 0 to 4?",
      "options": [
        "for (i = 0; i < 5; i++)",
        "for (i <= 5; i++)",
        "for i = 0 to 4",
        "loop (i from 0 to 4)"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What does `NaN` stand for in JavaScript?",
      "options": [
        "Not a Name",
        "New and Null",
        "Not a Number",
        "Negative Acknowledgment"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which array method adds one or more elements to the end of an array and returns the new length?",
      "options": [
        "unshift()",
        "pop()",
        "push()",
        "shift()"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the output?\n```javascript\nlet x = 'hello';\nlet y = x.length;\nconsole.log(y);\n```",
      "options": [
        "5",
        "6",
        "undefined",
        "Error"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of `document.getElementById()`?",
      "options": [
        "To create a new HTML element.",
        "To select an HTML element by its class name.",
        "To select an HTML element by its ID.",
        "To style an HTML element."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which event occurs when the user clicks on an HTML element?",
      "options": [
        "onchange",
        "onmouseover",
        "onclick",
        "onkeydown"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the correct way to include an external JavaScript file?",
      "options": [
        "<script href=\"script.js\"></script>",
        "<script src=\"script.js\"></script>",
        "<link rel=\"javascript\" href=\"script.js\">",
        "<js src=\"script.js\"></js>"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will `console.log(10 % 3)` output?",
      "options": [
        "3.33",
        "3",
        "1",
        "0"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which symbol is used for multi-line comments in JavaScript?",
      "options": [
        "//",
        "/**/",
        "",
        "##"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the value of `true || false`?",
      "options": [
        "true",
        "false",
        "undefined",
        "Error"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the value of `false && true`?",
      "options": [
        "true",
        "false",
        "undefined",
        "Error"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What does `undefined` mean in JavaScript?",
      "options": [
        "A variable has been declared but has not yet been assigned a value.",
        "A variable has been explicitly set to `null`.",
        "A variable is not defined anywhere.",
        "An error occurred."
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How do you create an object literal with properties `name` and `age`?",
      "options": [
        "let person = [name: 'Alice', age: 30];",
        "let person = {name: 'Alice', age: 30};",
        "let person = new Object('Alice', 30);",
        "let person = (name: 'Alice', age: 30);"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```javascript\nlet count = 0;\nwhile (count < 3) {\n  console.log(count);\n  count++;\n}\n```",
      "options": [
        "0 1 2",
        "1 2 3",
        "0 1 2 3",
        "Error"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the difference between `null` and `undefined`?",
      "options": [
        "`null` is an object, `undefined` is a primitive type.",
        "`null` means absence of value, `undefined` means a variable has not been assigned a value.",
        "They are exactly the same.",
        "`null` is used for numbers, `undefined` for strings."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```javascript\nfunction greet() {\n  return 'Hi';\n}\nconsole.log(greet());\n```",
      "options": [
        "greet()",
        "Hi",
        "undefined",
        "Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is a `closure` in JavaScript?",
      "options": [
        "A type of loop.",
        "A function having access to its outer function's scope even after the outer function has finished executing.",
        "A way to close a web page.",
        "A built-in method for array iteration."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What does the `this` keyword refer to in JavaScript?",
      "options": [
        "The global object (e.g., `window` in browsers).",
        "The function itself.",
        "The object that owns the currently executing code.",
        "The parent element in the DOM."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is `hoisting` in JavaScript?",
      "options": [
        "A method to lift elements in the DOM.",
        "A process where variable and function declarations are moved to the top of their scope during compilation.",
        "A way to sort arrays.",
        "A type of asynchronous operation."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the difference between `==` and `===` operators?",
      "options": [
        "`==` compares value and type, `===` compares only value.",
        "`==` compares only value, `===` compares value and type.",
        "`==` is used for numbers, `===` for strings.",
        "There is no practical difference."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```javascript\nlet arr = [1, 2, 3];\narr.splice(1, 1);\nconsole.log(arr);\n```",
      "options": [
        "[1, 3]",
        "[1, 2]",
        "[2, 3]",
        "[1, 2, 3]"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What does `event bubbling` refer to in the DOM?",
      "options": [
        "Events are handled first by the innermost element, then by its parent, and so on.",
        "Events are handled by the outermost element first, then by its children.",
        "Events are ignored by parent elements.",
        "A method to create new events."
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `localStorage` in web development?",
      "options": [
        "To store data on the server.",
        "To store small amounts of data temporarily during a session.",
        "To store data persistently in the browser across sessions.",
        "To create client-side databases."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is a `callback function`?",
      "options": [
        "A function that calls itself recursively.",
        "A function passed as an argument to another function, to be executed later.",
        "A function that always returns `null`.",
        "A function that is only called once."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```javascript\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled);\n```",
      "options": [
        "[1, 4, 9]",
        "[2, 4, 6]",
        "[1, 2, 3, 1, 2, 3]",
        "Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is `destructuring` in JavaScript?",
      "options": [
        "Breaking down a string into characters.",
        "A way to extract values from arrays or properties from objects into distinct variables.",
        "Deleting variables from memory.",
        "Changing the structure of a function."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of the `bind()` method?",
      "options": [
        "To link two JavaScript files.",
        "To create a new function that, when called, has its `this` keyword set to the provided value.",
        "To attach an event listener.",
        "To combine two arrays."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```javascript\nconst person = { name: 'Bob', age: 25 };\nconst { name, city } = person;\nconsole.log(city);\n```",
      "options": [
        "\"Bob\"",
        "25",
        "undefined",
        "Error"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is a `Promise` in JavaScript?",
      "options": [
        "A guarantee that a function will run without errors.",
        "An object representing the eventual completion or failure of an asynchronous operation.",
        "A type of loop for asynchronous code.",
        "A statement for conditional execution."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the difference between `let` and `var` in terms of scope?",
      "options": [
        "`let` has function scope, `var` has block scope.",
        "`let` has block scope, `var` has function scope.",
        "They both have global scope.",
        "`var` is for constants, `let` is for variables."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of `!!\"hello\"`?",
      "options": [
        "true",
        "false",
        "\"hello\"",
        "Error"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is `event delegation`?",
      "options": [
        "Assigning multiple event listeners to a single element.",
        "Handling events on a parent element instead of individual child elements.",
        "Ignoring specific events on a page.",
        "Creating custom events."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```javascript\nconst numbers = [1, 2, 3];\nconst sum = numbers.reduce((acc, current) => acc + current, 0);\nconsole.log(sum);\n```",
      "options": [
        "123",
        "6",
        "0",
        "Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which of these is used for asynchronous programming in modern JavaScript?",
      "options": [
        "Callbacks",
        "Promises",
        "Async/Await",
        "All of the above"
      ],
      "correct": 3,
      "level": "intermediate"
    },
    {
      "question": "What is the spread operator (`...`) used for?",
      "options": [
        "To multiply numbers.",
        "To condense multiple arguments into an array.",
        "To expand iterable (like an array) into individual elements.",
        "Both B and C"
      ],
      "correct": 3,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following?\n```javascript\nlet a = [1, 2];\nlet b = [...a, 3, 4];\nconsole.log(b);\n```",
      "options": [
        "[1, 2, 3, 4]",
        "[[1, 2], 3, 4]",
        "Error",
        "undefined"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `setTimeout`?",
      "options": [
        "To execute a function immediately.",
        "To stop the execution of a script.",
        "To execute a function once after a specified delay.",
        "To execute a function repeatedly at intervals."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the difference between `querySelector` and `querySelectorAll`?",
      "options": [
        "`querySelector` returns all matching elements, `querySelectorAll` returns the first.",
        "`querySelector` returns the first matching element, `querySelectorAll` returns all matching elements.",
        "`querySelector` is for IDs, `querySelectorAll` is for classes.",
        "They are aliases for each other."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is a `polyfill` in JavaScript?",
      "options": [
        "A type of data structure.",
        "Code that implements a feature that is not natively supported by a browser.",
        "A tool for optimizing JavaScript code.",
        "A way to combine multiple JavaScript files."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output?\n```javascript\nconst obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconst obj3 = { ...obj1, ...obj2, c: 3 };\nconsole.log(obj3);\n```",
      "options": [
        "{ a: 1, b: 2, c: 3 }",
        "{ a: 1, c: 3 }",
        "{ b: 2, c: 3 }",
        "Error"
      ],
      "correct": 0,
      "level": "intermediate"
    }
  ],
  HTML: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
      correct: 0
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<h6>", "<h1>", "<head>", "<header>"],
      correct: 1
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<lb>", "<br>", "<line>"],
      correct: 2
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: ["<body bg='yellow'>", "<body style='background-color:yellow'>", "<background>yellow</background>", "<body background='yellow'>"],
      correct: 1
    },
    {
      question: "Which HTML element defines the title of a document?",
      options: ["<title>", "<head>", "<meta>", "<header>"],
      correct: 0
    },
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      options: ["<footer>", "<section>", "<div>", "<bottom>"],
      correct: 0
    },
    {
      question: "Which HTML element is used to display a scalar measurement within a range?",
      options: ["<gauge>", "<range>", "<measure>", "<meter>"],
      correct: 3
    },
    {
      question: "Which HTML element is used to create an HTML form for user input?",
      options: ["<input>", "<form>", "<formset>", "<inputform>"],
      correct: 1
    },
    {
      question: "Which HTML element is used to create a drop-down list?",
      options: ["<list>", "<dropdown>", "<select>", "<input type='list'>"],
      correct: 2
    },
    {
      question: "Which HTML element is used to create a multi-line text input?",
      options: ["<text>", "<textarea>", "<input type='text'>", "<input type='textarea'>"],
      correct: 1
    }
  ],
  CPP: [
    {
      "question": "What is the correct syntax to print 'Hello, World!' in C++?",
      "options": [
        "cout << \"Hello, World!\";",
        "printf(\"Hello, World!\");",
        "Console.WriteLine(\"Hello, World!\");",
        "print(\"Hello, World!\");"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which header file is typically included for input/output operations in C++?",
      "options": [
        "<stdio.h>",
        "<string>",
        "<iostream>",
        "<vector>"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of the following is NOT a fundamental data type in C++?",
      "options": [
        "int",
        "float",
        "string",
        "char"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the result of `10 / 3` in C++ (integer division)?",
      "options": [
        "3.33",
        "3",
        "4",
        "1"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of the `main` function in a C++ program?",
      "options": [
        "It's an optional function.",
        "It's where global variables are declared.",
        "It's the entry point of the program execution.",
        "It's used for defining classes."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which operator is used to get the remainder of a division?",
      "options": [
        "/",
        "*",
        "%",
        "+"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "How do you declare an integer variable named `age` and initialize it to 25?",
      "options": [
        "int age = 25;",
        "age = int 25;",
        "integer age = 25;",
        "declare int age = 25;"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What will be the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nint main() {\n    int x = 5;\n    std::cout << x++;\n    return 0;\n}\n```",
      "options": [
        "5",
        "6",
        "Compilation Error",
        "Undefined Behavior"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which loop structure guarantees that its body will execute at least once?",
      "options": [
        "for loop",
        "while loop",
        "do-while loop",
        "if statement"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the correct way to write a single-line comment in C++?",
      "options": [
        "",
        "/* comment */",
        "// comment",
        "# comment"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What does `std::cin` represent in C++?",
      "options": [
        "Standard output stream",
        "Standard input stream",
        "Standard error stream",
        "Standard file stream"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of these is used to define a constant variable in C++?",
      "options": [
        "volatile",
        "mutable",
        "const",
        "static"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is an array in C++?",
      "options": [
        "A collection of different data types.",
        "A collection of variables of the same data type stored in contiguous memory locations.",
        "A special type of function.",
        "A user-defined data type."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the index of the first element in a C++ array?",
      "options": [
        "1",
        "0",
        "Any integer",
        "The size of the array"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nint main() {\n    int a = 10;\n    if (a > 5 && a < 15) {\n        std::cout << \"Inside\";\n    } else {\n        std::cout << \"Outside\";\n    }\n    return 0;\n}\n```",
      "options": [
        "Inside",
        "Outside",
        "Compilation Error",
        "Nothing"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How do you define a simple function in C++ that takes no arguments and returns `void`?",
      "options": [
        "function myFunction() {}",
        "void myFunction() {}",
        "myFunction void() {}",
        "define myFunction() {}"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of the `return 0;` statement in the `main` function?",
      "options": [
        "It signifies an error occurred.",
        "It indicates successful program execution.",
        "It pauses the program.",
        "It restarts the program."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which operator is used for logical OR in C++?",
      "options": [
        "&",
        "|",
        "&&",
        "||"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "What is the output of `std::cout << (5 + 3 * 2);`?",
      "options": [
        "16",
        "11",
        "13",
        "8"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following is true about C++ comments?",
      "options": [
        "They are executed by the compiler.",
        "They improve program performance.",
        "They are ignored by the compiler.",
        "They are mandatory for all lines of code."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What does `\n` represent in a C++ string literal?",
      "options": [
        "A tab character",
        "A newline character",
        "A null terminator",
        "A backspace character"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the default value of a global integer variable if not initialized?",
      "options": [
        "Garbage value",
        "0",
        "1",
        "Undefined"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following creates a compile-time error?\n```cpp\nint main() {\n    int 123num = 10;\n    return 0;\n}\n```",
      "options": [
        "Missing semicolon",
        "Variable name starting with a digit",
        "Incorrect return type",
        "No error"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of the `using namespace std;` statement?",
      "options": [
        "To include all standard libraries.",
        "To avoid typing `std::` before standard library elements.",
        "To define a new namespace.",
        "To import functions from other files."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which header file defines the `std::string` class?",
      "options": [
        "<iostream>",
        "<cstring>",
        "<string>",
        "<algorithm>"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the difference between `pass by value` and `pass by reference` for function arguments?",
      "options": [
        "Pass by value copies the argument, pass by reference uses the original variable.",
        "Pass by value uses pointers, pass by reference uses copies.",
        "There is no difference.",
        "Pass by value is faster."
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What will be the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nint main() {\n    int x = 10;\n    int* ptr = &x;\n    *ptr = 20;\n    std::cout << x;\n    return 0;\n}\n```",
      "options": [
        "10",
        "20",
        "Address of x",
        "Compilation Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What does the `const` keyword signify when used with a member function of a class?",
      "options": [
        "The function cannot be overloaded.",
        "The function can only access public members.",
        "The function does not modify the object's state.",
        "The function returns a constant value."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which of the following is true about a `constructor` in C++?",
      "options": [
        "It must have a return type.",
        "It cannot be overloaded.",
        "It is called automatically when an object is created.",
        "It is used to destroy an object."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is `polymorphism` in C++ (specifically, runtime polymorphism)?",
      "options": [
        "The ability to define multiple functions with the same name.",
        "The ability of an object to take on many forms (e.g., through virtual functions and inheritance).",
        "The process of combining data and functions into a single unit.",
        "The mechanism of creating new classes from existing classes."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of the `virtual` keyword in C++?",
      "options": [
        "To create a global function.",
        "To enable runtime polymorphism.",
        "To declare a constant variable.",
        "To prevent inheritance."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is a `reference` in C++?",
      "options": [
        "A pointer to a memory address.",
        "An alias (another name) for an existing variable.",
        "A copy of a variable.",
        "A dynamic array."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nclass MyClass {\npublic:\n    MyClass() { std::cout << \"Constructor\\n\"; }\n    ~MyClass() { std::cout << \"Destructor\\n\"; }\n};\nint main() {\n    MyClass obj;\n    return 0;\n}\n```",
      "options": [
        "Constructor\nDestructor",
        "Constructor",
        "Destructor",
        "No output"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "Which operator is used to access members of a class through a pointer to an object?",
      "options": [
        ". (dot operator)",
        ":: (scope resolution operator)",
        "-> (arrow operator)",
        "& (address-of operator)"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is `encapsulation` in Object-Oriented Programming?",
      "options": [
        "The ability to create new classes from existing classes.",
        "The process of combining data and the functions that operate on that data into a single unit (a class).",
        "The ability of an object to take on many forms.",
        "The process of hiding implementation details."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What does `static` mean when applied to a member variable of a class?",
      "options": [
        "The variable can only be accessed within the class.",
        "The variable is constant and cannot be changed.",
        "The variable belongs to the class itself, not to individual objects.",
        "The variable is allocated on the heap."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\nint main() {\n    int x = 5, y = 10;\n    swap(x, y);\n    std::cout << x << \" \" << y;\n    return 0;\n}\n```",
      "options": [
        "5 10",
        "10 5",
        "Compilation Error",
        "Garbage values"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which keyword is used to explicitly prevent a class from being inherited?",
      "options": [
        "final",
        "sealed",
        "noinherit",
        "private"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is an `abstract class` in C++?",
      "options": [
        "A class that cannot have any member variables.",
        "A class that cannot be inherited from.",
        "A class that contains at least one pure virtual function and cannot be instantiated.",
        "A class used only for utility functions."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `new` and `delete` operators in C++?",
      "options": [
        "For file I/O operations.",
        "For dynamic memory allocation and deallocation.",
        "For creating and destroying objects on the stack.",
        "For string manipulation."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following C++ code snippet?\n```cpp\n#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> v = {1, 2, 3, 4, 5};\n    std::cout << v[2];\n    return 0;\n}\n```",
      "options": [
        "1",
        "2",
        "3",
        "Compilation Error"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which of the following correctly describes `function overloading`?",
      "options": [
        "Defining multiple functions with the same name but different return types.",
        "Defining multiple functions with the same name but different parameters.",
        "Defining a function that calls itself.",
        "Defining a function within another function."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the `this` pointer in C++?",
      "options": [
        "A pointer to the parent class object.",
        "A pointer to the global object.",
        "A pointer to the current object itself.",
        "A pointer to a static member."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is a `friend function` in C++?",
      "options": [
        "A function that is inherited by derived classes.",
        "A function that can access private and protected members of a class.",
        "A function that is part of a different class.",
        "A function that cannot be overloaded."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nclass Base {\npublic:\n    void show() { std::cout << \"Base\"; }\n};\nclass Derived : public Base {\npublic:\n    void show() { std::cout << \"Derived\"; }\n};\nint main() {\n    Base* b_ptr = new Derived();\n    b_ptr->show();\n    delete b_ptr;\n    return 0;\n}\n```",
      "options": [
        "Base",
        "Derived",
        "Compilation Error",
        "Runtime Error"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `operator overloading` in C++?",
      "options": [
        "To create new operators.",
        "To change the precedence of operators.",
        "To allow operators to work with user-defined types (classes).",
        "To speed up arithmetic operations."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "When is a `destructor` called in C++?",
      "options": [
        "When an object is created.",
        "When an object goes out of scope or is explicitly deleted.",
        "When a member function is called.",
        "At the beginning of the program."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following C++ code snippet?\n```cpp\n#include <iostream>\nint main() {\n    int arr[] = {10, 20, 30};\n    int* ptr = arr;\n    std::cout << *(ptr + 1);\n    return 0;\n}\n```",
      "options": [
        "10",
        "20",
        "30",
        "Address of 20"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which of the following is an example of `inheritance`?",
      "options": [
        "Combining data and functions into a class.",
        "A class deriving properties and behaviors from another class.",
        "Using the same function name for different data types.",
        "Hiding the internal details of a class."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is a `pure virtual function`?",
      "options": [
        "A virtual function that cannot be overridden.",
        "A virtual function with a default implementation.",
        "A virtual function with no implementation, declared with `= 0;`.",
        "A static member function."
      ],
      "correct": 2,
      "level": "intermediate"
    }
  ],
  CSS :[
    {
      "question": "Which CSS property is used to change the text color of an element?",
      "options": [
        "background-color",
        "color",
        "font-color",
        "text-style"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following is the correct way to link an external stylesheet?",
      "options": [
        "<style src=\"style.css\">",
        "<link rel=\"stylesheet\" href=\"style.css\">",
        "<stylesheet>style.css</stylesheet>",
        "<link href=\"style.css\">"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which CSS selector targets elements with a specific `id`?",
      "options": [
        ".class",
        "#id",
        "element",
        "*"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the CSS property used to set the background color of an element?",
      "options": [
        "color",
        "bg-color",
        "background-color",
        "background"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which property is used to change the font size of text?",
      "options": [
        "text-size",
        "font-size",
        "text-height",
        "font-height"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What does the `margin` property do in CSS?",
      "options": [
        "Adds space inside the element's border.",
        "Adds space outside the element's border.",
        "Sets the width of the element.",
        "Changes the background of the element."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the text color of the paragraph?\n```html\n<p style=\"color: blue;\">Hello</p>\n```\n```css\np { color: red; }\n```",
      "options": [
        "Red",
        "Blue",
        "Black (default)",
        "Green"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which CSS property controls the spacing between lines of text?",
      "options": [
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-spacing"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "How do you make text bold using CSS?",
      "options": [
        "font-weight: bold;",
        "text-decoration: bold;",
        "font-style: bold;",
        "bold: true;"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the correct order of the box model (from inside to outside)?",
      "options": [
        "Content, Margin, Padding, Border",
        "Content, Border, Padding, Margin",
        "Content, Padding, Border, Margin",
        "Margin, Border, Padding, Content"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which CSS property is used to center text horizontally?",
      "options": [
        "align-items: center;",
        "justify-content: center;",
        "text-align: center;",
        "float: center;"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What does `display: none;` do to an element?",
      "options": [
        "Hides the element but takes up space.",
        "Hides the element and removes it from the document flow.",
        "Makes the element transparent.",
        "Changes its position to absolute."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the width of the div?\n```css\ndiv { width: 100px; padding: 10px; border: 1px solid black; }\n``` (Default `box-sizing: content-box;`)",
      "options": [
        "100px",
        "110px",
        "120px",
        "122px"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which CSS property is used to set the image background of an element?",
      "options": [
        "background-image",
        "image-background",
        "src-image",
        "background-url"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the default value of the `position` property?",
      "options": [
        "relative",
        "absolute",
        "static",
        "fixed"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which property is used to control the transparency of an element?",
      "options": [
        "visibility",
        "display",
        "opacity",
        "filter"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "How do you add a shadow to text using CSS?",
      "options": [
        "box-shadow",
        "text-shadow",
        "shadow-text",
        "font-shadow"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the CSS property for italicizing text?",
      "options": [
        "text-style: italic;",
        "font-style: italic;",
        "font-weight: italic;",
        "text-decoration: italic;"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of `border-radius`?",
      "options": [
        "To set the border color.",
        "To add a shadow to the border.",
        "To round the corners of an element's border.",
        "To set the width of the border."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which value of the `display` property makes an element behave like a block-level element but lays out its content like an inline element?",
      "options": [
        "block",
        "inline",
        "inline-block",
        "none"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the effect of `float: left;`?",
      "options": [
        "Moves the element to the left relative to its normal position.",
        "Aligns the element to the left, allowing other content to wrap around it.",
        "Changes the text alignment to left.",
        "Makes the element disappear."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What does `rem` unit stand for?",
      "options": [
        "Root element margin",
        "Relative unit for media",
        "Root em",
        "Responsive pixel"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which property is used to change the background image size?",
      "options": [
        "background-size",
        "image-size",
        "bg-image-size",
        "size"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How can you specify a fallback font in CSS?",
      "options": [
        "font-family: Arial, sans-serif;",
        "font-fallback: Arial;",
        "font-type: Arial, default;",
        "font: Arial fallback;"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What CSS property would you use to remove the underline from a link?",
      "options": [
        "text-style: none;",
        "text-decoration: none;",
        "link-underline: none;",
        "decoration: none;"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the primary purpose of CSS Flexbox?",
      "options": [
        "To position elements precisely using coordinates.",
        "To create complex grid-based layouts.",
        "To arrange items in a one-dimensional layout (row or column).",
        "To add interactive animations to elements."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which CSS property is used to control the stacking order of positioned elements?",
      "options": [
        "order",
        "stack-index",
        "z-index",
        "layer"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What will be the background color of the div?\n```html\n<div class=\"box\" id=\"myBox\" style=\"background-color: yellow;\"></div>\n```\n```css\n.box { background-color: blue; }\n#myBox { background-color: green; }\n```",
      "options": [
        "Blue",
        "Green",
        "Yellow",
        "Default (transparent)"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which CSS property is used to create a transition effect for properties over a duration?",
      "options": [
        "animation",
        "transform",
        "transition",
        "timing"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the difference between `::before` and `:before` in CSS?",
      "options": [
        "`::before` is for elements, `:before` is for classes.",
        "`::before` is for pseudo-elements (CSS3), `:before` is for pseudo-classes (CSS2).",
        "`::before` is for pseudo-elements, `:before` is for backwards compatibility with pseudo-elements.",
        "There is no difference."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which CSS property ensures that padding and border are included in the element's total width and height?",
      "options": [
        "sizing",
        "box-sizing: border-box;",
        "box-sizing: content-box;",
        "layout-sizing"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the final color of the paragraph given the following?\n```css\np { color: red !important; }\ndiv p { color: blue; }\nbody p { color: green; }\n```",
      "options": [
        "Red",
        "Blue",
        "Green",
        "Black"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "Which value of the `position` property removes an element from the normal document flow and positions it relative to its nearest positioned ancestor?",
      "options": [
        "static",
        "relative",
        "absolute",
        "fixed"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `@media` queries?",
      "options": [
        "To embed media files (audio/video) into a webpage.",
        "To apply different styles based on device characteristics (e.g., screen size, orientation).",
        "To define animations.",
        "To include external fonts."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is `flex-grow: 1;` used for in Flexbox?",
      "options": [
        "To set the initial size of the item.",
        "To make the item take up available space proportional to its grow factor.",
        "To shrink the item if necessary.",
        "To align the item to the start of the container."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following CSS if the viewport width is 700px?\n```css\n.container {\n  width: 50vw;\n}\n```",
      "options": [
        "50px",
        "100px",
        "350px",
        "700px"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "Which pseudo-class targets an element when the user's mouse cursor is over it?",
      "options": [
        ":active",
        ":focus",
        ":hover",
        ":visited"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the effect of `transform: rotate(90deg);`?",
      "options": [
        "Moves the element 90 pixels to the right.",
        "Rotates the element 90 degrees clockwise.",
        "Skews the element 90 degrees.",
        "Changes the element's transparency."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which of the following is a CSS `combinator`?",
      "options": [
        "::",
        ">",
        "!",
        "#"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```html\n<div class=\"parent\">\n  <p>Child Text</p>\n</div>\n```\n```css\n.parent p { color: blue; }\n.parent > p { color: red; }\n```",
      "options": [
        "Blue",
        "Red",
        "Black",
        "Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the `calc()` function in CSS used for?",
      "options": [
        "To perform mathematical calculations for CSS property values.",
        "To define custom functions.",
        "To create animations.",
        "To calculate element positions dynamically."
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "Which property is used to define explicit grid rows and columns in CSS Grid Layout?",
      "options": [
        "grid-template-areas",
        "grid-gap",
        "grid-template-rows / grid-template-columns",
        "grid-auto-rows"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the effect of `overflow: hidden;`?",
      "options": [
        "Adds scrollbars if content overflows.",
        "Crops content that overflows its container.",
        "Makes overflowing content visible outside the container.",
        "Prevents content from overflowing."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the width of `div.item` if the container has `display: flex;`?\n```css\n.container {\n  display: flex;\n  width: 300px;\n}\n.item {\n  flex-basis: 100px;\n  flex-grow: 1;\n}\n``` (Assuming only one item)",
      "options": [
        "100px",
        "200px",
        "300px",
        "Error"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of the `:nth-child()` pseudo-class?",
      "options": [
        "To select the last child of an element.",
        "To select elements that are the Nth child of their parent.",
        "To select elements based on their type.",
        "To select the first child of an element."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which of these is a valid way to define a custom property (CSS Variable)?",
      "options": [
        "my-color: blue;",
        "--my-color: blue;",
        "$my-color: blue;",
        "let my-color = blue;"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `object-fit` when dealing with images inside a container?",
      "options": [
        "To align the image horizontally.",
        "To control how an `<img>` or `<video>` should be resized to fit its container.",
        "To add a border around the image.",
        "To animate the image."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the height of the element if the viewport height is 1000px?\n```css\ndiv { height: 50vh; }\n```",
      "options": [
        "50px",
        "1000px",
        "500px",
        "Error"
      ],
      "correct": 2,
      "level": "intermediate"
    }
  ],
  PYTHON :[
    {
      "question": "Which of these is used to start a block of code (e.g., in `if` statements or loops) in Python?",
      "options": [
        "{}",
        "[]",
        ":",
        "()"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the data type of `3.14` in Python?",
      "options": [
        "int",
        "str",
        "float",
        "double"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output of the following Python code?\n```python\nprint(10 // 3)\n```",
      "options": [
        "3.33",
        "3",
        "1",
        "Error"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "How do you check the data type of a variable `my_var` in Python?",
      "options": [
        "get_type(my_var)",
        "type(my_var)",
        "my_var.type()",
        "typeof my_var"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following is a mutable data type in Python?",
      "options": [
        "String",
        "Tuple",
        "List",
        "Integer"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\nmessage = 'Hello'\nprint(message[0])\n```",
      "options": [
        "H",
        "e",
        "Error",
        "Undefined"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How do you add an item to the end of a list named `my_list`?",
      "options": [
        "my_list.add(item)",
        "my_list.insert(item)",
        "my_list.append(item)",
        "my_list + item"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of `elif` in an `if-elif-else` chain?",
      "options": [
        "It marks the end of the `if` statement.",
        "It is executed if the previous `if` or `elif` conditions were false.",
        "It creates a loop.",
        "It defines a new function."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\ncount = 0\nwhile count < 2:\n    print('Loop')\n    count += 1\n```",
      "options": [
        "Loop",
        "Loop\nLoop",
        "Loop\nLoop\nLoop",
        "Error"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "How do you create an empty dictionary in Python?",
      "options": [
        "my_dict = []",
        "my_dict = ()",
        "my_dict = {}",
        "my_dict = dict()"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of these is a correct way to unpack a tuple `(1, 2)` into variables `a` and `b`?",
      "options": [
        "a, b = (1, 2)",
        "a = (1, 2)[0]; b = (1, 2)[1]",
        "Both A and B",
        "Neither A nor B"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\nprint(abs(-5))\n```",
      "options": [
        "-5",
        "5",
        "Error",
        "0"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which operator is used for logical AND?",
      "options": [
        "&",
        "and",
        "&&",
        "OR"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of the `range()` function?",
      "options": [
        "To generate a random number.",
        "To create a list of numbers.",
        "To generate a sequence of numbers.",
        "To specify a range of acceptable inputs."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\nresult = 7 > 5 or 3 < 1\nprint(result)\n```",
      "options": [
        "True",
        "False",
        "Error",
        "Undefined"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How do you remove an item from a list by its value?",
      "options": [
        "my_list.delete(value)",
        "my_list.remove(value)",
        "my_list.pop(value)",
        "my_list.discard(value)"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the result of `len('Python')`?",
      "options": [
        "5",
        "6",
        "7",
        "Error"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which module in Python is commonly used for mathematical functions?",
      "options": [
        "system",
        "math",
        "calc",
        "numbers"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What is the output if `x = 5` and you run `print(x == '5')`?",
      "options": [
        "True",
        "False",
        "Error",
        "Undefined"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of these is a valid Python variable name?",
      "options": [
        "1var",
        "my-var",
        "_my_var",
        "for"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\nname = 'Alice'\nage = 30\nprint(f'{name} is {age} years old.')\n```",
      "options": [
        "Alice is 30 years old.",
        "name is age years old.",
        "Error",
        "Alice is age years old."
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "How do you convert a string `s` to an integer?",
      "options": [
        "int(s)",
        "str_to_int(s)",
        "s.to_int()",
        "parse_int(s)"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "What is the purpose of `pass` statement?",
      "options": [
        "It is used to terminate a loop.",
        "It is a null operation; nothing happens when it executes.",
        "It skips the current iteration of a loop.",
        "It raises an exception."
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of these is a correct way to call a function named `calculate` with arguments `x` and `y`?",
      "options": [
        "call calculate(x, y)",
        "calculate(x, y)",
        "calculate[x, y]",
        "run calculate x, y"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "What will be the output?\n```python\nitems = ['apple', 'banana', 'cherry']\nfor item in items:\n    if item == 'banana':\n        break\n    print(item)\n```",
      "options": [
        "apple\nbanana\ncherry",
        "apple\nbanana",
        "apple",
        "Error"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What is the main difference between `==` and `is` in Python?",
      "options": [
        "`==` compares identity, `is` compares value.",
        "`==` compares value, `is` compares identity (memory location).",
        "There is no difference, they are interchangeable.",
        "`is` is for numbers, `==` for strings."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output of the following?\n```python\nnums = [1, 2, 3, 4, 5]\nnew_nums = [n * 2 for n in nums if n % 2 == 0]\nprint(new_nums)\n```",
      "options": [
        "[2, 4, 6, 8, 10]",
        "[2, 4]",
        "[4, 8]",
        "[]"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is a `classmethod` in Python?",
      "options": [
        "A method that operates on an instance of the class.",
        "A method that receives the class itself as the first argument, implicitly bound to the class.",
        "A method that does not receive any implicit first argument.",
        "A method that can only be called from outside the class."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which built-in function is used to apply a function to all items in an input list and return a new list?",
      "options": [
        "filter()",
        "reduce()",
        "map()",
        "apply()"
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is a `generator expression` in Python?",
      "options": [
        "A type of list comprehension that creates a list.",
        "A concise way to create an iterator without defining a full generator function.",
        "An expression used to generate random numbers.",
        "A syntax for defining class methods."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```python\ndef get_square(num):\n    return num * num\n\nsquares = map(get_square, [1, 2, 3])\nprint(list(squares))\n```",
      "options": [
        "[1, 2, 3]",
        "[1, 4, 9]",
        "[2, 4, 6]",
        "Error"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What does the `yield` keyword do in Python?",
      "options": [
        "It returns a value and exits the function permanently.",
        "It pauses function execution and returns a value, allowing the function to resume later.",
        "It raises an exception.",
        "It defines a global variable."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "How do you handle multiple specific exceptions in a single `except` block?",
      "options": [
        "except (TypeError, ValueError):",
        "except TypeError, ValueError:",
        "except TypeError and ValueError:",
        "except all:"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `__str__` method in a class?",
      "options": [
        "To convert an object to a string for debugging purposes.",
        "To define the official string representation of an object, intended for user-friendly output.",
        "To compare two objects.",
        "To create a new instance of the class."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is `PEP 8` in Python?",
      "options": [
        "A specific Python version.",
        "A package installer.",
        "The official style guide for Python code.",
        "A built-in data type."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```python\ndata = {'a': 1, 'b': 2, 'c': 3}\nfor key, value in data.items():\n    print(f'{key}={value}')\n```",
      "options": [
        "a=1\nb=2\nc=3",
        "a\nb\nc",
        "1\n2\n3",
        "Error"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "Which of these best describes a `set` in Python?",
      "options": [
        "An ordered collection of unique items.",
        "An unordered collection of unique items.",
        "An ordered collection of items, allowing duplicates.",
        "A mapping of keys to values."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the output of the following?\n```python\nclass Parent:\n    def greeting(self):\n        print('Hello from Parent')\n\nclass Child(Parent):\n    def greeting(self):\n        print('Hello from Child')\n\nobj = Child()\nobj.greeting()\n```",
      "options": [
        "Hello from Parent",
        "Hello from Child",
        "Error",
        "None"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is the purpose of `with open(...) as f:` statement?",
      "options": [
        "It's a faster way to open files.",
        "It automatically handles closing the file, even if errors occur.",
        "It only allows reading from the file.",
        "It encrypts the file content."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```python\nimport math\nprint(math.floor(4.7))\n```",
      "options": [
        "4.0",
        "4",
        "5",
        "4.7"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is `mypy` primarily used for in Python development?",
      "options": [
        "Running unit tests.",
        "Checking for type errors in Python code.",
        "Optimizing Python code for performance.",
        "Managing project dependencies."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What is `pickle` module used for?",
      "options": [
        "For managing data in a database.",
        "For serializing and deserializing Python objects to/from a byte stream.",
        "For creating graphical user interfaces.",
        "For performing mathematical calculations."
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```python\ndef modify_list(lst):\n    lst.append(4)\n\nmy_list = [1, 2, 3]\nmodify_list(my_list)\nprint(my_list)\n```",
      "options": [
        "[1, 2, 3]",
        "[1, 2, 3, 4]",
        "Error",
        "None"
      ],
      "correct": 1,
      "level": "intermediate"
    },
    {
      "question": "Which magic method is called when you use the `+` operator on instances of a class?",
      "options": [
        "__add__",
        "__plus__",
        "__sum__",
        "__concat__"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What will be the output?\n```python\nnumbers = [10, 20, 30]\nindex_of_20 = numbers.index(20)\nprint(index_of_20)\n```",
      "options": [
        "1",
        "2",
        "0",
        "Error"
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is `venv` in Python?",
      "options": [
        "A tool for creating virtual reality applications.",
        "A way to manage multiple Python versions on one system.",
        "A tool for creating isolated Python environments.",
        "A framework for web development."
      ],
      "correct": 2,
      "level": "intermediate"
    },
    {
      "question": "What is the concept of 'duck typing' in Python?",
      "options": [
        "If it looks like a duck and quacks like a duck, it's a duck (focus on behavior, not type).",
        "A strict type checking system.",
        "A method for optimizing code performance.",
        "A way to define interfaces."
      ],
      "correct": 0,
      "level": "intermediate"
    },
    {
      "question": "What is the result of `\"Python\".replace('o', 'O')`?",
      "options": [
        "PythOn",
        "PythOn",
        "PythOn",
        "PythOn"
      ],
      "correct": 0,
      "level": "intermediate"
    }
  ],
  JesusTheMessiah :[
    {
      "question": "The Intertestamental period between OT & NT was how many years?",
      "options": [
        "200 years",
        "700 Years",
        "400 Years",
        "300 Years"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The entire Palestine was made up of about how many provinces?",
      "options": [
        "10",
        "40",
        "80",
        "50"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The lake of Gennesaret was famous for its --- ?",
      "options": [
        "Farming",
        "Trade",
        "Fishing",
        "Religion"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The region where Jesus was born is called?",
      "options": [
        "Jerusalem",
        "Judea",
        "Bethlehem",
        "Nazareth"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which City is the Capital of Jewish Nation?",
      "options": [
        "Jerusalem",
        "Egypt",
        "Judea",
        "Palestine"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "In the Role of Trinity in the plan of redemption, God the Son ________?",
      "options": [
        "Saves",
        "Protects",
        "Yields",
        "Gives"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "One of the following is a special means of God’s Revelation to us today?",
      "options": [
        "Holy spirit",
        "Nature",
        "Angels",
        "Holy Bible"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The Bible as a means of God’s Revelation can be proved in ?",
      "options": [
        "2 Peter 1:21",
        "John 14:8",
        "John 14:9",
        "Genesis 1:2"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "One of the following makes Jesus Christ Unique?",
      "options": [
        "He fell from heaven",
        "He could talk to God",
        "He had Powers",
        "Numerous Prophecies point to Him in the Old Testament"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "All These Shows that Jesus Christ is God except?",
      "options": [
        "A member of the Trinity",
        "He can forgive Sins",
        "He could walk on water",
        "He receives worship"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Revelation through Christ is?",
      "options": [
        "Holy",
        "Perfect",
        "Personal",
        "B & C"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The first promise in the Bible is recorded in ______?",
      "options": [
        "Gen. 1 : 15",
        "Gen 3:15",
        "John 3:16",
        "C&B"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "“The prophecy about the birth of Jesus was foretold in ---- and ------?",
      "options": [
        "Isa. 7:14 & Isa. 9:6",
        "Isa. 14:7 & Isa. 7:14",
        "Dan. 7;14 & Isa. 8:20",
        "All of the above"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "One of the following does not identify who Jesus Christ is ?",
      "options": [
        "The Head of the disciples",
        "The Son of God",
        "God",
        "The creator"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "_________ is not among the meaning of the Image in King Nebuchadnezzar dream.",
      "options": [
        "Head of gold",
        "Breast/Arm of silver",
        "Stomach of diamond",
        "Legs of Iron"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The evidences of the fullness of time does not includes ?",
      "options": [
        "Political Preparation",
        "Economic Preparation",
        "Social Preparation",
        "Religious preparation"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The principle that man can save himself by his own works is the foundation of?",
      "options": [
        "The Sadducees",
        "Heathens",
        "Scribes",
        "Jews"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "_________ is the Right, appropriate time for an event to occur?",
      "options": [
        "Occasion",
        "When God says",
        "The Fullness of Time",
        "BU Run"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Koine Dialektos means?",
      "options": [
        "Language",
        "Common dialect",
        "Greek dialect",
        "Dialect"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "According to the Economic preparation for the Fullness of time ___ of every 5 persons were slaves?",
      "options": [
        "3",
        "2",
        "1",
        "0"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "When was The Fullness of Time?",
      "options": [
        "The death of Jesus",
        "The Resurrection of Jesus",
        "The Birth of Jesus",
        "Angels Gabriel Announcement"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Through the symbols of Great darkness and Smoking furnace God Revealed?",
      "options": [
        "Great Suffering",
        "Wickedness in The world",
        "Bondage of Israel in Egypt",
        "Death in The World"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The Saviour’s Coming was first Foretold in _____?",
      "options": [
        "The Bible",
        "Garden of Eden",
        "Heaven",
        "Earth"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "One of The Following is Not a Reason why Christ came to Earth?",
      "options": [
        "To lift Humanity",
        "To Expel Demons That tempt Man",
        "To catch cruise",
        "To reconcile Man back to God."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "What was the common language spoken at the Roman period?",
      "options": [
        "Hebrews",
        "Greek",
        "Roman",
        "Aramaic"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "How many regions was Palestine divided into?",
      "options": [
        "10",
        "14",
        "7",
        "2"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The gospel tells these about Jesus except?",
      "options": [
        "His Ministry",
        "His Relationship",
        "His Second coming",
        "His Death"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The synoptic gospel consists of ______",
      "options": [
        "Matthew, John and Mark",
        "Luke, Matthew and John",
        "Mark, Luke and Matthew",
        "Matthew, Mark and John"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "One of these is not an epistle in the Bible?",
      "options": [
        "Acts of Apostles",
        "Galatians",
        "James",
        "Titus"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which Herod participated most in the events recorded in the Gospels?",
      "options": [
        "Herod Philip",
        "Herod Archelaus",
        "Herod the Great",
        "Herod Antipas"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which religious group did not believe in life after death or in angels or spirits?",
      "options": [
        "The Pharisees",
        "The Essenes",
        "The Sadducees",
        "The Scribes"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The two people that were given magician names are?",
      "options": [
        "Joseph and Daniel",
        "Daniel and Elijah",
        "Pharaoh and Moses",
        "Caleb and Joshua"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The language Jesus spoke was?",
      "options": [
        "Greek",
        "Latin",
        "Aramaic",
        "Hebrew"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The major religious festivals during Jesus on Earth were these except?",
      "options": [
        "Passover",
        "Easter",
        "Pentecost",
        "Tabernacles"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "One of these is not a brother of Jesus?",
      "options": [
        "James",
        "Judas",
        "Joseph",
        "John"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Jesus was baptized in the year?",
      "options": [
        "AD 27",
        "AD 31",
        "AD 34",
        "457BC"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The following are prerequisites to baptism except?",
      "options": [
        "Repentance",
        "Fasting",
        "Instruction",
        "Faith"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Baptism means ____, ______ and ______",
      "options": [
        "Life, Death and Burial",
        "Life, Death and Resurrection",
        "Death, Burial and Ascension",
        "Death, Burial and Resurrection"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "These bible texts spoke about the baptism of Jesus except?",
      "options": [
        "Luke 3:21-22",
        "Mark 1:9-11",
        "John 2:3-5",
        "Matthew 3:13-17"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The second temptation of Jesus Christ was about ________?",
      "options": [
        "Presumption",
        "Appetite",
        "Materialism",
        "Compromise"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Jesus response to the second temptation was ______?",
      "options": [
        "Man shall not live by bread alone",
        "Get behind me Satan",
        "You shall worship the lord your God, and him only shall you serve",
        "You shall not tempt the Lord your God"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "It was during the reign of ________ that the family of Jesus returned from hiding in Egypt",
      "options": [
        "Herod Achelous",
        "Herod the Great",
        "Herod Antipas",
        "Herod Philip"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The Greek word for Baptism is?",
      "options": [
        "Baptizom",
        "Baptiasm",
        "Baptizo",
        "Baptism"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "One of these does not describe the works of the Scribes?",
      "options": [
        "Writing",
        "Record keeping",
        "Teaching of the Law",
        "Temple keeping"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "In the religious context, the process of collecting books recognized as authoritative scripture is called_______",
      "options": [
        "Inspiration",
        "Canonization",
        "Bible collection",
        "Revelation"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which books of the Bible describes the apocalyptic book and historical book of the New testament respectively?",
      "options": [
        "Acts of the Apostles, Revelation",
        "Revelation, Matthew",
        "Revelation, Acts of the Apostles",
        "Matthew, Acts of Apostles"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The Kingdom of God also referred to as ------?",
      "options": [
        "Kingdom of Earth",
        "Kingdom of power",
        "Kingdom of the saints",
        "Kingdom of Glory"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "“Behold, a young woman shall conceive and bear a son, and shall call his name Immanuel”. This text can be found in what book of the Bible?",
      "options": [
        "Isaiah 7:14",
        "Matthew 1:21",
        "Isaiah 1:21",
        "Matthew 7:14"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which of these best describe the dual nature of Jesus Christ when on earth?",
      "options": [
        "Jesus was more of God than human",
        "Jesus was more of human than God",
        "Jesus was hundred percent God and hundred percent human",
        "Jesus was fifty percent God and fifty percent human"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which bible text is popularly referred to as the first gospel?",
      "options": [
        "Genesis 1:1",
        "Genesis 2:15",
        "Genesis 3:15",
        "John 3:16"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The following are the three factors that contributed to the political preparation pointing to the fullness of time except?",
      "options": [
        "Translation of the Old Testament into Greek",
        "Common Language",
        "Good Road System",
        "Roman Peace"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The gifts the wise men presented to are?",
      "options": [
        "Gold, Silver and Bronze",
        "Gold, Silver and Frankincense",
        "Gold, Frankincense and Myrrh",
        "Gold, Silver and Myrrh"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which Herod wanted to kill Jesus at his birth?",
      "options": [
        "Herod Antipas",
        "Herod Philip",
        "Herod the Great",
        "Herod Archelaus"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The period of impurity of the mother of a female child is ________",
      "options": [
        "40days",
        "80days",
        "60days",
        "20days"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which two notable people in the Old Testament played the role of Magi?",
      "options": [
        "Abraham and Isaac",
        "Joseph and David",
        "Daniel and Jacob",
        "Daniel and Joseph"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The three prerequisite to Baptism does not includes?",
      "options": [
        "Acceptance",
        "Faith",
        "Instruction",
        "Repentance"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The Greek term, baptizo means to ____",
      "options": [
        "Pour",
        "Immerse",
        "Sprinkle",
        "Bath"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Jesus was crucified in the year _____",
      "options": [
        "AD 27",
        "AD 29",
        "AD 31",
        "AD 33"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The Kingdom of God possess five essential elements except?",
      "options": [
        "Kingship",
        "Authority",
        "Sovereignty",
        "humans"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "John 3:5: “…unless one is born of ____ and the _____, he cannot enter the kingdom of God”",
      "options": [
        "Fire, Spirit",
        "Water, Fire",
        "God, Spirit",
        "Water, Spirit"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "What is the symbol of God’s sovereign reign?",
      "options": [
        "The word of God",
        "The Spirit of God",
        "The Kingdom of God",
        "The Name of God"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "One of these does not characterize the Jewish view of the kingdom of God?",
      "options": [
        "An earthly Kingdom",
        "Guarantees present and eternal rest",
        "Citizen qualifies by nationality",
        "Established through military might"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The future consummation of the Kingdom of God which takes place at the second coming of Christ is also referred to as the _________",
      "options": [
        "Kingdom of Glory",
        "Kingdom of Grace",
        "Kingdom of Hope",
        "Kingdom of Gratitude"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The two major phases of realization of the Kingdom of God are?",
      "options": [
        "Past and Present",
        "Present and Future",
        "Past and Future",
        "None of the Above"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of these contains the five essential elements of a kingdom?",
      "options": [
        "Humans, Power and Authority, Sovereignty, Territory and Kingship",
        "Sovereignty, Power and Authority, Kingship, Service and Territory",
        "Power and Authority, Buildings, Service, Humans and Territory",
        "Kingship, Service, Sovereignty, Humans and Buildings"
      ],
      "correct": 0,
      "level": "beginner"
    }
  ],
  Health_Principles:[
    {
      "question": "Which of these dimensions of health relates most closely to the individual’s relationship with nature and his most profound faith-based beliefs?",
      "options": [
        "Physical",
        "Emotional",
        "Spiritual",
        "Social"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of the following vitamins is directly involved in facilitating wound healing?",
      "options": [
        "Thiamine",
        "Ascorbic acid",
        "Pyridoxine",
        "Alpha tocopherol"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The end product of carbohydrate digestion important to the body is;",
      "options": [
        "Maltose",
        "Glucose",
        "Starch",
        "Amino Acid"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Proteins are useful in the body as;",
      "options": [
        "Primarily energy providing nutrients",
        "Providing insulation",
        "Energy given",
        "Body building nutrients"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "One of the following cells confer immunity",
      "options": [
        "Heterocytes",
        "Lymphatics",
        "Basophytes",
        "Lymphocytes"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of the following is the major vehicle for transporting all materials such as salt, nutrients waste product within the system?",
      "options": [
        "Protein",
        "Sugar",
        "Urine",
        "Water"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The process by which particular trait or characteristics are transmitted from parents to their offspring is",
      "options": [
        "Pigmentation and Heredity/Biology",
        "Pigmentation",
        "Heredity/ Biology",
        "Companionship"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "A Living organism is characterized by the following EXCEPT",
      "options": [
        "Growth",
        "Movement",
        "Reproduction",
        "Floating"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which one of the following is a NOT associated with Lipid/Fat digestion?",
      "options": [
        "Bile",
        "Polysaccharides",
        "Fatty acid",
        "Polynomial"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The digestion of protein begins in the",
      "options": [
        "Stomach",
        "Small intestine",
        "Mouth",
        "Stomach"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The water-soluble vitamins are designated because they dissolve well in?",
      "options": [
        "None of the above",
        "Fats and oil",
        "All of the above",
        "Oil"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The following may provide rich sources of protein EXCEPT",
      "options": [
        "Tofu",
        "Maize",
        "Fish",
        "Legumes"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following may be appropriate source of protein for a vegetarian diet?",
      "options": [
        "All of the above",
        "Meat only",
        "Fish and milk only",
        "Diet having meat substitute, milk and eggs only"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The issue of health is not a new concept. The Biblical foundations of health and wellbeing involve",
      "options": [
        "Quarantine practices documented in Leviticus",
        "Sanitation communicated to the Jews in the bible",
        "All of the above",
        "Social interactions and civil order which guided the Jews as they crossed the wilderness"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Health care services include the following EXCEPT",
      "options": [
        "Clerical services",
        "Nursing care",
        "Laboratory diagnostics",
        "Clerical services"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Taking appropriate amounts of all nutrients in the correct proportion to meet the requirement of the body cells is regarded as",
      "options": [
        "Food",
        "All of the Above",
        "Balanced diet",
        "Nutrient"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which ONE of these describes the social dimension of health",
      "options": [
        "Level of poverty",
        "Strife for meaning",
        "Relationships between individuals",
        "The sentiments expressed by an individual about health"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "In drug abuse, cellular changes which develops enabling the individual to function normally only as the drug is present may be regarded as",
      "options": [
        "Drug misuse",
        "Physical dependence",
        "Compulsive use pattern",
        "Tolerance"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The following are substances with abuse potential, which of them is a stimulant?",
      "options": [
        "Opium",
        "Amphetamine",
        "Morphine",
        "Heroine"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Indian hemp is also known as",
      "options": [
        "Ganja",
        "All of the Above",
        "Weed",
        "Pot"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "When Indian hemp is smoked one of the following is the effects produced",
      "options": [
        "Sedation",
        "All of the Above",
        "Hallucination",
        "No effects at all"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of the following drugs may be abused?",
      "options": [
        "All of the above",
        "Ampiclox",
        "Paracetamol",
        "Opium"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Any drug that has abuse potential must produce its effects",
      "options": [
        "Stomach only",
        "General effect in the body",
        "In the brain",
        "Liver"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Who among the following is in particular at greater risk of HIV infection?",
      "options": [
        "Those drinking alcohol",
        "Cocaine inhalers",
        "Injection drug users who share needles",
        "Those smoking Indian Hemp in groups."
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "These constitute high-risk behaviour EXCEPT",
      "options": [
        "Smoking",
        "Multiple sex partners",
        "Exercise",
        "High salt diet"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Our behaviour is an important factor in health because",
      "options": [
        "Our value depends on our behaviour",
        "It determines how we view issues",
        "It determines where we come from",
        "What we do or fail to do impact on us"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "One of the methods for treating alcoholism may involve the use of",
      "options": [
        "None of the above",
        "Drugs such as antabuse",
        "Have cold shower many times a day",
        "Give more alcohol under strict supervision"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following systems will help in homeostatic control within the body?",
      "options": [
        "Integumentary System",
        "Skeletal System",
        "Endocrine System",
        "Circulatory"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Part of the human system that pumps and channels blood to and from the body is?",
      "options": [
        "Digestive system",
        "Endocrine system",
        "Integumentary System",
        "Circulatory system"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Functionally specialized cells grouped together are known as",
      "options": [
        "Organelles",
        "Tissues",
        "Organs",
        "Organ systems"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following is not an example of Vitamins B complex?",
      "options": [
        "Thalamus",
        "Ascorbic acid",
        "Niacin",
        "Riboflavin"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "_____________ is the body system that fights against infectious organisms that cause diseases.",
      "options": [
        "Antibody",
        "Antigens",
        "Immune system",
        "Immunity"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Part of the human system that processes food",
      "options": [
        "Immune system",
        "Digestive system",
        "Endocrine system",
        "Circulatory system"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Genetic material is located within the cell",
      "options": [
        "Nucleus",
        "Cytoplasm",
        "Vacuole",
        "Nucleus"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The normal blood pressure is",
      "options": [
        "130/90mmHg",
        "133/93mmHg",
        "150/90mmHg",
        "120/80mmHg"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The following are functions of the skeleton EXCEPT",
      "options": [
        "Maintenance of the shape of the body",
        "Providing support for the body",
        "Controlling the growth rate in man",
        "Protection of the delicate internal organs"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The _________ is the outermost layer of skin",
      "options": [
        "Epicentric",
        "The epidermis",
        "Dermis",
        "Dermatitis"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Blood carrying oxygen is called _______",
      "options": [
        "Oxy hematocrit",
        "Oxy heamoglobin",
        "Oxy genated blood",
        "Oxy heamatitics"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of the following are not components of blood",
      "options": [
        "Red blood corpuscle (RBC)",
        "Erythrocyte (RBC)",
        "Plasma",
        "Oxy heamoglobin"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Parts of the brain consist of the following EXCEPT",
      "options": [
        "Cerebrum",
        "Leg",
        "Cerebellum",
        "Pons varolii"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The following are methods of preserving foods",
      "options": [
        "Salting",
        "All of these",
        "Addition of vinegar or accepted chemicals",
        "Drying"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The strong whitish cord that connects the bone to the bone is called________",
      "options": [
        "Triumph",
        "Tendon",
        "Ligament",
        "Tissue"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The human skeleton consists of _________ bones bound together by tough and relatively inelastic connective tissues",
      "options": [
        "180",
        "280",
        "204",
        "206"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The cardiovascular system has three types of blood vessels, EXCEPT",
      "options": [
        "Capillaries",
        "Arterioles",
        "Arteries",
        "Conduit pipe"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Different types of bone are these except",
      "options": [
        "Regular",
        "Short bone",
        "Long bone",
        "Flat bones"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Chlamydiaceae is a ________ disease",
      "options": [
        "Arthropods",
        "Water borne disease",
        "Air borne disease",
        "Sexually transmitted disease"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "All these are vectors of the following diseases except",
      "options": [
        "HIV/AIDS= Mosquito",
        "Malaria =Mosquitoes",
        "River blindness=Sandfly/blackfly",
        "Malaria =Mosquitoes"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which of these is not possible ways by which HIV/AIDs can be transmitted?",
      "options": [
        "By direct contact e.g., hand shaking and eating together",
        "unprotected sexual intercourse",
        "Mother to child transmission",
        "Sharing of clippers,"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The smallest structural and functional unit of a living organism is the",
      "options": [
        "Cell",
        "Brain",
        "Cellulose",
        "Heart"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "A bean-shaped organ of the human system which filters blood and removes waste from the body",
      "options": [
        "Heart",
        "Liver",
        "Pancreas",
        "Kidney"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of the following does not form a layer of the heart?",
      "options": [
        "Myocardium",
        "Epidermis",
        "Endocardium",
        "Epicardium"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "In the cardiac cycle the period of relaxation and dilation is referred to as",
      "options": [
        "All of the above",
        "Diastolic",
        "Circadian rhythm",
        "Systolic"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The part of the brain responsible for memory amongst other reasoning functions is the",
      "options": [
        "Cerebellum",
        "Pons Varoli",
        "Cerebrum",
        "Medulla Oblongata"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which lobe of the brain contains the brain’s visual processing system?",
      "options": [
        "Parietal",
        "Occipital",
        "Frontal",
        "Temporal"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The human brain reaches its full size at about what age?",
      "options": [
        "7 years",
        "6 years",
        "4 years",
        "5 years"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "In a typical animal cell, the cytosol serves which of these functions",
      "options": [
        "Cover the cell",
        "Power generator",
        "Holds other organelles in place",
        "Synthesizes proteins"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The skin has a pH of between",
      "options": [
        "6.0 - 7.2",
        "4.6 - 8.0",
        "4.0 - 6.5",
        "7.6 - 8.8"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which best describes why the vagina’s pH should be maintained below 4.7",
      "options": [
        "Prevents bad odour",
        "All of the Above",
        "Neutralizes microbes",
        "Limits overgrowth of opportunistic microbes"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of these is not a risk factor for acid-alkaline imbalance of the body?",
      "options": [
        "High protein diet in the form of meats, dairy and eggs",
        "Consuming fresh fruits daily",
        "Low consumption of vegetables and fruits",
        "Consuming processed food and beverages"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of these conditions is not associated with an acid-alkaline imbalance?",
      "options": [
        "Adequate assimilation of minerals and nutrients",
        "Lethargy",
        "Osteoporosis",
        "Premature aging"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Which of these is an acidic vegetable?",
      "options": [
        "Carrots",
        "Cauliflower",
        "Cabbage",
        "Lentils"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of these is an alkaline cereal grain?",
      "options": [
        "Oat meal",
        "Wheat",
        "Millet",
        "White rice"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of these represents the accurate ratio for maintaining good health in the alkaline:acid diet",
      "options": [
        "60% : 40%",
        "20% : 80%",
        "40% : 60%",
        "80% : 20%"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of these is most likely to occur to a person on a predominantly plant-based diet",
      "options": [
        "Iron deficiency",
        "Fatty acid deficiency",
        "Vitamin B deficiency",
        "Protein deficiency"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "A lacto-vegetarian",
      "options": [
        "A and C only",
        "Excludes meat, seafood, poultry and dairy products and includes eggs",
        "Excludes meat, eggs, seafood and poultry and includes milk products",
        "Consumes milk products"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Which of these characteristics of cancerous cells is FALSE?",
      "options": [
        "Cancer cells stay immature",
        "Cancer cells stick together",
        "Cancer cells do not stop reproducing",
        "Cancer cells do not obey signals from other cells"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The following are false statements about Leukemia EXCEPT",
      "options": [
        "It starts in the immune system",
        "It begins in the bone marrow",
        "It begins in the CNS",
        "It begins in the bone and cartilage"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Which of the following is a major symptom of Diabetes?",
      "options": [
        "Polydipsia",
        "All of the above",
        "Weight loss",
        "Glycosuria"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Mangoes, papaya, carrots, liver and kidney are all major sources of",
      "options": [
        "Vitamin C",
        "Vitamin B",
        "Vitamin E",
        "Vitamin A"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Soluble fibers best function to aid the body in",
      "options": [
        "Promoting regularity of bowel movement",
        "All of the Above",
        "Preventing constipation",
        "Maintaining even blood sugar"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "The digestion of carbohydrates begins in",
      "options": [
        "The large intestine",
        "The stomach",
        "The small intestine",
        "The mouth"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The following are true of all animals in the safe non-toxic range EXCEPT",
      "options": [
        "They chew the cud but do not necessarily split the hoof",
        "They are herbivores",
        "They are in the lower level of the food chain",
        "They have split hoof and chew the cud"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "During the course of an average reproductive lifespan roughly_______eggs are produced",
      "options": [
        "500",
        "300",
        "400",
        "200"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The minimum time required for playing volley ball to maximize fitness is",
      "options": [
        "45 minutes",
        "20 minutes",
        "40 minutes",
        "30 minutes"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The minimum time required to engage in skipping exercise is",
      "options": [
        "20 minutes",
        "30 minutes",
        "10 minutes",
        "15 minutes"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The following are field related activities except",
      "options": [
        "Volleyball",
        "Triple jump",
        "Discus",
        "Shotput"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The interrelationship of an agent, host and the environment in the causation of disease can be explained by",
      "options": [
        "Socio-environmental model",
        "Germ theory",
        "Multifactorial causation theory",
        "Epidemiological triangle theory"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Which of these is regarded as a chronic disease condition?",
      "options": [
        "Malaria",
        "Cholera",
        "Tuberculosis",
        "Osteoporosis"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "Infectious diseases are commonly prevented by",
      "options": [
        "Prescribed antibiotics",
        "Regular hand washing",
        "All of the above",
        "Hygienic food preparation"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The under listed behaviors are detrimental to human health.",
      "options": [
        "Unwholesome entertainment",
        "Drinking water",
        "a and b only",
        "Smoking,"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The following are part of the nine images of health. Health as:",
      "options": [
        "functionality, empowerment",
        "a balance of state, sense of well-being",
        "All of the above",
        "growth, transcendence"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The gifts given by God to man to enjoy his existence include all EXCEPT",
      "options": [
        "Life",
        "Companionship",
        "Sabbath",
        "Speech"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The ‘S’ in NEWSTART stands for",
      "options": [
        "Sabbath",
        "Sense",
        "Sunlight",
        "Solitude"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Limitations of the WHO definition of health includes all EXCEPT",
      "options": [
        "Measurement is difficult",
        "The definition is not ideal",
        "The definition is realistic",
        "The dimensions are inadequate"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "That which provides us the motivation to reach out and strive for meaning and purpose in life is described by",
      "options": [
        "Physical dimension",
        "Spiritual dimension",
        "Psychological",
        "Emotional dimension"
      ],
      "correct": 1,
      "level": "beginner"
    },
    {
      "question": "Being fit physically is explained by the image of health",
      "options": [
        "Health as functionality",
        "Balance of State",
        "Health as an antithesis of disease",
        "Goodness of fit"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "Man’s ability to have and maintain relationships can be described by",
      "options": [
        "Emotional dimension",
        "Spiritual dimension",
        "Physical dimension",
        "Social dimension"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "A key part of our internal environment that determines our health is referred",
      "options": [
        "Health services",
        "Social factor",
        "Physical environment",
        "Genetic factor"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "___________is a protein produced when the body detects harmful substances",
      "options": [
        "Antibody",
        "Lymphocyte",
        "B-cells",
        "Antigen"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The excessive use of alcohol produces a condition known as______________",
      "options": [
        "Withdrawal",
        "Toxemia",
        "Alcoholism",
        "Intoxication"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The process of combining majorly plant-based food sources to increase biological value is best referred to as",
      "options": [
        "Protein combination",
        "Compliment",
        "Biological value increase",
        "Complementation"
      ],
      "correct": 3,
      "level": "beginner"
    },
    {
      "question": "The_______________ is the major site for alcohol metabolism",
      "options": [
        "Liver",
        "Kidney",
        "Liver",
        "Pancreas"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The part of the tongue responsible for sour taste sensation is the",
      "options": [
        "Side",
        "Middle",
        "bottom",
        "Front"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The immune system is made up of the following EXCEPT",
      "options": [
        "Thymus",
        "Lymph vessels",
        "Pancreas",
        "White blood cells"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "The provision of services in order to promote health through prevention of human contact with harmful wastes is referred to as _____",
      "options": [
        "Sanitizing",
        "health education",
        "Environmental sanitation",
        "Human cleaning"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Flesh foods were first introduced",
      "options": [
        "After the flood",
        "behind a flood",
        "Before the flood",
        "During the flood"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "The totality of processes by which humans grow, repair and maintain body tissues through the ingestion and utilization of food is referred to as__________",
      "options": [
        "Nutrition",
        "Digestion",
        "Food intake",
        "Nutrient digestion"
      ],
      "correct": 0,
      "level": "beginner"
    },
    {
      "question": "This organelle is vital for the release of energy and aerobic respiration in humans",
      "options": [
        "Reticulum",
        "Vacuole",
        "Mitochondrion",
        "Chloroplast"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Inappropriate use of prescribed or non-prescribed drugs is referred to as",
      "options": [
        "Drug addiction",
        "Prescription drug misuse",
        "Drug misuse",
        "Drug abuse"
      ],
      "correct": 2,
      "level": "beginner"
    },
    {
      "question": "Heroine, morphine, and alcoholic beverages are all examples of",
      "options": [
        "Hypno sedative",
        "Depressants",
        "Opiates",
        "Opioids"
      ],
      "correct": 1,
      "level": "beginner"
    }
  ],
  Nigeria_People :[
    {
      "question": "What is the approximate number of ethnic groups in Nigeria?",
      "options": [
        "Over 100",
        "Exactly 250",
        "Over 250",
        "Less than 50"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Over 250"
    },
    {
      "question": "Which of the following are NOT listed as major ethnic groups in Nigeria?",
      "options": [
        "Hausa, Yoruba, Igbo",
        "Bini, Efik, Fulani",
        "Kanuri, Nupe, Tiv",
        "Angas, Bolewa, Borgu"
      ],
      "correct": 3,
      "level": "general",
      "answer_text": "Angas, Bolewa, Borgu"
    },
    {
      "question": "Nigeria is geographically located between which latitudes?",
      "options": [
        "0°N and 10°N",
        "4°N and 14°N",
        "5°N and 15°N",
        "10°N and 20°N"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "4°N and 14°N"
    },
    {
      "question": "Which major ethnic group is primarily located in the North-West geopolitical zone?",
      "options": [
        "Yoruba",
        "Igbo",
        "Hausa",
        "Tiv"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Hausa"
    },
    {
      "question": "What percentage of Nigeria's population is constituted by the Hausa-Fulani according to the document?",
      "options": [
        "21%",
        "18%",
        "10%",
        "29%"
      ],
      "correct": 3,
      "level": "general",
      "answer_text": "29%"
    },
    {
      "question": "The origin of the Hausa/Fulani is traced to which mythical hero?",
      "options": [
        "Oduduwa",
        "Bayajidda",
        "Takuruku",
        "Ginuwa"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Bayajidda"
    },
    {
      "question": "Which Islamic legal system governs the Hausa/Fulani emirate structures?",
      "options": [
        "Sharia law",
        "Common law",
        "Customary law",
        "Napoleonic code"
      ],
      "correct": 0,
      "level": "general",
      "answer_text": "Islamic law"
    },
    {
      "question": "What significant event marked the intergroup relations of the Hausa/Fulani in the 19th century?",
      "options": [
        "The Scramble for Africa",
        "The Sokoto Jihad",
        "The Benin Expedition",
        "The Arochukwu Expedition"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "The Fulani-led Sokoto Jihad"
    },
    {
      "question": "The origin of the Yoruba people is linked to which historical figure and place?",
      "options": [
        "Bayajidda in Kano",
        "Oduduwa in Ile-Ife",
        "Takuruku in Benue",
        "Ginuwa in Western Niger Delta"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Oduduwa in Ile-Ife"
    },
    {
      "question": "Which of these festivals is NOT mentioned as a Yoruba celebration reinforcing social cohesion?",
      "options": [
        "Oro",
        "Egungun",
        "Osun-Osogbo",
        "Kwagh-hir"
      ],
      "correct": 3,
      "level": "general",
      "answer_text": "Kwagh-hir"
    },
    {
      "question": "Who played significant roles in the governance of the Old Oyo Empire alongside the Obas?",
      "options": [
        "Emirs and Waziri",
        "King Makers (Oyemesi) and the Ogboni cult",
        "Councils and assemblies",
        "Local chiefs and elders"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "King Makers (Oyemesi) and the Ogboni cult"
    },
    {
      "question": "Which of the following is NOT a characteristic of Igbo socio-economic practices?",
      "options": [
        "Vibrant masquerade festivals",
        "Yam cultivation",
        "Emphasis on communalism and extended families",
        "Entrepreneurial spirit in trade"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Emphasis on communalism and extended families"
    },
    {
      "question": "What type of governance system characterized pre-colonial Igbo societies?",
      "options": [
        "Centralized monarchy",
        "Emirate structures",
        "Decentralized through councils and assemblies",
        "Feudal hierarchy"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Decentralized through councils and assemblies"
    },
    {
      "question": "The Tiv people primarily reside in which Nigerian state?",
      "options": [
        "Cross River State",
        "Delta State",
        "Benue State",
        "Kogi State"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Benue State"
    },
    {
      "question": "What is a key feature of Ijaw socio-economic practices, reflecting their strong affinity with water?",
      "options": [
        "Long-distance trade",
        "Metalwork and palm oil production",
        "Boat-building, wood carvings, and fishing",
        "Millet cultivation and peanuts"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Boat-building, wood carvings, and fishing"
    },
    {
      "question": "The Kanuri people established a powerful empire along which trade routes?",
      "options": [
        "Trans-Atlantic slave trade routes",
        "Trans-Saharan trade routes",
        "Indian Ocean trade routes",
        "Silk Road"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Trans-Saharan trade routes"
    },
    {
      "question": "Who is the supreme leader in the centralized monarchical structure of the Kanuri?",
      "options": [
        "Oba",
        "Emir",
        "Mai",
        "Ata"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Mai"
    },
    {
      "question": "The Itsekiri people trace their origins to a prince from which kingdom?",
      "options": [
        "Oyo Kingdom",
        "Benin Kingdom",
        "Sokoto Caliphate",
        "Nri Kingdom"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Benin Kingdom"
    },
    {
      "question": "Who governs the Itsekiri people with a council of chiefs?",
      "options": [
        "Obong of Calabar",
        "Ata of Igala",
        "Olu of Warri",
        "Onojie"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Olu of Warri"
    },
    {
      "question": "The Efik people are found in which Nigerian state?",
      "options": [
        "Akwa Ibom State",
        "Cross River State",
        "Rivers State",
        "Bayelsa State"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Cross River State"
    },
    {
      "question": "What historical economic activity were the Efik known for with Europeans?",
      "options": [
        "Agriculture",
        "Leatherwork",
        "Significant trading",
        "Metalwork"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Significant trading history"
    },
    {
      "question": "Who leads the monarchical system of the Igala people?",
      "options": [
        "Obong of Calabar",
        "Olu of Warri",
        "Ata of Igala",
        "Onojie"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Ata of Igala"
    },
    {
      "question": "The Ekoi people maintain strong intergroup relations with the Efik and Ibibio through which society?",
      "options": [
        "Ogboni cult",
        "Ekpe society",
        "Kwagh-hir",
        "Age-grade groups"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Ekpe society"
    },
    {
      "question": "The Esan people primarily engage in what occupation?",
      "options": [
        "Fishing",
        "Hunting",
        "Farming",
        "Long-distance trade"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Farming"
    },
    {
      "question": "What is the key focus of African traditional ethics according to the document?",
      "options": [
        "Individual achievement",
        "Material wealth",
        "Morality in human actions and communal well-being",
        "Technological advancement"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Morality in human actions and communal well-being"
    },
    {
      "question": "Which of the following is NOT a societal value mentioned in the context of traditional ethics?",
      "options": [
        "Loyalty",
        "Honesty",
        "Selfishness",
        "Respect for elders"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Selfishness"
    },
    {
      "question": "How is good character defined in traditional African ethics?",
      "options": [
        "Accumulation of riches",
        "Abstaining from vices and exhibiting virtues",
        "Showing off power",
        "Dominating others"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Abstaining from vices and exhibiting virtues"
    },
    {
      "question": "What concept promotes the idea that individuals exist in relation to others, fostering solidarity and mutual support?",
      "options": [
        "Individualism",
        "Isolationism",
        "Communalism",
        "Capitalism"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Communalism"
    },
    {
      "question": "In pre-independence Nigerian societies, what was the role of traditional rulers and elders?",
      "options": [
        "To impose new laws",
        "To act as sole judges",
        "To be custodians of wisdom and justice",
        "To encourage individualism"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "To be custodians of wisdom and justice"
    },
    {
      "question": "What does the Yoruba culture value as essential for harmony with supernatural forces and societal relations?",
      "options": [
        "Wealth",
        "\"iwa\" (character)",
        "Power",
        "Fame"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "\"iwa\" (character)"
    },
    {
      "question": "What are the two broad categories of governance systems in pre-colonial Nigeria?",
      "options": [
        "Monarchy and Republic",
        "Centralized and Decentralized",
        "Feudal and Democratic",
        "Socialist and Capitalist"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Centralized and Decentralized"
    },
    {
      "question": "Which of these is an example of a centralized state in pre-colonial Nigeria?",
      "options": [
        "Igbo societies",
        "Tiv societies",
        "Oyo Kingdom",
        "Ijaw communities"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Oyo"
    },
    {
      "question": "How was citizenship acquired in pre-colonial Nigeria?",
      "options": [
        "Through formal application",
        "Kinship-based",
        "By military conquest",
        "Through religious conversion"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Kinship-based"
    },
    {
      "question": "What was a key civic responsibility of citizens in pre-colonial Nigeria?",
      "options": [
        "Paying income tax to the central government",
        "Participation in Communal Labor",
        "Attending regular elections",
        "Serving in a standing army"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Participation in Communal Labor"
    },
    {
      "question": "What roles did women primarily play in Yoruba and Igbo societies?",
      "options": [
        "Sole political leaders",
        "Warriors and defenders",
        "Significant roles in trade, market organization, and domestic responsibilities",
        "Religious heads"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Significant roles in trade, market organization, and domestic responsibilities"
    },
    {
      "question": "What was the primary agent of socialization for children in pre-colonial Nigerian families?",
      "options": [
        "Age-grade groups",
        "Religious institutions",
        "Families",
        "Marketplaces"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Families"
    },
    {
      "question": "What was the relevance of indigenous languages in pre-colonial Nigerian governance?",
      "options": [
        "They were only used for informal communication.",
        "They were crucial for communication, cultural continuity, and governance.",
        "They were replaced by foreign languages.",
        "They had no impact on political wisdom."
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "They were crucial for communication, cultural continuity, and governance."
    },
    {
      "question": "When did British colonization of Lagos officially begin?",
      "options": [
        "1851",
        "1885",
        "1861",
        "1900"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "1861"
    },
    {
      "question": "What was the \"pacification policy\" used by the British during their conquest of Nigeria?",
      "options": [
        "Diplomatic negotiations",
        "Deployment of British forces to suppress resistance",
        "Economic incentives",
        "Cultural exchange programs"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Deployment of British forces to suppress resistance"
    },
    {
      "question": "Who was exiled for refusing to sign treaties with the British during the resistance movements?",
      "options": [
        "King Kosoko of Lagos",
        "Nana of Itshekiri",
        "King Jaja of Opobo",
        "Sultan Atahiru"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "King Jaja of Opobo"
    },
    {
      "question": "What was a major reason for the failure of resistance movements against British conquest?",
      "options": [
        "Strong national unity",
        "British military inferiority",
        "Internal political conflicts and lack of unity",
        "Sufficient nationalism"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Internal political conflicts and lack of unity"
    },
    {
      "question": "Who introduced the indirect rule system in Nigeria?",
      "options": [
        "Lord Richard",
        "Sir Hugh Clifford",
        "Frederick Lord Lugard",
        "Sir Arthur Richards"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Frederick Lord Lugard"
    },
    {
      "question": "Which area in Nigeria experienced resistance to the indirect rule system, leading to riots and uprisings?",
      "options": [
        "Northern Nigeria",
        "Lagos Colony",
        "Tiv land and Eastern Nigeria",
        "Western Region"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Tiv land and Eastern Nigeria"
    },
    {
      "question": "When was the amalgamation of Northern and Southern Nigeria into a single entity?",
      "options": [
        "1900",
        "1914",
        "1922",
        "1960"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1914"
    },
    {
      "question": "What was the nature of the Nigerian Council established by Lord Lugard?",
      "options": [
        "Legislative and powerful",
        "Advisory rather than legislative",
        "Executive and policy-making",
        "Judicial and law-enforcing"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Advisory rather than legislative"
    },
    {
      "question": "Which constitution introduced the elective principle, allowing for limited Nigerian representation?",
      "options": [
        "Richard Constitution of 1946",
        "Macpherson Constitution of 1951",
        "Clifford Constitution of 1922",
        "Lyttleton Constitution of 1954"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Clifford Constitution of 1922"
    },
    {
      "question": "What was a primary aim of the British colonial economic policy in Nigeria?",
      "options": [
        "To promote indigenous industries",
        "To develop Nigeria's resources for local consumption",
        "To exploit Nigeria's resources for British benefit",
        "To establish fair trade practices"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "To exploit Nigeria's resources for British benefit"
    },
    {
      "question": "Which of the following is listed as a positive impact of colonialism on Nigeria?",
      "options": [
        "Economic exploitation",
        "Creation of divisions among ethnic groups",
        "Fostering the formation of political parties and nationalism",
        "Widened educational gaps"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Fostering the formation of political parties and nationalism"
    },
    {
      "question": "What is nationalism defined as in the context of Nigeria's independence struggle?",
      "options": [
        "The desire for external control",
        "Identification of a group of people sharing cultural norms and aspirations, advocating for self-governance.",
        "Promotion of foreign rule",
        "The imposition of one culture over another"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "The identification of a group of people sharing cultural norms and aspirations, advocating for self-governance."
    },
    {
      "question": "Before British colonialism, Nigeria as a unified entity did not exist. What did the region consist of?",
      "options": [
        "A single, large empire",
        "Various distinct empires, kingdoms, and states",
        "Only nomadic tribes",
        "Small, isolated communities with no governance"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Various distinct empires, kingdoms, and states"
    },
    {
      "question": "By 1914, Nigeria was divided into how many regions?",
      "options": [
        "Two",
        "Three",
        "Four",
        "Five"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Three"
    },
    {
      "question": "Who was an influential thinker advocating for African self-reliance and cultural pride in the 19th century?",
      "options": [
        "Herbert Macaulay",
        "Edward Wilmot Blyden",
        "Dr. Nnamdi Azikiwe",
        "Chief Obafemi Awolowo"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Edward Wilmot Blyden"
    },
    {
      "question": "Which of the following was NOT a factor for nationalist agitations in the 20th century?",
      "options": [
        "Racial discrimination in civil service",
        "Contentment with the Indirect Rule system",
        "Criticism of colonial constitutions",
        "Economic exploitation by foreign companies"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Contentment with the Indirect Rule system"
    },
    {
      "question": "What role did the press play in Nigeria's struggle for independence?",
      "options": [
        "It supported colonial policies.",
        "It acted as a watchdog, informing the public and criticizing colonial policies.",
        "It discouraged unity among Africans.",
        "It remained neutral."
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "It acted as a watchdog, informing the public and criticizing colonial policies."
    },
    {
      "question": "Who founded the Nigerian National Democratic Party (N.N.D.P)?",
      "options": [
        "Dr. Nnamdi Azikiwe",
        "Alhaji Tafawa Balewa",
        "Herbert Macaulay",
        "Chief Obafemi Awolowo"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Herbert Macaulay"
    },
    {
      "question": "Who was the first Prime Minister of Nigeria?",
      "options": [
        "Dr. Nnamdi Azikiwe",
        "Alhaji Tafawa Balewa",
        "Chief Obafemi Awolowo",
        "Michael Okpara"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Alhaji Tafawa Balewa"
    },
    {
      "question": "The Aba Women Uprising of 1929 was sparked by what colonial policy?",
      "options": [
        "Introduction of new crops",
        "Taxation policies and economic hardships",
        "Restriction on trade",
        "Religious conversions"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Taxation policies and economic hardships"
    },
    {
      "question": "What was a significant impact of the Aba Women Uprising?",
      "options": [
        "It led to the expansion of indirect rule.",
        "It led to the resignation of Warrant Chiefs and highlighted the role of women in the nationalist struggle.",
        "It resulted in increased taxes.",
        "It had no lasting effect."
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "It led to the resignation of Warrant Chiefs and highlighted the role of women in the nationalist struggle."
    },
    {
      "question": "How does Frantz Fanon describe colonialism?",
      "options": [
        "A beneficial system for development",
        "A violent and oppressive structure that dehumanizes the colonized",
        "A cultural exchange program",
        "A means of promoting equality"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "A violent and oppressive structure that dehumanizes the colonized"
    },
    {
      "question": "When did British colonial rule begin in Lagos?",
      "options": [
        "1851",
        "1861",
        "1898",
        "1914"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1861"
    },
    {
      "question": "Which of these is a positive effect of colonialism mentioned in the document?",
      "options": [
        "Cultural suppression",
        "Economic exploitation",
        "Western Education",
        "Disruption of traditional governance"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Western Education"
    },
    {
      "question": "What economic transformation occurred due to colonialism?",
      "options": [
        "Shift from cash crops to subsistence agriculture",
        "Shift from subsistence agriculture to cash crops",
        "Decrease in international trade",
        "Decline in infrastructure development"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Shift from subsistence agriculture to cash crops"
    },
    {
      "question": "What negative effect did the indirect rule system have on traditional governance?",
      "options": [
        "It strengthened legitimate traditional authorities.",
        "It enhanced local power dynamics.",
        "It altered local power dynamics, often undermining legitimate traditional authorities.",
        "It promoted direct rule."
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "It altered local power dynamics, often undermining legitimate traditional authorities."
    },
    {
      "question": "How did colonial policies exacerbate ethnic tensions in Nigeria?",
      "options": [
        "By promoting unity among groups.",
        "By creating fair competition for resources.",
        "By exacerbating divisions among ethnic groups.",
        "By fostering mutual respect."
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "By exacerbating divisions among ethnic groups."
    },
    {
      "question": "What was a consequence of colonial monopolies and price fixing?",
      "options": [
        "Enrichment of local farmers",
        "Promotion of traditional trade networks",
        "Impoverishment of local farmers and disruption of traditional trade networks",
        "Economic equality"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Impoverishment of local farmers and disruption of traditional trade networks"
    },
    {
      "question": "What language serves as a lingua franca in Northern Nigeria?",
      "options": [
        "Yoruba",
        "Igbo",
        "Hausa",
        "Efik"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Hausa"
    },
    {
      "question": "What was a post-colonial challenge mentioned for the Hausa/Fulani?",
      "options": [
        "Increased literacy",
        "Boko Haram insurgency",
        "Economic prosperity",
        "Decline in traditional practices"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Boko Haram insurgency"
    },
    {
      "question": "What event was a direct consequence of the imposition of warrant chiefs in Igbo society?",
      "options": [
        "Sokoto Jihad",
        "Aba Women Riot of 1929",
        "Scramble for Africa",
        "Nigerian Civil War"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Aba Women Riot of 1929"
    },
    {
      "question": "What was a positive impact of colonialism on the Igbo?",
      "options": [
        "Loss of traditional governance",
        "Spread of Christianity and Western education",
        "Economic disruption",
        "Suppression of masquerade festivals"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Spread of Christianity and Western education"
    },
    {
      "question": "What impact did Western education have on Yoruba society?",
      "options": [
        "Decreased literacy",
        "Limited political engagement",
        "Increased literacy and political engagement",
        "Cultural suppression"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Increased literacy and political engagement"
    },
    {
      "question": "What was the economic shift for the Efik due to colonialism?",
      "options": [
        "From palm oil production to slave trade",
        "From slave trade to palm oil production",
        "From agriculture to industry",
        "From local trade to subsistence farming"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "From slave trade to palm oil production"
    },
    {
      "question": "According to the document, Nigeria is bordered by which desert in the north?",
      "options": [
        "Kalahari Desert",
        "Sahara Desert",
        "Libyan Desert",
        "Namib Desert"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Sahara Desert"
    },
    {
      "question": "The Igbo are known for their technological advancements in which areas?",
      "options": [
        "Textile and dyeing",
        "Metalwork and palm oil production",
        "Pottery and leatherwork",
        "Boat-building and fishing"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Metalwork and palm oil production"
    },
    {
      "question": "What is the traditional marriage system for the Hausa/Fulani based on?",
      "options": [
        "Customary law",
        "Islamic law",
        "Christian doctrines",
        "Secular principles"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Islamic law"
    },
    {
      "question": "What characterizes the political practices of the Tiv people?",
      "options": [
        "Centralized authority under a king",
        "Council-based governance with no centralized authority",
        "Emirate structures",
        "Monarchical system led by an Ata"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Council-based governance with no centralized authority"
    },
    {
      "question": "What significant cultural center is often associated with Igbo origin traditions?",
      "options": [
        "Ile-Ife",
        "Nri",
        "Kano",
        "Calabar"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Nri"
    },
    {
      "question": "What type of society is the Hausa/Fulani society described as?",
      "options": [
        "Matriarchal and monogamous",
        "Patriarchal and polygamous",
        "Egalitarian and individualistic",
        "Democratic and secular"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Patriarchal and polygamous"
    },
    {
      "question": "What term refers to the period before colonialism, characterized by the imposition of European governance?",
      "options": [
        "Post-colonial",
        "Pre-colonial",
        "Neo-colonial",
        "Imperialist"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Pre-colonial"
    },
    {
      "question": "How did traditional education in Nigeria prepare individuals for community life?",
      "options": [
        "By emphasizing individualism",
        "By focusing on abstract theories",
        "By emphasizing hard work and functionalism",
        "By promoting isolation"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "By emphasizing hard work and functionalism"
    },
    {
      "question": "What is the consequence of nonconformity to societal norms in traditional Nigerian communities?",
      "options": [
        "Promotion to leadership",
        "Social deviance and potential sanctions",
        "Financial rewards",
        "Increased social status"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Social deviance and potential sanctions"
    },
    {
      "question": "The Yoruba kingdoms had a centralized governance under whom?",
      "options": [
        "Emirs",
        "Mai",
        "Obas",
        "Elders"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Monarchs (Oba)"
    },
    {
      "question": "What was the main purpose of infrastructure development during British colonial rule in Nigeria?",
      "options": [
        "To improve living standards for Nigerians",
        "To facilitate the extraction of raw materials",
        "To promote local industries"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": null
    },
    {
      "question": "The traditional leader of the Igala people from Kogi State is the?",
      "options": [
        "Ata",
        "Olu",
        "Obong",
        "Gado"
      ],
      "correct": 0,
      "level": "general",
      "answer_text": "Ata"
    },
    {
      "question": "The term \"ethics\" is derived from the Greek word 'ethos', which means?",
      "options": [
        "Rightness or wrongness",
        "Strong or to be of worth",
        "Norm, manner, or code of conduct",
        "Science of morality"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Norm, manner, or code of conduct"
    },
    {
      "question": "The main feature of African traditional society and ethics is?",
      "options": [
        "Individualism",
        "Humanism and communalism",
        "Divine Monarchy",
        "A focus on written scripture"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Humanism and communalism"
    },
    {
      "question": "In Bajju tradition, what ritual must be performed if a man sleeps with his brother's wife?",
      "options": [
        "An Amuwuan ritual",
        "A Swem ritual",
        "An Oro ritual",
        "An Egungun ritual"
      ],
      "correct": 0,
      "level": "general",
      "answer_text": "An Amuwuan ritual"
    },
    {
      "question": "The British colonial administration employed what system of governance in Nigeria?",
      "options": [
        "Direct rule",
        "Assimilation policy",
        "Indirect rule",
        "Centralized administration"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Indirect rule"
    },
    {
      "question": "Who was the British administrator that introduced indirect rule in Northern Nigeria?",
      "options": [
        "Hugh Clifford",
        "John Macpherson",
        "Arthur Richard",
        "Frederick Lord Lugard"
      ],
      "correct": 3,
      "level": "general",
      "answer_text": "Frederick Lord Lugard"
    },
    {
      "question": "The amalgamation of the Northern and Southern Nigerian protectorates happened in what year?",
      "options": [
        "1906",
        "1914",
        "1922",
        "1951"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1914"
    },
    {
      "question": "Who gave Nigeria its name in 1898?",
      "options": [
        "Lord Lugard",
        "Queen Victoria",
        "Flora Shaw",
        "Hugh Clifford"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Flora Shaw"
    },
    {
      "question": "The Aba Women's Riot of 1929 was a major protest against the implementation of indirect rule in which region?",
      "options": [
        "Western Nigeria",
        "Northern Nigeria",
        "Eastern Nigeria",
        "The Lagos Colony"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Eastern Nigeria"
    },
    {
      "question": "The Clifford Constitution, one of Nigeria's earliest, was introduced in?",
      "options": [
        "1919",
        "1922",
        "1946",
        "1951"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1922"
    },
    {
      "question": "The constitution introduced by Governor John Macpherson was in what year?",
      "options": [
        "1946",
        "1948",
        "1951",
        "1957"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "1951"
    },
    {
      "question": "Who is referred to as the \"father of African Nationalism\" in the document?",
      "options": [
        "Chief Anthony Enahoro",
        "Herbert Macaulay",
        "Edward Wilmot Blyden",
        "Nnamdi Azikiwe"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Edward Wilmot Blyden"
    },
    {
      "question": "Which Nigerian nationalist sponsored the motion for independence in 1953?",
      "options": [
        "Obafemi Awolowo",
        "Nnamdi Azikiwe",
        "Tafawa Balewa",
        "Chief Anthony Enahoro"
      ],
      "correct": 3,
      "level": "general",
      "answer_text": "Chief Anthony Enahoro"
    },
    {
      "question": "The Mid-Western Region of Nigeria was created in what year?",
      "options": [
        "1960",
        "1963",
        "1966",
        "1973"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1963"
    },
    {
      "question": "The National Youth Service Corps (NYSC) was established in?",
      "options": [
        "1970",
        "1973",
        "1976",
        "1977"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1973"
    },
    {
      "question": "Which military head of state created 12 states out of Nigeria's four regions?",
      "options": [
        "Murtala Mohammed",
        "Ibrahim Babangida",
        "Yakubu Gowon",
        "Sani Abacha"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Yakubu Gowon"
    },
    {
      "question": "General Murtala Mohammed increased the number of states to?",
      "options": [
        "12",
        "19",
        "21",
        "30"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "19"
    },
    {
      "question": "The number of states in Nigeria was increased to 36 under which leader?",
      "options": [
        "Ibrahim Babangida",
        "Sani Abacha",
        "Yakubu Gowon",
        "Murtala Mohammed"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "Sani Abacha"
    },
    {
      "question": "Petroleum was discovered at Oloibiri in what year, according to the document?",
      "options": [
        "1956",
        "1960",
        "1966",
        "1970"
      ],
      "correct": 0,
      "level": "general",
      "answer_text": "1956"
    },
    {
      "question": "Nigeria's first military coup occurred in?",
      "options": [
        "1963",
        "1966",
        "1970",
        "1975"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1966"
    },
    {
      "question": "The \"War Against Indiscipline\" (WAI) was a national reorientation campaign launched in?",
      "options": [
        "1980",
        "1984",
        "1999",
        "2000"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1984"
    },
    {
      "question": "General Olusegun Obasanjo's administration launched which agricultural program on May 20, 1976?",
      "options": [
        "Green Revolution",
        "War Against Indiscipline",
        "Operation Feed the Nation",
        "National Development Plan"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Operation Feed the Nation"
    },
    {
      "question": "President Shehu Shagari launched the \"Green Revolution\" program in what year?",
      "options": [
        "1976",
        "1979",
        "1980",
        "1983"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "1980"
    },
    {
      "question": "Where in the Nigerian constitution are the Fundamental Human Rights detailed?",
      "options": [
        "Chapter I",
        "Chapter II",
        "Chapter IV",
        "Chapter VI"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Chapter IV"
    },
    {
      "question": "Western-style higher education began in Nigeria with the establishment of the University of Ibadan in?",
      "options": [
        "1946",
        "1948",
        "1957",
        "1960"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1948"
    },
    {
      "question": "Railway construction in Nigeria first started in Lagos in what year?",
      "options": [
        "1885",
        "1898",
        "1904",
        "1913"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1898"
    },
    {
      "question": "According to the document, tin mining began in Nigeria in?",
      "options": [
        "1909",
        "1905",
        "1904",
        "1913"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "1904"
    },
    {
      "question": "Coal was first discovered and mined near which city?",
      "options": [
        "Jos",
        "Patani",
        "Oloibiri",
        "Enugu"
      ],
      "correct": 3,
      "level": "general",
      "answer_text": "Enugu"
    },
    {
      "question": "Who took over as governor in 1919 after Lord Lugard retired?",
      "options": [
        "Sir Egofor",
        "R.D. Moore",
        "Hugh Clifford",
        "Arthur Richard"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Hugh Clifford"
    },
    {
      "question": "The National Bank of Nigeria was established in which year?",
      "options": [
        "1917",
        "1933",
        "1948",
        "1959"
      ],
      "correct": 1,
      "level": "general",
      "answer_text": "1933"
    },
    {
      "question": "The Ibibio people, who constitute 3.5% of the population, call their supreme being?",
      "options": [
        "Chukwu",
        "Swem",
        "Abasi",
        "Olorun"
      ],
      "correct": 2,
      "level": "general",
      "answer_text": "Abasi"
    },
  ],
  BU_SEN_102 :[
    {
      "question": "What is the primary function of a router in a network?",
      "options": [
        "To connect devices within a single local area network (LAN).",
        "To filter network traffic based on MAC addresses.",
        "To forward data packets between different networks.",
        "To provide wireless connectivity to devices."
      ],
      "correct": 2
    },
    {
      "question": "Which of the following describes a Local Area Network (LAN)?",
      "options": [
        "A network that spans across multiple cities or countries.",
        "A network that connects devices in a small geographic area, like a home or office.",
        "A network used for secure communication over a public network.",
        "A network that uses satellite communication."
      ],
      "correct": 1
    },
    {
      "question": "What does WAN stand for?",
      "options": [
        "Wireless Area Network",
        "Wide Access Network",
        "Wide Area Network",
        "Web Area Network"
      ],
      "correct": 2
    },
    {
      "question": "Which network topology connects all devices to a central hub or switch?",
      "options": ["Bus", "Ring", "Star", "Mesh"],
      "correct": 2
    },
    {
      "question": "In a bus topology, how do devices communicate?",
      "options": [
        "Through a central switch",
        "By passing a token around the ring",
        "All devices share a single communication line",
        "Directly with each other in a point-to-point manner"
      ],
      "correct": 2
    },
    {
      "question": "Which network device operates at Layer 2 (Data Link Layer) of the OSI model and forwards frames based on MAC addresses?",
      "options": ["Router", "Hub", "Switch", "Repeater"],
      "correct": 2
    },
    {
      "question": "What is the purpose of an IP address?",
      "options": [
        "To uniquely identify a network interface on a network.",
        "To provide a human-readable name for a website.",
        "To encrypt data transmitted over the internet.",
        "To control the flow of data packets within a single device."
      ],
      "correct": 0
    },
    {
      "question": "Which version of IP addresses uses 32-bit addresses?",
      "options": ["IPv6", "IPv4", "IPsec", "IPX"],
      "correct": 1
    },
    {
      "question": "What is the main advantage of IPv6 over IPv4?",
      "options": [
        "Shorter address length",
        "Increased security features by default",
        "Larger address space to accommodate more devices",
        "Faster data transmission speeds"
      ],
      "correct": 2
    },
    {
      "question": "What does DHCP stand for?",
      "options": [
        "Dynamic Host Control Protocol",
        "Domain Host Configuration Protocol",
        "Dynamic Host Configuration Protocol",
        "Data Handling Control Protocol"
      ],
      "correct": 2
    },
    {
      "question": "What is the primary function of DHCP?",
      "options": [
        "To translate domain names to IP addresses.",
        "To provide dynamic IP addresses to devices on a network.",
        "To secure network communication.",
        "To send email messages."
      ],
      "correct": 1
    },
    {
      "question": "Which protocol is used to translate human-readable domain names into IP addresses?",
      "options": ["FTP", "DNS", "HTTP", "SMTP"],
      "correct": 1
    },
    {
      "question": "What does DNS stand for?",
      "options": [
        "Domain Network System",
        "Data Naming Service",
        "Domain Name System",
        "Digital Naming Standard"
      ],
      "correct": 2
    },
    {
      "question": "Which protocol is responsible for reliable, ordered, and error-checked delivery of a stream of bytes between applications?",
      "options": ["UDP", "IP", "TCP", "ICMP"],
      "correct": 2
    },
    {
      "question": "Which protocol is connectionless and offers faster but less reliable data transmission?",
      "options": ["TCP", "FTP", "UDP", "HTTP"],
      "correct": 2
    },
    {
      "question": "What is the standard port number for HTTP?",
      "options": ["21", "23", "80", "443"],
      "correct": 2
    },
    {
      "question": "What is the standard port number for HTTPS?",
      "options": ["80", "443", "22", "25"],
      "correct": 1
    },
    {
      "question": "What is the main difference between HTTP and HTTPS?",
      "options": [
        "HTTP is for text, HTTPS is for images.",
        "HTTPS uses encryption (SSL/TLS) for secure communication, while HTTP does not.",
        "HTTP is for web pages, HTTPS is for file transfers.",
        "HTTPS is faster than HTTP."
      ],
      "correct": 1
    },
    {
      "question": "Which protocol is used for sending email messages?",
      "options": ["POP3", "IMAP", "SMTP", "FTP"],
      "correct": 2
    },
    {
      "question": "Which protocol is used for retrieving email messages from a server, typically downloading them to the client and deleting them from the server?",
      "options": ["SMTP", "IMAP", "POP3", "HTTP"],
      "correct": 2
    },
    {
      "question": "Which protocol allows email clients to access email on a remote mail server, leaving the messages on the server?",
      "options": ["POP3", "SMTP", "IMAP", "DNS"],
      "correct": 2
    },
    {
      "question": "What does FTP stand for?",
      "options": [
        "File Transfer Protocol",
        "Fast Transmission Protocol",
        "File Tunnelling Protocol",
        "Fragmented Transfer Protocol"
      ],
      "correct": 0
    },
    {
      "question": "Which protocol is used for transferring files between a client and a server on a computer network?",
      "options": ["HTTP", "SMTP", "FTP", "TELNET"],
      "correct": 2
    },
    {
      "question": "What is the purpose of SSH?",
      "options": [
        "To transfer files securely.",
        "To send and receive email.",
        "To establish a secure remote connection to a computer.",
        "To resolve domain names."
      ],
      "correct": 2
    },
    {
      "question": "Which layer of the OSI model is responsible for routing data packets between networks?",
      "options": ["Physical", "Data Link", "Network", "Transport"],
      "correct": 2
    },
    {
      "question": "Which layer of the OSI model defines the electrical and physical specifications for devices and cables?",
      "options": ["Data Link", "Physical", "Network", "Transport"],
      "correct": 1
    },
    {
      "question": "Segmentation and reassembly of data, as well as flow control, are functions of which OSI layer?",
      "options": ["Network", "Session", "Transport", "Presentation"],
      "correct": 2
    },
    {
      "question": "Which OSI layer provides services to applications, such as file transfer, email, and remote login?",
      "options": ["Presentation", "Session", "Application", "Transport"],
      "correct": 2
    },
    {
      "question": "What is a firewall primarily used for in network security?",
      "options": [
        "To boost internet speed.",
        "To prevent unauthorized access to or from a private network.",
        "To manage wireless connections.",
        "To store website data."
      ],
      "correct": 1
    },
    {
      "question": "What is a VPN (Virtual Private Network)?",
      "options": [
        "A network that connects devices within a single building.",
        "A technology that creates a secure and encrypted connection over a less secure network like the internet.",
        "A protocol for sending large files quickly.",
        "A type of wireless router."
      ],
      "correct": 1
    },
    {
      "question": "What does MAC address stand for?",
      "options": [
        "Media Access Control",
        "Main Access Connection",
        "Mobile Authentication Code",
        "Multiple Address Controller"
      ],
      "correct": 0
    },
    {
      "question": "A MAC address is a unique identifier assigned to what?",
      "options": [
        "A web page",
        "A software application",
        "A network interface controller (NIC)",
        "A router"
      ],
      "correct": 2
    },
    {
      "question": "What is a protocol in the context of computer networks?",
      "options": [
        "A type of network cable.",
        "A set of rules that govern how data is exchanged between devices.",
        "A software application for network management.",
        "A physical device that connects networks."
      ],
      "correct": 1
    },
    {
      "question": "What is the purpose of a gateway in a network?",
      "options": [
        "To amplify network signals.",
        "To provide a path for data to travel from one network to another, especially between networks using different protocols.",
        "To filter unwanted emails.",
        "To assign IP addresses to devices."
      ],
      "correct": 1
    },
    {
      "question": "Which device is used to connect segments of a network, often boosting the signal?",
      "options": ["Router", "Switch", "Hub", "Gateway"],
      "correct": 2
    },
    {
      "question": "What is network latency?",
      "options": [
        "The maximum amount of data that can be transmitted over a network.",
        "The delay before a transfer of data begins following an instruction for its transfer.",
        "The rate at which data is successfully delivered over a communication channel.",
        "The number of users connected to a network."
      ],
      "correct": 1
    },
    {
      "question": "What is bandwidth in networking?",
      "options": [
        "The time it takes for a signal to travel from one point to another.",
        "The maximum data transfer rate of a network or internet connection.",
        "The number of errors in data transmission.",
        "The physical length of a network cable."
      ],
      "correct": 1
    },
    {
      "question": "What is a subnet mask used for?",
      "options": [
        "To hide the IP address of a device.",
        "To divide an IP address into network and host portions.",
        "To encrypt network traffic.",
        "To assign a domain name."
      ],
      "correct": 1
    },
    {
      "question": "Which of the following is a private IP address range?",
      "options": [
        "192.168.0.0/16",
        "8.8.8.8",
        "172.16.0.0/12",
        "203.0.113.0/24"
      ],
      "correct": 0
    },
    {
      "question": "What is the purpose of a proxy server?",
      "options": [
        "To host websites.",
        "To act as an intermediary for requests from clients seeking resources from other servers.",
        "To secure Wi-Fi connections.",
        "To manage database queries."
      ],
      "correct": 1
    },
    {
      "question": "Which protocol is used by web browsers to request and display web pages?",
      "options": ["FTP", "SMTP", "HTTP", "POP3"],
      "correct": 2
    },
    {
      "question": "What is the primary goal of Quality of Service (QoS) in networking?",
      "options": [
        "To ensure all data packets arrive at their destination.",
        "To manage network congestion and prioritize certain types of traffic.",
        "To increase the speed of the internet connection.",
        "To prevent unauthorized access to the network."
      ],
      "correct": 1
    },
    {
      "question": "What is a packet in network communication?",
      "options": [
        "A large file being downloaded.",
        "A small unit of data transmitted over a network.",
        "A type of network cable.",
        "A software application."
      ],
      "correct": 1
    },
    {
      "question": "What is the purpose of checksum in data transmission?",
      "options": [
        "To encrypt the data.",
        "To ensure the data is transmitted quickly.",
        "To detect errors in data transmission.",
        "To compress the data."
      ],
      "correct": 2
    },
    {
      "question": "Which protocol provides connectionless, unreliable data transfer across an IP network?",
      "options": ["TCP", "UDP", "FTP", "SSH"],
      "correct": 1
    },
    {
      "question": "What is the difference between a hub and a switch?",
      "options": [
        "A hub is faster than a switch.",
        "A hub forwards data to all connected devices, while a switch sends data only to the intended recipient.",
        "A switch is a Layer 1 device, while a hub is a Layer 2 device.",
        "Hubs are used for wireless networks, switches are for wired networks."
      ],
      "correct": 1
    },
    {
      "question": "What is a client-server architecture?",
      "options": [
        "A network where all devices have equal capabilities.",
        "A model where a central server provides resources and services to client devices.",
        "A system for peer-to-peer file sharing.",
        "A type of network topology."
      ],
      "correct": 1
    },
    {
      "question": "What is the role of a web browser?",
      "options": [
        "To create web pages.",
        "To store website files.",
        "To display web pages to users.",
        "To manage website databases."
      ],
      "correct": 2
    },
    {
      "question": "Which of the following is an example of a web server software?",
      "options": ["Google Chrome", "Mozilla Firefox", "Apache HTTP Server", "Microsoft Word"],
      "correct": 2
    },
    {
      "question": "What does HTML stand for?",
      "options": [
        "Hyper Text Markup Language",
        "High-level Text Manipulation Language",
        "Hyperlink and Text Management Language",
        "Home Tool Markup Language"
      ],
      "correct": 0
    },
    {
      "question": "Which HTML tag is used to define the title of a document, which appears in the browser tab?",
      "options": ["<head>", "<body>", "<title>", "<meta>"],
      "correct": 2
    },
    {
      "question": "Which HTML tag is used to create a paragraph of text?",
      "options": ["<para>", "<text>", "<p>", "<line>"],
      "correct": 2
    },
    {
      "question": "What attribute is used to specify an alternative text for an image, for accessibility purposes?",
      "options": ["title", "description", "alt", "text"],
      "correct": 2
    },
    {
      "question": "Which HTML tag is used to embed a video on a web page?",
      "options": ["<vid>", "<movie>", "<media>", "<video>"],
      "correct": 3
    },
    {
      "question": "What does CSS stand for?",
      "options": [
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style System"
      ],
      "correct": 2
    },
    {
      "question": "Which CSS property is used to control the spacing between letters in a text?",
      "options": ["line-height", "word-spacing", "letter-spacing", "text-indent"],
      "correct": 2
    },
    {
      "question": "How can you apply CSS styles directly to an HTML element (inline style)?",
      "options": [
        "Using a <style> tag in the <head> section.",
        "Using a separate .css file.",
        "Using the 'style' attribute within the HTML tag.",
        "Using JavaScript to dynamically add styles."
      ],
      "correct": 2
    },
    {
      "question": "Which CSS property is used to set the font family of text?",
      "options": ["font-type", "text-font", "font-family", "font-style"],
      "correct": 2
    },
    {
      "question": "Which CSS property is used to add space outside an element's border?",
      "options": ["padding", "spacing", "margin", "border-spacing"],
      "correct": 2
    },
    {
      "question": "What does JS stand for?",
      "options": [
        "Java Style",
        "JavaScript",
        "Joint Scripting",
        "Just Scripting"
      ],
      "correct": 1
    },
    {
      "question": "Which keyword is used to declare a constant variable in JavaScript?",
      "options": ["variable", "var", "let", "const"],
      "correct": 3
    },
    {
      "question": "What is the correct way to write an `if` statement in JavaScript?",
      "options": [
        "if (i == 5)",
        "if i == 5 then",
        "if i = 5",
        "if (i == 5) then"
      ],
      "correct": 0
    },
    {
      "question": "Which built-in JavaScript method is used to remove the last element from an array?",
      "options": ["shift()", "pop()", "splice()", "removeLast()"],
      "correct": 1
    },
    {
      "question": "How do you declare a function in JavaScript?",
      "options": [
        "function myFunction()",
        "def myFunction()",
        "var myFunction = function()",
        "function:myFunction()"
      ],
      "correct": 0
    },
    {
      "question": "What is the purpose of the `DOM` in web development?",
      "options": [
        "To store website data on the server.",
        "To define the styling of web pages.",
        "To represent the structure of an HTML or XML document as a tree of objects.",
        "To handle network requests."
      ],
      "correct": 2
    },
    {
      "question": "Which JavaScript method is used to add an event handler to an HTML element?",
      "options": [
        "attachEvent()",
        "addEventListener()",
        "onEvent()",
        "handleEvent()"
      ],
      "correct": 1
    },
    {
      "question": "What is 'hoisting' in JavaScript?",
      "options": [
        "A security feature that prevents cross-site scripting.",
        "A process where variable and function declarations are moved to the top of their scope before code execution.",
        "A method for optimizing image loading.",
        "A way to animate HTML elements."
      ],
      "correct": 1
    },
    {
      "question": "Which of the following is NOT a valid JavaScript data type?",
      "options": ["string", "number", "float", "boolean"],
      "correct": 2
    },
    {
      "question": "What is the purpose of `localStorage` in web browsers?",
      "options": [
        "To store temporary session data.",
        "To store data on the client-side that persists even after the browser is closed.",
        "To store server-side data.",
        "To manage browser history."
      ],
      "correct": 1
    },
    {
      "question": "Which tool is commonly used for package management in Node.js?",
      "options": ["npm", "pip", "composer", "gem"],
      "correct": 0
    },
    {
      "question": "What is a 'callback function' in JavaScript?",
      "options": [
        "A function that is called immediately after a page loads.",
        "A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.",
        "A function that handles errors.",
        "A function that returns a value to the caller."
      ],
      "correct": 1
    },
    {
      "question": "What is the purpose of `git clone`?",
      "options": [
        "To save changes to the local repository.",
        "To create a new branch.",
        "To copy an existing Git repository from a remote location.",
        "To merge changes from one branch to another."
      ],
      "correct": 2
    },
    {
      "question": "Which command is used to stage changes in Git before committing?",
      "options": ["git commit", "git push", "git add", "git status"],
      "correct": 2
    },
    {
      "question": "What is the primary role of a 'frontend developer'?",
      "options": [
        "Managing databases and server logic.",
        "Designing the user interface and user experience of a website.",
        "Writing server-side code and APIs.",
        "Deploying websites to production servers."
      ],
      "correct": 1
    },
    {
      "question": "What is a 'backend framework' typically used for?",
      "options": [
        "Creating interactive user interfaces.",
        "Building the server-side logic, APIs, and database interactions of a web application.",
        "Styling HTML elements.",
        "Managing client-side animations."
      ],
      "correct": 1
    },
    {
      "question": "Which of these is NOT a common web development paradigm?",
      "options": [
        "Single-Page Application (SPA)",
        "Server-Side Rendering (SSR)",
        "Modular Programming (MP)",
        "Progressive Web App (PWA)"
      ],
      "correct": 2
    },
    {
      "question": "What is the main advantage of using a CSS preprocessor like Sass or LESS?",
      "options": [
        "They make CSS files smaller.",
        "They allow for dynamic content generation.",
        "They add features like variables, nesting, and mixins to CSS, making it more powerful and maintainable.",
        "They convert CSS to JavaScript."
      ],
      "correct": 2
    },
    {
      "question": "What is the purpose of 'minification' in web development?",
      "options": [
        "To make code easier to read.",
        "To reduce the size of code files (HTML, CSS, JS) by removing unnecessary characters like whitespace and comments.",
        "To encrypt web traffic.",
        "To optimize images for faster loading."
      ],
      "correct": 1
    },
    {
      "question": "What is a 'responsive image'?",
      "options": [
        "An image that loads quickly.",
        "An image that changes its content based on user interaction.",
        "An image that adapts its size and resolution to fit different screen sizes and devices.",
        "An image with a transparent background."
      ],
      "correct": 2
    },
    {
      "question": "What is the purpose of the HTML `<form>` tag?",
      "options": [
        "To define a section of content.",
        "To create a container for images.",
        "To create an interactive section where users can input and submit data.",
        "To link to external stylesheets."
      ],
      "correct": 2
    },
    {
      "question": "Which HTML input type is used for sensitive information like passwords?",
      "options": ["text", "email", "password", "hidden"],
      "correct": 2
    },
    {
      "question": "What is the purpose of the CSS `display` property?",
      "options": [
        "To control the visibility of an element.",
        "To specify how an element is laid out on the page (e.g., block, inline, flex, grid).",
        "To set the background image of an element.",
        "To define the font size."
      ],
      "correct": 1
    },
    {
      "question": "Which JavaScript method is used to convert a JavaScript object or value to a JSON string?",
      "options": [
        "JSON.parse()",
        "JSON.stringify()",
        "Object.toJSON()",
        "String.fromObject()"
      ],
      "correct": 1
    },
    {
      "question": "What is an AJAX request in web development?",
      "options": [
        "A method for sending emails from a web page.",
        "A technique that allows web pages to send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page.",
        "A type of CSS animation.",
        "A way to validate user input on the client-side."
      ],
      "correct": 1
    },
    {
      "question": "What is the purpose of a 'module bundler' like Webpack or Parcel?",
      "options": [
        "To deploy web applications to servers.",
        "To optimize database queries.",
        "To combine and optimize multiple JavaScript, CSS, and other assets into a single or few production-ready bundles.",
        "To manage server-side routing."
      ],
      "correct": 2
    },
    {
      "question": "Which concept allows JavaScript code to be written once and run on different platforms (browser, server, mobile)?",
      "options": ["Transpilation", "Polyfilling", "Cross-platform compatibility", "Virtual DOM"],
      "correct": 2
    },
    {
      "question": "What is a 'RESTful API'?",
      "options": [
        "An API that only uses HTTP GET requests.",
        "An architectural style for designing networked applications that uses standard HTTP methods.",
        "An API that is only accessible locally.",
        "An API for relational databases."
      ],
      "correct": 1
    },
    {
      "question": "What is the main goal of 'performance optimization' in web development?",
      "options": [
        "To make the website visually appealing.",
        "To ensure the website loads quickly and runs smoothly for users.",
        "To improve website security.",
        "To make the website compatible with older browsers."
      ],
      "correct": 1
    },
    {
      "question": "Which of the following is a CSS framework?",
      "options": ["jQuery", "React", "Bootstrap", "Django"],
      "correct": 2
    },
    {
      "question": "What is the purpose of the `aria-label` attribute in HTML?",
      "options": [
        "To define the alignment of text.",
        "To provide a label for an element that is not visually present but is announced by assistive technologies (e.g., screen readers).",
        "To set the background color.",
        "To link to external resources."
      ],
      "correct": 1
    },
    {
      "question": "What is a 'semantic HTML' tag?",
      "options": [
        "A tag that makes text bold.",
        "A tag that provides meaning about its content to both the browser and the developer (e.g., <header>, <article>).",
        "A tag used for styling purposes only.",
        "A tag that defines interactive elements."
      ],
      "correct": 1
    },
    {
      "question": "What is 'client-side rendering'?",
      "options": [
        "Generating HTML on the server before sending it to the browser.",
        "Rendering web page content directly in the user's web browser using JavaScript.",
        "Storing data on the server.",
        "Encrypting data before transmission."
      ],
      "correct": 1
    }
  ],

};
