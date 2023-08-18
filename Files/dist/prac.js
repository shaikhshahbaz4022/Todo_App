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
//enums
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["TuesDay"] = 1] = "TuesDay";
    Weekdays[Weekdays["Wednusday"] = 2] = "Wednusday";
    Weekdays[Weekdays["Thrusday"] = 3] = "Thrusday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
    Weekdays[Weekdays["Saturday"] = 5] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 6] = "Sunday";
})(Weekdays || (Weekdays = {}));
function CheckWeekDay(day) {
    if (day === Weekdays.Saturday || day === Weekdays.Sunday) {
        return "Weekend";
    }
    else {
        return "weekdays";
    }
}
const ischeckweekDays = Weekdays.Sunday;
const daytype = CheckWeekDay(ischeckweekDays);
// console.log(mercedies);
