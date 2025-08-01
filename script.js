const questions = [
  {
    question: "Which data structure uses FIFO order?",
    answers: [
      { text: "Queue", correct: true },
      { text: "Stack", correct: false },
      { text: "Tree", correct: false },
      { text: "Graph", correct: false }
    ]
  },
  {
    question: "Which data structure is used for implementing recursion?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Array", correct: false },
      { text: "Stack", correct: true },
      { text: "Linked List", correct: false }
    ]
  },
  {
    question: "Which traversal gives sorted order in a BST?",
    answers: [
      { text: "Preorder", correct: false },
      { text: "Postorder", correct: false },
      { text: "Inorder", correct: true },
      { text: "Level order", correct: false }
    ]
  },
  {
    question: "Which of the following is not a stable sorting algorithm?",
    answers: [
      { text: "Merge Sort", correct: false },
      { text: "Bubble Sort", correct: false },
      { text: "Quick Sort", correct: true },
      { text: "Insertion Sort", correct: false }
    ]
  },
  {
    question: "What is the worst-case time complexity of linear search?",
    answers: [
      { text: "O(1)", correct: false },
      { text: "O(log n)", correct: false },
      { text: "O(n)", correct: true },
      { text: "O(n log n)", correct: false }
    ]
  },
  {
    question: "What data structure is ideal for implementing LRU cache?",
    answers: [
      { text: "Array", correct: false },
      { text: "Stack", correct: false },
      { text: "LinkedHashMap", correct: true },
      { text: "Tree", correct: false }
    ]
  },
  {
    question: "Which sorting algorithm is best for small input sizes?",
    answers: [
      { text: "Merge Sort", correct: false },
      { text: "Quick Sort", correct: false },
      { text: "Bubble Sort", correct: false },
      { text: "Insertion Sort", correct: true }
    ]
  },
  {
    question: "Which data structure is best for implementing a priority queue?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: false },
      { text: "Heap", correct: true },
      { text: "Set", correct: false }
    ]
  },
  {
    question: "Which traversal is used in DFS (Depth First Search)?",
    answers: [
      { text: "Inorder", correct: false },
      { text: "Level order", correct: false },
      { text: "Preorder", correct: true },
      { text: "Postorder", correct: false }
    ]
  },
  {
    question: "Which structure uses nodes with data and pointer?",
    answers: [
      { text: "Array", correct: false },
      { text: "Queue", correct: false },
      { text: "Linked List", correct: true },
      { text: "Stack", correct: false }
    ]
  },
  {
    question: "Which of the following is used to prevent stack overflow?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Heap", correct: false },
      { text: "Tail Recursion", correct: true },
      { text: "DFS", correct: false }
    ]
  },
  {
    question: "Which is the fastest searching algorithm in a sorted array?",
    answers: [
      { text: "Linear Search", correct: false },
      { text: "Binary Search", correct: true },
      { text: "Hashing", correct: false },
      { text: "Jump Search", correct: false }
    ]
  },
  {
    question: "Which of the following is not a linear data structure?",
    answers: [
      { text: "Array", correct: false },
      { text: "Queue", correct: false },
      { text: "Tree", correct: true },
      { text: "Stack", correct: false }
    ]
  },
  {
    question: "Which data structure is used in BFS (Breadth First Search)?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Tree", correct: false },
      { text: "Graph", correct: false }
    ]
  },
  {
    question: "Which of the following is a self-balancing binary search tree?",
    answers: [
      { text: "AVL Tree", correct: true },
      { text: "Binary Tree", correct: false },
      { text: "Heap", correct: false },
      { text: "BFS Tree", correct: false }
    ]
  },
  {
    question: "Which data structure gives O(1) time for insert and search?",
    answers: [
      { text: "Heap", correct: false },
      { text: "Array", correct: false },
      { text: "Hash Table", correct: true },
      { text: "Stack", correct: false }
    ]
  },
  {
    question: "Which of these is not used in dynamic programming?",
    answers: [
      { text: "Memoization", correct: false },
      { text: "Tabulation", correct: false },
      { text: "Recursion", correct: false },
      { text: "Greedy Approach", correct: true }
    ]
  },
  {
    question: "Which of these is a divide and conquer algorithm?",
    answers: [
      { text: "Quick Sort", correct: true },
      { text: "Insertion Sort", correct: false },
      { text: "Bubble Sort", correct: false },
      { text: "Linear Search", correct: false }
    ]
  },
  {
    question: "Which tree has maximum number of children allowed per node?",
    answers: [
      { text: "Binary Tree", correct: false },
      { text: "AVL Tree", correct: false },
      { text: "B Tree", correct: true },
      { text: "Binary Search Tree", correct: false }
    ]
  },
  {
    question: "Which is used to detect a cycle in a directed graph?",
    answers: [
      { text: "BFS", correct: false },
      { text: "DFS with visited and recursion stack", correct: true },
      { text: "Dijkstra", correct: false },
      { text: "Topological Sort", correct: false }
    ]
  }
];


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo +". "+ currentQuestion.question;
    
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })

}

function resetState()
{
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML=`Your score ${score} out of ${questions.length} !`;
    nextButton.innerHTML="play Again"
    nextButton.style.display="block";
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
})

startQuiz();