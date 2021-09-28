const contacts = [
  {
    city: "Minneapolis",
  },
  {
    city: "Chicago",
  },
  {
    city: "Seattle",
  },
  {
    city: "Chicago",
  },
];

// making an array from an array of objects using unique values.  then modifying the returned values with a chained .map()
const cities = Array.from(
  new Set(contacts.map((contact) => contact.city)).values()
).map((city) => `I love ${city}`);

console.log(cities)
