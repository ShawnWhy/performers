var majorArcana=[
"The Fool","The Empress","The Emperor","The Hierophant",
"The Magician", "The Priestess", "The World","The Lovers","The Hermit","The Wheel of Fortune",
"Death", "The Devil", "The Tower", "The Judge", "Temperance", "The Sun", "The Moon","The Star",
"Judgement", "The Chariot", "strength", "The Hanged Man"
]

var swords=[
  "ace of swords","2 of swords","3 of swords","4 of swords","5 of swords","6 of swords","7 of swords" ,"8 of swords","9 of swords","10 of swords",
  "page pf swords", "knight of swords", "queen of swords", "king of swords"
]

var wands  = [
  "ace of wands", "2 of wands", "3 of wands", "4 of wands", "5 of wands", "6 of wands","7 of wands", "8 of wands","9 of wands", "10 of wands",
  "page of wands", "knight of wands", "queen of wands","king of wands"

]

var pentacle = [

  "ace of pentacle", "2 of pentacle","3 of pentacle","4 of pentacle","5 of pentacle","6 of pentacle","7 of pentacle","8 of pentacle", "9 of pentacle","10 of pentacle",
  "page of pentacle", "knight of pentacle", "queen of pentacle","king of pentacle"

]

var cups = [
"ace of cups", "2 of cups","3 of cups","4 of cups","5 of cups","6 of cups","7 of cups","8 pf cups","9 of cups","10 of cups",
"page of cups", "knight of cups","queen of cups","king of cups"

]

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function openCurtain() {

  $(".pullyWheel").addClass("rotateWheel");
  setTimeout(() => {
      $(".pullyWheel").removeClass("rotateWheel");
      createCards();

  }, 1600);
  // console.log("opencurtain");
  var leftCurtains = $(".curtainLeft .curtain");
  console.log(leftCurtains)
  leftCurtains.each(function (index, value) {
    // console.log(left)

    setTimeout(() => {
      $(value).addClass("closedCurtainLeft");
    }, index * 400);
  });

    var rightCurtains = $(".curtainRight .curtain");
    rightCurtains.each(function (index, value) {
      // console.log(left)

      setTimeout(() => {
        $(value).addClass("closedCurtainRight");
      }, index * 400);
    });
} 

function createCards(){
  var cards = majorArcana.concat(swords).concat(wands).concat(pentacle).concat(cups)
  shuffleArray(cards);
  console.log(cards)
 var angle = 180 / parseInt(cards.length);

  for(let i=0; i<cards.length;i++){
    setTimeout(() => {
      
      console.log(angle * i)
      console.log(cards.length)
      var card = $("<div>");
      $(card).addClass("Tcard");
      $(card).attr("data",cards[i])
      $(card).css("transform", "rotate(" + (angle * parseFloat(i)-90) + "deg)");
      $("body").append(card);
    }, 50*i);


  }
}



$(".pullyWheel").click(function (e) { 
  openCurtain();
  console.log("openWheel");
  e.preventDefault();


  
})




var treeColor = "cadetBlue";
var branchFractal = 6;
var degrees = 100;
var mouseLeft = 500;

 var red = Math.floor(Math.random() * 250 + 100);
 var green = Math.floor(Math.random() * 100 + 60);
 var blue = Math.floor(Math.random() * 50 + 20);
 
      let redRand = Math.floor(Math.random() * 100 - 40);
      let greenRand = Math.floor(Math.random() * 100 - 40);
      let blueRand = Math.floor(Math.random() * 100 - 40);

      appleColor =
        "rgb(" +
        (red + redRand) +
        "," +
        (green + greenRand) +
        "," +
        (blue + blueRand) +
        ")";




 


