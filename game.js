document.addEventListener('DOMContentLoaded', function() {
    // Each player has his own class
    // 0 - red
    // 1 - blue
    var playerClasses = {
        'playerA': 'red',
        'playerB': 'blue'
    };
    var currentPlayer;
    var emptyFields;

    var scores = {
      'playerA': 0,
      'playerB': 0
   }


   var resetBtn = document.getElementById('resetButton');
   resetBtn.addEventListener('click', resetScore);


    initGame();

    function initGame() {
		var fields = document.querySelectorAll('.board > div');
      emptyFields = 9;
      fields.forEach(field => field.removeAttribute('class'));
     // Set current player to 0 (red player)
		currentPlayer = 'playerA';
		fields.forEach(field => field.addEventListener('click', fieldClickHandler));

      displayPlayer();
	}

	function fieldClickHandler () {

      emptyFields--;
        var playerClass = playerClasses[currentPlayer];
        // Get player class name
        // Set current player class on clicked field
        this.classList.add(playerClass);

        // Switch players
        // if 0 switch to 1
        // if 1 switch to 0
		if(currentPlayer === 'playerA') {
        	currentPlayer = 'playerB';
        } else {
        	currentPlayer = 'playerA';
        }
     // inny sposob na zapisanie if... else - tzw. ternary operator
//       	currentPlayer = (currentPlayer === 'playerA') ? 'playerB' : 'playerA'


   this.removeEventListener('click', fieldClickHandler);

      checkWinner ();
   }
   function checkWinner () {
      fields = document.querySelectorAll('.board > div');

      var row1 = fields[0].className + fields[1].className + fields[2].className;
      var row2 = fields[3].className + fields[4].className + fields[5].className;
      var row3 = fields[6].className + fields[7].className + fields[8].className;

      var col1 = fields[0].className + fields[3].className + fields[6].className;
      var col2 = fields[1].className + fields[4].className + fields[7].className;
      var col3 = fields[2].className + fields[5].className + fields[8].className;

      var cross1 = fields[0].className + fields[4].className + fields[8].className;
      var cross2 = fields[2].className + fields[4].className + fields[6].className;

      var boardCheck = [
         row1,
         row2,
         row3,
         col1,
         col2,
         col3,
         cross1,
         cross2
      ];

setTimeout(function() {
      if ( boardCheck.includes("redredred") ) {
            alert("PlayerA won!");
            displayScore();
            initGame();
      } else if (boardCheck.includes("blueblueblue") ) {
            alert("PlayerB won!");
            displayScore();
            initGame();
      } else if (emptyFields === 0) {
         alert("game has ended");
         initGame();
      };
   }, 200);

   displayPlayer();
   };

   function displayPlayer () {
      var playerTurn = document.getElementById("player_turn");
      var actualPlayer = document.getElementById("playerName");

      playerTurn.className = playerClasses[currentPlayer];
		actualPlayer.innerHTML = currentPlayer;
   };

   function displayScore() {
      var playersScores = document.querySelectorAll(".score");
      scores[currentPlayer]++;
      console.log(playersScores);
      if(currentPlayer =='playerB'){
      playersScores[0].innerHTML = scores[currentPlayer];
      } else if (currentPlayer =='playerA') {
      playersScores[1].innerHTML = scores[currentPlayer];
      }
   }

   function resetScore() {
      scores = {
        'playerA': 0,
        'playerB': 0
     }
     var playersScores = document.querySelectorAll(".score");
     playersScores[0].innerHTML = scores[currentPlayer];
     playersScores[1].innerHTML = scores[currentPlayer];

      console.log("hello");
   }



});
