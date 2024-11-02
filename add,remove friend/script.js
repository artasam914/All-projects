let add = document.querySelector("#add")

let h4 = document.querySelector("h4")

let remove = document.querySelector("#remove")

let check = 0;

add.addEventListener("click", () => {
    if (check == 0) {
        add.innerText = "Remove Friend"

        h4.innerText = "friends"
        h4.style.color = "green"
        check = 1;
    }
    else {
        add.innerText = "Add Friend"
        h4.innerText = "Stranger"
        h4.style.color = "red"
        check = 0;
    }
})




// remove.addEventListener("click",()=>{
//     h4.innerText="Stranger"
//     h4.style.color="red"
// })