AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// Date of work
const startDate = new Date("2023-10-01");
const currentDate = new Date();

// Calcular la diferencia de tiempo en milisegundos
const timeDiff = currentDate.getTime() - startDate.getTime();

// Convertir la diferencia de tiempo a años y meses
const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
const monthsDiff = Math.floor(
  (timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
);
function cero(number){
  if(number == 0){

  }
}

var URL = window.location;

const timeDiffElement = document.getElementById("time-diff");
timeDiffElement.textContent = `Analista Funcional - nov. 2023 - actualidad · ${yearsDiff} años y ${monthsDiff} meses.`;

// Color Change

// Create customs variables
let colorPickerHeading;
let colorPickerBody;
let colorPickerBase;
let colorPickerBase2;
let colorPickerBrand;
let colorPickerBrand2;
window.addEventListener("load", startup, false);

// Access to color of variable css
var colorHeading = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-heading"
);
var colorBody = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-body"
);
var colorBase = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-base"
);
var colorBase2 = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-base2"
);
var colorBrand = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-brand"
);
var colorBrand2 = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-brand2"
);

function startup() {
  //access input color-heading
  colorPickerHeading = document.querySelector("#color-heading");
  colorPickerHeading.value = colorHeading;
  colorPickerHeading.addEventListener("input", updateFirst, false);
  colorPickerHeading.select();

  //access input color-body
  colorPickerBody = document.querySelector("#color-body");
  colorPickerBody.value = colorBody;
  colorPickerBody.addEventListener("input", updateFirst, false);
  colorPickerBody.select();

  //access input color-base
  colorPickerBase = document.querySelector("#color-base");
  colorPickerBase.value = colorBase;
  colorPickerBase.addEventListener("input", updateFirst, false);
  colorPickerBase.select();

  //access input color-base2
  colorPickerBase2 = document.querySelector("#color-base2");
  colorPickerBase2.value = colorBase2;
  colorPickerBase2.addEventListener("input", updateFirst, false);
  colorPickerBase2.select();

  //access input color-brand
  colorPickerBrand = document.querySelector("#color-brand");
  colorPickerBrand.value = colorBrand;
  colorPickerBrand.addEventListener("input", updateFirst, false);
  colorPickerBrand.select();

  //access input color-brand2
  colorPickerBrand2 = document.querySelector("#color-brand2");
  colorPickerBrand2.value = colorBrand2;
  colorPickerBrand2.addEventListener("input", updateFirst, false);
  colorPickerBrand2.select();
}

function updateFirst(event) {
  let colorSelect = event.target.value;
  let targetInput = event.target.id;
  if (targetInput == "color-heading")
    document.documentElement.style.setProperty("--color-heading", colorSelect);
  else if (targetInput == "color-body")
    document.documentElement.style.setProperty("--color-body", colorSelect);
  else if (targetInput == "color-base")
    document.documentElement.style.setProperty("--color-base", colorSelect);
  else if (targetInput == "color-base2")
    document.documentElement.style.setProperty("--color-base2", colorSelect);
  else if (targetInput == "color-brand")
    document.documentElement.style.setProperty("--color-brand", colorSelect);
  else if (targetInput == "color-brand2")
    document.documentElement.style.setProperty("--color-brand2", colorSelect);
}
