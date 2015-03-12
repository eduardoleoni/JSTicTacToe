 function computerPlays(){
    
    console.log(turn + playerTurn);

    if (turn != playerTurn){
    
        if (checksRiskOfLosingOrWinningPossibility() === false){
            intelligentPlay();
        }
    }
}


function checksRiskOfLosingOrWinningPossibility(){

    for (j = 1; j < 3; j++){

        if (j === 1){ // make sure it checks columns and line
            what = "column";
        }else{
            what = "line";
        }

        for (i = 1; i < 4; i++) { 

            val = "";
            plays = 0;
            riskOfLosing = false;
            chanceToWin = false;

            $( "." + what + i ).each(function( index ) {
                if ($("#"+this.id).html() != ""){
                    plays = plays + 1;
                    if (val == $("#"+this.id).html()){ // if val is equal it means that the same player has played twice on the same column/line

                        if (val != turn) // if val is equal the turn it means the computer can win on the next shot, if not, it means a risk
                            riskOfLosing = true;
                        else
                            chanceToWin = true;
                    }else{
                        val = $("#"+this.id).html(); //If the val is different to the one stored, saves it for future comparison
                    }
                }else{
                    available = this.id; // Gets available column, we we can protect it in case of risk of losing
                }
            });

            if (riskOfLosing == true){
                bestShot = calculateBestShot([available,"lose"]);
            }
            if (chanceToWin == true){
                bestShot = calculateBestShot([available,"win"]);
            }
        }
    }

    //Diagonals
    //checking first diagonal
    block_1_1 = $("#block_1_1").html();
    block_2_2 = $("#block_2_2").html();
    block_3_3 = $("#block_3_3").html();

    if (block_1_1 !== ""){
        if ((block_1_1 == block_2_2) && (block_3_3 == "")){
            if (block_1_1 == turn){
                bestShot = calculateBestShot(["block_3_3","win"]);
            }else{
                bestShot = calculateBestShot(["block_3_3","lose"]);
            }
        }
        if ((block_1_1 == block_3_3) && (block_2_2 == "")){
            if (block_1_1 == turn){
                bestShot = calculateBestShot(["block_2_2","win"]);
            }else{
                bestShot = calculateBestShot(["block_2_2","lose"]);
            }
        }
    }

    if (block_2_2 !== ""){
        if ((block_2_2 == block_1_1) && (block_3_3 == "")){
            if (block_2_2 == turn){
                bestShot = calculateBestShot(["block_3_3","win"]);
            }else{
                bestShot = calculateBestShot(["block_3_3","lose"]);
            }
        }
        if ((block_2_2 == block_3_3) && (block_1_1 == "")){
            if (block_2_2 == turn){
                bestShot = calculateBestShot(["block_1_1","win"]);
            }else{
                bestShot = calculateBestShot(["block_1_1","lose"]);
            }
        }
    }


    //checking second diagonal
    block_3_1 = $("#block_3_1").html();
    block_2_2 = $("#block_2_2").html();
    block_1_3 = $("#block_1_3").html();

    if (block_3_1 !== ""){
        if ((block_3_1 == block_2_2) && (block_1_3 == "")){
            if (block_3_1 == turn){
                bestShot = calculateBestShot(["block_1_3","win"]);
            }else{
                bestShot = calculateBestShot(["block_1_3","lose"]);
            }
        }
        if ((block_3_1 == block_1_3) && (block_2_2 == "")){
            if (block_1_3 == turn){
                bestShot = calculateBestShot(["block_2_2","win"]);
            }else{
                bestShot = calculateBestShot(["block_2_2","lose"]);
            }
        }
    }

    if (block_2_2 !== ""){
        if ((block_2_2 == block_3_1) && (block_1_3 == "")){
            if (block_2_2 == turn){
                bestShot = calculateBestShot(["block_1_3","win"]);
            }else{
                bestShot = calculateBestShot(["block_1_3","lose"]);
            }
        }
        if ((block_2_2 == block_1_3) && (block_3_1 == "")){
            if (block_2_2 == turn){
                bestShot = calculateBestShot(["block_3_1","win"]);
            }else{
                bestShot = calculateBestShot(["block_3_1","lose"]);
            }
        }
    }


    //Plays if there's losing risk or winning chance, if not, just comes back
    if (typeof bestShot !== 'undefined') {
        draw(bestShot[0]);
    }else{
        return false;
    }
}

function calculateBestShot(shot){

    //Checks if the current best shot is a victory, if it's leaves it like that, if not overwrite by the new sugestion
    if (shot[1] == "win"){
        return shot;
    }else{
        if (typeof bestShot !== 'undefined') {
            if (bestShot[1] == "win")
                return bestShot;
            else
                return shot;
        }else{
            return shot;
        }
    }
}


function intelligentPlay(){

    //looks for a row or a column which has previously played to increase winning chance

    for (j = 1; j < 3; j++){

        if (j == 1){ // make sure it checks columns and line
            what = "column";
        }else{
            what = "line";
        }

        for (i = 1; i < 4; i++) { 

            val = "";
            plays = 0;
            goodShot = false;
            $( "." + what + i ).each(function( index ) {
                if ($("#"+this.id).html() != ""){
                    plays = plays + 1;
                    if (val == $("#"+this.id).html()){ // if val is equal it means that the same player has played once on the same column/line
                        if (val == turn) 
                            goodShot = true;
                        else
                            goodShot = false;

                    }else{
                        val = $("#"+this.id).html(); //If the val is different to the one stored, saves it for future comparison
                    }
                }else{
                    available = this.id; // Gets available column/line we can use to play
                }
            });
            if (plays == 3){
                goodShot = false;
            }

            if (goodShot == true){
                i = 4;
                j = 3;
            }


        }
    }

    if (goodShot == true){
        draw(available);
    }else{
        randomPlay();
    }


}

function randomPlay(){
    number1 = Math.floor((Math.random() * 3) + 1);
    number2 = Math.floor((Math.random() * 3) + 1);

    if ($("#block_" + number1 + "_" + number2).html() != ""){
        randomPlay();
    }else{
        draw("block_" + number1 + "_" + number2);
    }
}


