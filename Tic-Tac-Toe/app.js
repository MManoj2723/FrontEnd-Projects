let boxes=document.querySelectorAll(".box");

let butn=document.querySelector("#reset-butn");

let para=document.querySelector("#msg");
let container=document.querySelector(".msg-container");

let newbtn=document.querySelector("#new-butn");

let count=0;

let choice=[false,true];
let turn=choice[Math.floor(Math.random()*choice.length)];


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];



const reset=()=>{
    turn=choice[Math.floor(Math.random()*choice.length)];
    count=0;
    enableBoxes();
    container.classList.add("hide");

}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.style.color="black";
            box.textContent="O";
            turn=false;
        }
        else{
            box.style.color="red";
            box.textContent="X";
            turn=true;     
        }

        box.disabled=true;
        count++;
        console.log(count);
       let isWinner= checkWiner();

       if(count==9 && !isWinner){
        gameDraw();
       }

    });
});



let gameDraw=()=>{
    para.innerText=`Match Draw`;
   container.classList.remove("hide");
    disableBoxes();
};


let checkWiner = ()=>{
    for(let i of winPatterns){
        let pos1Val=boxes[i[0]].innerText;
        let pos2Val=boxes[i[1]].innerText;
        let pos3Val=boxes[i[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
           
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return true;
            }

        }
        
    }
}



let showWinner=(wname)=>{
    para.innerText=`Congratulations The Winner is:${wname}`;
    // container.style.display="block";
    container.classList.remove("hide");
    disableBoxes();
}


let disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



newbtn.addEventListener("click",reset);
butn.addEventListener("click",reset);
