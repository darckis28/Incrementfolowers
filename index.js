const counters = document.querySelectorAll(".followers");
counters.forEach((counter) => {
  counter.innerHTML = "";
  const increment = () => {
    const target = counter.getAttribute("data-target");
    const c = +counter.innerText;
    const incrementa = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + incrementa)}`;
      setTimeout(increment, 1);
    } else {
      counter.innerText = target;
    }
  };
  increment();
});
