const angles = document.querySelectorAll(".angle");
const btn = document.querySelector("#triangle_btn");
const output = document.querySelector("#output");

function isTriangle () {
    
    const sumOfAngle =  Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value)

    if (sumOfAngle === 180) {
        output.innerText = "It form a triangle."
        output.style.color = "green"
    } else {
        output.innerText = "oh, it doesn't form a triangle..!"
        output.style.color = "red"
    }
}

btn.addEventListener("click", isTriangle)


