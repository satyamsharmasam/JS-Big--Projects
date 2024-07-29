// step 1 questions
const quizData = [
  {
    question: ['What is the output of "10" + 20 in JavaScript?'],
    options: ['30', `"1020"`, 'TypeError', 'undefined'],
    correct: 1,
  },

  {
    question: [' What does the map() method do?'],
    options: [
      'Modifies each item in an array and returns a new array',
      'Returns the first element passing a test',
      'Executes a function for each array element',
      'Filters elements based on a test and returns a new array',
    ],
    correct: 0,
  },

  {
    question: [
      'Which of the following is not a valid way to declare a variable in JavaScript?',
    ],
    options: ['let x = 1;', 'const x = 1;', 'var x = 1;', 'int x = 1;'],
    correct: 3,
  },

  {
    question: ['What does the find() method do?'],
    options: [
      'Modifies each item in an array and returns a new array',
      'Returns the first element passing a test',
      'Executes a function for each array element',
      'Filters elements based on a test and returns a new array',
    ],
    correct: 1,
  },

  {
    question: ['Which operator is used to check both value and type?'],
    options: ['==', '!=', '===', '!=='],
    correct: 2,
  },

  {
    question: ['What is the purpose of the splice() method in arrays?'],
    options: [
      'To connect two arrays',
      'To search for elements',
      'To add/remove elements from an array',
      'To slice a portion of the array',
    ],
    correct: 2,
  },

  {
    question: ['What are higher-order functions in JavaScript?'],
    options: [
      'Functions that operate on other functions',
      'Functions that are written in uppercase',
      'Asynchronous functions',
      'Functions that return other functions',
    ],
    correct: 0,
  },

  {
    question: ['What does the forEach() method do?'],
    options: [
      'Modifies each item in an array and returns a new array',
      'Returns the first element passing a test',
      'Executes a function for each array element',
      'Filters elements based on a test and returns a new array',
    ],
    correct: 2,
  },
  {
    question: ['Which HTML element is used to embed JavaScript?'],
    options: ['<javascript>', '<js>', '<script>', '<code>'],
    correct: 2,
  },
  {
    question: ['What is the main use of the async keyword in JavaScript?'],
    options: [
      'To run a function in a separate thread.',
      'To mark a function as asynchronous.',
      'To speed up code execution.',
      'To avoid using callbacks.',
    ],
    correct: 1,
  },
  {
    question: ['What is the output of console.log("2" + 2 * "2")?'],
    options: ['24', '6', '"222"', '"42"'],
    correct: 3,
  },
  {
    question: ['How can you stop the execution of a setInterval timer?'],
    options: [
      'clearInterval()',
      'clearTimer()',
      'stopInterval()',
      'pauseInterval()',
    ],
    correct: 0,
  },
  {
    question: ['What is the correct way to create an object in JavaScript?'],
    options: [
      'var obj = new Object();',
      'var obj = Object.create();',
      'var obj = {};',
      'Both 1 and 3.',
    ],
    correct: 3,
  },
  {
    question: ['What will be the result of console.log(!!"false")?'],
    options: ['true', 'false', '"false"', 'null'],
    correct: 0,
  },
  {
    question: [
      'How do you find the minimum of two numbers x and y in JavaScript?',
    ],
    options: ['min(x, y)', 'Math.min(x, y)', 'Math.minimum(x, y)', 'x.min(y)'],
    correct: 1,
  },
  {
    question: ['Which statement creates a new function in JavaScript?'],
    options: [
      'function myFunc() {}',
      'var myFunc = function() {};',
      'var myFunc = new Function();',
      'All of the above.',
    ],
    correct: 3,
  },
  {
    question: [
      'What is the use of the finally statement in a try-catch block?',
    ],
    options: [
      'To run code after a try block only if there are no errors.',
      'To execute code whether an exception is thrown or not.',
      'To finalize object cleanup.',
      'To run final checks.',
    ],
    correct: 1,
  },
  {
    question: ['How do you declare a static method in a JavaScript class?'],
    options: [
      'static methodName() {}',
      'methodName() static {}',
      'class.static methodName() {}',
      'method staticName() {}',
    ],
    correct: 0,
  },
  {
    question: ['What is the correct syntax for importing a module in ES6?'],
    options: [
      'import myModule from "module.js";',
      'require("module.js");',
      'include myModule from "module.js";',
      'load "module.js";',
    ],
    correct: 0,
  },
  {
    question: ['How can you convert a string to a number in JavaScript?'],
    options: [
      'parseInt(string)',
      'Number(string)',
      'string.toNumber()',
      'Both 1 and 2',
    ],
    correct: 3,
  },
  {
    question: [
      'What is the result of the expression null == undefined in JavaScript?',
    ],
    options: ['true', 'false', 'TypeError', 'ReferenceError'],
    correct: 0,
  },
  {
    question: [
      'Which method is used to remove the last element from an array in JavaScript?',
    ],
    options: ['shift()', 'pop()', 'remove()', 'slice()'],
    correct: 1,
  },
  {
    question: [
      'What will be the output of console.log([1, 2, 3] + [4, 5, 6])?',
    ],
    options: ['"1,2,34,5,6"', '"1,2,3,4,5,6"', 'TypeError', '"1,2,34,5,6"'],
    correct: 0,
  },
  {
    question: [
      'How do you declare a variable that cannot be reassigned in JavaScript?',
    ],
    options: ['var', 'let', 'const', 'static'],
    correct: 2,
  },
  {
    question: [
      'Which symbol is used to create a template literal in JavaScript?',
    ],
    options: [
      "Single quotes (')",
      'Double quotes (")',
      'Backticks (`)',
      'Forward slashes (/)',
    ],
    correct: 2,
  },
]

// step 2 create variables
const body = document.querySelector('body')
const container = document.querySelector('.container')
const questionTimerDiv = document.querySelector('.timer-div')
let questionTimer = document.querySelector('#timer')
const questionNum = document.querySelector('#question-number')
const optionDiv = document.querySelector('.option-div')
const nextQuestionBtn = document.querySelector('#next-btn')
const [questionElm, option1, option2, option3, option4] =
  document.querySelectorAll('#question, #option1, #option2, #option3, #option4')
let allOptions = document.querySelectorAll('.option')

// set Last score in LS
const setScore = (lastScore) => {
  localStorage.setItem('LastScore', lastScore)
}

// get Last score from LS
const getScore = () => {
  const savedScore = localStorage.getItem('LastScore')
  return savedScore ? parseInt(savedScore) : 0
}

//set data in LS
const set = (currentQuestion) => {
  localStorage.setItem('question', currentQuestion)
}

// get data from LS
const getBack = () => {
  const savedQuestion = localStorage.getItem('question')
  return savedQuestion ? parseInt(savedQuestion) : 0
}

// disable option function
const disableOptions = () => {
  allOptions.forEach((btn) => {
    btn.disabled = true
    btn.style.cursor = 'not-allowed'
  })
}

// enable option function
const enabledOptions = () => {
  allOptions.forEach((btn) => {
    btn.disabled = false
    btn.style.cursor = 'pointer'
  })
}

//  set timer function
let timer
let timeLeft = 30
const Timer = () => {
  timeLeft = 30
  questionTimer.innerText = `00:${timeLeft}`
  clearInterval(timer)

  timer = setInterval(() => {
    timeLeft -= 1
    questionTimer.innerText = `00:${timeLeft}`

    // change background colors according to time left
    if (timeLeft > 15) {
      body.style.backgroundColor = ''
      questionTimerDiv.style.backgroundColor = ''
      nextQuestionBtn.style.color = ''
    } else if (timeLeft > 5 && timeLeft <= 15) {
      body.style.backgroundColor = 'rgba(212, 214, 159, 0.735)'
      questionTimerDiv.style.backgroundColor = 'rgba(197, 177, 0, 0.43)'
      nextQuestionBtn.style.color = 'rgba(197, 177, 0, 0.43)'
    } else {
      body.style.backgroundColor = 'rgb(232, 174, 174)'
      questionTimerDiv.style.backgroundColor = 'rgba(197, 12, 0, 0.43)'
      nextQuestionBtn.style.color = 'rgba(197, 12, 0, 0.43)'
    }

    if (timeLeft <= 0) {
      clearInterval(timer)
      alert('Time Up')
      currentQuiz++
      loadQuiz()
    }
  }, 1000)
}

// show selected answer right or wrong and add score
let ScoreOfUser = 0
const selected = () => {
  allOptions.forEach((elm) => {
    elm.style.borderColor = 'rgba(217, 217, 217, 1)'
    elm.removeEventListener('click', handleClick) // Remove previous listener to prevent multiple increments
    elm.addEventListener('click', handleClick)
  })
}

const handleClick = (e) => {
  const selectedOption = Array.from(allOptions).indexOf(e.target)
  if (selectedOption === quizData[currentQuiz].correct) {
    e.target.style.borderColor = 'rgba(53, 189, 58, 1)'
    ScoreOfUser += 1
    setScore(ScoreOfUser)
  } else {
    e.target.style.borderColor = 'red'
  }
  clearInterval(timer)
  disableOptions()
}

//step 3 show questions and options
let currentQuiz = getBack()
const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz]

  // set question
  questionElm.innerText = question

  // set options
  options.forEach(
    (cur, index) => (window[`option${index + 1}`].innerText = cur)
  )

  // set question number
  questionNum.innerText = `${currentQuiz + 1}`

  // set time
  Timer()
}
currentQuiz = getBack()
loadQuiz()
selected()

// next button functionality
nextQuestionBtn.addEventListener('click', (e) => {
  if (currentQuiz < quizData.length) {
    enabledOptions()
    currentQuiz++
    loadQuiz()
    selected()
    set(currentQuiz)
  } else {
    container.innerHTML = `<img class="image" src="../Images/logo.png" alt="">
    
    <div class="progressbar">
    <div class="greenbar"></div>
    
    <img id="greenline" src="../Images/greenline.png" alt="">
    <img id="redline" src="../Images/redline.png" alt="">
    
    <h3 id="percentae-done"></h3>
        <h3 id="percentage-carry">%</h3>
        
        </div>
        
        <h2 id="right-answers">${ScoreOfUser}/25</h2>
        
    <h2 id="msg">“Keep learning, you have a <span id="msg-text"></span> Score!”</h2>

    <a href="main.html"> <button id="retry-btn">
    <<< Retry</button></a>
    `
    container.style.alignItems = 'center'
    const msg = document.querySelector('#msg-text')
    const greenBar = document.querySelector('.greenbar')
    const greenPercent = document.querySelector('#percentae-done')
    const redPercent = document.querySelector('#percentage-carry')
    const retry = document.querySelector('#retry-btn')
    if (ScoreOfUser > 20 && ScoreOfUser <= 25) {
      msg.innerText = 'good😀'
    } else if (ScoreOfUser >= 15 && ScoreOfUser <= 20) {
      msg.innerText = 'Fair🙂'
    } else if (ScoreOfUser >= 0 && ScoreOfUser < 15) {
      msg.innerText = 'bad😕'
    } else {
      msg.innerText = 'Invalid score.'
    }

    const newWidth = Math.floor((ScoreOfUser / 25) * 100)
    greenBar.style.width = newWidth + '%'
    greenPercent.innerText = newWidth + '%'
    redPercent.innerText = 100 - newWidth + '%'

    retry.addEventListener('click', () => {
      currentQuiz = 0
      set(currentQuiz)
      ScoreOfUser = 0
    })
    clearInterval(timer)
  }
})

// Audio icon and sound functionality
const soundDiv = document.querySelector('.sound')
const audioOn = document.querySelector('audio')
soundDiv.addEventListener('click', () => {
  soundDiv.classList.toggle('sound-off')

  if (soundDiv.classList != 'sound') {
    audioOn.pause()
  } else {
    audioOn.play()
  }
})

loadQuiz()
selected()
