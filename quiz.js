const form = document.querySelector('.quiz-form');
const answerBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const answerArray = ["90°", "right angled"];

function quizfn () {
    let score = 0;
    let index = 0;

    const formResult = new FormData(form)

    for(let item of formResult.values()) {
        // console.log("item in formData", item) // options which user selected.

        if (item === answerArray[index]) {
            console.log("answerArray index ", answerArray[index]) //  answerArray index  90°{Array-correct-answer}
            console.log("loop item", item) // loop item 45°{user-answer}
            score = score + 1;
        }
        
            index = index + 1;
    }
    output.innerText = "Your score is " + score;
}

answerBtn.addEventListener('click', quizfn)

// name and value [input] makes object = FormData.
