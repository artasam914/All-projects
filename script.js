function sidebarAnimation() {
  let menu = document.querySelector("#nav i");
  let cross = document.querySelector("#sidebar i");

  let tl = gsap.timeline();
  tl.to("#sidebar", {
    right: 0, //ham ne is ko right:-40% kiya he ..to ab jab javas me phr right 0 karey gey to smoth animate ho ga
    duration: 0.6,
  });
  tl.from("#sidebar h4", {
    x: 40,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from("#sidebar i", {
    y: 20,
    opacity: 0,
  });
  tl.pause(); // ham ne is ko abhi pause kya he jo kham bad me is ko play ke de gey

  function sidebarPlay() {
    menu.addEventListener("click", () => {
      tl.play();
    });
  }

  function sidebarHide() {
    cross.addEventListener("click", () => {
      tl.reverse();
    });
  }
  sidebarPlay();
  sidebarHide();
}
sidebarAnimation();
