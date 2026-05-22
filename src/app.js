const primary = document.querySelectorAll('a[href="#open"]');
primary.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById("pricing");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
