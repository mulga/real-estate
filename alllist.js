import { homeList } from "./homeData.js";
import { main } from "./main.js";

filterBtnParent.addEventListener("click", (e) => {
  console.log(e);

  if (e.target.classList.contains("filter-btn")) {
    filterBtnParent.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    let filterValue = e.target.innerText.toLowerCase();
    listingCard.forEach((card) => {
      if (card.dataset.category === filterValue || filterValue === "all") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});
