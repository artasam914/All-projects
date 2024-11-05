let arr = [
  {
    name: "Petals of roses",
    image:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Animals of town",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "the crowd of city",
    image:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "fruits of planet",
    image:
      "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "orange peeled",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "web design",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "apple juice",
    image:
      "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
let container = document.querySelector(".container");

function showTheCards() {
  let clutter = "";

  arr.forEach((val) => {
    clutter += `<div class="box">
        <img class="cursor-pointer" src="${val.image}" alt="image">
        <div class="caption"> </div>
    </div>`;
  });
  container.innerHTML = clutter;
}
showTheCards();

// for searching function
let overlay = document.querySelector(".overlay");

let search = document.querySelector("#searchinput");

function handleSearchFunctionality() {
  // jab ham search pr click karey

  search.addEventListener("focus", () => {
    // click also working instead focus
    overlay.style.display = "block";
  });
  // jab ham screen pr click karey

  search.addEventListener("blur", () => {
    overlay.style.display = "none";
  });

  // suggestion show krwaney k liye..

  search.addEventListener("input", () => {
    const filteredArray = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(search.value)
    );

    let clutter = "";
    filteredArray.forEach((obj) => {
      clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div `;
    });
    document.querySelector(".searchdata").style.display = "block";

    // jab ham screen pr click karey to suggestion bhi khatam krney k liye..
    search.addEventListener("blur", () => {
      document.querySelector(".searchdata").style.display = "none";
    });

    document.querySelector(".searchdata").innerHTML = clutter;
  });
}

handleSearchFunctionality();

// function showTheCards(){
//     var clutter = "";
//     arr.forEach(function(obj){
//         clutter += `<div class="box">
//         <img class="cursor-pointer" src="${obj.image}" alt="image">
//         <div class="caption">Lorem ipsum </div>
//     </div>`;
//     })

//     document.querySelector(".container")
//     .innerHTML = clutter;
// }

// function handleSearchFunctionality(){
//     var input = document.querySelector("#searchinput");

//     input
//     .addEventListener("focus", function(){
//         document.querySelector(".overlay").style.display = "block";
//     })

//     input
//     .addEventListener("blur", function(){
//         document.querySelector(".overlay").style.display = "none";
//     })

//     input
//     .addEventListener("input", function(){
//         const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
//         var clutter = "";
//         filteredArray.forEach(function(obj){
//             clutter += `<div class="res flex px-8 py-3">
//             <i class="ri-search-line font-semibold mr-5"></i>
//             <h3 class="font-semibold">${obj.name}</h3>
//         </div>`
//         })
//     document.querySelector(".searchdata").style.display = "block";
//         document.querySelector(".searchdata").innerHTML = clutter;
//     })
// }

// handleSearchFunctionality();
// showTheCards();
