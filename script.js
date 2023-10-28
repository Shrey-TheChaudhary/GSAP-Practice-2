const container = document.querySelector(".container");
const restartButton = document.getElementById("restart-button");
const infinite = document.getElementById("infinite-button");
const box = document.querySelector(".box");

const t1 = gsap.timeline({
  repeat: 1,
  yoyo: true,
  defaults: { duration: 1, ease: "easeInOut" }
});

t1
  .to(".box", { y: 100, duration: 0.5 })
  .to(".box", { x: container.clientWidth / 2 - box.clientWidth / 2 })
  .to(".box", { background: "#20B2AA" })
  .to(".box", { rotate: 360, borderRadius: "50%" })
  .to(".box", { scale: 2.5, duration: 1.5 });

// timeline.to('.box', { opacity: 0.1 }, 1);
// timeline.to('.box', { opacity: 0.2 }, '+=2');
// timeline.to('.box', { opacity: 0.3 }, '-=3');

restartButton.addEventListener("click", () => {
  t1.restart();
});
infinite.addEventListener("click", () => {
    t1.repeat(-1).yoyo(true);
})