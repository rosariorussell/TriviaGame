//on clicking start button, hide button, start timer, list questions
$(document).ready(function () {


	// $('#start-button').on('click', function () {
	// 	//Emptys trivia section
	// 	$('#start-button').hide();
	// 	firstQuestion();
	// });

	var numberCorrect = 0;
	var numberIncorrect = 0;
	var numberUnanswered = 0;
	var timer = 10;
	var questionNumber = 0;
	var delay;


	var questions = [{
			question: "What team won the very first NBA game?",
			option1: "New York Knicks",
			option2: "Philadelphia Warriors",
			option3: "Toronto Huskies",
			option4: "Chicago Stags",
			correctOption: "New York Knicks",
		},
		{
			question: "What NBA player scored 100 points on March 2, 1962?",
			option1: 'Kareem Abdul-Jabbar',
			option2: 'Wilt Chamberlain',
			option3: 'Elgin Baylor',
			option4: 'Bill Russell',
			correctOption: "Wilt Chamberlain",
		},
		{
			question: "Who was the first player in NBA history to be elected league MVP by a unanimous vote?",
			option1: 'Lebron James',
			option2: 'Magic Johnson',
			option3: 'Michael Jordan',
			option4: 'Stephen Curry',
			correctOption: "Stephen Curry",
		},
		{
			question: "What new kind of shot did Joe Fulks score a record 63 points with in one game in 1949?",
			option1: 'Jump Shot',
			option2: 'Hook Shot',
			option3: 'Three-point shot',
			option4: 'Free Throw',
			correctOption: "Jump Shot",
		},
		{
			question: "Who scored the first three-point basket in NBA history?",
			option1: 'Chris Ford',
			option2: 'Gene Stump',
			option3: 'Larry Bird',
			option4: 'Wes Unseld',
			correctOption: "Chris Ford",
		},
		{
			question: "Who was the youngest player to score 10,000 points in the NBA?",
			option1: 'Lebron James',
			option2: 'Michael Jordan',
			option3: 'Kobe Bryant',
			option4: 'Wilt Chamberlain',
			correctOption: "Lebron James",
		},
		{
			question: "What team owns the longest winning streak in NBA history?",
			option1: 'Los Angeles Lakers',
			option2: 'Golden State Warriors',
			option3: 'Miami Heat',
			option4: 'Chicago Bulls',
			correctOption: "Los Angeles Lakers",
		},
		{
			question: "What player was known as the 'Clown Prince' of the Harlem Globetrotters?",
			option1: 'Fred "Curly" Neal',
			option2: 'Goose Tatum',
			option3: 'Meadowlark Lemon',
			option4: 'Marques Haynes',
			correctOption: "Meadowlark Lemon",
		},
		{
			question: "Who is the all-time leading scorer in men's college basketball?",
			option1: 'Larry Bird',
			option2: 'Pete Maravich',
			option3: 'Stephen Curry',
			option4: 'Freeman Williams',
			correctOption: "Pete Maravich",
		},
		{
			question: "Who was the first WNBA player to dunk in a playoff game?",
			option1: 'Lisa Leslie',
			option2: 'Michelle Snow',
			option3: 'Tamika Catchings',
			option4: "Brittney Griner",
			correctOption: "Brittney Griner",
		}
	];


	var makeQuestion = function (){
		$("#questionDiv").html(questions[questionNumber].question);
		$("#option1").html("<button/>" + questions[questionNumber].option1)
		$("#option2").html("<button/>" + questions[questionNumber].option2)
		$("#option3").html("<button/>" + questions[questionNumber].option3)
		$("#option4").html("<button/>" + questions[questionNumber].option4)
	};

	var nextQuestion = function () {
		if (timer === -1) {
			$("#questionDiv").html("You ran out of time!");
			$("#option1").html("The correct answer is:");
			$("#option2").html(questions[questionNumber].correctOption);
			$("#option3").empty();
			$("#option4").empty();
			numberUnanswered++;
		}
		else if ($(this).text() === questions[questionNumber].correctOption){
			$("#questionDiv").html("Correct!");
			$("#option1").html("The answer is:");
			$("#option2").html(questions[questionNumber].correctOption);
			$("#option3").empty();
			$("#option4").empty();
			numberCorrect++;

		}
		else if ($(this).text() != questions[questionNumber].correctOption){
			$("#questionDiv").html("Incorrect!");
			$("#option1").html("The correct answer is:");
			$("#option2").html(questions[questionNumber].correctOption);
			$("#option3").empty();
			$("#option4").empty();
			numberIncorrect++;

		}
		questionNumber++;
		clearInterval(delay);
		timer = 10;
		delay = setTimeout(makeQuestion,2000);
		delay = setTimeout(questionTimer,2000);

	}

	var endGame = function() {
		$("#questionDiv").empty();
		$("#option1").html("Correct Answers: " + numberCorrect);$("#option2").html("Incorrect Answers: " + numberIncorrect);
		$("#option2").html("Unanswered: " + numberUnanswered);
		$("#option4").empty();
		$("#timer").empty();
	}

	var questionTimer = function () {
		if (questionNumber === questions.length) {
			endGame();
			return;
		}
		$("#timer").html("<h2>Time left: " + timer + "</h2>");
		var timerDecrement = setInterval(function(){
			$("#timer").html("<h2>Time left: " + timer + "</h2>");
			timer--;
			if (timer === -1){
				clearInterval(delay);
				nextQuestion();
				timer = 10;
			}
		},1000);
		
	}

	$("#start").on("click", function () {
		questionTimer();
		makeQuestion();
	});

});

//question array
//populate question
//timer per question
//evaluate answer
//next question
//calculate score


