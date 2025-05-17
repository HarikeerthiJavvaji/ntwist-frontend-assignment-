let startTime;
const form = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");
const timeSpent = document.getElementById("timeSpent");

form.addEventListener("focusin", () => {
  if (!startTime) startTime = new Date();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const endTime = new Date();
  const duration = Math.round((endTime - startTime) / 1000);
  confirmation.textContent = "Form submitted successfully!";
  confirmation.classList.remove("hidden");
  timeSpent.textContent = `Time spent: ${duration} seconds`;
  form.reset();
  startTime = null;
});

// Star Rating
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("ratingValue");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-value"));
    ratingValue.textContent = `You rated us ${rating} star${rating > 1 ? "s" : ""}`;
    stars.forEach((s) => {
      const val = parseInt(s.getAttribute("data-value"));
      s.classList.toggle("rated", val <= rating);
    });
  });
});
