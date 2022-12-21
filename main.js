import { homeList } from "./homeData.js";

for (let item of homeList.slice(0, 8)) {
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

  // favorite
  let favorite = document.createElement("span");
  favorite.classList.add("favorite");
  listingCardImage.appendChild(favorite);
  // favorite icon
  let favoriteIcon = document.createElement("i");
  favoriteIcon.classList.add("fa-solid");
  favoriteIcon.classList.add("fa-heart");
  favorite.appendChild(favoriteIcon);

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

  let detail = document.createElement("button");
  detail.classList.add("btn", "btn-primary", "detail", "xsmall");
  detail.innerText = "View Details";
  cardContent.appendChild(detail);
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

// ------------//
// slider      //
// ------------//

document.querySelectorAll(".slider").forEach((slider) => {
  const items = slider.querySelectorAll(".slider-item");
  const buttonHtml = Array.from(items, () => {
    return `<span class="slider-button"></span>`;
  });

  slider.insertAdjacentHTML(
    "beforeend",
    `<div class="slider-nav">
    ${buttonHtml.join("")}
    </div>`
  );

  const buttons = slider.querySelectorAll(".slider-button");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) => {
        item.classList.remove("slider-item-selected");
        items[i].classList.add("slider-item-selected");
      });
      buttons.forEach((button) => {
        button.classList.remove("slider-button-selected");
        buttons[i].classList.add("slider-button-selected");
      });
    });

    items[0].classList.add("slider-item-selected");
    buttons[0].classList.add("slider-button-selected");
  });
});

// ------------//
// ------------//
// ------------//

// favorite

let favorite = document.querySelectorAll(".favorite");

favorite.forEach((fav) => {
  fav.addEventListener("click", (e) => {
    fav.classList.toggle("active");
  });
});
