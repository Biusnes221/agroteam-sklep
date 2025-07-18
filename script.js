
document.getElementById("purchaseForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const modal = document.getElementById("blikModal");
  modal.style.display = "block";
  document.getElementById("selectedPrice").textContent = "Wybrana ranga (kwota podana w tytule)";
});

document.querySelector(".close").onclick = function () {
  document.getElementById("blikModal").style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("blikModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
