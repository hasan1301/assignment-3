// https://github.com/hasan1301/assignment-3

kilometerToMeter
bugetCalculator
hotelCost
megaFriend


// kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}
var meter = kilometerToMeter(10);
// console.log(meter)

// bugetCalculator

var bugetCalculator = 9;
var item = 0;
if (bugetCalculator <= 5) {
    item = bugetCalculator * 50;
} else if (bugetCalculator <= 7) {
    var firstItem = 5 * 50;
    var remaining = bugetCalculator - 5;
    var secondItem = remaining * 100;
    item = firstItem + secondItem
}
else {
    var firstItem = 5 * 50;
    var secondItem = 2 * 100;
    var remaining = bugetCalculator - 7;
    var thirdItem = remaining * 500;
    item = firstItem + secondItem + thirdItem;
}
// console.log(item)

// hotelCost

var hotelCost = 21;
var rent = 0;
if (hotelCost <= 10) {
    rent = hotelCost * 100;
} else if (hotelCost <= 20) {
    var firstRent = 10 * 100;
    var remaining = hotelCost - 10;
    var secondRent = remaining * 80;
    rent = firstRent + secondRent;
}
else {
    var firstRent = 10 * 100;
    var secondRent = 10 * 80;
    var remaining = hotelCost - 20;
    var thirdRent = remaining * 50;
    rent = firstRent + secondRent + thirdRent;
}
// console.log(rent)

// megaFriend

var word = ["koli", "kakoli", "solu"];
var max = word[0];
for (var i = 0; i < word.length; i++) {
    var element = word[i];
    if (element.length > max.length) {
        max = element;
    }
}
// console.log(max);