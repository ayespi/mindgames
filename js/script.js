// - Start game

      //>>> BEGIN GAME

      //>>> After the START button is clicked, the board will be populated
      //     with cards

      //>>> After the cards are dealt out, player takes a turn by CHOOSE TWO
      //    CARDS for a POSSIBLE MATCH


var $startGameButton = $("#bt-start");
var $playingArea = $("#play-area");

var $memoryCard = $(".card img");

var cardImages = ["img1.jpg",
                  "img2.jpg",
                  "img3.jpg",
                  "img4.jpg",
                  "img5.jpg",
                  "img6.jpg",
                  "img1.jpg",
                  "img2.jpg",
                  "img3.jpg",
                  "img4.jpg",
                  "img5.jpg",
                  "img6.jpg"];

var shuffledImages = [];
var i = 0;
var cardsFlipped;
var $newCardDiv;
var outputBoard = "";
// _ Play game until all matches are found (UNTIMED)


// - View game grid

function buildBoard(){

    //Add images to cardImage Array

    //To Shuffle images use memoryCardShuffle()
    //Store Shuffed Images in new shuffledImages Array

          shuffledImages = memoryCardShuffle(cardImages);

    //Deal cards
    // To deal cards, loop through the shuffledImages array and output
    //  to the PLAY AREA
    outputBoard = "";

    for (i = 0; i < shuffledImages.length; i += 1){

          outputBoard += "<div class=\"card\" id=\"card_"+i+"\"><img src=\"images/"+shuffledImages[i]+"\"></div>";

          $playingArea.html(outputBoard);
          //console.log(outputBoard);

    }


}


// - Take a turn:
//     A) Choose TWO cards consecutively
//           A card is chosen by clicking the card
//     B) After the SECOND card is chosen, there will be a designated VIEWING TIME to give the user an opportunity to commit the TWO cards to MEMORY, IN THE EVENT that the TWO card choice DO NOT result in a match.
//     C) Turns will be taken until ALL MATCHES ARE FOUND

function flipCard(){

    cardsFlipped +=1;
    $(this).toggleClass("showImage");
    //if cardsflipped == 2, wait for a half second and hideAllCards
    if(cardsFlipped == 2){

        //wait for a half second and hideAllCards
        // setTimeout hideAllCards
        hideAllCards();

    }

}


// function hideAllCards(){setTimeout(function(){ $(".card img").css("display","none"); }, 3000);}

function hideAllCards(){setTimeout(function(){ console.log("Thank You Lord!!!");}, 3000);}

// _ End game
//     A) Finding ALL MATCHES
//     B) Closing browser window


$(document).ready(function(){

//***** START GAME *****

      $startGameButton.on("click",function(){

              buildBoard();
              var $playingAreaDiv = $("#play-area > div");
              $(".card img").css("display","none");


              var cardsFlipped = 0;
              $playingAreaDiv.click(flipCard);

      });



});
