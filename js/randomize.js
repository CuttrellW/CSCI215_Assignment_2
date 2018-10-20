console.log("start");
var P = [];
P[0] = 'images/buzz.jpg';
P[1] = 'images/cookies.jpg';
P[2] = 'images/faxmachine.jpg';
P[3] = 'images/shrek.jpg';
P[4] = 'images/croc.jpeg';



var R = Math.floor(Math.random()*5);
console.log(R);

var divNode = document.getElementById("randomPic");
var imgNode = document.createElement("img");
var srcAttr = document.createAttribute("src");

srcAttr.value = P[R];
console.log(srcAttr);

imgNode.setAttributeNode(srcAttr);
divNode.appendChild(imgNode);



