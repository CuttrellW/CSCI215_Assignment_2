console.log("start");

var numList=[];

do { var entry = prompt("Enter any positive integer:", "Enter -1 to stop");
    numList.push(parseInt(entry));
} while (entry != -1);
numList.pop();
var length = numList.length;


function sortNumber(a,b) {
    return a - b;
}
numList.sort(sortNumber);

console.log(numList);

calculate(numList, length);

function calculate (list, length) {

    var max = list[length -1];
    var min = list[0];
    var avg = average(list,length);
    var med = median(list,length);
    var odds = findOdds(list, length);
    var evens = findEvens(list, length);
    var primes = listPrime(list, length);
    var squares = listSquares(list, length);


    var divNode = document.getElementById("content");
    var pNode1 = document.createElement("p");
    var pNode2 = document.createElement("p");
    var pNode3 = document.createElement("p");
    var pNode4 = document.createElement("p");
    var pNode5 = document.createElement("p");
    var pNode6 = document.createElement("p");
    var pNode7 = document.createElement("p");
    var pNode8 = document.createElement("p");
    var pNode9 = document.createElement("p");

    var pTextNode1 = document.createTextNode("Your Numbers: " + list);
    pNode1.appendChild(pTextNode1);
    var pTextNode2 = document.createTextNode("Minimum: " + min);
    pNode2.appendChild(pTextNode2);
    var pTextNode3 = document.createTextNode("Maximum: " + max);
    pNode3.appendChild(pTextNode3);
    var pTextNode4 = document.createTextNode("Average: " + avg);
    pNode4.appendChild(pTextNode4);
    var pTextNode5 = document.createTextNode("Median " + med);
    pNode5.appendChild(pTextNode5);
    var pTextNode6 = document.createTextNode("Odds: " + odds);
    pNode6.appendChild(pTextNode6);
    var pTextNode7 = document.createTextNode("Evens: " + evens);
    pNode7.appendChild(pTextNode7);
    var pTextNode8 = document.createTextNode("Primes: " + primes);
    pNode8.appendChild(pTextNode8);
    var pTextNode9 = document.createTextNode("Squares of 2: " + squares);
    pNode9.appendChild(pTextNode9);


    divNode.appendChild(pNode1);
    divNode.appendChild(pNode2);
    divNode.appendChild(pNode3);
    divNode.appendChild(pNode4);
    divNode.appendChild(pNode5);
    divNode.appendChild(pNode6);
    divNode.appendChild(pNode7);
    divNode.appendChild(pNode8);
    divNode.appendChild(pNode9);

}

function average (list, length){
    var sum = 0;
    for(var i = 0; i < length; i++){
        sum += list[i];
    }
    console.log(sum);

    var avg = sum / length;
    return avg


}

function median (list, length){
    console.log(list);
    console.log(length);
    if(length % 2 === 0){
        var med = ((list[length / 2]) + list[length / 2 - 1]) / 2
    } else {
        var med = list[(length - 1) / 2]
    }
    console.log(med);
    return med
}

function findOdds (list, length){
    var i;
    var odds = [];
    for(i = 0; i < length; i++) {
        if(list[i] % 2 === 1 ){
            odds.push(list[i]);
        }
    }
    return odds
}

function findEvens (list, length){
    var i;
    var evens = [];
    for(i = 0; i < length; i++) {
        if(list[i] % 2 === 0 ){
            evens.push(list[i]);
        }
    }
    return evens
}

function listPrime (list, length){
    var primes = [];
    for(var i = 0; i < length; i++) {
       if(findPrime(list[i])) {
           primes.push(list[i])
       }
    }
    return primes
}

function findPrime (number){
    for(var i = 2; i < number; i++){
        if (number % i === 0){
            return false
        }
    }
    return true
}

function listSquares(list, length) {
    var squares = [];
    for(var i = 0; i < length; i++) {
        if(findSquare(list[i])) {
            squares.push(list[i])
        }
    }
    return squares
}

function findSquare (number) {
    var pwr = 1;
    for(var i = 0; i < number; i++) {
        if (number / pwr === 1) {
            return true
        }
        pwr = pwr * 2
    }
    return false

}