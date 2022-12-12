// let listItems = {
//   data: [
//     {
//       id: 1,
//       image: "./assets/h1.jpeg",
//       title: "Grand Family House",
//       location: "Ohio St. South Gate, California",
//       category: "house",
//       price: 350,
//       star: 4,
//     },
//     {
//       id: 2,
//       image: "./assets/h2.jpeg",
//       title: "The Elements",
//       location: "Jakarta Selatan, DKI Jakarta",
//       category: "apartment",
//       price: 620,
//       star: 4,
//     },
//     {
//       id: 3,
//       image: "./assets/h3.jpeg",
//       title: "Triraksa Village 2",
//       location: "Tangerang, Banten",
//       category: "villa",
//       price: 682,
//       star: 4,
//     },
//     {
//       id: 4,
//       image: "./assets/h4.jpeg",
//       title: "Nuvasa Bay",
//       location: "Batam, Kepulauan Riau",
//       category: "villa",
//       price: 682,
//       star: 4,
//     },
//   ],
// };

let listItems = [
  {
    id: 1,
    image: "./assets/h1.jpeg",
    title: "Grand Family House",
    location: "Ohio St. South Gate, California",
    category: "house",
    price: 350,
    star: 4,
  },
  {
    id: 2,
    image: "./assets/h2.jpeg",
    title: "The Elements",
    location: "Jakarta Selatan, DKI Jakarta",
    category: "apartment",
    price: 620,
    star: 4,
  },
  {
    id: 3,
    image: "./assets/h3.jpeg",
    title: "Triraksa Village 2",
    location: "Tangerang, Banten",
    category: "villa",
    price: 682,
    star: 4,
  },
  {
    id: 4,
    image: "./assets/h4.jpeg",
    title: "Nuvasa Bay",
    location: "Batam, Kepulauan Riau",
    category: "villa",
    price: 682,
    star: 4,
  },
]
//
// for (let i = 0; i < listItems.length; i++) {
//   let listingWrapper = document.getElementById("listingWrapper").innerHTML = `
//
//    <div class="listing-card">
//               <div class="listing-card-image img1">
//                 <img src="${[i].image}" alt="" />
//               </div>
//               <div class="card-content">
//                 <h5 class="h5-bold">${[i].title}</h5>
//                 <div
//                   class="location d-flex justify-content-between align-item-center"
//                 >
//                   <p class="body-medium">
//                     <span><i class="fa-solid fa-location-dot"></i></span> ${[i].location}
//                   </p>
//                 </div>
//
//                 <div
//                   class="price d-flex justify-content-between align-item-center"
//                 >
//                   <h5 class="h5-bold"><span>$</span>${[i].price}</h5>
//                   <p class="body-semibold">
//                     <span><i class="fa-solid fa-star"></i></span
//                     ><span> ${[i].star} </span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//
//   `
// }



for (let i of listItems) {
  console.log(i["title"]);
  // Create element
  let listingCard = document.createElement("div");
  listingCard.classList.add("listing-card", "i.category");

  let listingCardImage = document.createElement("div");
  listingCardImage.classList.add("listing-card-image");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
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
  cardTitle.innerText = i.title;
  cardContent.appendChild(cardTitle);
  ///
  // location
  let location = document.createElement("div")
  location.classList.add("location")


}
