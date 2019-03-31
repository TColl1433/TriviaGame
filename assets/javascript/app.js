
//Global Variables
let score = 0;
let currentQuestion = 0;
//added this variable today from a counter I found  stack overflow I moved the counter from inside the function startTimer
let counter = 21;
let myTimer;
//below is an an array containing objects; different attributes pertaining to the object are put inside the curly braces
const questions = [
    {
        //title is a key, what comes after the colon is the value of that key
        title: "Who joined Michael Jackson on vocals in the song 'Say Say Say'?",
        //
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
        title: "Prince sang a song about a girl in a little __________ corvette",
        answers: ['black',
            'purple',
            'white',
            'red'],
        correct: 3
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




//All event listeners go within document.reday

$(document).ready(function () {

    //for (var key in questions[0]) {
    //console.log(key);
    //}

    //I want to start a timer here I'm not sure how exactly but I want it to start when start is clicked.


    //jquery is telling the class of anchortag within the start class to start game when link is clicked.

    $('.start a').click(function (e) {
        //with function (e) we are passing in an event called preventDefault
        e.preventDefault();
        //below we are telling jquery to hide the start quiz link after the link is clicked
        $('.start').hide();
        //On the same click event at the same time now we are showing the quiz area
        $('.quiz').show();
        //the below line is calling the function we created below and showing queston
        showQuestion();
    });

    $('.quiz ul').on('click', 'li', function () {
        $('.selected').removeClass('selected');
        //this is representing the new answer that has been selected
        $(this).addClass('selected');
        //
        // checkAnswer($(this).attr('id'), score);
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
    $('.summary a').click(function (e) {
        e.preventDefault();
        restartQuiz();


    })

});



//functions


function showQuestion() {
    //below we are calling the function of startTimer to start when the question is shown
    startTimer();
    var question = questions[currentQuestion];
    // console.log("show question")
    $('.quiz h3').text(question.title);
    //the below line clears everything within the ul element out
    $('.quiz ul').html('');
    //the below loop is allowing us to randomly select a question with the answer from our array
    for (var i = 0; i < question.answers.length; i++) {
        $('.quiz ul').append(`<li id="${i}">${question.answers[i]}</li>`)
    }

}

function checkAnswer(guess) {
    clearInterval(myTimer);
    var question = questions[currentQuestion];
    //the below line is telling the browser to increment the score if the question matches the correct number from the array within the array of var questions.
    if (question.correct === guess) {
        score++;
        console.log(score)
    }
    //the below line progresses through each question whether answered correctly or not.
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        setTimeout(showSummary, 2000);
    } else {
        setTimeout(showQuestion, 1000);
    }
}

function showSummary() {
    $('.quiz').hide();
    $('.summary').show();
    $('.summary p').text("Congrats You Scored " + score + " out of " + questions.length + " Correct!");

}

function restartQuiz() {
    $('.summary').hide();
    $('.quiz').show();
    score = 0;
    currentQuestion = 0;
    showQuestion();

}


function startTimer() {
    clearInterval(myTimer);
    counter = 21;
    myTimer = setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter + " seconds left";
        }
        if (counter <= 0) {

            // checkAnswer("unanswered");
            clearInterval(counter);
        }
    }, 1000);
}

$(".start").click(function () {
    startTimer();
});

// $('#startClock').click(function(){
//     var counter = 5;
//     setInterval(function() {
//       counter--;
//       if (counter >= 0) {
//         span = document.getElementById("count");
//         span.innerHTML = counter;
//       }
//       if (counter === 0) {
//         alert('sorry, out of time');
//         clearInterval(counter);
//       }
//     }, 1000);

//    });

