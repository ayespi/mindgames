// - Start game

      //>>> BEGIN GAME

      //>>> After the START button is clicked, the board will be populated
      //     with cards

      //>>> After the cards are dealt out, player takes a turn by CHOOSE TWO
      //    CARDS for a POSSIBLE MATCH


var $startGameButton = $("#bt-start");
var $playingArea = $("#play-area");
var $banner = $("#banner");
var $memoryCard = $(".card img");

var cardImages = ["img1.jpg",
                  "img2.jpg",
                  "img3.jpg",
                  "img4.jpg",
                  "img5.jpg",
                  "img6.jpg",
                  "img7.jpg",
                  "img8.jpg",
                  "img9.jpg",
                  "img10.jpg",
                  "img11.jpg",
                  "img12.jpg",
                  "img1.jpg",
                  "img2.jpg",
                  "img3.jpg",
                  "img4.jpg",
                  "img5.jpg",
                  "img6.jpg",
                  "img7.jpg",
                  "img8.jpg",
                  "img9.jpg",
                  "img10.jpg",
                  "img11.jpg",
                  "img12.jpg"];

var shuffledImages = [];
var i = 0;
var cardsFlipped = [];
var $newCardDiv;
var outputBoard = "";

var card1;
var card2;

var possibleMatches;
var matchedCards;

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

function flipCard(){
    $(this).toggleClass("showImage");
    var cardImage = $(this).find("img").attr("src");
    cardsFlipped.push(cardImage);

    if(cardsFlipped.length == 3){
      if(cardsFlipped[0] == cardsFlipped[1] && cardsFlipped.length){
          $(this).siblings(".showImage").addClass("match");
          alert("It's a MATCH!!!");
          //Check for gameOver()
          if(gameOver()){
            cardsFlipped = [];
            alert("Click START to begin new game...");
          }
      }
      $(this).siblings(".showImage").removeClass("showImage");
      cardsFlipped = [cardsFlipped[2]];
    }
}

function gameOver(){
  //Game is over when all cards are matched
  //To find the number of possible matches, take the length of the cardImages
      //Array and compare to the number of cards that have the class MATCH
      matchedCards = numberOfMatchedCards();
      if(matchedCards == cardImages.length){
        alert("***** Game Over *****");
        return true;
      }else{
        return false;
      }
}

function numberOfMatchedCards(){
    matchedCards = $(".match").length;
    console.log(matchedCards);
    return matchedCards;
}
// $("button").hasClass("match ");





$(document).ready(function(){
      $startGameButton.on("click",function(){
              $banner.slideUp();
              buildBoard();
              $("footer").toggleClass("hideFooter");
              var $playingAreaDiv = $("#play-area > div");
              $(".card img").css("display","none");

              $playingAreaDiv.click(flipCard);

      });

});
