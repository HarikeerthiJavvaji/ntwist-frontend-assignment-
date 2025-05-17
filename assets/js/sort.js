const sortBtn = document.getElementById("sortBtn");
const nameList = document.getElementById("nameList");

sortBtn.addEventListener("click", () => {
  const names = Array.from(nameList.children).map((li) => li.textContent);
  names.sort();
  nameList.innerHTML = names.map((name) => `<li>${name}</li>`).join("");
});