function AddSum(a, b) {
    return a + b;
}
let newsum = AddSum(2, 3);
let newperson = {
    name: "jhon",
    age: 23,
    email: "jhon@gmail.com",
};
//union
function Checkhere(find) {
    if (typeof find == "string") {
        return find.length;
    }
    if (typeof find == "number") {
        return Math.pow(find, 2);
    }
}
const newfinder = Checkhere(2);
function createCar(year, type, model) {
    return {
        year: year,
        type: type,
        model: model,
    };
}
const mercedies = createCar(2023, "Royal-Class", "Latest_Model");
const toyota = createCar(2024, "fortuner", "Latest_Model");
