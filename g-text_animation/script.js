


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
