let boxes  = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let winbox  = document.querySelector(".winner");

let turnO = false;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
            {
                box.innerText = "O";
                turnO = false;
            }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

resetbtn.addEventListener("click",()=>{
    alert("Game Reset!");
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
    winbox.innerText = "- is the Winner!";
    turnO = false;
})

const checkwinner = ()=>{
    for(let pattern of winPatterns)
        {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            
            if(pos1val!="" && pos2val!="" && pos3val!="")
                {
                    if(pos1val === pos2val && pos2val === pos3val)
                        {
                            winbox.innerText = pos1val+" is the Winner!";
                            boxes.forEach((box)=>{
                                box.disabled = true;
                            turnO = false;
                            });
                        }
                }
        }
}