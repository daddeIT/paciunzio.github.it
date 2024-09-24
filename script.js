// Dati del questionario con domande, opzioni e immagini di sfondo
const questions = [
    {
        question: "Qual è la tua priorità?",
        options: ['Salvare l\'ambiente', 'Fare carriera', 'Bilanciare vita e lavoro'],
        backgroundImage: 'images/sfondo1.jpg'
    },
    {
        question: "Come ti comporti con gli altri?",
        options: ['Collabori e ascolti', 'Ti imponi con leadership', 'Ti adatti alla situazione'],
        backgroundImage: 'images/sfondo2.jpg'
    },
    {
        question: "Cosa fai nel tempo libero?",
        options: ['Passeggiate nella natura', 'Progetti di lavoro', 'Relax e divertimento'],
        backgroundImage: 'images/sfondo3.jpg'
    },
    {
        question: "Qual è il tuo approccio agli studi?",
        options: ['Ricerca approfondita', 'Innovazione e sperimentazione', 'Studio equilibrato'],
        backgroundImage: 'images/sfondo4.jpg'
    },
    {
        question: "Come affronti i problemi?",
        options: ['Consolidi la tua conoscenza', 'Risolvi rapidamente', 'Cerchi di capire entrambe le parti'],
        backgroundImage: 'images/sfondo5.jpg'
    },
    {
        question: "Come ti vedi tra 10 anni?",
        options: ['Impegnato in cause ambientali', 'Imprenditore di successo', 'Stabile e realizzato'],
        backgroundImage: 'images/sfondo6.jpg'
    }
];

// Variabili per il tracking delle risposte
let currentQuestionIndex = 0;
let responses = { A: 0, B: 0, C: 0 };

// Mostra la domanda corrente e aggiorna le opzioni e l'immagine di sfondo
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question-text').innerText = currentQuestion.question;

        // Aggiorna l'immagine di sfondo
        document.body.style.backgroundImage = `url(${currentQuestion.backgroundImage})`;

        // Aggiorna le opzioni di risposta
        const optionButtons = document.getElementsByClassName('option-btn');
        optionButtons[0].innerText = currentQuestion.options[0]; // Opzione A
        optionButtons[1].innerText = currentQuestion.options[1]; // Opzione B
        optionButtons[2].innerText = currentQuestion.options[2]; // Opzione C
    } else {
        showResult();
    }
}

// Funzione chiamata quando l'utente seleziona una risposta
function selectOption(option) {
    responses[option] += 1;
    currentQuestionIndex++;
    loadQuestion();
}

// Mostra il risultato alla fine del questionario
function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    const maxResponse = Object.keys(responses).reduce((a, b) => responses[a] > responses[b] ? a : b);

    let resultTitle = "";
    let resultDescription = "";

    if (maxResponse === 'A') {
        resultTitle = "Profilo: Ecologista";
        resultDescription = "Hai una forte attenzione per l'ambiente e la sostenibilità.";
    } else if (maxResponse === 'B') {
        resultTitle = "Profilo: Intraprendente";
        resultDescription = "Sei una persona dinamica e pronta a prendere l'iniziativa.";
    } else if (maxResponse === 'C') {
        resultTitle = "Profilo: Intermedio";
        resultDescription = "Ti piace bilanciare diversi aspetti della tua vita senza estremismi.";
    }

    document.getElementById('result-title').innerText = resultTitle;
    document.getElementById('result-description').innerText = resultDescription;

    // Reset background image to a default for result page
    document.body.style.backgroundImage = 'url(images/sfondo-default.jpg)';
}

// Inizializza il questionario
loadQuestion();
