import { homeList } from "./homeData.js";

for (let item of homeList) {
  // Create element
  let listingCard = document.createElement("div");
  listingCard.classList.add("listing-card");
  // listingCard.filterV = item.homeType.replace(/_/g, " ").toLowerCase();
  listingCard
    .setAttribute("data-filter", item.homeType)
    .replace(/_/g, " ")
    .toLowerCase();
  let listingCardImage = document.createElement("div");
  listingCardImage.classList.add("listing-card-image");
  let image = document.createElement("img");
  image.setAttribute("src", item.photos[0]);
  listingCard.appendChild(listingCardImage);
  listingCardImage.appendChild(image);
  document.getElementById("listingWrapper").appendChild(listingCard);
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

// filter
let filterBtn = document.querySelectorAll(".filter-btn");
for (let i = 1; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let filterValue = filterBtn[i].innerText.toLowerCase();
    let listingCard = document.querySelectorAll(".listing-card");
    console.log("listing card: " + listingCard);
    console.log("filter value: " + filterValue);

    // for (let item of listingCard) {
    //   if (item.children[1].children[0].innerText == filterValue) {
    //     item.classList = "block";
    //   } else if (filterValue == "All") {
    //     item.style.display = "block";
    //   } else {
    //     item.style.display = "none";
    //   }
    // }
  });
}
