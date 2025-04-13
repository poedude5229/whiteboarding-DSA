const printObject = (obj) => {
  for (let key in obj) {
    let val = obj[key];
    console.log(`${key} - ${val}`);
  }
};

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120,
};

printObject(bootcamp);
