const remaining=document.querySelector("#remainingnumber")
const textarea=document.querySelector("#textarea")
const total=document.querySelector("#totalnum")


textarea.addEventListener("keyup",()=>{
    updateCounter()
}) 

function updateCounter(){
   total.innerText=textarea.value.length
remaining.innerText=textarea.getAttribute("maxLength") - textarea.value.length
}
