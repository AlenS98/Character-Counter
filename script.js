const totalCounter = document.getElementById("total-counter");
const textArea = document.getElementById("textarea");
const remainCounet = document.getElementById("remain-counter");
textArea.addEventListener("keyup", () => {
  updateCounter();
});
function updateCounter() {
  totalCounter.innerText = textArea.value.length;
  remainCounet.innerText =
    textArea.getAttribute("maxLength") - textArea.value.length;
}
