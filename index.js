let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;


function startOver(){

    level = 0;
    userClickedPattern = [];
    gamePattern = [];

}


function checkAnswer(){

    let currentLevel;
    for(let i = 0, j = 0; i < gamePattern.length && j < userClickedPattern.length; i++, j++)
    {
        if(gamePattern[i] == userClickedPattern[j]){
            currentLevel = true;
        }
        else
        {
            currentLevel = false;
            break
        }
        
    }

    if((gamePattern.length == userClickedPattern.length) && currentLevel)
    {
        
        console.log("success");
        setTimeout(function(){nextSequence()},1000);
        userClickedPattern = [];
    }
    else if(!currentLevel)
    {

        console.log("wrong");
        let audio = new Audio('./sounds/wrong.mp3');
        audio.play();

        $("body").addClass("game-over");
        setTimeout(function(){ $("body").removeClass("game-over");},200);
        $("h1").html("Game Over, Press Any Key to Restart");

        startOver();

        
        let started = false;

        $(document).on("keypress", function(){
            

            if(!started)
            {
                nextSequence();
                started = true;
            }
            

})

    
    }
    }
    


function animatePress(currentColour){
    $('#' + currentColour).addClass("pressed");
    setTimeout(function (){$('#' + currentColour).removeClass("pressed")},100);
}

function playSound(name){

    let audio = new Audio('./sounds/' + name + '.mp3');
    audio.play();
}

function nextSequence(){

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    $('#' + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    $("#level-title").html("Level " + level++);
    
}

$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer();
}
)

let started = false;

$(document).on("keypress", function(event){
    

    if(!started && event.key == 'a')
    {
        $("#level-title").html("Level " + level++);
        nextSequence();
        started = true;
    }
    

})


