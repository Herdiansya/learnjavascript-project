function visualEffectScrool() {
  var textHero2 = document.querySelector(".textHero2");
  var introPosition = textHero2.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (introPosition < screenPosition) {
    textHero2.classList.add("textHero2Effect");
  }
}
window.addEventListener("scroll", visualEffectScrool);
