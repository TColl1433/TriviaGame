
//Global Variables
var score = 0;
var currentQuestion = 0;
var questions = [
    {
        title: "Who joined Michael Jackson on vocals in the song 'Say Say Say'?",
        answers: ['Paul McCartney',
            'Elton John',
            'Stevie Wonder',
            'Boy George'],
        correct: 0
    },
    {
        title: "Whose hits included,'Everlasting Love', 'What is Love?', and 'Things Can Only Get Better'?",
        answers: ['Howard Jones',
            'Michael Jackson',
            'Marshall Crenshaw',
            'Michael Penn'],
        correct: 0
    },
    {
        title: "Whose hits included,'Everlasting Love', 'What is Love?', and 'Things Can Only Get Better'?",
        answers: ['Howard Jones',
            'Michael Jackson',
            'Marshall Crenshaw',
            'Michael Penn'],
        correct: 0
    },
    {
        title: "Prince sang a song about a girl in a little __________ corvette",
        answers: ['black',
            'purple',
            'white',
            'red'],
        correct: 0
    },

    {
        title: "Who sang 'Melt With You'?",
        answers: ['Club Nouveau',
            'Heaven 17',
            'REM',
            'Modern English'],
        correct: 3
    },
];

//event listeners

$(document).ready(function () {


    //jquery is telling the class of anchortag within the start class to start game when link is clicked.
    $('.start a').click(function (e) {
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    });

    $('.quiz ul').on('click', 'li', function () {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');

    });

    $('.quiz a').click(function (e) {
        //this prevents the default action of in (this case reloading the page because the link doesn't go anywhere) when the link is clicked. 
        e.preventDefault();

        if ($('li.selected').length) {
            //in this case 'parseInt' is converting a string to a number'
            var guess = parseInt($('li.selected').attr('id'));
            //below we are passing guess into our function checkAnswer
            checkAnswer(guess);
        } else {
            alert('Please select an answer');
        }

    });

});



//functions


function showQuestion() {
    var question = questions[currentQuestion];
    $('.quiz h2').text(question.title);
    //the below line clears everything within the ul element out
    $('.quiz ul').html('');
    for (var i = 0; i < question.answers.length; i++) {
        $('.quiz ul').append(`<li id="${i}">${question.answers[i]}</li>`)
    }

}

function checkAnswer(guess) {
    var question = questions[currentQuestion];
    //the below line is telling the browser to increment the score if the question matches the correct number from the array within the array of var questions.
    if (question.correct === guess) {
        score++;
    }
    //the below line goes progresses through each question whether answered correctly or not.
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showSummary();
    } else {
        showQuestion();
    }
}

function showSummary() {
    $('.quiz').hide();
    $('.summary').show();

}