//create a survey to gather information on customers
//using the following values firstname , lastname, email, phone, zipcode,favorite flavor,Cupsize,
//FavoriteStore, FirstVisit

const customers = {
  firstName: "jake",
  lastName: "smith",
  email: "jaeksih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};

// console.log(customers["email"]);
//you notice a customer made some mistake
//correct the following email,phone,zipcode,favorite flavor

(customers["email"] = "jak3Smith1992@email.com"),
  (customers["phone"] = "3195551234"),
  (customers["zipCode"] = "63132"),
  (customers["favorite"] = ["coffee", "strawberry", "matcha"]);

console.log(customers);
//delete the two following keys
//zipCode and Favoriteflavor

delete customers["zipCode"];
delete customers["favoriteStore"];

console.log(customers);

customers.toppings = ["chocolate sprinkles", "waffer straws", "gummy bears"];
customers.futureFlavors = ["mangos"];
customers.todaysPurchaseCost = [5.32];

console.log(customers);

const customersKey = Object.keys(customers);

console.log(customersKey);
