const question = [{
    'que' : 'Which of the following is markup language?',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'Javascript',
    'd' : 'PHP',
    'correct' : 'a'
    },
    {
    'que' : 'Which year was Javascript launched?',
    'a' : '1996',
    'b' : '1995',
    'c' : '1994',
    'd' : 'none of the above',
    'correct' : 'b' 
    },
    {
    'que' : 'What does CSS stands for?',
    'a' : 'Hyper Text Markup Language',
    'b' : 'Compile Style Sheet',
    'c' : 'Cascading Style Sheet',
    'd' : 'Control Source Style',
    'correct' : 'c'
    },
    {
        'que' : 'How many methods to write CSS?',
        'a' : '1',
        'b' : '3',
        'c' : '4',
        'd' : 'none of the above',
        'correct' : 'b'
        }
]

let index = 0;
let total = question.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionInput = document.querySelectorAll('.option')
const loadQuestion = () => {
    const data = question[index]
    if (index === total) {
        return endQuiz();
    }
    reset();
    quesBox.innerHTML = `${index+1}) ${data.que}`
    optionInput[0].nextElementSibling.innerText = data.a
    optionInput[1].nextElementSibling.innerText = data.b
    optionInput[2].nextElementSibling.innerText = data.c
    optionInput[3].nextElementSibling.innerText = data.d
}

const submitQuiz = () => {
    const data = question[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;        
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
               answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
    let emoji = () =>{
    if (wrong == 0) {
        let emoji = '🥳';   
        return emoji;
    }else if(wrong == 1){
        let emoji = '😎';   
        return emoji;
    }else if(wrong == 2){
        let emoji = '👎';   
        return emoji;
    }else if(wrong == 3){
        let emoji = '😌';   
        return emoji;
    }else if(wrong == 4){
        let emoji = '🥶';   
        return emoji;
    }
    }

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <h3> Thank You for playing Quiz 🎉</h3>
    <h2 class='endPage'> corrects: ${right} ✅ <br> wrong: ${wrong} ❌  <br> Total: ${total} ${emoji()} </h2>
    `;
    
    

}


// initial call
loadQuestion();