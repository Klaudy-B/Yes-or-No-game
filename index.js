const questionsList = [
    "🙂",
    "😊",
    "😒",
    "😎",
    "😢",
    "🫠",
    "🙃",
    "😭",
    "😵",
    "🤢",
    "🥹",
    "😥",
    "😌",
    "😍",
    "😡",
    "😠",
    "😤"
]

document.querySelector("#p1").innerHTML = questionsList[Math.floor(Math.random()*questionsList.length)];

const buttons = document.querySelectorAll("button");
buttons.forEach(
    (button)=>{
        button.addEventListener("click", ()=>{
            const p1 = document.querySelector("#p1");
            const p2 = document.querySelector("#p2");
            if(p1.className === "show"){
                p1.className = "hide";
            }else{
                p1.className = "show";
                p1.innerText = questionsList[Math.floor(Math.random()*questionsList.length)];
            }
            if(p2.className === "show"){
                p2.className = "hide";
            }else{
                p2.className = "show";
                p2.innerText = questionsList[Math.floor(Math.random()*questionsList.length)];
            }
        })
    }
)

