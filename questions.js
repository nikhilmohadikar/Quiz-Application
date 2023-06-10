let questions = [
    {
        num : 1 ,
        question : "There are ___ levels of heading in HTML.",
        answer : "Six",
        marks : 2,
        options : [
            "Three",
            "Four",
            "Five",
            "Six"
        ]
    },
    {
        num : 2 ,
        question : "What does HTML stands for?",
        answer : "Hyper Text Markup Language",
        marks : 2,
        options : [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        num : 3 ,
        question : "The purpose of markup is to.",
        answer : "Both A & B",
        marks : 4,
        options : [
            "Add hypertext capabilities",
            "Enhance the document",
            "Both A & B",
            "None of the above"
        ]
    },
    {
        num : 4 ,
        question : "Which of the following tags do not require a terminator?",
        answer : "< br >",
        marks : 2,
        options : [
            "< u >",
            "< br >",
            "< b >",
            "None of the above"
        ]
    },
    {
        num : 5 ,
        question : "To get the ordered list we use ___",
        answer : "< ol >",
        marks : 4,
        options : [
            "< h1 >",
            "< ul >",
            "< ol >",
            "< ml >"
        ]
    },
    {
        num : 6 ,
        question : "For a particular font its size attribute can be an absolute value ranging form.",
        answer : "1-10",
        marks : 2,
        options : [
            "1-10",
            "1-9",
            "1-8",
            "1-7"
        ]
    },
    {
        num : 7 ,
        question : "The Major components of the Web browser are ___ .",
        answer : "All of the above",
        marks : 2,
        options : [
            "Menu Bar",
            "ToolBar",
            "Location",
            "All of the above"
        ]
    },
    {
        num : 8 ,
        question : "Which one of the following tags is used to insert graphics in the webpage.",
        answer : "< img >",
        marks : 2,
        options : [
            "< image >",
            "< images >",
            "< img >",
            "< graphics >"
        ]
    },
    {
        num : 9 ,
        question : "The following html tag is used to display the content as a moving text.",
        answer : "< marquee >",
        marks : 4,
        options : [
            "< marquee >",
            "< /img >",
            "< a href >",
            "None of the above"
        ]
    },
    {
        num : 10 ,
        question : "HTML comment should be enclosed between ___ .",
        answer : "< !–  and — >",
        marks : 4,
        options : [
            "< !–  and — >",
            "< ! And ! >",
            "< !— and –“”! >",
            "None of the above"
        ]
    },
    // {
    //     num : 11 ,
    //     question : "What is CSS?",
    //     answer : "All of the mentioned",
    //     options : [
    //         "CSS is a style sheet language",
    //         "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
    //         "CSS is the language used to style the HTML documents",
    //         "All of the mentioned"
    //     ]
    // },
    // {
    //     num : 12 ,
    //     question : "Which of the following tag is used to embed ___ .",
    //     answer : "< style >",
    //     options : [
    //         "< css >",
    //         "< !DOCTYPE html >",
    //         "< script >",
    //         "< style >"
    //     ]
    // },
    // {
    //     num : 13 ,
    //     question : "Which of the following CSS selectors are used to specify a group of elements?",
    //     answer : "class",
    //     options : [
    //         "tag",
    //         "id",
    //         "class",
    //         "Both class and tag"
    //     ]
    // },
    // {
    //     num : 14 ,
    //     question : "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
    //     answer : "CSS",
    //     options : [
    //         "HTML",
    //         "PHP",
    //         "CSS",
    //         "Ajax"
    //     ]
    // },
    // {
    //     num : 15 ,
    //     question : "Which of the following CSS framework is used to create a responsive design?",
    //     answer : "bootstrap",
    //     options : [
    //         "django",
    //         "rails",
    //         "larawell",
    //         "bootstrap"
    //     ]
    // },
    // {
    //     num : 16 ,
    //     question : "Which of the following CSS property defines the space between cells in a table?",
    //     answer : "border-spacing",
    //     options : [
    //         "border-spacing",
    //         "border-style",
    //         "border",
    //         "None of the mentioned"
    //     ]
    // },
    // {
    //     num : 17 ,
    //     question : "Which of the following type of HTML tag is used to define an internal style sheet?",
    //     answer : "< style >",
    //     options : [
    //         "< script >",
    //         "< link >",
    //         "< class >",
    //         "< style >"
    //     ]
    // },
    // {
    //     num : 18 ,
    //     question : "Which of the following CSS property is used to make the text bold?",
    //     answer : "font-weight: bold",
    //     options : [
    //         "text-decoration: bold",
    //         "font-weight: bold",
    //         "font-style: bold",
    //         "text-align: bold"
    //     ]
    // },
    // {
    //     num : 19 ,
    //     question : "If we want to wrap a block of text around the image, which CSS property will you use",
    //     answer : "float",
    //     options : [
    //         "wrap",
    //         "push",
    //         "float",
    //         "align"
    //     ]
    // },
    // {
    //     num : 20 ,
    //     question : "Which of the following CSS style property is used to specify an italic text?",
    //     answer : "font-style",
    //     options : [
    //         "style",
    //         "font",
    //         "font-style",
    //         "@font-face"
    //     ]
    // },
    // {
    //     num : 21 ,
    //     question : "What is JavaScript?",
    //     answer : "JavaScript is a scripting language used to make the website interactive",
    //     options : [
    //         "JavaScript is a scripting language used to make the website interactive",
    //         "JavaScript is an assembly language used to make the website interactive",
    //         "JavaScript is a compiled language used to make the website interactive",
    //         "None of the mentioned"
    //     ]
    // },
    // {
    //     num : 22 ,
    //     question : "Which of the following is correct about JavaScript?",
    //     answer : "avaScript is an Object-Based language",
    //     options : [
    //         "JavaScript is an Object-Based language",
    //         "JavaScript is Assembly-language",
    //         "JavaScript is an Object-Oriented language",
    //         "JavaScript is a High-level language"
    //     ]
    // },
    // {
    //     num : 23 ,
    //     question : "Among the given statements, which statement defines closures in JavaScript?",
    //     answer : "JavaScript is a function that is enclosed with references to its lexical environment",
    //     options : [
    //         "JavaScript is a function that is enclosed with references to its inner function scope",
    //         "JavaScript is a function that is enclosed with references to its lexical environment",
    //         "JavaScript is a function that is enclosed with the object to its inner function scope",
    //         "None of the mentioned"
    //     ]
    // },
    // {
    //     num : 24 ,
    //     question : "Arrays in JavaScript are defined by which of the following statements?",
    //     answer : "It is an ordered list of values",
    //     options : [
    //         "It is an ordered list of values",
    //         "It is an ordered list of objects",
    //         "It is an ordered list of string",
    //         "It is an ordered list of functions"
    //     ]
    // },
    // {
    //     num : 25 ,
    //     question : `
    //     Will the following JavaScript code work?
    //     var js = (function(x) {return x*x;}(10));
    //     `,
    //     answer : "Yes, perfectly",
    //     options : [
    //         "Exception will be thrown",
    //         "Memory leak",
    //         "Error",
    //         "Yes, perfectly"
    //     ]
    // },
    // {
    //     num : 26 ,
    //     question : "Which of the following is not javascript data types?",
    //     answer : "All of the mentioned",
    //     options : [
    //         "Null type",
    //         "Undefined type",
    //         " Number type",
    //         "All of the mentioned"
    //     ]
    // },
    // {
    //     num : 27 ,
    //     question : "Which of the following is the property that is triggered in response to JS errors?",
    //     answer : "onerror",
    //     options : [
    //         "onclick",
    //         "onerror",
    //         "onmessage",
    //         "onmessage"
    //     ]
    // },
    // {
    //     num : 28 ,
    //     question : "Which of the following is not an error in JavaScript?",
    //     answer : "Division by zero",
    //     options : [
    //         "Missing of Bracket",
    //         "Division by zero",
    //         "Syntax error",
    //         "Missing of semicolons"
    //     ]
    // },
    // {
    //     num : 29 ,
    //     question : `
    //         What is the prototype represents in the following JavaScript code snippet?
            
    //         function javascript() {};
    //     `,
    //     answer : "A custom constructor",
    //     options : [
    //         "Not valid",
    //         "Prototype of a function",
    //         "Function javascript",
    //         "A custom constructor"
    //     ]
    // },
    // {
    //     num : 30 ,
    //     question : `
    //         What will be the result or type of error if p is not defined in the following JavaScript code snippet?

    //         console.log(p)
    //     `,
    //     answer : "Reference Error",
    //     options : [
    //         "Value not found Error",
    //         "Reference Error",
    //         "Null",
    //         "Zero"
    //     ]
    // }
]