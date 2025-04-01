let image = document.querySelector(".container")  // pehle mene image ko selct kiya tha .. ab container ko kiya he

let icon = document.querySelector("i")  //icon


image.addEventListener("dblclick", () => {

// icon ko style diya he 
    icon.style.transform = 'translate(-50%,-50%) scale(1.3) '
    
icon.style.opacity=0.7

    setTimeout(()=>{
        icon.style.transform = 'translate(-50%,-50%) '
        icon.style.opacity=0
    },2500)
 
}) 

function cursor(){
    let circle=document.querySelector("#circle");

    window.addEventListener("mousemove",(delts)=>{
gsap.to(circle,{
    left:delts.clientX,
    top:delts.clientY,
    duration:.6
})
      

document.querySelector("#image").addEventListener("mouseenter",()=>{
    gsap.to(circle,{
        scale:4
    })
})
document.querySelector("#image").addEventListener("mouseleave",()=>{
    gsap.to(circle,{
        scale:1
    })
})
    })

}
cursor();



// setTimeout(() => {
//     console.log("hello")
//     image.addEventListener("dblclick", () => {
//         icon.style.transform = 'translate(-50%,-50%) scale(0)'
//         icon.style.opacity=0
//     })

// }, 2000)
