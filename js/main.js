const counters = document.querySelectorAll(".counter");
const aboutSection = document.querySelector(".about");
// console.log(aboutSection.offsetTop + 400);
// console.log(counters);
// console.log(scrollY);

counters.forEach(counter => {
  counter.textContent = "0";

  const updateCounter = () => {
    // const target = Number(counter.getAttribute("data-target"));
    // const target = parseInt(counter.getAttribute("data-target"));
    const target = +counter.getAttribute("data-target");
    const nowCounterNumber = +counter.textContent;
    const increment = target / 200;

    if (nowCounterNumber < target) {
      counter.textContent = `${Math.ceil(nowCounterNumber + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.textContent = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  window.addEventListener("scroll", ScrollTrigger);

  function ScrollTrigger() {
    // console.log(scrollY);
    if (this.scrollY >= aboutSection.offsetTop + 400) {
      updateCounter();
      window.removeEventListener("scroll", ScrollTrigger);
    }
  }
});
