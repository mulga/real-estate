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

// let sliderStatus = document.getElementById("sliderStatus");
// let sliderTitle = document.getElementById("sliderTitle");
// let sliderAdress = document.getElementById("sliderAdress");
// let sliderImage = document.getElementById("sliderImage");

// for (i = 0; i <= homeList.slice(0, 3); i++) {
//   homeList[i];
// }

// for (let ev of homeList.slice(0, 4)) {
//   // console.log(ev.address.city);
//   function getText() {
//     sliderTitle.innerHTML = ev.address.city;
//     sliderStatus.innerHTML = ev.homeStatus;
//     sliderAdress.innerHTML = ev.address.streetAddress;
//     sliderImage.setAttribute("src", ev.photos[0]);
//     console.log(ev.address.city);
//   }
// }

// getText();

// function getRight() {
//   if (i >= homeList.length - 1) {
//     i = -1;
//   }
//   i++;
//   getText();
// }

// function getLeft() {
//   if (i <= 0) {
//     i = homeList.length;
//   }
//   i--;
//   getText();
// }

// slider II

const person = [
  {
    imgFile: "01.jpg",
    isim: "Susan Smith",
    job: "web developer",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },

  {
    imgFile: "02.jpg",
    isim: "Benjamin Matthews",
    job: "designer",
    text: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris",
  },
  {
    imgFile: "03.jpg",
    isim: "Martha Griffin",
    job: "software engineer",
    text: "Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. malesuada magna mollis elit. malesuada magna mollis elit. malesuada",
  },
  {
    imgFile: "04.jpg",
    isim: "Alice Mendoza",
    job: "finance",
    text: "Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis ",
  },
];
