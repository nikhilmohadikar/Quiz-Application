const Login_Container = document.querySelector(".form_login_container");
const Signup_Container = document.querySelector(".form_signup_container");
const Signup = document.querySelector("#signup");
const Login = document.querySelector("#login");
const LoginBtn = document.querySelector(".button.login");
const SignupBtn = document.querySelector(".button.signup");
const pwShowHide = document.querySelectorAll(".eye_show");
const Error_show1 = document.querySelector(".error_showing1");
const Error_heading1 = document.querySelector(".error_heading1");
const Error_show2 = document.querySelector(".error_showing2");
const Error_heading2 = document.querySelector(".error_heading2");
let popUp = document.querySelector(".pop-up-message")




/********************************* Signup *********************************/

Signup.addEventListener("click", () => {
    let Name1 = document.querySelector("#user_name");
    let Email1 = document.querySelector("#user_email");
    let Password1 = document.querySelector("#user_password");
    let email_input = document.getElementById("email_input");
    let Password_Input1 = document.getElementById("password_input");

    Name1.value = "";
    Email1.value = "";
    Password1.value = "";

    email_input.value = "";
    Password_Input1.value = "";

    Signup_Container.classList.add("signup_show");
    Login_Container.classList.add("login_show");

    Error_show1.innerHTML = "";
    Error_show2.innerHTML = "";
});


/********************************* Login *********************************/

Login.addEventListener("click", () => {
    Signup_Container.classList.remove("signup_show");
    Login_Container.classList.remove("login_show")
});


/********************************* Password Icon Show Hide *********************************/

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
        else {
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
});


/******* Getting data from front end and store into the local storage *******/

SignupBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let Name = document.querySelector("#user_name").value
    let Email = document.querySelector("#user_email").value
    let Password = document.querySelector("#user_password").value

    if (Name === "") {
        Error_show2.innerText = "Name required";
    }
    else if (Email === "") {
        Error_show2.innerText = "Email required";
    }
    else if (Password === "") {
        Error_show2.innerText = "Password required";
    }
    else if (!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        Error_show2.innerText = "Incorrect Email";
    }
    else if (Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        let new_user =
        {
            name: Name,
            email: Email,
            password: Password
        }

        let store_user = JSON.parse(localStorage.getItem('data') ? localStorage.getItem('data') : "[]");
        let user_Exist = store_user.find(user => user.email == new_user.email);

        if (!user_Exist) {
            store_user.push(new_user);

            localStorage.setItem('data', JSON.stringify(store_user));
        }

        // alert("Data saved")
        Signup_Container.classList.remove("signup_show");
        Login_Container.classList.remove("login_show");
    }
});


/*********** Login Button Clicking ************/


const emailInput = document.querySelector(".email_input1")

LoginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let Email_Input = document.getElementById("email_input").value;
    let Password_Input = document.getElementById("password_input").value;
    let Highliter = document.querySelector(".highliter");

    if (localStorage.getItem('data')) {
        let store_user = JSON.parse(localStorage.getItem('data'));
        let user = store_user.find(u => u.email == Email_Input);

        if (user) {
            if (user.password === Password_Input) {
                Quiz_Application.classList.add("Quiz_show");
                Home.classList.add("home_hide");

                // Getting name from localStorage
                let Name_Heading = document.querySelector(".name_heading");
                let name_adding = `<div class="welcome_name title">Welcome, ${user.name}</div>` +
                    `<div class="title">Quiz Application</div>`
                Name_Heading.innerHTML = name_adding
            }
            else {
                Error_show1.innerHTML = "Password required";
            }
        }
        else {
            Error_show1.innerHTML = "Email required";
        }
    }
    else {
        Error_show1.innerText = "You need to signup first";
    }

})



/******************* Exit Button Clicking ********************/

const Home = document.querySelector(".home");
const Quiz_Application = document.querySelector("#quiz_application");
const Exit = document.querySelector(".exit");
const Continue = document.querySelector(".continue");

Exit.addEventListener("click", () => {
    Home.classList.remove("home_hide");
    Quiz_Application.classList.remove("Quiz_show");


    let email_input = document.getElementById("email_input");
    let Password_Input1 = document.getElementById("password_input");

    email_input.value = "";
    Password_Input1.value = "";
})


/************ Contineu Button Clicking *************/

const continue_Btn = document.querySelector(".continue")
const Quiz = document.querySelector(".Quiz")

continue_Btn.addEventListener("click", (e) => {
    e.preventDefault();
    Quiz_Application.classList.remove("Quiz_show")
    Quiz.classList.add("Quiz_Box_show");

    showQuestion(0);
    questionCounter(1);
    startMinutes(15);
    Timer_Counter_start()

    if (que_count < last_question) {
        next_btn.innerText = "Next";
    }
});


/************** Timer Counter Start  ********************/
let M_Store;
let S_Store;

let M_Store1 = M_Store;
let S_Store1 = S_Store;

let M_Store2 = M_Store1;
let S_Store2 = S_Store1;

let M_Store3 = M_Store2;
let S_Store3 = S_Store2;

let M_Store4 = M_Store3;
let S_Store4 = S_Store3;

let M_Store5 = M_Store4;
let S_Store5 = S_Store4;

let M_Store6 = M_Store5;
let S_Store6 = S_Store5;


function Timer_Counter_start() {
    if (attempt === 1) {
        let [Minutes, Seconds] = [0, 0];
        let Timer = null;
        function Starting() {
            Seconds++;
            if (Seconds == 60) {
                Seconds = 0;
                Minutes++;
            }

            let M = Minutes < 10 ? "0" + Minutes : Minutes;
            let S = Seconds < 10 ? "0" + Seconds : Seconds;
            M_Store1 = M;
            S_Store1 = S;
        }

        if (Timer !== null) {
            clearInterval(Timer);
        }
        Timer = setInterval(Starting, 1000);
    }
    else if (attempt === 2) {
        let [Minutes, Seconds] = [0, 0];
        let Timer = null;
        function Starting() {
            Seconds++;
            if (Seconds == 60) {
                Seconds = 0;
                Minutes++;
            }

            let M = Minutes < 10 ? "0" + Minutes : Minutes;
            let S = Seconds < 10 ? "0" + Seconds : Seconds;
            M_Store2 = M;
            S_Store2 = S;
        }

        if (Timer !== null) {
            clearInterval(Timer);
        }
        Timer = setInterval(Starting, 1000);
    }
    else if (attempt === 3) {
        let [Minutes, Seconds] = [0, 0];
        let Timer = null;
        function Starting() {
            Seconds++;
            if (Seconds == 60) {
                Seconds = 0;
                Minutes++;
            }

            let M = Minutes < 10 ? "0" + Minutes : Minutes;
            let S = Seconds < 10 ? "0" + Seconds : Seconds;
            M_Store3 = M;
            S_Store3 = S;
        }

        if (Timer !== null) {
            clearInterval(Timer);
        }
        Timer = setInterval(Starting, 1000);
    }
    else if (attempt === 4) {
        let [Minutes, Seconds] = [0, 0];
        let Timer = null;
        function Starting() {
            Seconds++;
            if (Seconds == 60) {
                Seconds = 0;
                Minutes++;
            }

            let M = Minutes < 10 ? "0" + Minutes : Minutes;
            let S = Seconds < 10 ? "0" + Seconds : Seconds;
            M_Store4 = M;
            S_Store4 = S;
        }

        if (Timer !== null) {
            clearInterval(Timer);
        }
        Timer = setInterval(Starting, 1000);
    }
    else if (attempt === 5) {
        let [Minutes, Seconds] = [0, 0];
        let Timer = null;
        function Starting() {
            Seconds++;
            if (Seconds == 60) {
                Seconds = 0;
                Minutes++;
            }

            let M = Minutes < 10 ? "0" + Minutes : Minutes;
            let S = Seconds < 10 ? "0" + Seconds : Seconds;
            M_Store5 = M;
            S_Store5 = S;
        }

        if (Timer !== null) {
            clearInterval(Timer);
        }
        Timer = setInterval(Starting, 1000);
    }
    else {
        let [Minutes, Seconds] = [0, 0];
        let Timer = null;
        function Starting() {
            Seconds++;
            if (Seconds == 60) {
                Seconds = 0;
                Minutes++;
            }

            let M = Minutes < 10 ? "0" + Minutes : Minutes;
            let S = Seconds < 10 ? "0" + Seconds : Seconds;
            M_Store6 = M;
            S_Store6 = S;
        }

        if (Timer !== null) {
            clearInterval(Timer);
        }
        Timer = setInterval(Starting, 1000);
    }
}


/******************** Quiz Container **********************/

const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeLine = document.querySelector(".time_line");

let que_count = 0;
let que_number = 1;
let counter;
let userScore = 0;

// Getting question and option from the array
function showQuestion(index) {

    const que_text = document.querySelector(".que_text");


    let que_tag = '<span>' + questions[index].num + ". " + questions[index].question + '</span>'
        + '<p>' + questions[index].marks + " Marks" + '</p>'
    que_text.innerHTML = que_tag;

    let option_tag = `<input type="radio" name="question" id="que1" class="icons"><label for="que1" class="option"><div><span>` + questions[index].options[0] + `</span></div></label>`
        + `<input type="radio" name="question" id="que2" class="icons"><label for="que2" class="option"><div><span>` + questions[index].options[1] + `</span></div></label>`
        + `<input type="radio" name="question" id="que3" class="icons"><label for="que3" class="option"><div><span>` + questions[index].options[2] + `</span></div></label>`
        + `<input type="radio" name="question" id="que4" class="icons"><label for="que4" class="option"><div><span>` + questions[index].options[3] + `</span></div></label>`

    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    // When user click multiple time one option that time option count not be increased by 1 to +++
    // this.onclick=null

    // for (let i = 0; i < option.length; i++) {
    //     option[i].setAttribute("onclick", "optionSelected(this); this.onclick=null");
    // }

    // Waste our time and not be getting proper answer.
    // When user click multiple time one option that time option count will be increased.

    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this); ");
    }
}

let plus = 0;
let minus = 0;
let attempt = 1;

function optionSelected(answer) {
    clearInterval(counter);

    let user_answer = answer.textContent;
    let correct_answer = questions[que_count].answer;
    let all_option = option_list.children.length;
    let Marks = questions[que_count].marks;

    if (attempt === 1) {
        if (user_answer === correct_answer) {
            userScore += Marks;
            plus++;
            answer.classList.add("correct");
        }
        else {
            answer.classList.add("incorrect");
            minus++;
            userScore -= Marks;
        }

        // Once user selected disable all options
        for (let i = 0; i < all_option; i++) {
            option_list.children[i].classList.add("disabled");
        }
        console.log("User click answe " + user_answer);
    }
    else if (attempt >= 2) {
        if (user_answer === correct_answer) {
            userScore += 1;
            plus++;
            answer.classList.add("correct");
        }
        else {
            answer.classList.add("incorrect");
            minus++;
        }

        // Once user selected disable all options
        for (let i = 0; i < all_option; i++) {
            option_list.children[i].classList.add("disabled");
        }
    }
}

//  Adding button with JavaScript

const next_container = document.querySelector(".next");
let next_button = `<button id="next">Next</button>`
next_container.innerHTML = next_button;

const next_btn = document.getElementById("next");
// const back_button_add = document.querySelector(".back");
next_btn.addEventListener("click", () => {
    if (que_count >= 0 && que_number >= 1) {
        var new_back_btn = `<button id="new_back">Back</button>`
        // back_button_add.innerHTML = new_back_btn;
    }

    if (que_count < questions.length - 1) {
        que_count++;
        que_number++;
        showQuestion(que_count);
        questionCounter(que_number);
        clearInterval(counter);
    }
    else {
        que_count = 0;
        que_number = 1;
        showQuestion(que_count);
        questionCounter(que_number);
        clearInterval(counter);
        showResultBox();
    }

    //  If last question remaning that time Next button changed to Sumbit.

    let last_question = questions.length - 1;

    if (que_count === last_question) {
        next_btn.innerText = "Submit";
    }

    // const back_btn1 = document.getElementById("new_back");
    // back_btn1.addEventListener("click", () => {

    //     if (que_count < questions.length) {
    //         que_count--;
    //         que_number--;
    //         showQuestion(que_count);
    //         questionCounter(que_number);
    //         clearInterval(counter);
    //     }

    //     if (que_count < last_question) {
    //         next_btn.innerText = "Next";
    //     }
    //     if (que_count == 0 && que_number == 1) {
    //         back_btn1.remove()
    //     }
    // })
})


// Bottom Qusetion Counter

function questionCounter(index) {
    const bottom_button_counter = quiz_box.querySelector(".total_que")
    let totalQuestionTag = `<span><p>` + index + `</p>of<p>` + questions.length + `</p>Questions</span>`;
    bottom_button_counter.innerHTML = totalQuestionTag;
}

// If last question remaning that time Next button changed to Sumbit.

let last_question = questions.length - 1;

if (que_count === last_question) {
    next_btn.innerText = "Submit";
}

// Result Box Displayed

const Result = document.querySelector(".result");
const Score = document.querySelector(".score_test");
let zero = 0;

function showResultBox() {
    Quiz.classList.remove("Quiz_Box_show");
    Result.classList.add("result_show");


    /***************************** Adding data in the table *****************************/

    function addRow() {

        if (attempt === 1) {

            // Create a array to store data in localStorage

            let DataStroingInArray = {
                Questions: questions.length,
                Correct: plus,
                Incorrect: minus,
                Overall: userScore,
                Attempts: attempt,
                Time: `${M_Store1} : ${S_Store1}`,
                Result: `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`
            }

            let Result_Store = JSON.parse(localStorage.getItem('Result') ? localStorage.getItem('Result') : "[]");

            Result_Store.push(DataStroingInArray);
            localStorage.setItem("Result", JSON.stringify(Result_Store));


            // Display Result In Web Page
            const marksStoring = document.querySelector(".marks_storing");

            // Create row element
            let row = document.createElement("tr")

            // Create cells
            let c1 = document.createElement("td") // Total Questions
            let c2 = document.createElement("td") // Correct question
            let c3 = document.createElement("td") // Incorrect question
            let c4 = document.createElement("td") // Overall
            let c5 = document.createElement("td") // Attempt
            let c6 = document.createElement("td") // Time
            let c7 = document.createElement("td") // Result

            // Insert data to cells
            c1.innerText = questions.length
            c2.innerText = plus
            c3.innerText = minus
            c4.innerText = userScore
            c5.innerText = attempt
            c6.innerText = `${M_Store1} : ${S_Store1}` //Time
            c7.innerText = `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`

            // Append cells to row
            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            row.appendChild(c5);
            row.appendChild(c6);
            row.appendChild(c7);

            // Append row to table body
            marksStoring.appendChild(row)

        }
        else if (attempt === 2) {

            let DataStroingInArray = {
                Questions: questions.length,
                Correct: plus,
                Incorrect: minus,
                Overall: userScore,
                Attempts: attempt,
                Time: `${M_Store2} : ${S_Store2}`,
                Result: `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`
            }

            let Result_Store = JSON.parse(localStorage.getItem('Result') ? localStorage.getItem('Result') : "[]");

            Result_Store.push(DataStroingInArray);
            localStorage.setItem("Result", JSON.stringify(Result_Store));


            // Display Result In Web Page
            const marksStoring = document.querySelector(".marks_storing");
            clearInterval(M_Store1)
            clearInterval(S_Store1)

            // Create row element
            let row = document.createElement("tr")

            // Create cells
            let c1 = document.createElement("td")
            let c2 = document.createElement("td")
            let c3 = document.createElement("td")
            let c4 = document.createElement("td")
            let c5 = document.createElement("td")
            let c6 = document.createElement("td")
            let c7 = document.createElement("td")

            // Insert data to cells
            c1.innerText = questions.length
            c2.innerText = plus
            c3.innerText = minus
            c4.innerText = userScore
            c5.innerText = attempt
            c6.innerText = `${M_Store2} : ${S_Store2}` //Time
            c7.innerText = `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`

            // Append cells to row
            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            row.appendChild(c5);
            row.appendChild(c6);
            row.appendChild(c7);

            // Append row to table body
            marksStoring.appendChild(row)
        }
        else if (attempt === 3) {

            let DataStroingInArray = {
                Questions: questions.length,
                Correct: plus,
                Incorrect: minus,
                Overall: userScore,
                Attempts: attempt,
                Time: `${M_Store3} : ${S_Store3}`,
                Result: `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`
            }

            let Result_Store = JSON.parse(localStorage.getItem('Result') ? localStorage.getItem('Result') : "[]");

            Result_Store.push(DataStroingInArray);
            localStorage.setItem("Result", JSON.stringify(Result_Store));


            // Display Result In Web Page
            const marksStoring = document.querySelector(".marks_storing");
            clearInterval(M_Store2)
            clearInterval(S_Store2)

            // Create row element
            let row = document.createElement("tr")

            // Create cells
            let c1 = document.createElement("td")
            let c2 = document.createElement("td")
            let c3 = document.createElement("td")
            let c4 = document.createElement("td")
            let c5 = document.createElement("td")
            let c6 = document.createElement("td")
            let c7 = document.createElement("td")

            // Insert data to cells
            c1.innerText = questions.length
            c2.innerText = plus
            c3.innerText = minus
            c4.innerText = userScore
            c5.innerText = attempt
            c6.innerText = `${M_Store3} : ${S_Store3}` //Time
            c7.innerText = `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`

            // Append cells to row
            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            row.appendChild(c5);
            row.appendChild(c6);
            row.appendChild(c7);

            // Append row to table body
            marksStoring.appendChild(row)
        }
        else if (attempt === 4) {
            let DataStroingInArray = {
                Questions: questions.length,
                Correct: plus,
                Incorrect: minus,
                Overall: userScore,
                Attempts: attempt,
                Time: `${M_Store4} : ${S_Store4}`,
                Result: `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`
            }

            let Result_Store = JSON.parse(localStorage.getItem('Result') ? localStorage.getItem('Result') : "[]");

            Result_Store.push(DataStroingInArray);
            localStorage.setItem("Result", JSON.stringify(Result_Store));


            // Display Result In Web Page
            const marksStoring = document.querySelector(".marks_storing");
            clearInterval(M_Store3)
            clearInterval(S_Store3)

            // Create row element
            let row = document.createElement("tr")

            // Create cells
            let c1 = document.createElement("td")
            let c2 = document.createElement("td")
            let c3 = document.createElement("td")
            let c4 = document.createElement("td")
            let c5 = document.createElement("td")
            let c6 = document.createElement("td")
            let c7 = document.createElement("td")

            // Insert data to cells
            c1.innerText = questions.length
            c2.innerText = plus
            c3.innerText = minus
            c4.innerText = userScore
            c5.innerText = attempt
            c6.innerText = `${M_Store4} : ${S_Store4}` //Time
            c7.innerText = `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`

            // Append cells to row
            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            row.appendChild(c5);
            row.appendChild(c6);
            row.appendChild(c7);

            // Append row to table body
            marksStoring.appendChild(row)
        }
        else if (attempt === 5) {
            let DataStroingInArray = {
                Questions: questions.length,
                Correct: plus,
                Incorrect: minus,
                Overall: userScore,
                Attempts: attempt,
                Time: `${M_Store5} : ${S_Store5}`,
                Result: `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`
            }

            let Result_Store = JSON.parse(localStorage.getItem('Result') ? localStorage.getItem('Result') : "[]");

            Result_Store.push(DataStroingInArray);
            localStorage.setItem("Result", JSON.stringify(Result_Store));


            // Display Result In Web Page
            const marksStoring = document.querySelector(".marks_storing");
            clearInterval(M_Store4)
            clearInterval(S_Store4)

            // Create row element
            let row = document.createElement("tr")

            // Create cells
            let c1 = document.createElement("td")
            let c2 = document.createElement("td")
            let c3 = document.createElement("td")
            let c4 = document.createElement("td")
            let c5 = document.createElement("td")
            let c6 = document.createElement("td")
            let c7 = document.createElement("td")

            // Insert data to cells
            c1.innerText = questions.length
            c2.innerText = plus
            c3.innerText = minus
            c4.innerText = userScore
            c5.innerText = attempt
            c6.innerText = `${M_Store5} : ${S_Store5}` //Time
            c7.innerText = `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`

            // Append cells to row
            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            row.appendChild(c5);
            row.appendChild(c6);
            row.appendChild(c7);

            // Append row to table body
            marksStoring.appendChild(row)
        }
        else if (attempt === 6) {
            let DataStroingInArray = {
                Questions: questions.length,
                Correct: plus,
                Incorrect: minus,
                Overall: userScore,
                Attempts: attempt,
                Time: `${M_Store6} : ${S_Store6}`,
                Result: `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`
            }

            let Result_Store = JSON.parse(localStorage.getItem('Result') ? localStorage.getItem('Result') : "[]");

            Result_Store.push(DataStroingInArray);
            localStorage.setItem("Result", JSON.stringify(Result_Store));


            // Display Result In Web Page
            const marksStoring = document.querySelector(".marks_storing");
            clearInterval(M_Store5)
            clearInterval(S_Store5)

            // Create row element
            let row = document.createElement("tr")

            // Create cells
            let c1 = document.createElement("td")
            let c2 = document.createElement("td")
            let c3 = document.createElement("td")
            let c4 = document.createElement("td")
            let c5 = document.createElement("td")
            let c6 = document.createElement("td")
            let c7 = document.createElement("td")

            // Insert data to cells
            c1.innerText = questions.length
            c2.innerText = plus
            c3.innerText = minus
            c4.innerText = userScore
            c5.innerText = attempt
            c6.innerText = `${M_Store6} : ${S_Store6}` //Time
            c7.innerText = `${(userScore / questions.length * 100) >= 50 ? "Pass" : "Fail"}`

            // Append cells to row
            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            row.appendChild(c5);
            row.appendChild(c6);
            row.appendChild(c7);

            // Append row to table body
            marksStoring.appendChild(row)
        }
    }
    addRow()
}

/********************* Minutes Countdown *******************/

const countdown_timer = document.querySelector(".timer_min");
let [minutes, seconds] = [14, 60];

function startMinutes(time) {

    let timer = null;

    if (minutes == 14 && seconds == 60) {
        function timeStart() {
            if (minutes == 0 && seconds == 0) {
                // To stop the procedure.
            }
            else {
                --seconds;
                if (seconds == 0) {
                    minutes--;
                    seconds = 60;
                    if (minutes == 0) {
                        seconds = 0;
                        minutes = 0;
                    }
                }

                let s = seconds < 10 ? "0" + seconds : seconds;
                let m = minutes < 10 ? "0" + minutes : minutes;

                countdown_timer.innerHTML = m + " : " + s;
            }
        }

        if (timer !== null) {
            clearInterval(timer);
        }
        timer = setInterval(timeStart, 1000);
    }
    else {

    }
}



/****************** Restart Quiz ******************/

const result_box = document.querySelector(".result_box");
const reply_quiz = result_box.querySelector(".restart");
const quit_quiz = result_box.querySelector(".quit");

reply_quiz.addEventListener("click", () => {
    Quiz_Application.classList.add("Quiz_show");
    Result.classList.remove("result_show");
    let email_input = document.getElementById("email_input");
    email_input.value = "";

    userScore = 0;
    plus = 0;
    minus = 0;
    attempt++;
    minutes = 14;
    seconds = 60;

    if (que_count < last_question) {
        next_btn.innerText = "Next";
    }

    const back_btn1 = document.getElementById("new_back");

    // if (que_count == 0 && que_number == 1) {
    //     back_btn1.remove()
    // }
});

quit_quiz.addEventListener("click", () => {
    Result.classList.remove("result_show");
    Home.classList.remove("home_hide");

    let Email_Input2 = document.getElementById("email_input");
    let Password_Input2 = document.getElementById("password_input");

    Email_Input2.value = "";
    Password_Input2.value = "";
});