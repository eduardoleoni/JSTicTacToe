function randTurn(){
            
    number = Math.floor((Math.random() * 2) + 1);
    if (number === 1){
        return "x";
    }else{
        return "o";
    }

}

function draw(where){

    if ($("#"+where).html() == ""){
        $("#"+where).html(turn);
    }

    checkVictory();


}

function changeTurn(){
    if (turn == "o"){
        turn = "x";
    }else{
        turn = "o";
    }

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

    //Checking draw
    if ((block_1_1 != "") && (block_1_2.html != "") && (block_1_3.html != "") &&
       (block_2_1 != "") && (block_2_2 != "") && (block_2_3 != "") &&
       (block_3_1 != "") && (block_3_2 != "") && (block_3_3 != "")){
       alert("Draw!");
       reset();
    }


    //Horizontals
    if (block_1_1 != "")
        if ((block_1_1 == block_2_1) && (block_1_1 == block_3_1)){
            victory(block_1_1);
        }

    if (block_2_1 != "")
        if ((block_2_1 == block_2_2) && (block_2_1 == block_2_3)){
            victory(block_2_1);
        }
    if (block_3_1 != "")
        if ((block_3_1 == block_3_2) && (block_3_1 == block_3_3)){
            victory(block_3_1);
        }

    //Diagonals
    if (block_1_1 != "")
        if ((block_1_1 == block_2_2) && (block_1_1 == block_3_3)){
            victory(block_1_1);
        }
    if (block_3_1 != "")
        if ((block_3_1 == block_2_2) && (block_3_1 == block_1_3)){
            victory(block_3_1);
        }


    //Verticals
    if (block_1_3 != "")
        if ((block_1_3 == block_2_3) && (block_1_3 == block_3_3)){
            victory(block_1_3);
        }
    if (block_1_2 != "")
        if ((block_1_2 == block_2_2) && (block_1_2 == block_3_2)){
            victory(block_1_2);
        }
    if (block_1_1 != "")
        if ((block_1_1 == block_2_1) && (block_1_1 == block_3_1)){
            victory(block_1_1);
        }


    changeTurn();


}

function victory(whose){
    alert(whose + " wins");
    reset();
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
