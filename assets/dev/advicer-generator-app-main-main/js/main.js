const adviceId = document.getElementById("advice-id");
const adviceTxt = document.getElementById("advice-text");
const url = "https://api.adviceslip.com/advice";

getAdvice();
async function getAdvice() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      const id = data.slip.id;
      adviceTxt.textContent = '"' + advice + '"';
      adviceId.textContent = id;
    })
    .catch((e) => {
      console.log("Error:", e);
    });
}
