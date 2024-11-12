const users = [
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kbGV8ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3Dhttps://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",
    pendingMessages: 3,
    location: "kpr,Pakistan",
    name: "Ayesha",
    age: 30,
    interest: [
      {
        icons: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icons: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptas, quia, quae quibusdam, quos quidem voluptates voluptatem quod, voluptatum doloribus. Quia, voluptas unde. Alias ad repellat culpa.",
    isFriend: null,
  },

  {
    displayPic:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHwwhttps://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kbGV8ZW58MHx8MHx8fDA%3D",
    profilePic:
      "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    pendingMessages: 6,
    location: "lahore,Pakistan",
    name: "Ahmad",
    age: 25,
    interest: [
      {
        icons: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icons: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptas, quia, quae quibusdam, quos quidem voluptates voluptatem quod, voluptatum doloribus. Quia, voluptas unde. Alias ad repellat culpa.",
    isFriend: null,
  },

  {
    displayPic:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    profilePic:
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",
    pendingMessages: 2,
    location: "Bahawalpur,Pakistan",
    name: "Maham",
    age: 20,
    interest: [
      {
        icons: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptas, quia, quae quibusdam, quos quidem voluptates voluptatem quod, voluptatum doloribus. Quia, voluptas unde. Alias ad repellat culpa.",
    isFriend: null,
  },

  {
    displayPic:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsfGVufDB8fDB8fHww",
    profilePic:
      "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    pendingMessages: 4,
    location: "fsd,Pakistan",
    name: "Zidi",
    age: 88,
    interest: [
      {
        icons: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icons: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptas, quia, quae quibusdam, quos quidem voluptates voluptatem quod, voluptatum doloribus. Quia, voluptas unde. Alias ad repellat culpa.",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;
let isAnimation = false;

function setData(index) {
  select(".prfimage img").src = users[index].profilePic; // curr or index
  select(".number").textContent = users[index].pendingMessages;
  select(".locationicon h3").textContent = users[index].location;
  select(".name1").textContent = users[index].name;
  select(".age").textContent = users[index].age;
  select(".bio p").textContent = users[index].bio;

  // for interest and icon
  let clutter = "";

  users[index].interest.forEach(function (interest) {
    clutter += `<div class="tag">
              ${interest.icons}
              <h5>${interest.interest}</h5>
            </div>
`;
  });
  select(".tags").innerHTML = clutter;
}

// first target all elements there and then make their differeent function..and run set Data in it ..
function setInitial() {
  select(".maincontainer img").src = users[curr].displayPic;
  select(".upcomingcontainer img").src = users[curr + 
    

  setData(curr);
  curr = 2;
}
setInitial();

//first change image me gsap anima.. krni or bad me us k ander akor function bnaya ..
function changeImage() {
  if (!isAnimation) {
    isAnimation = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimation = false;
        let main = select(".maincontainer");
        let upcoming = select(".upcomingcontainer");

        upcoming.classList.remove("zIndex:2");
        upcoming.classList.add("zIndex:3");
        upcoming.classList.remove("upcomingcontainer");

        main.classList.remove("zIndex:3");
        main.classList.add("zIndex:2");

        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr === users.length) curr = 0;
        select(".maincontainer img").src = users[curr].displayPic;
        curr++;

        main.classList.remove("maincontainer");
        upcoming.classList.add("maincontainer");
        main.classList.add("upcomingcontainer");
      },
    });
    tl.to(
      ".maincontainer",
      {
        scale: 1.2,
        opacity: 0.0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".upcomingcontainer",
      {
        scale: 0.9,
        opacity: 0.0,
        ease: Circ,
        duration: 1.2,
      },
      "a"
    );
  }
}
// let add = select(".add");
// let cancel = select(".cancel");
let btn = select(".btn");
btn.addEventListener("click", () => {
  changeImage();
  setData(curr - 1);

  //text animation
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.1,
    // ease:Power3.easeInOut,
    duration: 1,
  });
});

// function containerCreate() {
//   document.querySelectorAll(".element").forEach((element) => {
//     let div = document.createElement("div");
//     div.classList.add(`${element.classList[1]}container`);
//     div.appendChild(element);

//     select(".details").appendChild(div);
//   });
// }
// containerCreate();
