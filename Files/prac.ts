function AddSum(a: number, b: number): number {
  return a + b;
}
let newsum = AddSum(2, 3);

interface Person {
  name: String;
  age: number;
  email: string;
}
let newperson: Person = {
  name: "jhon",
  age: 23,
  email: "jhon@gmail.com",
};

//union

function Checkhere(find: string | number): string | number {
  if (typeof find == "string") {
    return find.length;
  }
  if (typeof find == "number") {
    return find ** 2;
  }
}
const newfinder = Checkhere(2);

//type aleas

type Car = {
  year: number;
  type: string;
  model: string;
};
function createCar(year: number, type: string, model: string): Car {
  return {
    year: year,
    type: type,
    model: model,
  };
}
const mercedies = createCar(2023, "Royal-Class", "Latest_Model");
const toyota = createCar(2024, "fortuner", "Latest_Model");
