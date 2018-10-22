console.log("start");
function main(){
    var Ms = [];
    Ms[65]= ".-";
    Ms[66]= "-...";
    Ms[67]= "-.-.";
    Ms[68]= "-..";
    Ms[69]= ".";
    Ms[70]= "..-.";
    Ms[71]= "--.";
    Ms[72]= "....";
    Ms[73]= "..";
    Ms[74]= ".---";
    Ms[75]= "-.-.";
    Ms[76]= ".-..";
    Ms[77]= "--";
    Ms[78]= "-.";
    Ms[79]= "---";
    Ms[80]= ".--.";
    Ms[81]= "--.-";
    Ms[82]= ".-.";
    Ms[83]= "...";
    Ms[84]= "-";
    Ms[85]= "..-";
    Ms[86]= "...-";
    Ms[87]= ".--";
    Ms[88]= "-..-";
    Ms[89]= "-.--";
    Ms[90]= "--..";
    Ms[32]= " ";

    var input = document.getElementsByName("inTxt")[0].value;
    var strUpper = input.toUpperCase();
    var strSplit = strUpper.split("").join(" ");
    console.log(strSplit);
    var output = "";
    translate(strSplit, Ms, strUpper);





}

function translate(str, array, strUpper){
    var output = "";
    for(var ch in str) {
        var index = str.charCodeAt(ch);
        console.log(index);
        output += array[index];
        console.log(output)
    }

    update(output, strUpper)
}

function update(output, strUpper){

    document.getElementsByName("outTxt")[0].value = output + " " + strUpper;

}