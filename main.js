const promo = {
  panel: document.querySelector(".promo"),
  close: document.querySelector(".promo__close"),
};

promo.close.addEventListener("click", function () {
  promo.panel.classList.add("hide");
});
