import { homeList } from "./homeData.js";

for (let item of homeList) {
  // Create element
  let listingCard = document.createElement("div");
  listingCard.classList.add("listing-card");
  // listingCard.filterV = item.homeType.replace(/_/g, " ").toLowerCase();
  listingCard.setAttribute(
    "data-category",
    item.homeType.toLowerCase().replace(/_/g, " ")
  );

  let listingCardImage = document.createElement("div");
  listingCardImage.classList.add("listing-card-image");
  let image = document.createElement("img");
  image.setAttribute("src", item.photos[0]);
  listingCard.appendChild(listingCardImage);
  listingCardImage.appendChild(image);
  document.getElementById("listingWrapper").appendChild(listingCard);
  // home type
  let homeType = document.createElement("span");
  homeType.classList.add("home-type");
  homeType.innerText = item.homeType.replace(/_/g, " ");
  listingCardImage.appendChild(homeType);

  // card content
  let cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  listingCard.appendChild(cardContent);
  // card title
  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("h5-bold", "card-title");
  cardTitle.innerText = item.address.city;
  cardContent.appendChild(cardTitle);
  ///
  // location
  let location = document.createElement("div");
  location.classList.add("location");
  cardContent.appendChild(location);
  // location icon
  let locationIcon = document.createElement("span");
  locationIcon.classList.add("location-icon");
  location.appendChild(locationIcon);
  // location icon
  let locationIconI = document.createElement("i");
  locationIconI.classList.add("fa-solid");
  locationIconI.classList.add("fa-location-dot");
  locationIcon.appendChild(locationIconI);
  // location text
  let locationText = document.createElement("p");
  locationText.classList.add("body-medium", "location-text");
  locationText.innerText = item.address.streetAddress;
  location.appendChild(locationText);
  // price
  let price = document.createElement("div");
  price.classList.add("price");
  price.innerText = item.currency + " " + item.price;
  cardContent.appendChild(price);

  // homestatus
  let homeStatus = document.createElement("div");
  homeStatus.classList.add("home-status");
  homeStatus.innerText = item.homeStatus.replace(/_/g, " ");
  price.appendChild(homeStatus);
}

const filterBtnParent = document.querySelector("#filter-buttons");

let listingCard = document.querySelectorAll(".listing-card");

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

// modal
