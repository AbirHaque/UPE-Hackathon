p1l=1;
p1r=1;
p2l=1;
p2r=1;
function hitLL(){
    off_players=swap_player_texts_get_cur_player();
    if (p1l+p2l>10){
        console.log("Invalid move!");
    }
    if (off_player==1){
        if(p1l+p2l==10){
            p2l=0;
        }
        else{
            p2l+=p1l;
        }
    }
    else{
        if(p1l+p2l==10){
            p1=0;
        }
        else{
            p1l+=p2l;
        }
    }
    recolor_chopsticks();
}
function hitLR(){
    off_players=swap_player_texts_get_cur_player();
    if (p1l+p2r>10){
        console.log("Invalid move!");
    }
    if (off_player==1){
        if(p1l+p2r==10){
            p2r=0;
        }
        else{
            p2r+=p1l;
        }
    }
    else{
        if(p1l+p2r==10){
            p1=0;
        }
        else{
            p1l+=p2r;
        }
    }
    recolor_chopsticks();
}
function hitRR(){
    off_players=swap_player_texts_get_cur_player();
    if (p1r+p2r>10){
        console.log("Invalid move!");
    }
    if (off_player==1){
        if(p1r+p2r==10){
            p2r=0;
        }
        else{
            p2r+=p1r;
        }
    }
    else{
        if(p1r+p2r==10){
            p1r=0;
        }
        else{
            p1r+=p2r;
        }
    }
    recolor_chopsticks();
}
function hitRL(){
    off_players=swap_player_texts_get_cur_player();
    if (p1r+p2l>10){
        console.log("Invalid move!");
    }
    if (off_player==1){
        if(p1r+p2l==10){
            p2l=0;
        }
        else{
            p2l+=p1r;
        }
    }
    else{
        if(p1r+p2l==10){
            p1r=0;
        }
        else{
            p1r+=p2l;
        }
    }
    recolor_chopsticks();
}

function swap_player_texts_get_cur_player(){
    off_player = document.getElementById("OffensiveText");
    def_player = document.getElementById("DefensiveText");
    tmp=off_player.innerHTML
    off_player.innerHTML = def_player.innerHTML;
    def_player.innerHTML = tmp;
    console.log(off_player.innerHTML+"!!!!");
    return off_player.innerHTML;
}
function recolor_chopsticks(){
    for(var i=1;i<=10;i++){
        if(i<p2l){
            document.getElementById("OffL"+i).style.color="white";
        }
        else{
            document.getElementById("OffL"+i).style.color="black";
        }
        if(i<p2r){
            document.getElementById("OffR"+i).style.color="white";
        }
        else{
            document.getElementById("OffR"+i).style.color="black";
        }
        if(i<p1l){
            document.getElementById("DefL"+i).style.color="white";
        }
        else{
            document.getElementById("DefL"+i).style.color="black";
        }
        if(i<p1r){
            document.getElementById("DefR"+i).style.color="white";
        }
        else{
            document.getElementById("DefR"+i).style.color="black";
        }
    }
    console.log(p1l+" "+p1r+" "+p2l+" "+p2r)
}