document.getElementById("generate-button").addEventListener("click", () => {
  fetch("/random-name")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("name-display").textContent = data.name;
    })
    .catch((error) => console.error("Error:", error));
});
