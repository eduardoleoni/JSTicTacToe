function randTurn(){
            
    number = Math.floor((Math.random() * 2) + 1);
    if (number === 1){
        return "x";
    }else{
        return "o";
    }

}

function draw(where){
    if ($("#"+where).html() === ""){
        $("#"+where).html(turn);
    }
       
    if (checkVictory() == true){
        reset();
    }
    
    flipTurn();
    
    setInterval(computerPlays,400);
}

function flipTurn(){
    
    if (turn === "o"){
        changeTurn("x");
    }else{
        changeTurn("o");
    }

}

function changeTurn(nt){
    turn = nt;
}



function checkVictory(){


    block_1_1 = $("#block_1_1").html();
    block_2_1 = $("#block_2_1").html();
    block_3_1 = $("#block_3_1").html();

    block_1_2 = $("#block_1_2").html();
    block_2_2 = $("#block_2_2").html();
    block_3_2 = $("#block_3_2").html();

    block_1_3 = $("#block_1_3").html();            
    block_2_3 = $("#block_2_3").html();
    block_3_3 = $("#block_3_3").html();

    
    //Horizontals
    if (block_1_1 != "")
        if ((block_1_1 == block_2_1) && (block_1_1 == block_3_1)){
            victory(block_1_1);
            return true;
        }

    if (block_2_1 != "")
        if ((block_2_1 == block_2_2) && (block_2_1 == block_2_3)){
            victory(block_2_1);
            return true;
        }
    if (block_3_1 != "")
        if ((block_3_1 == block_3_2) && (block_3_1 == block_3_3)){
            victory(block_3_1);
            return true;
        }

    //Diagonals
    if (block_1_1 != "")
        if ((block_1_1 == block_2_2) && (block_1_1 == block_3_3)){
            victory(block_1_1);
            return true;
        }
    if (block_3_1 != "")
        if ((block_3_1 == block_2_2) && (block_3_1 == block_1_3)){
            victory(block_3_1);
            return true;
        }


    //Verticals
    if (block_1_3 != "")
        if ((block_1_3 == block_2_3) && (block_1_3 == block_3_3)){
            victory(block_1_3);
            return true;
        }
    if (block_1_2 != "")
        if ((block_1_2 == block_2_2) && (block_1_2 == block_3_2)){
            victory(block_1_2);
            return true;
        }
    if (block_1_1 != "")
        if ((block_1_1 == block_1_2) && (block_1_1 == block_1_3)){
            victory(block_1_1);
            return true;
        }
    
    //Checking draw
    if ((block_1_1 != "") && (block_1_2 != "") && (block_1_3 != "") &&
       (block_2_1 != "") && (block_2_2 != "") && (block_2_3 != "") &&
       (block_3_1 != "") && (block_3_2 != "") && (block_3_3 != "")){
       alert("Draw!");
       return true;
    }
    
    return false;


}

function victory(whose){
    alert(whose + " wins");
}

function reset(){
    $("#block_1_1").html("");
    $("#block_2_1").html("");
    $("#block_3_1").html("");

    $("#block_1_2").html("");
    $("#block_2_2").html("");
    $("#block_3_2").html("");

    $("#block_1_3").html("");            
    $("#block_2_3").html("");
    $("#block_3_3").html("");
}
