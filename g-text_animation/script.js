// function textanimation() {
//   // Select the heading element from html
//  let head1 = document.querySelector(".heading");
//  // Get the text content of the heading element
//  let h1Text = head1.textContent;

//  // Split the text content into an array of characters
//  let splitedText = h1Text.split("");
//  // console.log(splitedText)

//  // Create a variable to store the cluttered text
//  let clutter = "";
//  // Loop through the array of characters and create a span element for each character
//  splitedText.forEach((elem) => {
//    clutter += `<span>${elem}</span>`;
//  });
//  // console.log(clutter)
//  // Set the innerHTML of the heading element to the cluttered text
//  head1.innerHTML = clutter;
//  // console.log(h1.innerHTML)

//  // Use GSAP to animate the span elements
//  gsap.from("span", {
//    //it span will not work so make them inline block  .//can also target span alone ..
//    y: 100,
//    duration: 1,
//    stagger: 0.2,
//  });
// }
// textanimation();

function textAnimationSidesToCenter() {
  let h1 = document.querySelector(".heading");
  let h1Text = h1.textContent;

  let splitedText = h1Text.split("");

  halfValue = h1Text.length / 2;

  let clutter = "";
  splitedText.forEach((elem, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter;
  // console.log(h1.innerHTML)

  gsap.from(".a", {
    y: 60,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    // ease:Expo
  });
  gsap.from(".b", {
    y: 60,
    opacity: 0,
    duration: 0.6,
    stagger: -0.15, //agr negative me degey to right se start ho ga.
    // ease:Expo
  });
}
textAnimationSidesToCenter();
