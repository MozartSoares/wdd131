const params = new URLSearchParams(window.location.search);

document.getElementById("confirmed-product").textContent =
  params.get("product");
document.getElementById("confirmed-rating").textContent =
  "★".repeat(params.get("rating")) + "☆".repeat(5 - params.get("rating"));
document.getElementById("confirmed-date").textContent = new Date(
  params.get("install_date")
).toLocaleDateString();
document.getElementById("confirmed-features").textContent =
  params.getAll("features").join(", ") || "None selected";
document.getElementById("confirmed-review").textContent =
  params.get("review") || "No review provided";
document.getElementById("confirmed-user").textContent =
  params.get("user") || "Anonymous";

let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount = parseInt(reviewCount) + 1;
document.getElementById("review-counter").textContent = reviewCount;
localStorage.setItem("reviewCount", reviewCount);
