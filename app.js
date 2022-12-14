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
];

// listItems.forEach((item) => {
//   console.log(item.id);
//   console.log(item.image);
//   console.log(item.title);
//   console.log(item.location);
//   console.log(item.category);
//   console.log(item.price);
//   console.log(item.star);

//   let listingWrapper = (document.getElementById("listingWrapper").innerHTML = `
//        <div class="listing-card">
//                   <div class="listing-card-image">
//                       <img src="${item[0].image}" alt="" />
//                   </div>
//                   <div class="card-content">
//                       <h5 class="h5-bold">${item.title}</h5>
//                       <div
//                       class="location d-flex justify-content-between align-item-center"
//                       >
//                       <p class="body-medium">
//                           <span><i class="fa-solid fa-location-dot"></i></span> ${item.location}
//                       </p>
//                       </div>
//                       <div
//                       class="price d-flex justify-content-between align-item-center"
//                       >
//                       <h5 class="h5-bold"><span>$</span>${item.price}</h5>
//                       <p class="body-semibold">
//                           <span><i class="fa-solid fa-star"></i></span
//                           ><span> ${item.star} </span>
//                       </p>
//                       </div>
//                   </div>
//                   </div>
//       `);
// });

let myArray = [
  {
    id: 1,
    name: "John",
    age: 25,
  },
  {
    id: 2,
    name: "Jane",
    age: 30,
  },
];

// const myNumbers = [1, 2, 3, 4, 5];

// for (i = 0; i < myNumbers.length; i++) {
//   console.log(myNumbers[i]);
// }

// for (i = 0; i < myArray.length; i++) {
//   console.log(myArray[i].name);
//   console.log(myArray[i].id);
//   console.log(myArray[i].age);
// }

// myArray.forEach((item) => {
//   console.log("Name: " + item.name);
//   console.log("ID: " + item.id);
//   console.log("Age: " + item.age);
//   document.getElementById("listingWrapper").innerHTML = `
//     <ul>

//     <li>Name: ${item.name}</li>
//     <li>ID: ${item.id}</li>
//     <li>Age: ${item.age}</li>
//     </ul>

//     `;
// });

for (let i = 0; i < myArray.length; i++) {
  console.log("Name: " + myArray[i].name);
  console.log("Name: " + myArray[i].id);
  console.log("Age: " + myArray[i].age);

  document.getElementById("listingWrapper").innerHTML = `
    <ul>

    <li>Name: ${myArray[i].name}</li>
     <li>ID: ${myArray[i].id}</li>
     <li>Age: ${myArray[i].age}</li>
     </ul>

     `;
}
