//------------------selection des classes pour JS ----------------
const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0; //la première image est à l'index 0.

function changeSlide() {
  //selection de toutes les images et on les cache avec display="none". On utilise la boucle for à cause  querySelectorAll
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  //selectionne la 1ere image(n=0) et on la met en block.
  imgs[n].style.display = "block";
}
changeSlide();

// ------------------previous button-------------------------------

prev_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide(); //après avoir mis à jour la valeur de n, nous devons executer la fonction changeSlide().
});

// ------------------next button--------------------------------------

next_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide(); //après avoir mis à jour la valeur de n, nous devons executer la fonction changeSlide().
});

// ----suppression du defilement horizontal par défaut-------------------

const scrollContainer = document.querySelectorAll(".products"); //selection de toutes les div avec cette classe. On utilise la boucle for à cause de querySelectorAll
for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
