$(document).ready(function(){
    var target = Math.floor(Math.random()*45+30);
    $(".targetDiv").text(target);


    var gemNum1 = Math.floor(Math.random()*14+1);
    var gemNum2 = Math.floor(Math.random()*14+1);
    var gemNum3 = Math.floor(Math.random()*14+1);
    var gemNum4 = Math.floor(Math.random()*14+1);
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $(".wins").text(wins);
    $(".losses").text(losses);

    function restart(){
        target = Math.floor(Math.random()*45+30);
        $(".targetDiv").text(target);
        gemNum1 = Math.floor(Math.random()*14+1);
        gemNum2 = Math.floor(Math.random()*14+1);
        gemNum3 = Math.floor(Math.random()*14+1);
        gemNum4 = Math.floor(Math.random()*14+1);
        userScore = 0;
        $("#scoreDiv").text(userScore)
    }

    function win(){
        alert("You Win!");
        wins++;
        $(".wins").text(wins);
        restart();
    }
    function loss(){
        alert("You Lose!");
        losses++;
        $(".losses").text(losses);
        restart();
    }
    $("#gemOne").on('click', function(){
        userScore = userScore + gemNum1;
        $("#scoreDiv").text(userScore);
        if (userScore === target){
            win();
        }
        else if (userScore > target){
            loss();
        }
    })
    $("#gemTwo").on('click', function(){
        userScore = userScore + gemNum2;
        $("#scoreDiv").text(userScore);
        if (userScore === target){
            win();
        }
        else if (userScore > target){
            loss();
        }
    })
    $("#gemThree").on('click', function(){
        userScore = userScore + gemNum3;
        $("#scoreDiv").text(userScore);
        if (userScore === target){
            win();
        }
        else if (userScore > target){
            loss();
        }
    })
    $("#gemFour").on('click', function(){
        userScore = userScore + gemNum4;
        $("#scoreDiv").text(userScore);
        if (userScore === target){
            win();
        }
        else if (userScore > target){
            loss();
        }
    })
})