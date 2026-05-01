document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTimeline();
    initFlashcards();
    initQuiz();
    initChat();
});

/* Navigation Logic */
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => {
                s.classList.remove('active');
                s.classList.add('hidden');
            });

            // Add active class to clicked button and target section
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            targetSection.classList.remove('hidden');
            
            // Small delay to allow display:block to apply before animating opacity
            setTimeout(() => {
                targetSection.classList.add('active');
            }, 10);
        });
    });
}

/* Timeline Logic */
function initTimeline() {
    const container = document.querySelector('.timeline-container');
    
    electionData.timeline.forEach((item, index) => {
        const sideClass = index % 2 === 0 ? 'left' : 'right';
        
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${sideClass}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content glass">
                <h3>${index + 1}. ${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        container.appendChild(timelineItem);
    });
}

/* Flashcards Logic */
function initFlashcards() {
    const container = document.getElementById('flashcards-container');
    
    electionData.flashcards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'flashcard-wrapper';
        
        cardElement.innerHTML = `
            <div class="flashcard">
                <div class="flashcard-face flashcard-front">
                    <h3>${card.term}</h3>
                    <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem;">Click to reveal</p>
                </div>
                <div class="flashcard-face flashcard-back">
                    <p>${card.definition}</p>
                </div>
            </div>
        `;
        
        // Add flip functionality
        const innerCard = cardElement.querySelector('.flashcard');
        cardElement.addEventListener('click', () => {
            innerCard.classList.toggle('is-flipped');
        });
        
        container.appendChild(cardElement);
    });
}

/* Quiz Logic */
let currentQuestionIndex = 0;
let score = 0;

function initQuiz() {
    const startBtn = document.getElementById('start-quiz-btn');
    const nextBtn = document.getElementById('next-question-btn');
    const restartBtn = document.getElementById('restart-quiz-btn');

    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', loadNextQuestion);
    restartBtn.addEventListener('click', resetQuiz);
    
    document.getElementById('total-questions').textContent = electionData.quiz.length;
}

function startQuiz() {
    document.getElementById('quiz-start').classList.remove('active');
    document.getElementById('quiz-start').classList.add('hidden');
    
    document.getElementById('quiz-active').classList.remove('hidden');
    document.getElementById('quiz-active').classList.add('active');
    
    loadQuestion();
}

function loadQuestion() {
    const questionData = electionData.quiz[currentQuestionIndex];
    
    // Update header
    document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1}/${electionData.quiz.length}`;
    const progress = ((currentQuestionIndex + 1) / electionData.quiz.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;
    
    // Update question text
    document.getElementById('question-text').textContent = questionData.question;
    
    // Generate options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index, button));
        optionsContainer.appendChild(button);
    });
    
    // Hide feedback
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.classList.add('hidden');
    feedbackContainer.classList.remove('correct', 'incorrect');
    document.getElementById('next-question-btn').classList.add('hidden');
}

function selectOption(selectedIndex, selectedButton) {
    const questionData = electionData.quiz[currentQuestionIndex];
    const isCorrect = selectedIndex === questionData.correctIndex;
    
    // Disable all options
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === questionData.correctIndex) {
            btn.classList.add('correct');
        }
    });
    
    // Show feedback
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackText = document.getElementById('feedback-text');
    const nextBtn = document.getElementById('next-question-btn');
    
    feedbackContainer.classList.remove('hidden');
    
    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
        feedbackContainer.classList.add('correct');
        feedbackText.innerHTML = `<strong>Correct!</strong> ${questionData.explanation}`;
    } else {
        selectedButton.classList.add('incorrect');
        feedbackContainer.classList.add('incorrect');
        feedbackText.innerHTML = `<strong>Incorrect.</strong> ${questionData.explanation}`;
    }
    
    nextBtn.classList.remove('hidden');
}

function loadNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < electionData.quiz.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quiz-active').classList.remove('active');
    document.getElementById('quiz-active').classList.add('hidden');
    
    document.getElementById('quiz-end').classList.remove('hidden');
    document.getElementById('quiz-end').classList.add('active');
    
    document.getElementById('final-score').textContent = score;
    
    const messageEl = document.getElementById('score-message');
    const percentage = (score / electionData.quiz.length) * 100;
    
    if (percentage === 100) {
        messageEl.textContent = "Perfect! You're an expert on the Indian electoral process.";
    } else if (percentage >= 60) {
        messageEl.textContent = "Great job! You have a solid understanding of your democracy.";
    } else {
        messageEl.textContent = "Good effort! Keep exploring the app to learn more about how elections work.";
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById('quiz-end').classList.remove('active');
    document.getElementById('quiz-end').classList.add('hidden');
    
    startQuiz();
}

/* Chat Logic */
function initChat() {
    const sendBtn = document.getElementById('send-chat-btn');
    const chatInput = document.getElementById('chat-input');

    sendBtn.addEventListener('click', handleChatSubmit);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChatSubmit();
    });
}

function handleChatSubmit() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    addChatMessage(message, 'user');
    input.value = '';

    // Simulate bot thinking
    setTimeout(() => {
        const botResponse = generateBotResponse(message.toLowerCase());
        addChatMessage(botResponse, 'bot');
    }, 500);
}

function addChatMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(input) {
    if (input.includes('lok sabha')) {
        return "Lok Sabha is the lower house of India's Parliament. Members are elected directly by the people for a 5-year term.";
    } else if (input.includes('evm')) {
        return "EVM stands for Electronic Voting Machine. They have been used in Indian elections to record votes securely and efficiently.";
    } else if (input.includes('vvpat')) {
        return "VVPAT (Voter Verifiable Paper Audit Trail) is a machine that prints a slip showing the candidate you voted for, allowing you to verify your vote.";
    } else if (input.includes('mcc') || input.includes('model code')) {
        return "The Model Code of Conduct (MCC) is a set of guidelines for candidates and political parties to ensure free and fair elections. It comes into effect as soon as elections are announced.";
    } else if (input.includes('nota')) {
        return "NOTA stands for 'None of the Above'. It's an option on the voting machine that allows you to officially reject all the candidates contesting in your constituency.";
    } else if (input.includes('eci') || input.includes('commission')) {
        return "The Election Commission of India (ECI) is an independent constitutional body responsible for conducting free and fair elections in India.";
    } else if (input.includes('age') || input.includes('old') || input.includes('vote')) {
        return "You must be at least 18 years old and a citizen of India to be eligible to vote. You also need an EPIC (Voter ID card) and your name must be on the electoral roll.";
    } else {
        return "That's an interesting question about the Indian election process! Could you please ask specifically about the Lok Sabha, EVMs, VVPAT, Model Code of Conduct (MCC), NOTA, or voting eligibility?";
    }
}
