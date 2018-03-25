$( document ).ready(function(){ 
var Random = Math.floor(Math.random()*101+29)
//this will show a random number to be shown at the start of the game, number will be between 19-130
$('#randomNumber').text(Random);
//this appends random number to the randomNumber ID  that is located in the HTML doc

//so look below, I am setting up random numbers for each jewel, you will see how i used this later througout the code. Random number will be between 1-23
var n1 = Math.floor(Math.random()*22+1)
var n2 = Math.floor(Math.random()*22+1)
var n3 = Math.floor(Math.random()*22+1)
var n4 = Math.floor(Math.random()*22+1)

//declaring variables for tallying scores up

var userTotal = 0 
var wins = 0
var losses = 0
//prints the wins and losses 
$('#nwins').text(wins);
$('#nlosses').text(losses);

//resetting the game function

function reset (){ 
  Random = Math.floor(Math.random()*101+29);
  console.log(Random)
  $('#randomNumber').text(Random);
  var n1 = Math.floor(Math.random()*12+1)
  var n2 = Math.floor(Math.random()*12+1)
  var n3 = Math.floor(Math.random()*12+1)
  var n4 = Math.floor(Math.random()*12+1) 
  userTotal = 0
  $("#finalTotal").text(userTotal);
  }

  function winner(){ 
   
    alert("You have won, the Great One!!");
    wins++;
    //displays the total wins
    $("#nwins").text(wins);
    reset();
    
  }
  function loser(){ 
    alert ("You lose! Try again Jedi!");
    losses++;
    // displays the total losses
    $("#nlosses").text(losses);
    reset();
      }
  // now this section is the set up click for the jewels
  //click the first jewel
  $("#one").on("click", function (){    
    playSong.play();
    userTotal = userTotal + n1;
    console.log("New userTotal= "+ userTotal);
    $("#finalTotal").text(userTotal);
    //now set up the win or lose conditions
      if (userTotal == Random) { 
        winner(); //run this functions, check above for the functions details, use this function when the user reaches the comptuer's random number
      } 
      else if (userTotal > Random) { 
        loser(); //call this function when user is greater than the computer's number
      }
    })
    
  $("#two").on("click", function (){
    playSong.play();
    userTotal = userTotal + n2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
      if (userTotal == Random) { 
        winner();
      }
      else if (userTotal > Random) { 
        loser();
      }
  })
  $("#three").on("click", function (){ 
    playSong.play();
    userTotal = userTotal + n3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
      if (userTotal == Random) { 
        winner ();
      }
      else if (userTotal > Random) { 
        loser();
      }
  });
  $("#four").on("click", function (){ 
    playSong.play();
    userTotal = userTotal + n4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
      if (userTotal == Random) { 
        winner ();
      }
      else if (userTotal > Random) { 
        loser();

      }
      })
 
      var playSong = new Audio("./assets/ring.mp3");

})

