import moment from "moment";

const now = moment();

// Praktek array
const users = ["Rizki Agus", "Muhammad Rizal", "Agus Salim"];

console.log(users);

// Praktek object
const product = {
  name: "iPhone 14 Pro",
  variant: "512 GB",
  price: 26900000,
  available: true,
};

console.log(product);

// Praktek perulangan
for (const user of users) {
  console.log(user);
}

// Praktek fungsi
function add(a, b) {
  return a + b;
}

console.log(add(12, 8));
