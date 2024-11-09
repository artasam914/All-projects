const month=document.querySelector(".month-name")
const day=document.querySelector(".day-name")
const dateNum=document.querySelector(".day-number")
const year=document.querySelector(".year")

const  date=new Date();

//For Month name
month.innerText=date.toLocaleString("en",{
    month:"long"
})
// For day Name
day.innerText=date.toLocaleString("en",{
    weekday:"long"
})
//For date
dateNum.innerText=date.getDate();
//For year
year.innerText=date.getFullYear();


// button  dribbble
// const btn=document.querySelector(".btn")

// btn.addEventListener("  ",(delts)=>{
//     const xPos=delts.x - btn.offsetLeft ;
//     const yPos=delts.y - btn.offsetTop;

//     btn.style.setProperty("--x",xPos + "px")
//     btn.style.setProperty("--y",yPos + "px")
// })

