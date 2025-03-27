let active = 3;
let minicircles = document.querySelectorAll(".mncircle");
let stripes = document.querySelectorAll(".stripe");

gsap.to(minicircles[active - 1], {
  opacity: 0.45,
});
gsap.to(stripes[active - 1], {
  opacity: 0.9,
});

minicircles.forEach(function (val, index) {
  val.addEventListener("click", function () {
    gsap.to("#circle", {
      rotate: (3 - (index + 1)) * 10,
      ease: Expo.easeInOut,
    });
    greyOut();
    gsap.to(this, {
      opacity: 0.5,
    });
    gsap.to(stripes[index], {
      opacity: 0.8,
    });
  });
});

function greyOut() {
  gsap.to(minicircles, {
    opacity: 0.08,
  });
  gsap.to(stripes, {
    opacity: 0.4,
  });
}

gsap.to("#circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2,
});
