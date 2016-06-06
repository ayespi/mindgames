// - Start game

      //>>> BEGIN GAME by clicking START button

      //>>> After the START button is clicked, the board will be populated
      //     with cards

      //>>> After the cards are dealt out, player takes a turn by CHOOSE TWO
      //    CARDS for a POSSIBLE MATCHES

//********** FUNCTIONS **********

function checkForAllMatches(){

    if(allMatchesFound == true){

        return true;

    }else{

        return false;

    }

}


var startGameButton = $("#bt-start");
var playingArea = $("#play-area");

// _ Play game until all matches are found (UNTIMED)

var allMatchesFound;
var matchesFound;
var playerMessage;


        if(matchesFound){

            playerMessage = "You WIN!!!";

        }





// - View game grid (example: 4x2 - 4 columns by 2 rows)

function buildGrid(){};


// - Take a turn:
//     A) Choose TWO cards consecutively
//           A card is chosen by clicking the card
//     B) After the SECOND card is chosen, there will be a designated VIEWING TIME to give the user an opportunity to commit the TWO cards to MEMORY, IN THE EVENT that the TWO card choice DO NOT result in a match.
//     C) Turns will be taken until ALL MATCHES ARE FOUND
// _ End game
//     A) Finding ALL MATCHES
//     B) Closing browser window


$(document).ready(function(){

//***** START GAME *****

      startGameButton.on("click",function(){

              playingArea.text("Button was CLICKED!!!");

      });



});
