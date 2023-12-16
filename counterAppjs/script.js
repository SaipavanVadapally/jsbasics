const count = document.querySelector(".count")
const buttons=document.querySelector(".buttons")

buttons.addEventListener("click",(e)=>{
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor()
    }
})
buttons.addEventListener("click",(e)=>{
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor()
    }
})
buttons.addEventListener("click",(e)=>{
    if(e.target.classList.contains("reset")){
        count.innerHTML= 0;
        setColor()
    }
})
function setColor(){
    if(count.innerHTML>0){
        count.style.color="yellow"
    }else if (count.innerHTML<0){
        count.style.color="Red"
    }else{
        count.style.color="white"
    }

}
 