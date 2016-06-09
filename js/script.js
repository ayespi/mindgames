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
var cardsFlipped = [];
var $newCardDiv;
var outputBoard = "";

var card1;
var card2;
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
      }
      $(this).siblings(".showImage").removeClass("showImage");
      cardsFlipped = [cardsFlipped[2]];
    }
}

$(document).ready(function(){

      $startGameButton.on("click",function(){

              buildBoard();
              var $playingAreaDiv = $("#play-area > div");
              $(".card img").css("display","none");

              $playingAreaDiv.click(flipCard);

      });

});
