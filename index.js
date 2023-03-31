p1l=1;
p1r=1;
p2l=1;
p2r=1;
function hitLL(){
    off_player=document.getElementById("OffensiveText");
    if (p1l+p2l>10){
        document.getElementById("state").innerHTML="Invalid move!";
        document.getElementById("state").color="red";
        return;
    }
    else{
        document.getElementById("state").innerHTML="";
    }
    console.log(off_player.textContent);
    if (off_player.textContent==1){
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
    swap_player_texts_get_cur_player();
}
function hitLR(){
    off_players=swap_player_texts_get_cur_player();
    if (p1l+p2r>10){
        document.getElementById("state").innerHTML="Invalid move!";
        document.getElementById("state").color="red";
        return;
    }
    else{
        document.getElementById("state").innerHTML="";
    }
    if (off_player.textContent==1){
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
        document.getElementById("state").innerHTML="Invalid move!";
        document.getElementById("state").back="red";
        return;
    }
    else{
        document.getElementById("state").innerHTML="";
    }
    if (off_player.textContent==1){
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
        document.getElementById("state").innerHTML="Invalid move!";
        document.getElementById("state").color="red";
        return;
    }
    else{
        document.getElementById("state").innerHTML="";
    }
    if (off_player.textContent==1){
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

function comb(){
    off_players=swap_player_texts_get_cur_player();
    if (off_player.textContent==1){
        if(p1r!=0 && p1l!=0){
            document.getElementById("state").innerHTML="Invalid move!";
            document.getElementById("state").color="red";
            return;
        }
        else{
            document.getElementById("state").innerHTML="";
            if(p1r==0){
                p1r=Math.floor(p1l/2);
                p1l=p1l-p1r;
            }
            else{
                p1l=Math.floor(p1r/2);
                p1r=p1r-p1l;
            }
        }
    }
    else{
        if(p2r!=0 && p2l!=0){
            document.getElementById("state").innerHTML="Invalid move!";
            document.getElementById("state").color="red";
            return;
        }
        else{
            document.getElementById("state").innerHTML="";
            if(p2r==0){
                p2r=Math.floor(p2l/2);
                p2l=p2l-p2r;
            }
            else{
                p2l=Math.floor(p2r/2);
                p2r=p2r-p2l;
            }
        }
    }
    recolor_chopsticks();
}


function swap_player_texts_get_cur_player(){
    off_player = document.getElementById("OffensiveText");
    def_player = document.getElementById("DefensiveText");
    tmp=off_player.textContent;
    off_player.textContent = def_player.textContent;
    def_player.textContent = tmp;
    var context1 = new AudioContext();
    var context2 = new AudioContext();
    var sound1 = context1.createOscillator();
    var sound2 = context2.createOscillator();
    sound1.frequency.setTargetAtTime(440, context1.currentTime, 0);
    sound2.frequency.setTargetAtTime(440+(Math.floor(Math.random() * 5)-2)*100, context2.currentTime, 0);
    sound1.connect(context1.destination);
    sound2.connect(context2.destination);
    sound1.start(0);    
    sound2.start(0);    
    setTimeout(() => { context1.suspend();context2.suspend();  }, 500);  
}
function recolor_chopsticks(){
    for(var i=1;i<=10;i++){
        if(i<=p2l){
            document.getElementById("OffL"+i).style.backgroundColor="white";
        }
        else{
            document.getElementById("OffL"+i).style.backgroundColor="black";
        }
        if(i<=p2r){
            document.getElementById("OffR"+i).style.backgroundColor="white";
        }
        else{
            document.getElementById("OffR"+i).style.backgroundColor="black";
        }
        if(i<=p1l){
            document.getElementById("DefL"+i).style.backgroundColor="white";
        }
        else{
            document.getElementById("DefL"+i).style.backgroundColor="black";
        }
        if(i<=p1r){
            document.getElementById("DefR"+i).style.backgroundColor="white";
        }
        else{
            document.getElementById("DefR"+i).style.backgroundColor="black";
        }
    }
    console.log(p1l+" "+p1r+" "+p2l+" "+p2r)
}