const burgerMenu = document.getElementById("burger-menu");
const burgerOpen = document.getElementById("burger-button");
const burgerClose = document.getElementById("burger-close");
const burgerMenuItems = document.querySelectorAll(".burger-menu__item");

burgerOpen.addEventListener('click', () => {
  burgerMenu.classList.add("burger-menu-active");
});

burgerClose.addEventListener('click', () => {
  burgerMenu.classList.remove("burger-menu-active");
});

burgerMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    burgerMenu.classList.remove("burger-menu-active");
  });
});

/* MODAL */

const dialogElement = document.getElementById("modal");
const submitButton = document.getElementById("submit");
const modalName = document.getElementById("modal-name");
const modalEmail = document.getElementById("modal-email");
const modalTel = document.getElementById("modal-tel");

dialogElement.addEventListener("click", closeOnBackDropClick);

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget
  const isClickedOnBackDrop = target === dialogElement
  if (isClickedOnBackDrop) {
    dialogElement.close()
    modalName.value = "";
    modalEmail.value = "";
    modalTel.value = "";
  };
};

submitButton.addEventListener("click", (e) => {
  const formNode = event.target.form
  const isValid = formNode.checkValidity()
  if(isValid){
    e.preventDefault();
    modalName.value = "";
    modalEmail.value = "";
    modalTel.value = "";
    dialogElement.close()
  };
});

/* SWIPER PRICE */

const sliderItems = document.querySelectorAll(".section-price__item");
const buttonPrev = document.getElementById("slider-prev");
const buttonNext = document.getElementById("slider-next");

let position = 0;

buttonNext.addEventListener("click", () => {
  if(position > -200){
      buttonPrev.classList.remove('slider-button-nonvisible');
      position = position - 100;
      sliderItems.forEach(item => {
      item.style.left = `${position}` + "%";
        
      if(position == -200){
       buttonNext.classList.add('slider-button-nonvisible'); 
      };
        
      return position;
     });
  };
});

buttonPrev.addEventListener("click", () => {
  if(position < 0){
      buttonNext.classList.remove('slider-button-nonvisible');
      position = position + 100;
      sliderItems.forEach(item => {
      item.style.left = `${position}` + "%";
        
      if(position == 0){
        buttonPrev.classList.add('slider-button-nonvisible'); 
      };
        
      return position;
    });
  };
});

/* OPEN GALERRY */

const openGalleryIndividual = document.getElementById("open-gallery-individual");
const openGalleryLove = document.getElementById("open-gallery-love");
const openGalleryWedding = document.getElementById("open-gallery-wedding");

const galleryIndividual = document.getElementById("gallery-individual");
const galleryLove = document.getElementById("gallery-love");
const galleryWedding = document.getElementById("gallery-wedding");

const closeGalleryIndividual = document.getElementById("gallery-individual-close");
const closeGalleryLove = document.getElementById("gallery-love-close");
const closeGalleryWedding = document.getElementById("gallery-wedding-close");

openGalleryIndividual.addEventListener('click', () => {
  galleryIndividual.classList.add('gallery-open');
});
closeGalleryIndividual.addEventListener('click', () => {
  galleryIndividual.classList.remove('gallery-open');
});

openGalleryLove.addEventListener('click', () => {
  galleryLove.classList.add('gallery-open');
});
closeGalleryLove.addEventListener('click', () => {
  galleryLove.classList.remove('gallery-open');
});

openGalleryWedding.addEventListener('click', () => {
  galleryWedding.classList.add('gallery-open');
});
closeGalleryWedding.addEventListener('click', () => {
  galleryWedding.classList.remove('gallery-open');
});

/* GALERRY SLIDERS */

/* GALERRY INDIVIDUAL */

const sliderIndividualItems = document.querySelectorAll(".gallery-individual__item");
const buttonIndividualPrev = document.getElementById("individual-slider-prev");
const buttonIndividualNext = document.getElementById("individual-slider-next");

let positionIndividual = 0;

buttonIndividualNext.addEventListener("click", () => {
  if(positionIndividual > -200){
      buttonIndividualPrev.classList.remove('slider-button-nonvisible');
      positionIndividual = positionIndividual - 100;
      sliderIndividualItems.forEach(item => {
      item.style.left = `${positionIndividual}` + "%";
        
      if(positionIndividual == -200){
       buttonIndividualNext.classList.add('slider-button-nonvisible'); 
      };
        
      return positionIndividual;
     });
  };
});

buttonIndividualPrev.addEventListener("click", () => {
  if(positionIndividual < 0){
      buttonIndividualNext.classList.remove('slider-button-nonvisible');
      positionIndividual = positionIndividual + 100;
      sliderIndividualItems.forEach(item => {
      item.style.left = `${positionIndividual}` + "%";
        
      if(positionIndividual == 0){
        buttonIndividualPrev.classList.add('slider-button-nonvisible'); 
      };
        
      return positionIndividual;
    });
  };
});

/* GALERRY LOVE */

const sliderLoveItems = document.querySelectorAll(".gallery-love__item");
const buttonLovePrev = document.getElementById("love-slider-prev");
const buttonLoveNext = document.getElementById("love-slider-next");

let positionLove = 0;

buttonLoveNext.addEventListener("click", () => {
  if(positionLove > -200){
      buttonLovePrev.classList.remove('slider-button-nonvisible');
      positionLove = positionLove - 100;
      sliderLoveItems.forEach(item => {
      item.style.left = `${positionLove}` + "%";
        
      if(positionLove == -200){
       buttonLoveNext.classList.add('slider-button-nonvisible'); 
      };
        
      return positionLove;
     });
  };
});

buttonLovePrev.addEventListener("click", () => {
  if(positionLove < 0){
      buttonLoveNext.classList.remove('slider-button-nonvisible');
      positionLove = positionLove + 100;
      sliderLoveItems.forEach(item => {
      item.style.left = `${positionLove}` + "%";
        
      if(positionLove == 0){
        buttonLovePrev.classList.add('slider-button-nonvisible'); 
      };
        
      return positionLove;
    });
  };
});

/* GALERRY WEDDING */

const sliderWeddingItems = document.querySelectorAll(".gallery-wedding__item");
const buttonWeddingPrev = document.getElementById("wedding-slider-prev");
const buttonWeddingNext = document.getElementById("wedding-slider-next");

let positionWedding = 0;

buttonWeddingNext.addEventListener("click", () => {
  if(positionWedding > -200){
      buttonWeddingPrev.classList.remove('slider-button-nonvisible');
      positionWedding = positionWedding - 100;
      sliderWeddingItems.forEach(item => {
      item.style.left = `${positionWedding}` + "%";
        
      if(positionWedding == -200){
       buttonWeddingNext.classList.add('slider-button-nonvisible'); 
      };
        
      return positionWedding;
     });
  };
});

buttonWeddingPrev.addEventListener("click", () => {
  if(positionWedding < 0){
      buttonWeddingNext.classList.remove('slider-button-nonvisible');
      positionWedding = positionWedding + 100;
      sliderWeddingItems.forEach(item => {
      item.style.left = `${positionWedding}` + "%";
        
      if(positionWedding == 0){
        buttonWeddingPrev.classList.add('slider-button-nonvisible'); 
      };
        
      return positionWedding;
    });
  };
});