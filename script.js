let currentLanguage = '';
let currentQuestionIndex = 0;
let score = 0;
let questions = {};

// Sample question bank (50+ questions per language)
const questionBank = {
    java: [
        {
            question: "What is the correct syntax to output 'Hello World' in Java?",
            options: [
                'System.out.println("Hello World");',
                'print("Hello World");',
                'Console.WriteLine("Hello World");',
                'echo "Hello World";'
            ],
            answer: 'System.out.println("Hello World");'
        },
        {
            question: "Which keyword is used to define a class in Java?",
            options: ['class', 'struct', 'def', 'type'],
            answer: 'class'
        },
        // Add 48+ more Java questions here
        ...Array(48).fill().map((_, i) => ({
            question: `Java Question ${i + 3}?`,
            options: [`Option 1`, `Option 2`, `Option 3`, `Option 4`],
            answer: `Option 1`
        }))
    ],
    cpp: [
        {
            question: "What is the correct syntax to output 'Hello World' in C++?",
            options: [
                'cout << "Hello World";',
                'System.out.println("Hello World");',
                'print("Hello World");',
                'echo "Hello World";'
            ],
            answer: 'cout << "Hello World";'
        },
        {
            question: "Which operator is used to access members of a structure in C++?",
            options: ['.', '->', '*', '&'],
            answer: '->'
        },
        // Add 48+ more C++ questions here
        ...Array(48).fill().map((_, i) => ({
            question: `C++ Question ${i + 3}?`,
            options: [`Option 1`, `Option 2`, `Option 3`, `Option 4`],
            answer: `Option 1`
        }))
    ],
    python: [
        {
            question: "What is the correct syntax to output 'Hello World' in Python?",
            options: [
                'print("Hello World")',
                'System.out.println("Hello World");',
                'cout << "Hello World";',
                'echo "Hello World";'
            ],
            answer: 'print("Hello World")'
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: ['def', 'function', 'func', 'define'],
            answer: 'def'
        },
        // Add 48+ more Python questions here
        ...Array(48).fill().map((_, i) => ({
            question: `Python Question ${i + 3}?`,
            options: [`Option 1`, `Option 2`, `Option 3`, `Option 4`],
            answer: `Option 1`
        }))
    ]
};

function selectLanguage(lang) {
    currentLanguage = lang;
    currentQuestionIndex = 0;
    score = 0;
    questions = questionBank[lang];
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('language-title').innerText = lang.toUpperCase() + ' Quiz';
    document.getElementById('score').innerText = `Score: ${score} / 50`;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        document.getElementById('question').innerText = `Quiz Completed! Final Score: ${score} / 50`;
        document.getElementById('options').innerHTML = '';
        document.getElementById('next-btn').style.display = 'none';
        return;
    }

    const q = questions[currentQuestionIndex];
    document.getElementById('question').innerText = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const q = questions[currentQuestionIndex];
    if (selected === q.answer) {
        score++;
        document.getElementById('score').innerText = `Score: ${score} / 50`;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function nextQuestion() {
    loadQuestion();
}