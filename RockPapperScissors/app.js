let boxes=document.querySelectorAll(".box");
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");
let draw_score=document.querySelector("#draw-score");
let msg=document.querySelector("#msg");

let user_count = 0;
let comp_count=0;
let draw_count=0;

const getComp_id=()=>{
    let arr=["rock","paper","scissor"];
    let indx = Math.floor(Math.random()*3);
    return arr[indx];
}


const showWinner=(userWin,user_choice,comp_choice)=>{
    if(userWin){
        user_count++;
        user_score.textContent=user_count;
        msg.style.backgroundColor="green"
        msg.textContent="User Winns";
        // console.log("User Winns",user_count);
    }
    else{
        comp_count++;
        comp_score.textContent=comp_count;
        msg.style.backgroundColor="red"
        msg.textContent="Comp Winns";
        // console.log("Comp Wins",comp_count);
    }
}



const playGame = (user_choice)=>{

    let comp_choice= getComp_id();
    // console.log("user-choice:",user_choice);
    // console.log(`Computer-chooice:${comp_choice}`);
    if(user_choice===comp_choice){
        draw_count++;
       draw_score.textContent=draw_count;
        msg.style.backgroundColor="#2A2E45"
        msg.textContent="Match Draw";
        // console.log("Match Draw");
    }
    else{
        let userWin=true;
        if(user_choice==="rock"){
            // paper scissor
            userWin = comp_choice==="scissor"?true:false;
        }
        else if(user_choice==="paper"){
            //rock scissor
            userWin = comp_choice==="rock"?true:false;
        }
        else{
            userWin = comp_choice=="paper"?true:false;
        }

       showWinner(userWin,user_choice,comp_choice);
    }
}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        let user_choice=box.getAttribute("id");
        playGame(user_choice);
    })
})