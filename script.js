let date = new Date()
let hour=date.getHours()
let mint=date.getMinutes()
let sec=date.getSeconds()


// document.querySelector(".date").innerHTML=date


window.onclick=(e)=>{
    let x = e.clientX
    console.log(x)
    let y=e.clientY
    console.log(y)
    document.querySelector(".position").innerHTML=x+"," +y
    document.querySelector(".time").innerHTML=hour+":"+mint+":"+sec;
    
}